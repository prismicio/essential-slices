/* eslint-disable camelcase */
import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'theme-ui'
import { RichText } from 'prismic-reactjs'
import uuid from 'react-uuid'

import { Button, Wrap, Desc, Head, Slice } from '../../components'

import { table, tableOption, features } from './styles'

const featuresSerializer = (type, elementProps, _, children) => {
  if (type === 'list-item') {
    const isNotIncluded =
      elementProps.spans &&
      elementProps.spans.find((e) => e && e.data.label === 'not-included')
    const className = `ps-pricing-table__option__feature${
      isNotIncluded ? ' not-included' : ''
    }`
    return `<li class="${className}">${elementProps.text}</li>`
  }
  if (type === 'group-list-item') {
    return (
      <Box
        dangerouslySetInnerHTML={{
          __html: `
        <ul role="list" class="ps-pricing-table__option__features" aria-label>
          ${children.join('')}
        </ul>`,
        }}
      />
    )
  }
  return null
}

const PricingTable = ({
  slice: { primary, items },
  linkResolver, // linkResolver is passed by SliceZone
}) => {
  const { eyebrow_headline, title, description } = primary

  return (
    <Slice>
      <Wrap>
        <Head>
          <Box as="header">
            {eyebrow_headline && (
              <Box
                sx={{
                  mb: '.6em',
                  color: 'primary',
                  fontSize: 'lg',
                  fontWeight: 'normal',
                }}
              >
                {RichText.asText(eyebrow_headline)}
              </Box>
            )}
            <RichText render={title} />
          </Box>
          {description && (
            <Desc>
              <RichText render={description} />
            </Desc>
          )}
        </Head>
        <Box sx={{ mt: 'vMargin2x' }}>
          <Box as="ol" role="list" ariaLabel sx={table}>
            {items &&
              items.map((item) => (
                <Box as="li" key={uuid()} sx={tableOption}>
                  <Box as="article">
                    <Box as="header">
                      <h3>{RichText.asText(item.plan_title)}</h3>
                      <Box
                        sx={{
                          color: 'textGrey',
                        }}
                      >
                        {RichText.asText(item.price_option)}
                      </Box>
                    </Box>
                    <Box sx={features}>
                      <RichText
                        htmlSerializer={featuresSerializer}
                        render={item.features}
                      />
                    </Box>
                    {item.call_to_action &&
                      item.call_to_action_text &&
                      item.call_to_action_text.length && (
                        <Box>
                          <Button
                            variant="secondary"
                            link={item.call_to_action}
                            label={RichText.asText(item.call_to_action_text)}
                            resolver={linkResolver}
                            sx={{
                              display: 'block',
                            }}
                          />
                        </Box>
                      )}
                  </Box>
                </Box>
              ))}
          </Box>
        </Box>
      </Wrap>
    </Slice>
  )
}

PricingTable.propTypes = {
  slice: PropTypes.shape({
    primary: PropTypes.shape({
      eyebrow_headline: PropTypes.array,
      title: PropTypes.array,
      description: PropTypes.array,
    }),
    items: PropTypes.array,
  }),
  linkResolver: PropTypes.func,
}

PricingTable.defaultProps = {
  slice: {
    primary: {
      eyebrow_headline: null,
      title: null,
      description: null,
    },
    items: [],
  },
  linkResolver: null,
}

export default PricingTable
