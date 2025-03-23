import Footer from "@/components/layout/Footer";
import Navigation from "@/components/layout/Navigation";

const LandingPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default LandingPage;
