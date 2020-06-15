import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'theme-ui'
import SlickSlider from 'react-slick'

import './slick.css'
import DotsWithLabel from './DotsWithLabel'
import Icon from '../Icon'

const arrowStyles = {
  cursor: 'pointer',
  borderRadius: '50%',
  display: 'block',
  fontSize: 0,
  height: '2.75rem',
  lineHeight: 0,
  outline: 'none',
  padding: '0.5rem',
  position: 'absolute',
  bottom: ['-70px', null, null, '50%'],
  transform: [null, null, null, 'translate(0, 50%)'],
  width: '2.75rem',
}

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
  const dotsStyles = {
    'button::before': {
      bg: 'dark',
    },

    'button:focus': {
      borderColor: 'primaryDark',
    },

    '.slick-active button::before': {
      bg: 'primaryDark',
    },
  }

  return (
    <Box __css={dotsStyles} __themeKey="slider.appendDots">
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
