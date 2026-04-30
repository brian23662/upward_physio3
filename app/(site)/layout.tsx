import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/**
 * The (site) route group lets us share Navbar/Footer across every marketing
 * page without affecting the URL structure. Routes inside (site) render at
 * their natural paths — /about, /services, etc.
 */
export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
