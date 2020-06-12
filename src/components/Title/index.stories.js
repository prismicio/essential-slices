import React from 'react'
import Title from '.'

export default {
  title: 'Components/Title',
  component: Title,
}

export const Default = () => (
  <Title sx={{ backgroundColor: 'secondary', p: 'small' }}>Title text</Title>
)

Default.story = {
  name: 'Default',
}
