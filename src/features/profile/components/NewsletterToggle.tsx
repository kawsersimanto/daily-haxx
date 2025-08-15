"use client";

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
    <div className="flex items-center justify-between bg-card">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-base font-medium text-gray-900">{title}</h3>
          {isPremium && (
            <span className="px-2 py-0.5 text-xs font-medium text-orange-600 bg-orange-100 rounded">
              Premium
            </span>
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
