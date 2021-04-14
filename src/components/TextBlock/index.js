import React from 'react'
import PropTypes from 'prop-types'
import { RichText } from 'prismic-reactjs'
import { Box } from 'theme-ui'
import { structuredTextPropTypes } from '../../utils/prop-types'

const TextBlock = ({ title, description, icon, linkResolver, ...props }) => {
  return (
    <Box
      __css={{ textAlign: 'left', fontSize: 'base' }}
      __themeKey="container"
      variant="item"
      {...props}
    >
      {icon && <Box as="img" src={icon.url} __css={{ maxHeight: '48px' }} />}
      <RichText render={title} linkResolver={linkResolver} />
      <RichText render={description} linkResolver={linkResolver} />
    </Box>
  )
}

TextBlock.propTypes = {
  title: structuredTextPropTypes,
  description: structuredTextPropTypes,
  icon: PropTypes.shape({
    url: PropTypes.string,
  }),
  linkResolver: PropTypes.func,
}

TextBlock.defaultProps = {
  title: '',
  description: '',
  icon: null,
  linkResolver: () => '/404',
}

export default TextBlock
