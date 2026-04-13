import SideNavBar from "../../components/ui/SideNavBar";
import TopNavBar from "../../components/ui/TopNavBar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SideNavBar />
      <TopNavBar />
      <main className="ml-64 pt-16 min-h-screen">
        {children}
      </main>
    </>
  );
}
