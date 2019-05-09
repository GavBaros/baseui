/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import React from 'react';

import {StatefulInput} from '../index.js';
import {Block} from '../../block/index.js';
import {Search} from '../../icon/index.js';

export const name = 'inputs';

export const component = () => (
  <>
    <StatefulInput
      placeholder={'Search here...'}
      endEnhancer="00"
      overrides={{
        // eslint-disable-next-line react/display-name
        Before: () => (
          <Block display="flex" alignItems="center" paddingLeft="scale500">
            <Search size="18px" />
          </Block>
        ),
      }}
    />
    <br />
    <StatefulInput
      placeholder={'Search here...'}
      endEnhancer="00"
      // eslint-disable-next-line jsx-a11y/no-autofocus
      autoFocus
      overrides={{
        // eslint-disable-next-line react/display-name
        Before: () => (
          <Block display="flex" alignItems="center" paddingLeft="scale500">
            <Search size="18px" />
          </Block>
        ),
      }}
    />
    <br />
    <StatefulInput
      placeholder={'Search here...'}
      endEnhancer="00"
      positive
      overrides={{
        // eslint-disable-next-line react/display-name
        Before: () => (
          <Block display="flex" alignItems="center" paddingLeft="scale500">
            <Search size="18px" />
          </Block>
        ),
      }}
    />
    <br />
    <StatefulInput
      placeholder={'Search here...'}
      endEnhancer="00"
      error
      overrides={{
        // eslint-disable-next-line react/display-name
        Before: () => (
          <Block display="flex" alignItems="center" paddingLeft="scale500">
            <Search size="18px" />
          </Block>
        ),
      }}
    />
    <br />
    <StatefulInput
      placeholder={'Search here...'}
      endEnhancer="00"
      disabled
      overrides={{
        // eslint-disable-next-line react/display-name
        Before: () => (
          <Block display="flex" alignItems="center" paddingLeft="scale500">
            <Search size="18px" />
          </Block>
        ),
      }}
    />
  </>
);