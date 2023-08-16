import React from 'react';
import Sidebar from "@/components/ui/sidebar";
import { AvatarSecurity } from "@/components/ui/avatarSecurity";
import { SideMenu } from "@/components/ui/side-menu";
import { SecurityTextArea } from './securityTextArea';

export const SecurityMain = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full">
        <AvatarSecurity />
        <div className="flex">
          <SideMenu />
          <SecurityTextArea />
        </div>
      </div>
    </div>
  );
}
