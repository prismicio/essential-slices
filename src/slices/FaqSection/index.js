import React from 'react'
import PropTypes from 'prop-types'
import { RichText } from 'prismic-reactjs'
import { Box } from 'theme-ui'
import {
  Accordion,
  Desc,
  Eyebrow,
  Grid,
  Head,
  Title,
  Slice,
  Wrap,
} from '../../components'
import { structuredTextPropTypes } from '../../utils/prop-types'

const FaqSection = ({ slice, linkResolver }) => {
  const { items, primary } = slice

  return (
    <Slice sx={{ textAlign: 'center' }}>
      <Wrap>
        <Head>
          <Box as="header">
            {primary.eyebrow_headline && (
              <Eyebrow>
                <RichText
                  render={primary.eyebrow_headline}
                  linkResolver={linkResolver}
                />
              </Eyebrow>
            )}
            {primary.title && (
              <Title>
                <RichText render={primary.title} linkResolver={linkResolver} />
              </Title>
            )}
            {primary.description && (
              <Desc sx={{ mb: 'large' }}>
                <RichText
                  render={primary.description}
                  linkResolver={linkResolver}
                />
              </Desc>
            )}
          </Box>
          <Grid columnGap="medium">
            {primary.optional_image && (
              <Box as="img" src={primary.optional_image.url} />
            )}
            <Accordion>
              {items.map(({ text, title }) => {
                return (
                  <Accordion.Item
                    title={title}
                    text={text}
                    linkResolver={linkResolver}
                    sx={{
                      mb: 'small',
                    }}
                  />
                )
              })}
            </Accordion>
          </Grid>
        </Head>
      </Wrap>
    </Slice>
  )
}

FaqSection.propTypes = {
  slice: PropTypes.shape({
    primary: PropTypes.shape({
      title: structuredTextPropTypes,
      description: structuredTextPropTypes,
      eyebrow_headline: structuredTextPropTypes,
      optional_image: PropTypes.shape({
        url: PropTypes.string,
      }),
    }).isRequired,
    items: PropTypes.array.isRequired,
  }).isRequired,
  linkResolver: PropTypes.func,
}

FaqSection.defaultProps = {
  linkResolver: () => '/404',
}

export default FaqSection
