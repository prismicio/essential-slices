import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'theme-ui'

const Video = ({ source, ...props }) => {
  const { html } = source
  return (
    <Box>
      <Box
        __css={{
          height: 0,
          width: '100%',
          paddingTop: '56.2%',
          position: 'relative',
          iframe: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          },
        }}
        __themeKey="container"
        variant="video"
        {...props}
      >
        <Box
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />
      </Box>
    </Box>
  )
}

Video.propTypes = {
  source: PropTypes.shape({
    html: PropTypes.string,
  }).isRequired,
}

export default Video
