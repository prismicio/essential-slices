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
      mb: ['hPadding2d', null, 'hPadding'],
    },
    icon: {
      width: 'full',
      maxWidth: '120px',
      mb: 'cMargin',
      mx: 'auto',
    },
  }

  return (
    <Slice sx={{ textAlign: 'center' }}>
      <Wrap>
        <Box as="header" __css={styles.header}>
          {primary.icon_image && (
            <Box
              as="img"
              alt={primary.icon_image.alt}
              src={primary.icon_image.url}
              __css={styles.icon}
            />
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
