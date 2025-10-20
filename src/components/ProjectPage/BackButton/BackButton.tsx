import Link from "next/link";

export function BackButton({
  href = "/projects",
  label = "Back to Projects",
}: {
  href?: string;
  label?: string;
}) {
  const actualHref = href || "/projects";
  const actualLabel = label || "Back to Projects";

  return (
    <Link href={actualHref} className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors">
      <svg
        className="w-5 h-5 mr-2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M15 19l-7-7 7-7" />
      </svg>
      {actualLabel}
    </Link>
  );
}
