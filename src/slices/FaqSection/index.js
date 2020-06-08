import React from 'react'
import PropTypes from 'prop-types'
import { RichText } from 'prismic-reactjs'
import { Box } from 'theme-ui'
import { Desc, Eyebrow, Grid, Head, Slice, Wrap } from '../../components'
import Accordion from '../../components/Accordion'

const FaqSection = ({ slice }) => {
  const { items, primary } = slice
  return (
    <Slice sx={{ textAlign: 'center' }}>
      <Wrap>
        <Head>
          <Box as="header">
            {primary.eyebrow_headline && (
              <Eyebrow>
                <RichText render={primary.eyebrow_headline} />
              </Eyebrow>
            )}
            {primary.title && (
              <Box _themeKey="container" variant="title">
                <RichText render={primary.title} />
              </Box>
            )}
            {primary.description && (
              <Desc mb="large">
                <RichText render={primary.description} />
              </Desc>
            )}
          </Box>
          <Grid columnGap="medium">
            {primary.optional_image && (
              <Box as="img" src={primary.optional_image.url} />
            )}
            <Accordion items={items} />
          </Grid>
        </Head>
      </Wrap>
    </Slice>
  )
}

FaqSection.propTypes = {
  slice: PropTypes.shape({
    primary: PropTypes.shape({
      title: PropTypes.arrayOf(
        PropTypes.shape({
          type: PropTypes.string,
          text: PropTypes.string,
          spans: PropTypes.arrayOf(PropTypes.shape({})),
        })
      ),
      description: PropTypes.arrayOf(
        PropTypes.shape({
          type: PropTypes.string,
          text: PropTypes.string,
          spans: PropTypes.arrayOf(PropTypes.shape({})),
        })
      ),
      eyebrow_headline: PropTypes.array,
      call_to_action: PropTypes.array,
      call_to_action_link: PropTypes.shape({
        url: PropTypes.string,
      }),
      optional_image: PropTypes.shape({
        url: PropTypes.string,
      }),
    }).isRequired,
    items: PropTypes.array.isRequired,
  }).isRequired,
}

export default FaqSection
