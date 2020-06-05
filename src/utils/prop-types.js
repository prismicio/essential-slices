import PropTypes from 'prop-types'

export const structuredTextPropTypes = PropTypes.arrayOf(
  PropTypes.shape({
    type: PropTypes.string,
    text: PropTypes.string,
    spans: PropTypes.array,
  })
)

export const imagePropTypes = PropTypes.shape({
  dimensions: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  alt: PropTypes.string,
  copyright: PropTypes.string,
  url: PropTypes.string,
})
