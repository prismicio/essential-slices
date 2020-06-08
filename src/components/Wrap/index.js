import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'theme-ui'

const Wrap = ({ children, ...props }) => {
  return (
    <Box
      __themeKey="container"
      variant="wrapper"
      __css={{
        mx: 'auto',
        maxWidth: [null, null, '80%', '75%'],
      }}
      {...props}
    >
      {children}
    </Box>
  )
}

Wrap.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Wrap
