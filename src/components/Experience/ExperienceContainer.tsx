import { Headers } from "@/components/Typography";

export function ExperienceContainer({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Headers.H2>Experience</Headers.H2>
      {children}
    </section>
  )
}