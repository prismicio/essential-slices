import React from 'react'
import { ThemeProvider } from 'theme-ui'
import theme from '../../theme'
import mock from './mock.json'
import FaqSection from '.'

export default {
  title: 'Slices/FaqSection',
  component: FaqSection,
}

export const Default = () => {
  return <FaqSection slice={mock} />
}

export const WithoutImage = () => {
  return (
    <FaqSection
      slice={{
        ...mock,
        primary: {
          ...mock.primary,
          optional_image: null,
        },
      }}
    />
  )
}

export const WithCustomTheme = () => {
  const customTheme = {
    ...theme,
    container: {
      ...theme.container,
      wrapper: {
        transform: 'rotateZ(2deg)',
      },
      eyebrow: {
        color: 'tomato',
      },
    },
  }
  return (
    <ThemeProvider theme={customTheme}>
      <FaqSection
        slice={{
          ...mock,
          primary: {
            ...mock.primary,
            optional_image: null,
          },
        }}
      />
    </ThemeProvider>
  )
}
