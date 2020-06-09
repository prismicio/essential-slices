import React from 'react'
import { func, shape } from 'prop-types'

import { Slice } from '../../components'

// Remove next line when you start developing
/* eslint-disable no-unused-vars */

const VideoHighlights = ({
  slice,
  linkResolver, // linkResolver is pased by SliceZone
}) => {
  return <Slice sx={{ textAlign: 'center' }}>VideoHighlights</Slice>
}

VideoHighlights.propTypes = {
  slice: shape({
    /* TODO */
  }).isRequired,
  linkResolver: func,
}

VideoHighlights.defaultProps = {
  linkResolver: () => {
    return '/404'
  },
}

export default VideoHighlights
