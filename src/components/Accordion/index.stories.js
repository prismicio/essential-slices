import React, { useState } from 'react'
import Accordion from '.'
import mock from './mock.json'

export default {
  title: 'components/Accordion',
  component: Accordion,
}

export const Default = () => {
  const [active, setActive] = useState(false)
  return (
    <Accordion
      active={active}
      title={mock.items[0].title}
      text={mock.items[0].text}
      onClick={() => {
        setActive(!active)
      }}
    />
  )
}
