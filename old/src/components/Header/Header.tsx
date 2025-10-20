import { HeaderProps } from "@/utils/types";
import { Headers } from "@/components/Typography";

export function Header({ 
  props,
}: {
  props: HeaderProps
}) {
  const { name, phone, email, linkedin, github } = props;

  return (
    <header className="mb-8 text-center print:text-left print:mb-6">
      <Headers.H1>{name}</Headers.H1>
      <p className="text-text-light text-lg print:text-base">
        <a href={`tel:${phone}`} className="hover:text-primary">{phone}</a> &bull;
        <a href={`mailto:${email}`} className="hover:text-primary">{email}</a> &bull;
        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary">LinkedIn</a> &bull;
        <a href={github} target="_blank" rel="noopener noreferrer" className="hover:text-primary">GitHub</a>
      </p>
  </header>
  );
}