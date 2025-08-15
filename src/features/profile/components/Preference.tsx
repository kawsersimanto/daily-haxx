"use client";

import { Card, CardContent } from "@/components/ui/card";
import { NewsletterToggle, usePreference } from "@/features/profile";

export const Preference = () => {
  const {
    dailyNewsletter,
    weeklyNewsletter,
    toggleDailyNewsletter,
    toggleWeeklyNewsletter,
  } = usePreference();
  return (
    <div className="flex flex-col md:gap-6 gap-4">
      <Card className="p-5">
        <CardContent className="p-0">
          <NewsletterToggle
            enabled={weeklyNewsletter}
            onToggle={toggleWeeklyNewsletter}
            title="Weekly Newsletter"
            description="Turn your weekly newsletter ON or OFF"
            isPremium={true}
          />
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <NewsletterToggle
            enabled={dailyNewsletter}
            onToggle={toggleDailyNewsletter}
            title="Daily Newsletter"
            description="Turn your weekly newsletter ON or OFF"
            isPremium={true}
          />
        </CardContent>
      </Card>
    </div>
  );
};
