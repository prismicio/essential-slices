import React from 'react'
import Slice from '.'

export default {
  title: 'Components/Slice',
  component: Slice,
}

export const Default = () => <Slice>Content</Slice>

Default.story = {
  name: 'Default',
}
