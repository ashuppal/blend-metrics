"use client";
import SecuritySettings from "@/components/ui/securitySettings";
import Sidebar from "@/components/ui/sidebar";
import { AvatarGroup } from "@/components/ui";
import { ArrowLeft2 } from "../icons";
import Link from "next/link";
import React from "react";
import { Button } from "../ui";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { Home, Settings, User } from "lucide-react";
import {Users} from "../icons/users";
import { MoreHorizontal } from "lucide-react";


export const AvatarSecurity = () =>  {
  return <nav className="flex h-[70px] items-center justify-between border-b border-gray-200 px-[17px]">
      <div className="flex items-center gap-x-5">
        <Button className="p-2.5" visual="gray" variant="outlined">
          <ArrowLeft2 />
        </Button>

        <ol className="flex items-center gap-x-2">
          <li className="text-sm font-semibold leading-6 text-gray-500">
            <Link href="/" style={{ width: '57px', height: '17px' }}>Settings</Link>
          </li>
          <li className="flex items-center gap-x-2 text-sm font-semibold leading-6 text-gray-500">
            <span className="text-gray-500">/</span>
            <Link href="/" style={{ width: '57px', height: '17px' }}>Security</Link>
          </li>
          <li className="flex items-center gap-x-2 text-sm font-semibold leading-6 text-gray-black">
            <span className="text-gray-500">/</span>
            <Link href="/" style={{ width: '57px', height: '17px' }}>Login & Password</Link>
          </li>
        </ol>
      </div>

      <div className="flex items-center gap-x-6">
      

       
        </div>
   
    </nav>;
}