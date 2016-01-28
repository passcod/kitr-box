'use strict'
import { test } from 'tap'
import { testRender } from './utils'
import React from 'react'

import Box from '../index'

test('Placeholder', t => {
  t.plan(1)

  testRender(<Box />, output => {
    t.ok(output, 'renders')
  })
})
