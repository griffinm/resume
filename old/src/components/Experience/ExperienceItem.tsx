import { ExperienceProps } from "@/utils/types";
import { Headers, Body } from "@/components/Typography";
import { List } from "../List";
import { format as formatDate } from "date-fns";

const dateFormat = "MMM-yy";

export const ExperienceItem: React.FC<ExperienceProps> = ({
  company,
  title,
  note,
  startDate,
  endDate,
  bullets,
}) => {

  const renderNote = () => {
    if (note) {
      return (
        <span className="ml-2">
          <Body.P color="secondary" size="small" noMargin>{note}</Body.P>
        </span>
      );
    }
  }

  return (
    <article className="mb-5 border-b border-gray-200 pb-5">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-end">
          <Headers.H3>{company}</Headers.H3>
          {renderNote()}
        </div>
        <Body.P color="secondary">
          {formatDate(startDate, dateFormat)} - {endDate ? formatDate(endDate, dateFormat) : "Present"}
        </Body.P>
      </div>
        <Body.P weight="bold" size="small">{title}</Body.P>
      <List.Container>
        {bullets.map((bullet, index) => (
          <List.Item key={index}>{bullet}</List.Item>
        ))}
      </List.Container>
    </article>
  );
}
