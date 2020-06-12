import React from 'react'
import Desc from '.'

export default {
  title: 'Components/Desc',
  component: Desc,
}

export const Default = () => (
  <Desc sx={{ backgroundColor: 'secondary', p: 'small' }}> Content</Desc>
)

Default.story = {
  name: 'Default',
}
