import React from 'react'
import Title from '.'

export default {
  title: 'Components/Title',
  component: Title,
}

export const Default = () => (
  <Title sx={{ backgroundColor: 'secondary', p: 'small' }}>
    <h1>Title text</h1>
  </Title>
)

Default.story = {
  name: 'Default',
}
