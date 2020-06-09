import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'theme-ui'
import { RichText } from 'prismic-reactjs'
import uuid from 'react-uuid'

import { Card, Desc, Eyebrow, Slider, Slice, Wrap } from '../../components'

const TestimonialsSlider = ({ slice }) => {
  const { primary, items } = slice

  const settings = {
    dots: true,
    dotsWithLabel: true,
    arrows: true,
    draggable: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

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
          <Desc mb="large">
            <RichText render={primary.description} />
          </Desc>
        )}
        <Box __css={{ width: 'full', maxWidth: '840px', m: '0 auto' }}>
          <Slider {...settings}>
            {items.map((item) => (
              <Box key={uuid()} px={[null, 'small']}>
                <Card
                  key={item.toString()}
                  as="blockquote"
                  sx={{ py: ['large', null, null, 'xlarge'], mb: 'small' }}
                >
                  <Card.Image image={item.image} sx={{ width: 150 }} />
                  <Card.Content>
                    <Box
                      sx={{
                        fontSize: 'lg',
                        fontWeight: 'lean',
                        maxWidth: '50ch',
                        mx: 'auto',
                        mb: ['small', null, null, 'medium'],
                      }}
                    >
                      <RichText render={item.testimonial} />
                    </Box>
                  </Card.Content>
                  <Card.Footer>
                    <Box
                      as="span"
                      __css={{
                        fontSize: 'kicker',
                        fontWeight: 'heading',
                        mb: 'xsmall',
                        display: 'block',
                      }}
                    >
                      {item.person}
                    </Box>
                    <Box as="span" __css={{ fontSize: 'tiny' }}>
                      {item.title}
                    </Box>
                  </Card.Footer>
                </Card>
              </Box>
            ))}
          </Slider>
        </Box>
      </Wrap>
    </Slice>
  )
}

TestimonialsSlider.propTypes = {
  slice: PropTypes.shape({
    primary: PropTypes.shape({
      eyebrow_headline: PropTypes.array,
      title: PropTypes.array,
      description: PropTypes.array,
    }).isRequired,
    items: PropTypes.array.isRequired,
  }).isRequired,
}

export default TestimonialsSlider
