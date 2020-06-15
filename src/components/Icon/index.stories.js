import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'theme-ui'
import Icon from '.'

export default {
  title: 'Components/Icon',
  component: Icon,
}
const styles = {
  span: {
    width: '1em',
    height: '1em',
  },
  '.feature:before': {
    content: `url('${Icon.encode('feature')}')`,
  },
  '.not-included:before': {
    content: `url('${Icon.encode('notIncluded')}')`,
  },
  '.play:before': {
    content: `url('${Icon.encode('play')}')`,
  },
  '.playBlack:before': {
    content: `url('${Icon.encode('playBlack')}')`,
  },
}

const CreateBox = ({ name, children }) => (
  <Box sx={{ my: 'small' }}>
    {children}
    <br />
    {name}
  </Box>
)

CreateBox.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export const Default = () => (
  <Box
    sx={{
      width: 'full',
      maxWidth: '50rem',
      mx: 'auto',
      textAlign: 'center',
      ...styles,
    }}
  >
    <CreateBox name="featureIcon">
      <Box as="span" className="feature" />
    </CreateBox>
    <CreateBox name="notIncluded">
      <Box as="span" className="not-included" />
    </CreateBox>
    <CreateBox name="play">
      <Box as="span" className="play" />
    </CreateBox>
    <CreateBox name="playBlack">
      <Box as="span" className="playBlack" />
    </CreateBox>
    <CreateBox name="arrowDown">
      <Icon name="arrowDown" />
    </CreateBox>
    <CreateBox name="arrowLeft">
      <Icon sx={{ color: 'red' }} name="arrowLeft" />
    </CreateBox>
    <CreateBox name="arrowRight">
      <Icon sx={{ color: 'primary' }} name="arrowRight" />
    </CreateBox>
  </Box>
)
