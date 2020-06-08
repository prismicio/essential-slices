import React from 'react'
import PropTypes from 'prop-types'
import { RichText } from 'prismic-reactjs'
import uuid from 'react-uuid'
import { Box } from 'theme-ui'

import { Desc, Eyebrow, Slice, Slider, Wrap } from '../../components'
import { structuredTextPropTypes } from '../../utils/prop-types'

const ImagesSlider = ({ slice }) => {
  const { items, primary } = slice

  const settings = {
    dots: true,
    dotsWithLabel: true,
    arrows: false,
    draggable: false,

    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Slice sx={{ textAlign: ['left', 'center'] }}>
      <Wrap>
        <Box mb="large">
          <Box as="header">
            {primary.eyebrow_headline && (
              <Eyebrow>
                <RichText render={primary.eyebrow_headline} />
              </Eyebrow>
            )}
            <RichText render={primary.title} />
          </Box>

          {primary.description && (
            <Desc>
              <RichText render={primary.description} />
            </Desc>
          )}
        </Box>

        <Box
          __css={{
            width: 'full',
            maxWidth: '100vw',
          }}
        >
          <Slider {...settings}>
            {items.map((item) => (
              <Box key={uuid()}>
                <Box
                  as="figure"
                  __css={{
                    img: {
                      maxWidth: '840px',
                      width: 'full',
                    },
                  }}
                >
                  <Box
                    as="img"
                    src={item.image.url}
                    alt={item.image.alt}
                    width={item.image.dimensions.width}
                    mx="auto"
                    mb="medium"
                  />
                  {item.description && (
                    <Desc>
                      <fig-caption>
                        <RichText render={item.description} />
                      </fig-caption>
                    </Desc>
                  )}
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>
      </Wrap>
    </Slice>
  )
}

ImagesSlider.propTypes = {
  slice: PropTypes.shape({
    primary: PropTypes.shape({
      eyebrow_headline: structuredTextPropTypes,
      title: structuredTextPropTypes,
      description: structuredTextPropTypes,
    }).isRequired,
    items: PropTypes.array.isRequired,
  }).isRequired,
}

export default ImagesSlider
