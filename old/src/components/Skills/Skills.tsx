import { Skills as SkillsType } from "@/utils/types";
import { Headers, Body } from "../Typography";

interface SkillsProps {
  skills: SkillsType[];
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <>
      {skills.map((skill) => (
        <div key={skill.category}>
          <Headers.H4>{skill.category}</Headers.H4>
          <Body.P weight="light" color="secondary">
            {skill.skills.join(", ")}
          </Body.P>
        </div>
      ))}
    </>
  );
};