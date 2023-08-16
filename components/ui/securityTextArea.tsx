"use client";

import React from "react";
import { BlueLock } from "./blueLock";
import { Fingerprint } from "../icons/fingerprint";
import { RightArrow } from "../icons/rightArrow";


export const SecurityTextArea = () => {
  return (
    <div className="flex flex-col items-start space-y-3 w-[550px] h-[76px] self-stretch p-3">
      <p style={{
        fontSize: '16px',
        fontFamily: 'Inter',
        lineHeight: '24px',
        fontWeight: '550',
        fontStyle: 'normal',
        color: '#475467',
        textTransform: 'capitalize',
        paddingLeft: '16px',
        paddingTop: '24px',
        letterSpacing: '0.24px',
      }}>
        Login & Password
      </p>
      <p
        style={{
          fontSize: '15px',
          fontFamily: 'Inter',
          lineHeight: '20px',
          fontWeight: '400',
          fontStyle: 'normal',
          color: '#667085',
          paddingLeft: '16px',
          letterSpacing: '0.24px',
        }}

      >Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>

      <div style={{
        width: '550px',
        border: '1px solid var(--grey-200, #EAECF0)',
        background: 'var(--base-white, #FFF)',
        boxShadow: '0px 1px 5px 0px rgba(16, 24, 40, 0.02)'
      }} className="flex justify-between p-3 items-center rounded-lg bg-white">
        <div className="flex items-center">
          <div style={{
            width: '44px',
            height: '44px',
            border: '1.5px solid var(--gray-200, #EAECF0)'
          }} className="flex justify-center items-center gap-2.5 rounded-lg">
            <BlueLock />
          </div>
          <span
            style={{
              color: 'var(--grey-900, #101828)',
              fontSize: '14px',
              fontFamily: 'Inter',
              fontWeight: 500
            }}
            className="ml-2">
            Update Password
          </span>
        </div>

        <RightArrow />
      </div>

      <div style={{
        width: '550px',
        border: '1px solid var(--grey-200, #EAECF0)',
        background: 'var(--base-white, #FFF)',
        boxShadow: '0px 1px 5px 0px rgba(16, 24, 40, 0.02)'
      }} className="flex justify-between p-3 items-center rounded-lg bg-white">
        <div className="flex items-center">
          <div style={{
            width: '44px',
            height: '44px',
            border: '1.5px solid var(--gray-200, #EAECF0)'
          }} className="flex justify-center items-center gap-2.5 rounded-lg">
            <Fingerprint />
          </div>
          <span
            style={{
              color: 'var(--grey-900, #101828)',
              fontSize: '14px',
              fontFamily: 'Inter',
              fontWeight: 500
            }}
            className="ml-2">
             Fingerprint Login
          </span>
        </div>

        <RightArrow />
      </div>
     
    </div>
  )
}
