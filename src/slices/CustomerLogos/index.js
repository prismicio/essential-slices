import React from 'react'
import PropTypes from 'prop-types'
import { RichText } from 'prismic-reactjs'
import { Box } from 'theme-ui'
import uuid from 'react-uuid'
import { Slice, Wrap } from '../../components'

const CustomerLogos = ({ slice }) => {
  const { items, primary } = slice
  return (
    <Slice sx={{ backgroundColor: 'secondary', textAlign: 'center' }}>
      <Wrap>
        <Box color="primary">
          <RichText render={primary.eyebrow_headline} />
        </Box>
        <Box>
          <Box
            as="ul"
            __css={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gridColumnGap: 'hPadding',
              gridRowGap: 'vMargin',
              alignItems: 'center',
              listStyleType: 'none',
              mx: 0,
              my: 'vMargin',
              p: 0,
            }}
          >
            {items.map((item) => (
              <Box as="li" key={uuid()}>
                <Box
                  as="img"
                  __css={{ m: '0 auto' }}
                  src={item.logo.url}
                  alt={item.logo.alt}
                  width={item.logo.dimensions.width}
                />
              </Box>
            ))}
          </Box>

          <Box as="a" href={primary.call_to_action_link.url}>
            <RichText render={primary.call_to_action} />
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
}

export default CustomerLogos
