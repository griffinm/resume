import { SummaryProps } from "@/utils/types";
import { Headers, Body } from "@/components/Typography";

export function Summary({ props }: { props: SummaryProps }) {
  const { headline, summary } = props;

  return (
    <section>
      <Headers.H2>Summary</Headers.H2>
      <Body.P weight="bold" size="small">{headline}</Body.P>
      <Body.P>{summary}</Body.P>
    </section>
  );
}