import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'theme-ui'

const Title = ({ children, ...props }) => {
  return (
    <Box
      __themeKey="container"
      variant="title"
      {...props}
    >
      {children}
    </Box>
  )
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Title
