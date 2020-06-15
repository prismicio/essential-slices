import React from 'react'
import { Box } from 'theme-ui'
import Slider from '.'

export default {
  title: 'Components/Slider',
  component: Slider,
}

const CreateBoxes = (n) => {
  const items = []

  for (let i = 0; i < n; i += 1) {
    items.push(
      <Box sx={{ p: 'small' }}>
        <Box
          sx={{
            backgroundColor: 'secondary',
            px: ['large', 'medium'],
            py: 'large',
            fontSize: 'large',
          }}
        >
          {`Content #${i + 1}`}
        </Box>
      </Box>
    )
  }

  return items
}

export const Default = () => (
  <Box sx={{ width: 'full', maxWidth: '50rem', mx: 'auto' }}>
    <Slider infinite={false} speed={500} slidesToShow={1} slidesToScroll={1}>
      {CreateBoxes(5)}
    </Slider>
  </Box>
)

export const WithDots = () => (
  <Box sx={{ width: 'full', maxWidth: '50rem', mx: 'auto', mt: 'medium' }}>
    <Slider
      dots
      dotsWithLabel
      arrows
      draggable={false}
      infinite={false}
      slidesToShow={1}
      slidesToScroll={1}
    >
      {CreateBoxes(5)}
    </Slider>
  </Box>
)

export const Responsive = () => (
  <Box sx={{ width: 'full', maxWidth: '50rem', mx: 'auto', mt: 'medium' }}>
    <Slider
      infinite={false}
      speed={500}
      slidesToShow={4}
      slidesToScroll={1}
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
      {CreateBoxes(10)}
    </Slider>
  </Box>
)
