import Footer from "@/components/footer/Footer";
import { Navbar } from "@/components/navbar";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen"></div>
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
