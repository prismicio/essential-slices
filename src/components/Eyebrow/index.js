import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'theme-ui'

const Eyebrow = ({ children }) => {
  return (
    <Box
      __themeKey="container"
      variant="eyebrow"
      __css={{
        fontSize: 'kicker',
        lineHeight: 'button',
        mb: '.65rem',
        fontWeight: 'normal',
      }}
    >
      {children}
    </Box>
  )
}

Eyebrow.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Eyebrow
