import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/breadcrumbs";
import { Navbar } from "@/components/navbar";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <div className="flex flex-col w-full">
          {/* <div className="px-2"> */}
          <Navbar />
          {/* </div> */}
          <div className="w-full pt-5 px-6">{children}</div>
        </div>
      </SidebarProvider>
    </>
  );
}
