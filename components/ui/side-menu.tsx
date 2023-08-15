"use client";
import React, { useState } from 'react';
import { Button } from "../ui";
import { AccountRecovery } from '../icons/accountRecovery';
import { TabButtonBase } from '../icons/tabButtonBase';
import { Lock } from '../icons/Lock';
import { Devices } from '../icons/devices';
import { Earth } from '../icons/earth';


export const SideMenu = () => {
  return (
    <div
      style={{
        display: 'flex',
        width: '224px',
        height: '100vh',
        padding: '15px',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '8px',
        flexShrink: 0,

      }}
      className=" bg-white border-r border-gray-200"
    >
      <h3
        style={{
          alignSelf: 'stretch',
          color: 'var(--gray-500, #667085)',
          fontFamily: 'Inter',
          fontSize: '12px',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: '20px',
          letterSpacing: '0.24px',
          textTransform: 'uppercase',

        }}
      >
        Personal
      </h3>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ marginRight: '0px', paddingLeft: '11px' }}>
          <AccountRecovery />
        </div>
        <span
          style={{
            color: 'var(--gray-500, #667085)',
            fontFamily: 'Inter',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: '600',
            lineHeight: '24px',
            textTransform: 'capitalize',
            padding: '8px 12px',
          }}
        >
          Account Recovery
        </span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        <TabButtonBase />
        <span style={{
          color: "var(--gray-500, #667085)",
          fontFamily: "Inter",
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px",
          textTransform: "capitalize",
          padding: '8px 12px',
        }}>
        </span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginRight: '0px', paddingLeft: '9px' }}>
        <Lock />
        <span style={{
          color: "var(--gray-500, #667085)",
          fontFamily: "Inter",
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px",
          paddingRight: '8px',

          padding: '8px 12px',
        }}>
          Two-Factor Auth
        </span>
      </div>
      <div
      style={{
        display: 'flex',
        width: '224px',
        height: '100vh',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '8px',
        flexShrink: 0,
      }}
    >
      <h3
        style={{
          alignSelf: 'stretch',
          color: 'var(--gray-500, #667085)',
          fontFamily: 'Inter',
          fontSize: '12px',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: '20px',
          letterSpacing: '0.24px',
          textTransform: 'uppercase',
          paddingTop: '15px',

        }}
      >
        access management
      </h3>
     

      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginRight: '0px', paddingLeft: '11px' }}>
        <Devices />
        <span style={{
          color: "var(--gray-500, #667085)",
          fontFamily: "Inter",
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px",

          padding: '8px 12px',
        }}>
         Devices
        </span>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginRight: '0px', paddingLeft: '11px' }}>
        <Earth />
        <span style={{
          color: "var(--gray-500, #667085)",
          fontFamily: "Inter",
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px",

          padding: '8px 12px',
        }}>
         IP Restriction
        </span>
      </div>
      
    </div>
    </div>

  );
}





