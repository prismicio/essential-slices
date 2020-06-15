import React from 'react'
import { array, func, shape } from 'prop-types'
import { RichText } from 'prismic-reactjs'
import { Box } from 'theme-ui'

import { Button, Wrap, Desc, Slice } from '../../components'

const CallToAction = ({
  slice: { primary },
  linkResolver, // linkResolver is pased by SliceZone
}) => {
  const styles = {
    header: {
      mb: ['hPaddingHalf', null, 'hPadding'],
    },
    icon: {
      mb: 'cMargin',
      mx: 'auto',
      img: {
        width: '120px',
      },
    },
  }

  return (
    <Slice sx={{ textAlign: 'center' }}>
      <Wrap>
        <Box as="header" sx={styles.header}>
          {primary.icon_image && (
            <Box sx={styles.icon}>
              <Box
                as="img"
                alt={primary.icon_image.alt}
                src={primary.icon_image.url}
              />
            </Box>
          )}
          <RichText render={primary.title} />
        </Box>

        {primary.paragraph && (
          <Desc>
            <RichText render={primary.paragraph} />
          </Desc>
        )}

        <Button
          label={primary.button_label}
          link={primary.button_link}
          resolver={linkResolver}
          variant="primary"
        />
      </Wrap>
    </Slice>
  )
}

CallToAction.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired,
    }).isRequired,
  }).isRequired,
  linkResolver: func,
}

CallToAction.defaultProps = {
  linkResolver: () => {
    return '/404'
  },
}

export default CallToAction
