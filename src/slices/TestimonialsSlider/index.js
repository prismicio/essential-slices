import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'theme-ui'
import { RichText } from 'prismic-reactjs'
import uuid from 'react-uuid'

import { structuredTextPropTypes } from '../../utils/prop-types'
import { Card, Desc, Eyebrow, Slider, Slice, Wrap } from '../../components'

const TestimonialsSlider = ({ slice, linkResolver }) => {
  const { primary, items } = slice

  const settings = {
    dots: true,
    dotsWithLabel: true,
    dotsLabel: 'Testimonial',
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
              <RichText
                render={primary.eyebrow_headline}
                linkResolver={linkResolver}
              />
            </Eyebrow>
          )}
          <RichText render={primary.title} linkResolver={linkResolver} />
        </Box>
        {primary.description && (
          <Desc sx={{ mb: 'large' }}>
            <RichText
              render={primary.description}
              linkResolver={linkResolver}
            />
          </Desc>
        )}
        <Box sx={{ width: 'full', maxWidth: '840px', m: '0 auto' }}>
          <Slider {...settings}>
            {items.map((item) => (
              <Box key={uuid()} sx={{ px: [null, 'small'] }}>
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
                      <RichText
                        render={item.testimonial}
                        linkResolver={linkResolver}
                      />
                    </Box>
                  </Card.Content>
                  <Card.Footer>
                    <Box
                      as="span"
                      sx={{
                        fontSize: 'kicker',
                        fontWeight: 'heading',
                        mb: 'xsmall',
                        display: 'block',
                      }}
                    >
                      {item.person}
                    </Box>
                    <Box as="span" sx={{ fontSize: 'tiny' }}>
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
      eyebrow_headline: structuredTextPropTypes,
      title: structuredTextPropTypes,
      description: structuredTextPropTypes,
    }).isRequired,
    items: PropTypes.array.isRequired,
  }).isRequired,
  linkResolver: PropTypes.func,
}

TestimonialsSlider.defaultProps = {
  linkResolver: () => '/404',
}

export default TestimonialsSlider
