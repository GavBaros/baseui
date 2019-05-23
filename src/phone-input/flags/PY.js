/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-FLAG-COMPONENT
// DO NOT EDIT THIS FILE DIRECTLY

import * as React from 'react';

export default function FlagPY(props: {width: string}) {
  return (
    <svg viewBox="0 0 21 15" width={props.width}>
      <defs>
        <linearGradient id="PYa" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="PYb" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#E33F39" />
          <stop offset="100%" stopColor="#D32E28" />
        </linearGradient>
        <linearGradient id="PYc" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#124BBA" />
          <stop offset="100%" stopColor="#073DA6" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#PYa)" d="M0 0h21v15H0z" />
        <path fill="url(#PYb)" d="M0 0h21v5H0z" />
        <path fill="url(#PYc)" d="M0 10h21v5H0z" />
        <path fill="url(#PYa)" d="M0 5h21v5H0z" />
        <path
          fill="#398153"
          fillRule="nonzero"
          d="M10.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0 .5a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
        />
        <circle cx="10.5" cy="7.5" r="1" fill="#E5CF58" />
      </g>
    </svg>
  );
}