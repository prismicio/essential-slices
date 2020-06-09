import React from 'react'
import { func, shape } from 'prop-types'

import { Slice } from '../../components'

// Remove next line when you start developing
/* eslint-disable no-unused-vars */

const FeatureGrid = ({
  slice,
  linkResolver, // linkResolver is pased by SliceZone
}) => {
  return <Slice sx={{ textAlign: 'center' }}>FeatureGrid</Slice>
}

FeatureGrid.propTypes = {
  slice: shape({
    /* TODO */
  }).isRequired,
  linkResolver: func,
}

FeatureGrid.defaultProps = {
  linkResolver: () => {
    return '/404'
  },
}

export default FeatureGrid
