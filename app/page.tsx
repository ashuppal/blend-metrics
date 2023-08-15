"use client";
import SecuritySettings from "@/components/ui/securitySettings";
 import Sidebar from "@/components/ui/sidebar";
 import { AvatarSecurity } from "@/components/ui/avatarSecurity";

 export default function Home() {

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full">
        <AvatarSecurity />
      </div>
    </div>
  );
}
