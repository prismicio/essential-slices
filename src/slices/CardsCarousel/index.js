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
          {primary.eyebrow_headline && (
            <Eyebrow>
              <RichText render={primary.eyebrow_headline} />
            </Eyebrow>
          )}
          <RichText render={primary.title} />
        </Box>
        {primary.description && (
          <Desc sx={{ mb: 'large' }}>
            <RichText render={primary.description} />
          </Desc>
        )}
        <Box sx={{ width: 'full', maxWidth: '100vw' }}>
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
              <Box key={uuid()} sx={{ px: [null, 'small'] }}>
                <Card key={item.toString()}>
                  <Card.Image image={item.image} />
                  <Card.Content>
                    <Box as="h3" sx={{ fontSize: 'base', mb: 'small' }}>
                      {RichText.asText(item.title)}
                    </Box>
                    <Box sx={{ fontWeight: 'lean' }}>
                      <RichText render={item.content} />
                    </Box>
                  </Card.Content>
                </Card>
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
