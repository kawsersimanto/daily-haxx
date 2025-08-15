import SidebarLayout from "@/components/layout/SidebarLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Preference, ProfileForm } from "@/features/profile";
import { PremiumCard } from "./PremiumCard";

export const Profile = () => {
  return (
    <div>
      <div className="flex flex-col gap-2 md:mb-7.5 mb-4">
        <h1 className="text-[28px] text-primary">Hey, Danial Smith!</h1>
        <p>Manage your profile and subscription preferences</p>
      </div>
      <SidebarLayout className="py-0 md:gap-6 gap-4 items-start">
        <div className="flex flex-col md:gap-6 gap-4">
          <Card className="p-5">
            <CardContent className="p-0">
              <div className="flex flex-col gap-1 mb-8">
                <h2 className="text-xl text-primary">Profile information</h2>
                <p>Upgrade your personal details from here</p>
              </div>
              <ProfileForm />
            </CardContent>
          </Card>
          <Preference />
        </div>
        {/* <FreeCard /> */}
        <PremiumCard />
      </SidebarLayout>
    </div>
  );
};
