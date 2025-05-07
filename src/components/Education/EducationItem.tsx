import { EducationItemProps } from "@/utils/types";
import { format as formatDate } from "date-fns";
import { Headers, Body } from "../Typography";

export const EducationItem: React.FC<EducationItemProps> = ({
  school,
  degree,
  endDate,
}) => {
  return (
    <article>
      <Headers.H3>{degree}</Headers.H3>
      <Body.P color="secondary">
        {school} | Completed {formatDate(endDate, "MMM yyyy")}
      </Body.P>
    </article>
  )
}