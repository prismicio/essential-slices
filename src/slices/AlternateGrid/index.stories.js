import React from 'react'
import { ThemeProvider } from 'theme-ui'
import theme from '../../theme'
import AlternateGrid from '.'
import mock from './mock.json'

export default {
  title: 'Slices/AlternateGrid',
  component: AlternateGrid,
}

function linkResolver(doc) {
  return `/link/to/${doc.uid}`
}

export const Default = () => (
  <AlternateGrid
    slice={{
      ...mock,
      items: mock.items.map((e) => ({ ...e, optional_icon: null })),
      primary: {
        ...mock.primary,
        call_to_action: null,
      },
    }}
    linkResolver={linkResolver}
  />
)

export const WithIcons = () => (
  <AlternateGrid
    slice={{
      ...mock,
      primary: {
        ...mock.primary,
        call_to_action: null,
      },
    }}
    linkResolver={linkResolver}
  />
)

export const NoImage = () => (
  <AlternateGrid
    slice={{
      ...mock,
      primary: {
        ...mock.primary,
        optional_image: null,
        call_to_action: null,
      },
    }}
    linkResolver={linkResolver}
  />
)

export const WithCustomTheme = () => {
  const customTheme = {
    ...theme,
    container: {
      ...theme.container,
      slice: {
        background: '#F7F7F7',
      },
      eyebrow: {
        color: 'tomato',
      },
      item: {
        background: '#FFF',
        border: '1px solid #111',
        padding: '12px',
      },
    },
  }
  return (
    <ThemeProvider theme={customTheme}>
      <AlternateGrid
        slice={{
          ...mock,
          primary: {
            ...mock.primary,
            image_side: 'right',
            call_to_action: null,
          },
        }}
        linkResolver={linkResolver}
      />
    </ThemeProvider>
  )
}

export const WithCustomSpans = () => {
  const customTheme = {
    ...theme,
    container: {
      ...theme.container,
      grid: {
        spans: '15% 85%',
      },
    },
  }
  return (
    <ThemeProvider theme={customTheme}>
      <AlternateGrid
        slice={{
          ...mock,
          primary: {
            ...mock.primary,
            call_to_action: null,
          },
        }}
        linkResolver={linkResolver}
      />
    </ThemeProvider>
  )
}

export const WithButtons = () => (
  <AlternateGrid
    slice={{
      ...mock,
      items: mock.items.map((e) => ({ ...e, optional_icon: null })),
      primary: {
        ...mock.primary,
      },
    }}
    linkResolver={linkResolver}
  />
)

export const WithIconsAndButtons = () => (
  <AlternateGrid slice={mock} linkResolver={linkResolver} />
)
