import React, { Children, cloneElement, useState } from 'react'
import PropTypes from 'prop-types'
import { Box } from 'theme-ui'

const Accordion = ({ children }) => {
  const [active, setActive] = useState()

  const items = Children.map(children, (item, index) => {
    if (!item) return undefined

    const isActive = index === active

    return cloneElement(item, {
      active: isActive,
      onClick: () => setActive(index === active ? null : index),
    })
  })
  return <Box>{items}</Box>
}

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Accordion
