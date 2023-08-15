"use client";
import SecuritySettings from "@/components/ui/securitySettings";
 import Sidebar from "@/components/ui/sidebar";
 import { AvatarSecurity } from "@/components/ui/avatarSecurity";
  import {SideMenu} from "@/components/ui/side-menu";
 

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
