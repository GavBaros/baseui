/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-FLAG-COMPONENT
// DO NOT EDIT THIS FILE DIRECTLY

import * as React from 'react';

export default function FlagAD(props: {width: string}) {
  return (
    <svg viewBox="0 0 21 15" width={props.width}>
      <defs>
        <linearGradient id="ADa" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="ADb" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#1537D1" />
          <stop offset="100%" stopColor="#0522A5" />
        </linearGradient>
        <linearGradient id="ADc" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#EA3058" />
          <stop offset="100%" stopColor="#CE173E" />
        </linearGradient>
        <linearGradient id="ADd" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFCF3C" />
          <stop offset="100%" stopColor="#FECB2F" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#ADa)" d="M0 0h21v15H0z" />
        <path fill="url(#ADb)" d="M0 0h21v15H0z" />
        <path fill="url(#ADc)" d="M10 0h11v15H10z" />
        <path fill="url(#ADd)" d="M7 0h7v15H7z" />
        <path fill="#FFEDB1" d="M9.5 6.5h1V7h-1z" />
        <path
          fill="#D32E28"
          fillRule="nonzero"
          d="M9.665 7.96c.025.295.292.54.587.54h.496a.607.607 0 0 0 .587-.54l.122-1.46H9.543l.122 1.46zm-.624-1.465A.446.446 0 0 1 9.495 6h2.01c.273 0 .477.216.454.495l-.126 1.506c-.046.552-.53.999-1.085.999h-.496c-.553 0-1.039-.443-1.085-.999L9.04 6.495z"
        />
        <path fill="#D32E28" d="M9.5 7h2v.5h-2z" />
      </g>
    </svg>
  );
}