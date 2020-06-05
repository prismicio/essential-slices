import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'theme-ui'

const Desc = ({ children, ...props }) => {
  return (
    <Box
      __css={{
        mx: [null, null, 'auto'],
        mb: 'hPadding',
        maxWidth: '38rem',
        fontSize: ['kicker', null, null, 'lg'],
        fontWeight: 'lean',
        p: {
          lineHeight: 'desc',
        },
        'p:last-of-type': {
          mb: '0',
        },
      }}
      {...props}
    >
      {children}
    </Box>
  )
}

Desc.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Desc
