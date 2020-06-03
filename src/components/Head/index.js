import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'theme-ui'

const Head = ({ children, ...props }) => {
  return (
    <Box
      __css={{
        mx: 'auto',
        textAlign: [null, null, 'center'],
      }}
      {...props}
    >
      {children}
    </Box>
  )
}

Head.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Head
