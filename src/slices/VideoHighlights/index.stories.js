import React from 'react'
import { ThemeProvider } from 'theme-ui'
import theme from '../../theme'
import VideoHighlights from '.'
import mock from './mock.json'

export default {
  title: 'Slices/VideoHighlights',
  component: VideoHighlights,
}

export const Default = () => <VideoHighlights slice={mock} />

export const WithCustomTheme = () => {
  const customTheme = {
    ...theme,
    container: {
      ...theme.container,
      slice: {
        color: '#FFF',
        background: 'rgb(112, 99, 255)',
        border: '8px solid pink',
      },
      title: {
        textAlign: 'right',
      },
      description: {
        mr: 0,
        textAlign: 'right',
      },
    },
  }
  return (
    <ThemeProvider theme={customTheme}>
      <VideoHighlights slice={mock} />
    </ThemeProvider>
  )
}
