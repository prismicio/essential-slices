import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'theme-ui'

const CardContent = ({ children, ...props }) => {
  return <Box {...props}>{children}</Box>
}

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CardContent
