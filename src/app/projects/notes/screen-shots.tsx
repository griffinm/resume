import { ScreenShotItem } from "@/components/ScreenShotItem";
import DashboardScreenshot from "@/public/images/notes/dashboard.png";
import InlineQuestionScreenshot from "@/public/images/notes/inline-questions.png";
import InlineTaskScreenshot from "@/public/images/notes/inline-tasks.png";
import NoteScreenshot from "@/public/images/notes/note.png";
import SearchScreenshot from "@/public/images/notes/search.png";
import TagFilterScreenshot from "@/public/images/notes/tag-filter.png";
import TaskScreenshot from "@/public/images/notes/tasks.png";

export function ScreenShots() {
  return (
    <div className="project-section">
      <h2>Screen Shots</h2>

      <div className="grid grid-cols-1 gap-16">
        
        <ScreenShotItem
          image={DashboardScreenshot}
          alt="Dashboard"
          caption="View your notes and tasks"
          title="Dashboard"
          color="blue"
        />
        <ScreenShotItem
          image={NoteScreenshot}
          alt="Note"
          caption="A robust WYSIWYG for a rich editing experience"
          title="Note"
          color="purple"
        />
        <ScreenShotItem
          image={TaskScreenshot}
          alt="Tasks"
          caption="View and manage your tasks"
          title="Tasks"
          color="teal"
        />
        <ScreenShotItem
          image={InlineTaskScreenshot}
          alt="Inline Task"
          caption="Create and manage tasks directly from notes to keep todo items organized."
          title="Inline Task"
          color="orange"
        />
        <ScreenShotItem
          image={InlineQuestionScreenshot}
          alt="Inline Question"
          caption="Mark and answer questions directly in notes. See a summary of all question on the dashboard."
          title="Inline Question"
          color="green"
        />
        <ScreenShotItem
          image={SearchScreenshot}
          alt="Search"
          caption="Search your notes and tasks with a powerful search engine."
          title="Search"
          color="indigo"
        />
        <ScreenShotItem
          image={TagFilterScreenshot}
          alt="Tag Filter"
          caption="Filter notes by tags to quickly find related content. Add tags to your notes to organize your content."
          title="Tag Filter"
          color="red"
        />
      </div>
    </div>
  );
}

