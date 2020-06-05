import React from 'react'
import { Box } from 'theme-ui'
import { RichText } from 'prismic-reactjs'

import { structuredTextPropTypes, imagePropTypes } from '../../utils/prop-types'

const Card = ({ image, title, content, ...props }) => {
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
      <Box
        as="img"
        __css={{ m: '0 auto', maxWidth: 'full', mb: 'medium' }}
        src={image.url}
        alt={image.alt}
        width={image.dimensions.width}
      />
      <div>
        <Box as="h3" __css={{ fontSize: 'base', mb: 'small' }}>
          {RichText.asText(title)}
        </Box>
        <RichText render={content} />
      </div>
    </Box>
  )
}

Card.defaultProps = {
  content: [],
  image: [],
}

Card.propTypes = {
  content: structuredTextPropTypes,
  image: imagePropTypes,
  title: structuredTextPropTypes.isRequired,
}

export default Card
