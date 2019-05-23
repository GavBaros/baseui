/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-FLAG-COMPONENT
// DO NOT EDIT THIS FILE DIRECTLY

import * as React from 'react';

export default function FlagNG(props: {width: string}) {
  return (
    <svg viewBox="0 0 21 15" width={props.width}>
      <defs>
        <linearGradient id="NGa" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="NGb" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#189B62" />
          <stop offset="100%" stopColor="#118653" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#NGa)" d="M0 0h21v15H0z" />
        <path fill="url(#NGb)" d="M10 0h11v15H10zM0 0h7v15H0z" />
        <path fill="url(#NGa)" d="M7 0h7v15H7z" />
      </g>
    </svg>
  );
}