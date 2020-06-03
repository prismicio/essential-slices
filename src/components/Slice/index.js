import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'theme-ui'

const Slice = ({ children, ...props }) => {
  return (
    <Box
      as="section"
      __css={{
        width: '100vw',
        position: 'relative',
        px: ['cPadding', null, 'hPadding'],
        py: 'vSpace',
      }}
      {...props}
    >
      {children}
    </Box>
  )
}

Slice.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Slice
