import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'theme-ui'

const Desc = ({ children, ...props }) => {
  return (
    <Box __themeKey="container" variant="description" {...props}>
      {children}
    </Box>
  )
}

Desc.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Desc
