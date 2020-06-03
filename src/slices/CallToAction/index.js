import React from 'react'
import { array, func, shape } from 'prop-types'

import { RichText } from 'prismic-reactjs'
import { Button, Wrap } from '../../components'

const CallToAction = ({
  slice: { primary },

  linkResolver, // linkResolver is pased by SliceZone
}) => {
  return (
    <Wrap>
      <RichText render={primary.title} />
      {primary.paragraph && <RichText render={primary.paragraph} />}
      <Button
        variant="primary"
        link={primary.button_link}
        label={primary.button_label}
        resolver={linkResolver}
      />
    </Wrap>
  )
}

CallToAction.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired,
    }).isRequired,
  }).isRequired,
  linkResolver: func,
}

CallToAction.defaultProps = {
  linkResolver: () => {
    return '/404'
  },
}

export default CallToAction
