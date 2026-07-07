# AWS Amplify Deployment Guide

Production hosting for this app runs on **AWS Amplify Hosting** as a **static Next.js export**. Every push to `main` triggers an automatic build and deploy.

- **Live site:** https://griffinmahoney.me (also `www`; `griffinmahoney.com` redirects here)
- **Amplify app:** `resume` — App ID `d2oomr1j63yuxz`
- **Region:** `us-east-1` · **Account:** `041825629273`
- **Production branch:** `main`

## How it works

This is a fully static site (no API routes, server actions, or runtime data fetching), so it's built with Next.js **static export** and served from Amplify's CDN (CloudFront + S3) — there is no SSR compute to pay for or manage.

The output mode is chosen at build time so the **same repo still produces a Docker `standalone` build**:

| Environment | `next.config.mjs` `output` | Used by |
|---|---|---|
| `NEXT_OUTPUT=export` | `export` (emits `out/`) | AWS Amplify |
| _(unset — the default)_ | `standalone` | Docker ([DOCKER.md](DOCKER.md)) |

In `export` mode, `images.unoptimized` is enabled (there's no server to run the Next.js image optimizer) and `src/app/sitemap.ts` is marked `export const dynamic = 'force-static'` so it renders at build time.

### Build spec (`amplify.yml`)

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - NEXT_OUTPUT=export npm run build
  artifacts:
    baseDirectory: out
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
      - .next/cache/**/*
```

`amplify.yml` at the repo root is authoritative — it overrides any build spec configured in the Amplify console.

## Continuous deployment

`main` has auto-build enabled and is connected to GitHub (`griffinm/resume`), so **pushing to `main` builds and deploys automatically**. No manual step is required for a normal release.

Watch or drive builds from the CLI:

```bash
APP=d2oomr1j63yuxz

# Recent builds for main
aws amplify list-jobs --app-id $APP --branch-name main \
  --query 'jobSummaries[].{id:jobId,status:status,commit:commitId}' --output table

# Manually trigger a deploy of the current main HEAD
aws amplify start-job --app-id $APP --branch-name main --job-type RELEASE

# Follow a specific job's steps
aws amplify get-job --app-id $APP --branch-name main --job-id <ID> \
  --query 'job.steps[].{step:stepName,status:status}'
```

Full build logs are linked from the `logUrl` field in `get-job`, or in the Amplify console.

## Verify a build locally

Reproduce the exact Amplify build before pushing:

```bash
NEXT_OUTPUT=export npm run build   # emits ./out
npx serve out                      # preview the static output on localhost
```

## Custom domain & DNS

DNS is managed at **Cloudflare**. `griffinmahoney.me` is the canonical domain; `griffinmahoney.com` (+ `www`) 302-redirects to it via a Cloudflare rule.

`griffinmahoney.me` (root + `www`) is an **Amplify custom-domain association** mapped to `main`, secured by an AWS-managed ACM certificate. The Cloudflare records are **DNS-only (grey cloud)** and point at the Amplify CloudFront target.

> ⚠️ **The domain records in Cloudflare must be grey-cloud (DNS only), _not_ proxied (orange).**
> Proxying breaks ACM validation and causes CloudFront `403`s, because the proxied Host header no longer matches the certificate / alternate-domain on the distribution. See [Troubleshooting](#troubleshooting).

### Records in Cloudflare (all DNS-only)

| Name | Type | Target |
|---|---|---|
| `@` (root) | CNAME\* | `d34samp90eot8i.cloudfront.net` |
| `www` | CNAME | `d34samp90eot8i.cloudfront.net` |
| `_<hash>` (ACM validation) | CNAME | `_<hash>.acm-validations.aws` |

\* Cloudflare flattens the apex CNAME to A records automatically.

Fetch the exact records Amplify expects — including the current ACM validation record — with:

```bash
aws amplify get-domain-association --app-id d2oomr1j63yuxz \
  --domain-name griffinmahoney.me \
  --query 'domainAssociation.{status:domainStatus,cert:certificateVerificationDNSRecord,subs:subDomains[].{prefix:subDomainSetting.prefix,dnsRecord:dnsRecord}}'
```

> When adding the ACM validation record in Cloudflare, enter **only the label** (e.g. `_abc123`) — Cloudflare auto-appends `.griffinmahoney.me`. Pasting the full name doubles the suffix and validation will never complete.

### Re-create the domain association from scratch

```bash
APP=d2oomr1j63yuxz
aws amplify create-domain-association --app-id $APP --domain-name griffinmahoney.me \
  --no-enable-auto-sub-domain \
  --sub-domain-settings 'prefix=,branchName=main' 'prefix=www,branchName=main'
```

Then poll `get-domain-association` for the DNS records and add them (grey-cloud) in Cloudflare. Status progresses `CREATING → PENDING_VERIFICATION → PENDING_DEPLOYMENT → AVAILABLE`; ACM validation plus CloudFront propagation usually takes a few minutes.

## First-time app setup (reference)

The app already exists — these are the commands that created the pieces, kept here for reference / disaster recovery:

```bash
# Connect the GitHub repo as a static (WEB) app.
# Needs a GitHub personal-access token (scopes: repo, admin:repo_hook) the first time.
aws amplify create-app --name resume --platform WEB \
  --repository https://github.com/griffinm/resume --access-token <GITHUB_PAT>

# Add the production branch with auto-build enabled.
aws amplify create-branch --app-id <APP_ID> --branch-name main --enable-auto-build
```

## Troubleshooting

**`403` — "The request could not be satisfied" (CloudFront error page)**
The Host header reaching Amplify isn't a domain configured for the branch. Usual causes: the Cloudflare record is **proxied** (orange) instead of grey; or a domain was CNAME'd straight at `main.<appid>.amplifyapp.com` with no custom-domain association (a branch's default host rejects foreign Host headers). Fix: grey-cloud the records **and** use a proper Amplify custom-domain association.

**TLS handshake failure / `HTTP 000`**
The record points (DNS-only) at an Amplify/CloudFront host, but no ACM certificate covers your domain there yet. Use a custom-domain association so CloudFront is issued a matching cert — don't CNAME directly at the branch host.

**Domain stuck in `PENDING_VERIFICATION`**
ACM can't see the validation CNAME. Confirm it resolves: `dig +short _<hash>.griffinmahoney.me CNAME`. In Cloudflare, enter only the label, keep it grey-cloud, and don't drop the leading underscores.

**Build fails collecting `sitemap.xml` under `output: export`**
`src/app/sitemap.ts` must export `const dynamic = 'force-static'`.

## Related docs

- [DOCKER.md](DOCKER.md) — containerized deployment (the `standalone` build)
- [README.md](README.md) — application overview
