import React from 'react'
import {
  array,
  func,
  shape,
  elementType
} from 'prop-types'

import { RichText } from 'prismic-reactjs'
import { Button } from '../../components'

const CallToAction = ({
  Wrapper = 'section',
  slice: { primary },

  linkResolver, // linkResolver is pased by SliceZone
}) => {
  return (
    <Wrapper>
      <RichText render={primary.title} />
      {
        primary.paragraph &&
          <RichText render={primary.paragraph} />
      }
      <Button
        variant='primary'
        link={primary.button_link}
        label={primary.button_label}
        resolver={ linkResolver}
      />
    </Wrapper>
  )
}

CallToAction.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired,
    }).isRequired,
  }).isRequired,
  linkResolver: func,
  LinkComponent: elementType
};

export default CallToAction