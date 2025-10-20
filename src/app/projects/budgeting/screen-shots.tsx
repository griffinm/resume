import CategoriesScreenshot from "@/public/images/budgeting/categories.png";
import CategoryReportScreenshot from "@/public/images/budgeting/category_report.png";
import DashboardScreenshot from "@/public/images/budgeting/dashboard.png";
import SpendTrendScreenshot from "@/public/images/budgeting/spend_trend.png";
import TransactionScreenshot from "@/public/images/budgeting/transactions.png";
import { ScreenShotItem } from "@/components/ScreenShotItem";

export function ScreenShots() {
  return (
    <div className="project-section">
      <h2>Screen Shots</h2>

      <div className="grid grid-cols-1 gap-16">
        
        <ScreenShotItem
          image={TransactionScreenshot}
          alt="Transactions"
          caption="View and search all transactions"
          title="Transactions"
          color="blue"
        />
        <ScreenShotItem
          image={DashboardScreenshot}
          alt="Budgeting App Screenshot"
          caption="View your budget and spending overview at a glance"
          title="At A Glance"
          orientation="image-right"
          color="purple"
        />
        <ScreenShotItem
          image={CategoriesScreenshot}
          alt="Categories"
          caption="View and manage your categories"
          title="Categories"
          color="green"
        />
        <ScreenShotItem
          image={CategoryReportScreenshot}
          alt="Category Report"
          caption="View detailed reports for each category"
          title="Category Report"
          orientation="image-right"
          color="orange"
        />
        <ScreenShotItem
          image={SpendTrendScreenshot}
          alt="Spend Trend"
          caption="View your spending trend over time"
          title="Spend Trend"
          color="indigo"
        />
      </div>
    </div>
  );
}

