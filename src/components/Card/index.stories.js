import React from 'react'
import { Box } from 'theme-ui'

import Card from '.'
import mock from './mock.json'

export default {
  title: 'Components/Card',
  component: Card,
}

export const Default = () => (
  <Box sx={{ maxWidth: '15rem', mx: 'auto', my: 'xlarge' }}>
    <Card {...mock} />
  </Box>
)

Default.story = {
  name: 'Default',
}
