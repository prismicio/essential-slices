import React from 'react'
import { Box } from 'theme-ui'

const DotsWithLabel = (index, dotsLabel) => {
  const dotStyles = {
    span: {
      opacity: 0,
      pointerEvents: 'none',
    },

    '&:hover span': {
      opacity: 1,
    },
  }

  const dotLabelStyles = {
    bottom: -35,
    bg: 'secondary',
    borderRadius: 4,
    fontWeight: 'lean',
    fontSize: 'base',
    transition: 'opacity 0.2s linear',
    padding: 'xsmall',
    position: 'absolute',
    transform: 'translateX(-50%)',
    width: 215,
    left: 20,

    '&::after': {
      borderLeft: '1rem solid transparent',
      borderRight: '1rem solid transparent',
      borderBottom: '1rem solid',
      borderBottomColor: 'secondary',
      content: '""',
      left: '50%',
      marginLeft: '-1rem',
      position: 'absolute',
      top: '-0.5rem',
      height: 0,
      width: 0,
    },
  }

  return (
    <Box
      as="button"
      variant="withLabel"
      __css={dotStyles}
      __themeKey="slider.dots"
    >
      <Box as="span" __css={dotLabelStyles}>{`${dotsLabel} ${index + 1}`}</Box>
    </Box>
  )
}

export default DotsWithLabel
