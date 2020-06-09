import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'theme-ui'

const Card = ({ children, ...props }) => {
  return (
    <Box
      variant="default"
      {...props}
      __css={{
        borderRadius: 'card',
        px: 'small',
        py: 'medium',
        textAlign: 'center',
      }}
      __themeKey="cards"
    >
      {children}
    </Box>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Card
