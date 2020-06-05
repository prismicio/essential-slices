import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'theme-ui'
import { RichText } from 'prismic-reactjs'
import uuid from 'react-uuid'

import { Card, Desc, Eyebrow, Slider, Slice, Wrap } from '../../components'

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
        <Desc mb="large">
          <RichText render={primary.description} />
        </Desc>
        <Box __css={{ width: 'full', maxWidth: '100vw' }}>
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
            {items.map((item) => (
              <Box key={uuid()} px={[null, 'small']}>
                <Card key={item.toString()} {...item} />
              </Box>
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
