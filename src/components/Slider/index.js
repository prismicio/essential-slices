/* eslint-disable react/prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'theme-ui'
import SlickSlider from 'react-slick'
import './slick.css'

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
  top: ['110%', null, null, '50%'],
  transform: 'translate(0, -50%)',
  width: '2.75rem',
}

const NextArrow = (props) => {
  const { onClick } = props

  return (
    <Box
      as="button"
      type="button"
      __themeKey="buttons"
      variant="arrow"
      onClick={onClick}
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

const PrevArrow = (props) => {
  const { onClick } = props
  return (
    <Box
      as="button"
      type="button"
      __themeKey="buttons"
      variant="arrow"
      onClick={onClick}
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
    <Box __css={dotsStyles} __themeKey="slider.dots">
      <ul>{dots}</ul>
    </Box>
  )
}

const Slider = ({ children, speed, draggable, ...props }) => {
  return (
    <SlickSlider
      appendDots={AppendDots}
      draggable={draggable}
      nextArrow={<NextArrow />}
      prevArrow={<PrevArrow />}
      speed={speed}
      {...props}
    >
      {children}
    </SlickSlider>
  )
}

Slider.defaultProps = {
  speed: 500,
  draggable: false,
}

Slider.propTypes = {
  children: PropTypes.node.isRequired,
  draggable: PropTypes.bool,
  speed: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default Slider
