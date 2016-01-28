'use strict'
import React, { Children } from 'react'
import classNames from 'classnames'

/* eslint-disable react/prop-types */
export default function Box (props) {
  const c = classNames('box', props.className)

  const contents = []
  const footers = []
  const headers = []

  Children.forEach(props.children, child => {
    if (child.type === Header) {
      return headers.push(child)
    }

    if (child.type === Footer) {
      return footers.push(child)
    }

    contents.push(child)
  })

  return <div className={c}>
    {headers}
    <div className='content'>
      {contents}
    </div>
    {footers}
  </div>
}

export function Row (props) {
  const c = classNames('row', props.className)
  return <div className={c}>{props.children}</div>
}

export function SingleBox (props) {
  return <Row>
    <Box className={props.className}>
      {props.children}
    </Box>
  </Row>
}

export function Header (props) {
  return <header>
    {props.title ? <h1>{props.title}</h1> : null}
    {props.children}
  </header>
}

export function Footer (props) {
  return <footer>{props.children}</footer>
}

export function Stack (props) {
  const c = classNames('stack', props.className)
  return <div className={c}>{props.children}</div>
}
/* eslint-enable react/prop-types */
