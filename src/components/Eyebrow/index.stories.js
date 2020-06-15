import React from 'react'
import { Box } from 'theme-ui'
import Eyebrow from '.'

export default {
  title: 'Components/Eyebrow',
  component: Eyebrow,
}

export const Default = () => (
  <Box
    sx={{
      backgroundColor: 'secondary',
      width: 'full',
      maxWidth: '50rem',
      m: '10px auto',
    }}
  >
    <Eyebrow>Title text</Eyebrow>
  </Box>
)
