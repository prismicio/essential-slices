import React from 'react'
import Title from '.'

export default {
  title: 'Components/Title',
  component: Title,
}

export const Default = () => <Title>Title text</Title>

Default.story = {
  name: 'Default',
}
