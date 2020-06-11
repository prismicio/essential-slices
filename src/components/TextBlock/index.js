import React from 'react'
import PropTypes from 'prop-types'
import { RichText } from 'prismic-reactjs'
import { Box } from 'theme-ui'
import { structuredTextPropTypes } from '../../utils/prop-types'

const TextBlock = ({ title, description, icon, ...props }) => {
  return (
    <Box
      __css={{ textAlign: 'left', fontSize: 'base' }}
      __themeKey="container"
      variant="item"
      {...props}
    >
      {icon && <Box as="img" src={icon.url} __css={{ maxHeight: '48px' }} />}
      <RichText render={title} />
      <RichText render={description} />
    </Box>
  )
}

TextBlock.propTypes = {
  title: structuredTextPropTypes,
  description: structuredTextPropTypes,
  icon: PropTypes.shape({
    url: PropTypes.string,
  }),
}

TextBlock.defaultProps = {
  title: '',
  description: '',
  icon: null,
}

export default TextBlock
