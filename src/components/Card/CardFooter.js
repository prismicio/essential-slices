import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'theme-ui'

const CardFooter = ({ children, ...props }) => {
  return (
    <Box as="footer" {...props} __css={{ mt: 'small' }}>
      {children}
    </Box>
  )
}

CardFooter.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CardFooter
