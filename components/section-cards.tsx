import { TrendingDownIcon, TrendingUpIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function SectionCards({ data }) {
  return (
    <div className="*:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4 grid grid-cols-5 md:grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card lg:px-6">
      <Card className="@container/card h-fit">
        <CardHeader className="relative">
          <CardDescription>Total Revenue</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            {data.profit.value}$
          </CardTitle>
          <div className="absolute right-4 top-4">
            <Badge
              variant="outline"
              className={`flex gap-1 rounded-lg text-xs ${
                data.profit.up ? "text-money" : "text-danger"
              }`}
            >
              {data.profit.up ? (
                <TrendingUpIcon className="size-3" />
              ) : (
                <TrendingDownIcon className="size-3" />
              )}
              {data.profit.up ? "+" : "-"}
              {data.profit.percent}%
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="text-muted-foreground">profits of this month</div>
        </CardFooter>
      </Card>
      <Card className="@container/card h-fit">
        <CardHeader className="relative">
          <CardDescription>Active Users</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            {data.active_users.value}
          </CardTitle>
          <div className="absolute right-4 top-4">
            <Badge
              variant="outline"
              className={`flex gap-1 rounded-lg text-xs ${
                data.active_users.up ? "text-money" : "text-danger"
              }`}
            >
              {data.active_users.up ? (
                <TrendingUpIcon className="size-3" />
              ) : (
                <TrendingDownIcon className="size-3" />
              )}
              {data.active_users.up ? "+" : "-"}
              {data.active_users.percent}%
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="text-muted-foreground">activations of this month</div>
        </CardFooter>
      </Card>
    </div>
  );
}
