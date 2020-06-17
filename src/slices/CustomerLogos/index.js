import React from 'react'
import PropTypes from 'prop-types'
import { RichText, Link } from 'prismic-reactjs'
import { Box } from 'theme-ui'
import uuid from 'react-uuid'
import { Grid, Slice, Wrap } from '../../components'

const CustomerLogos = ({ slice, linkResolver }) => {
  const { items, primary } = slice
  return (
    <Slice sx={{ backgroundColor: 'secondary', textAlign: 'center' }}>
      <Wrap>
        <Box sx={{ color: 'primary' }}>
          <RichText
            render={primary.eyebrow_headline}
            linkResolver={linkResolver}
          />
        </Box>
        <Box>
          <Grid rowGap="vMargin" columnGap="hPadding">
            {items.map((item) => (
              <Box key={uuid()}>
                <Box
                  as="img"
                  sx={{ mx: 'auto', display: 'block' }}
                  src={item.logo.url}
                  alt={item.logo.alt}
                  width={item.logo.dimensions.width}
                />
              </Box>
            ))}
          </Grid>

          <Box
            as="a"
            href={Link.url(primary.call_to_action_link, linkResolver)}
          >
            <RichText
              render={primary.call_to_action}
              linkResolver={linkResolver}
            />
          </Box>
        </Box>
      </Wrap>
    </Slice>
  )
}

CustomerLogos.propTypes = {
  slice: PropTypes.shape({
    primary: PropTypes.shape({
      eyebrow_headline: PropTypes.array,
      call_to_action: PropTypes.array,
      call_to_action_link: PropTypes.shape({
        url: PropTypes.string,
      }),
    }).isRequired,
    items: PropTypes.array.isRequired,
  }).isRequired,
  linkResolver: PropTypes.func,
}

CustomerLogos.defaultProps = {
  linkResolver: () => '/404',
}

export default CustomerLogos
