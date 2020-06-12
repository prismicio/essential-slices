import React from 'react'
import Head from '.'

export default {
  title: 'Components/Head',
  component: Head,
}

export const Default = () => (
  <Head sx={{ backgroundColor: 'secondary', p: 'small' }}>Content</Head>
)

Default.story = {
  name: 'Default',
}
