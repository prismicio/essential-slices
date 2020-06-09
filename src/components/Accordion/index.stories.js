import React from 'react'
import Accordion from '.'
import mock from './mock.json'

export default {
  title: 'components/Accordion',
  component: Accordion,
}

export const Default = () => {
  return (
    <Accordion>
      {mock.items.map(({ text, title }) => {
        return (
          <Accordion.Item
            title={title}
            text={text}
            sx={{
              mb: 'small',
            }}
          />
        )
      })}
    </Accordion>
  )
}
