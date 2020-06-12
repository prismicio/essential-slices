import React from 'react'
import Wrap from '.'

export default {
  title: 'Components/Wrap',
  component: Wrap,
}

export const Default = () => (
  <Wrap sx={{ backgroundColor: 'secondary', p: 'small' }}>Content</Wrap>
)

Default.story = {
  name: 'Default',
}
