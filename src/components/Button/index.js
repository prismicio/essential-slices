import React from 'react'
import PropTypes from 'prop-types'
import { Link, RichText } from 'prismic-reactjs'
import { Box } from 'theme-ui'

function Button({ link, label, linkResolver, ...props }) {
  const buttonStyles = {
    p: '1em 3em',
    textAlign: 'center',
    width: 'auto',
    display: ['block', 'inline-block'],
    fontSize: 'tiny',
    lineHeight: 'button',
    textDecoration: 'none',
    cursor: 'pointer',
    borderRadius: 'button',
    border: 'none',
    transition: 'all 0.1s linear',
    '&:focus': {
      outline: '3px solid currentColor',
      outlineOffset: '3px',
    },
  }

  const elementType = link ? 'a' : 'button'
  const linkProps = link ? { href: Link.url(link, linkResolver) } : {}

  return (
    <Box
      as={elementType}
      variant="default"
      {...props}
      __themeKey="buttons"
      __css={buttonStyles}
      {...linkProps}
    >
      {typeof label === 'string' ? label : <RichText render={label} />}
    </Box>
  )
}

Button.defaultProps = {
  linkResolver: () => {
    return '/404'
  },
  link: null,
  label: null,
}

Button.propTypes = {
  link: PropTypes.shape({}),
  label: PropTypes.string,
  linkResolver: PropTypes.func,
}

export default Button
