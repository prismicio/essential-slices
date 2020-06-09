import React from 'react'
import { func, shape } from 'prop-types'

import { Slice } from '../../components'

// Remove next line when you start developing
/* eslint-disable no-unused-vars */

const AlternateGrid = ({
  slice,
  linkResolver, // linkResolver is pased by SliceZone
}) => {
  return <Slice sx={{ textAlign: 'center' }}>AlternateGrid</Slice>
}

AlternateGrid.propTypes = {
  slice: shape({
    /* TODO */
  }).isRequired,
  linkResolver: func,
}

AlternateGrid.defaultProps = {
  linkResolver: () => {
    return '/404'
  },
}

export default AlternateGrid
