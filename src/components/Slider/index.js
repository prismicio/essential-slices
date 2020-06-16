import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'theme-ui'
import SlickSlider from 'react-slick'

import { arrowStyles, dotContainerStyles, slickStyles } from './styles'
import DotsWithLabel from './DotsWithLabel'

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
      <svg
        width="8"
        height="12"
        viewBox="0 0 8 12"
        aria-hidden="true"
        focusable="false"
      >
        <g fill="none" fillRule="evenodd">
          <path d="M-8-6h24v24H-8z" />
          <path
            fill="currentColor"
            fillRule="nonzero"
            d="M.59 10.59L5.17 6 .59 1.41 2 0l6 6-6 6z"
          />
        </g>
      </svg>
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
      <svg
        width="8"
        height="12"
        viewBox="0 0 8 12"
        aria-hidden="true"
        focusable="false"
      >
        <g fill="none" fillRule="evenodd">
          <path d="M-8-6h24v24H-8z" />
          <path
            fill="currentColor"
            fillRule="nonzero"
            d="M7.41 10.59L2.83 6l4.58-4.59L6 0 0 6l6 6z"
          />
        </g>
      </svg>
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
    <Box sx={slickStyles}>
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
