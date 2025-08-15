"use client";

import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { NewsletterToggleProps } from "@/features/profile";
import { cn } from "@/lib/utils";

export const NewsletterToggle = ({
  enabled,
  onToggle,
  title,
  description,
  isPremium = false,
}: NewsletterToggleProps) => {
  return (
    <div className="flex items-center justify-between bg-card gap-4">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-xl font-medium text-primary">{title}</h3>
          {isPremium && (
            <Badge
              variant="outline"
              className="border-almond-yellow text-almond-yellow bg-light-yellow py-0 px-2.5 leading-[1em] rounded-[40px] text-sm font-medium md:block hidden"
            >
              Premium
            </Badge>
          )}
        </div>
        <p className="text-sm text-gray-600">{description}</p>
      </div>

      <Switch
        checked={enabled}
        onCheckedChange={onToggle}
        className={cn(
          "data-[state=checked]:bg-orange-400",
          enabled ? "bg-orange-400" : ""
        )}
      />
    </div>
  );
};
