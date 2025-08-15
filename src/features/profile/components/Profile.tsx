import SidebarLayout from "@/components/layout/SidebarLayout";
import { Card, CardContent } from "@/components/ui/card";
import { ProfileForm } from "@/features/profile";

export const Profile = () => {
  return (
    <div>
      <div className="flex flex-col gap-2 mb-7.5">
        <h1 className="md:text-[28px] text-primary">Hey, Danial Smith!</h1>
        <p>Manage your profile and subscription preferences</p>
      </div>
      <SidebarLayout className="py-0">
        <div>
          <Card className="p-5">
            <CardContent className="p-0">
              <div className="flex flex-col gap-1 mb-8">
                <h2 className="text-xl text-primary">Profile information</h2>
                <p>Upgrade your personal details from here</p>
              </div>
              <ProfileForm />
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className="p-5">
            <CardContent className="p-0">h3llo</CardContent>
          </Card>
        </div>
      </SidebarLayout>
    </div>
  );
};
