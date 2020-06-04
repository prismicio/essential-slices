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

      img: {
        width: '100%',
      },
    },
  }

  return (
    <Slice sx={{ textAlign: 'center' }}>
      <Wrap>
        <Box as="header" sx={styles.header}>
          {primary.icon_image && (
            <Box __css={styles.icon}>
              <img src={primary.icon_image.url} alt={primary.icon_image.alt} />
            </Box>
          )}
          <RichText render={primary.title} />
        </Box>
        <Desc>
          {primary.paragraph && <RichText render={primary.paragraph} />}
        </Desc>
        <Button
          variant="primary"
          link={primary.button_link}
          label={primary.button_label}
          resolver={linkResolver}
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
