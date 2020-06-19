import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'theme-ui'
import SlickSlider from 'react-slick'

import { arrowStyles, dotContainerStyles, slickStyles } from './styles'
import DotsWithLabel from './DotsWithLabel'
import Icon from '../Icon'

const NextArrow = (props) => {
  const { onClick } = props

  return (
    <Box
      as="button"
      type="button"
      variant="arrow"
      onClick={onClick}
      __themeKey="slider"
      __css={{
        right: ['35%', null, null, '-52px'],
        ...arrowStyles,
      }}
      aria-label="Next"
    >
      <Icon name="arrowRight" />
    </Box>
  )
}

NextArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
}

const PrevArrow = (props) => {
  const { onClick } = props

  return (
    <Box
      as="button"
      type="button"
      variant="arrow"
      onClick={onClick}
      __themeKey="slider"
      __css={{
        left: ['35%', null, null, '-52px'],
        ...arrowStyles,
      }}
      aria-label="Previous"
    >
      <Icon name="arrowLeft" />
    </Box>
  )
}

PrevArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
}

const AppendDots = (dots) => {
  return (
    <Box __css={dotContainerStyles} __themeKey="slider.appendDots">
      <ul>{dots}</ul>
    </Box>
  )
}

const Slider = ({
  children,
  speed,
  draggable,
  dotsWithLabel,
  dotsLabel,
  ...props
}) => {
  const customPagingProp = dotsWithLabel
    ? { customPaging: (i) => DotsWithLabel(i, dotsLabel) }
    : {}

  return (
    <Box __css={slickStyles}>
      <SlickSlider
        appendDots={AppendDots}
        draggable={draggable}
        nextArrow={<NextArrow />}
        prevArrow={<PrevArrow />}
        speed={speed}
        {...customPagingProp}
        {...props}
      >
        {children}
      </SlickSlider>
    </Box>
  )
}

Slider.defaultProps = {
  speed: 500,
  dotsWithLabel: false,
  draggable: false,
  dotsLabel: 'Slide',
}

Slider.propTypes = {
  children: PropTypes.node.isRequired,
  dotsWithLabel: PropTypes.bool,
  draggable: PropTypes.bool,
  speed: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  dotsLabel: PropTypes.string,
}

export default Slider
