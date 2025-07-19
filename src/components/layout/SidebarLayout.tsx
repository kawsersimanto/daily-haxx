import { ReactNode } from "react";

const SidebarLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="grid lg:grid-cols-[1fr_360px] gap-6 pt-4 pb-10">
      {children}
    </section>
  );
};

export default SidebarLayout;
