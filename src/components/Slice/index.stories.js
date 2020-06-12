import React from 'react'
import { Box } from 'theme-ui'
import Slice from '.'

export default {
  title: 'Components/Slice',
  component: Slice,
}

export const Default = () => (
  <Slice sx={{ backgroundColor: 'grey53' }}>
    <Box sx={{ backgroundColor: 'secondary', p: 'small' }}>Content</Box>
  </Slice>
)

Default.story = {
  name: 'Default',
}
