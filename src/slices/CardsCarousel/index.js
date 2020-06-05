/* eslint-disable react/prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'theme-ui'
import { RichText } from 'prismic-reactjs'

import { Eyebrow, Desc, Slider, Slice, Wrap } from '../../components'

const CardsCarousel = ({ slice }) => {
  const { primary, items } = slice
  return (
    <Slice>
      <Wrap sx={{ textAlign: ['left', null, 'center'] }}>
        <Box as="header">
          <Eyebrow>
            <RichText render={primary.eyebrow_headline} />
          </Eyebrow>
          <RichText render={primary.title} />
        </Box>
        <Desc>
          <RichText render={primary.description} />
        </Desc>
        <Box __css={{ width: 'full', maxWidth: '100vw', mt: '4rem' }}>
          <Slider
            infinite={false}
            speed="500"
            slidesToShow="4"
            slidesToScroll="1"
            responsive={[
              {
                breakpoint: 1400,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  infinite: false,
                },
              },
              {
                breakpoint: 1300,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: false,
                },
              },
              {
                breakpoint: 960,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  infinite: false,
                },
              },
              {
                breakpoint: 560,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: false,
                },
              },
            ]}
          >
            {items &&
              items.map((item) => (
                <div key={item.toString()}>
                  <Box
                    variant="secondary"
                    __themeKey="background"
                    __css={{
                      borderRadius: 'card',
                      px: '25px',
                      py: '40px',
                      textAlign: 'center',
                      mx: '.7rem',
                    }}
                  >
                    <Box
                      as="img"
                      __css={{ m: '0 auto', maxWidth: 'full' }}
                      src={item.image.url}
                      alt={item.image.alt}
                      width={item.image.dimensions.width}
                    />
                    <div>
                      <Box as="h3" __css={{ fontSize: 'base', mt: '2.5rem' }}>
                        {RichText.asText(item.title)}
                      </Box>
                      <RichText render={item.content} />
                    </div>
                  </Box>
                </div>
              ))}
          </Slider>
        </Box>
      </Wrap>
    </Slice>
  )
}

CardsCarousel.propTypes = {
  slice: PropTypes.shape({
    primary: PropTypes.shape({
      eyebrow_headline: PropTypes.array,
      title: PropTypes.array,
      description: PropTypes.array,
    }).isRequired,
    items: PropTypes.array.isRequired,
  }).isRequired,
}

export default CardsCarousel
