"use client";
import React, { useState } from 'react';
import { Button } from "../ui";
import { AccountRecovery } from '../icons/accountRecovery';
export const SideMenu = () => {
return(
  <div 
  style={{ 
    display: 'flex', 
    width: '224px', 
    height: '100vh', 
    padding: '15px', 
    flexDirection: 'column', 
    alignItems: 'flex-start', 
    gap: '8px', 
    flexShrink: 0 ,
 
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
          textTransform: 'uppercase'
        }}
      >
        Personal
      </h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <AccountRecovery />

        <h4 
          style={{
            color: 'var(--gray-500, #667085)',
            fontFamily: 'Inter',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: '600',
            lineHeight: '24px',
            textTransform: 'capitalize'
          }}
        >
          Account Recovery
        </h4>
      </div>
    </div>
  );
}





