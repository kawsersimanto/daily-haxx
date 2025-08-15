"use client";

import { Card, CardContent } from "@/components/ui/card";
import { usePreference } from "@/features/profile";
import { NewsletterToggle } from "./NewsletterToggle";

export const Preference = () => {
  const {
    dailyNewsletter,
    weeklyNewsletter,
    toggleDailyNewsletter,
    toggleWeeklyNewsletter,
  } = usePreference();
  return (
    <div>
      <Card>
        <CardContent>
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
