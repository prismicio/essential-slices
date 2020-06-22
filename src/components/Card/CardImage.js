import React from 'react'
import { Box } from 'theme-ui'

import { imagePropTypes } from '../../utils/prop-types'

const CardImage = ({ image = {}, ...props }) => {
  const { url, alt, dimensions } = image
  return url ? (
    <Box
      as="img"
      __css={{ m: '0 auto', maxWidth: 'full', mb: 'medium' }}
      src={url}
      alt={alt}
      width={dimensions.width}
      {...props}
    />
  ) : null
}

CardImage.propTypes = {
  image: imagePropTypes.isRequired,
}

export default CardImage
