"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  AlertCircleIcon,
  CheckCircle,
  ChevronUp,
  LayoutDashboard,
  LogOut,
  User2,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import React, { useEffect, useState } from "react";
import { User } from "@nextui-org/user";
import { Divider } from "@nextui-org/divider";
import Link from "next/link";
import { Logo } from "./icons";
import { useRouter } from "next/navigation";
import { type User as UserT } from "@/types/user.type";
import { getSession } from "next-auth/react";
import toast from "react-hot-toast";
import { confirmationToast, successToast } from "@/lib/toaster";
import { logOut } from "@/actions/auth.action";

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Users",
    url: "/users",
    icon: User2,
  },
];

export function AppSidebar() {
  const router = useRouter();
  const [user, setUser] = useState<UserT>();

  const myProfile = async () => {
    const session = await getSession();
    try {
      console.log({ session });

      setUser(session?.user);
    } catch (error: any) {
      toast.error(error.message || "Uh oh! Something went wrong.");
    }
  };

  useEffect(() => {
    myProfile();
  }, []);

  const appLlogout = async () => {
    try {
      confirmationToast({
        btnLabel: "Yes",
        cancelBtnLabel: "Cancel",
        message: "Do you really want to logout?",
        icon: <AlertCircleIcon color="red" />,
        async onConfirm() {
          await logOut();
          successToast({
            message: "Logged out successfully.",
            icon: <CheckCircle color="green" />,
          });
          router.push("/");
        },
        async onCancel() {},
      });
    } catch (error) {}
  };
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex justify-start items-center gap-1 m-1">
          <Link href={"/dashboard"}>
            <Logo size={40} />
          </Link>
          <p className="font-bold text-inherit">ACME</p>
        </div>
      </SidebarHeader>
      <Divider />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Group 1</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>{" "}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <Divider className="my-2 w-2/3 mx-auto" />
        <SidebarGroup>
          <SidebarGroupLabel>Group 2</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>{" "}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger className="p-7" asChild>
                <SidebarMenuButton>
                  <User
                    avatarProps={{ radius: "lg", src: "/user.jpg" }}
                    description={user?.email ? user.email : "sample@email.com"}
                    name={user?.name}
                  >
                    {user?.name}
                  </User>{" "}
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem className="cursor-pointer">
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={appLlogout}
                  className="text-destructive focus:bg-destructive focus:text-destructive-foreground cursor-pointer"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
