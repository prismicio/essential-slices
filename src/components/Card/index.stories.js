import React from 'react'
import { Box } from 'theme-ui'
import { RichText } from 'prismic-reactjs'

import Card from '.'
import { cardsCarousel, testimonialsSlider } from './mock.json'

export default {
  title: 'Components/Card',
  component: Card,
}

export const CardsCarousel = () => (
  <Box sx={{ maxWidth: '15rem', mx: 'auto', my: 'xlarge' }}>
    <Card>
      <Card.Image image={cardsCarousel.image} />
      <Card.Content>
        <Box as="h3" sx={{ fontSize: 'base', mb: 'small' }}>
          {RichText.asText(cardsCarousel.title)}
        </Box>
        <Box sx={{ fontWeight: 'lean' }}>
          <RichText render={cardsCarousel.content} />
        </Box>
      </Card.Content>
    </Card>
  </Box>
)

export const TestimonialsSlider = () => (
  <Box sx={{ width: 'full', maxWidth: '840px', m: '0 auto' }}>
    <Card
      as="blockquote"
      sx={{ py: ['large', null, null, 'xlarge'], mb: 'small' }}
    >
      <Card.Image image={testimonialsSlider.image} sx={{ width: 150 }} />
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
          <RichText render={testimonialsSlider.testimonial} />
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
          {testimonialsSlider.person}
        </Box>
        <Box as="span" sx={{ fontSize: 'tiny' }}>
          {testimonialsSlider.title}
        </Box>
      </Card.Footer>
    </Card>
  </Box>
)
