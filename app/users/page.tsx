import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { DataTable } from "@/components/data-table";
import { SectionCards } from "@/components/section-cards";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset } from "@/components/ui/sidebar";
import { fakeData } from "@/public/data";

export default function Page() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <SectionCards data={fakeData} />
          <div className="px-4 lg:px-6 mt-4">
            <ChartAreaInteractive data={fakeData.chart} />
          </div>
          {/* <DataTable data={data} /> */}
        </div>
      </div>
    </div>
  );
}
