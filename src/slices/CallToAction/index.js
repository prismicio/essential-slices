import React from 'react'
import {
  array,
  func,
  shape,
  elementType
} from 'prop-types'

import { RichText } from 'prismic-reactjs'

import { handleLinkProps as defaultHandleLinkProps } from '../../utils/handleLinkProps'

const CallToAction = ({
  Wrapper = 'section',
  slice: { primary },
  
  linkResolver, // linkResolver is pased by SliceZone
  LinkComponent = 'a',
  handleLinkProps = defaultHandleLinkProps
}) => {
  return (
    <Wrapper>
      <RichText render={primary.title} />
      {
        primary.paragraph &&
          <RichText render={primary.paragraph} />
      }
      <LinkComponent
        {...handleLinkProps(
          primary.button_link,
          primary.button_label,
          linkResolver
        )}
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