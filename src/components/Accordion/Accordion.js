import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Box } from 'theme-ui'
import AccordionItem from './AccordionItem'

const Accordion = ({ items }) => {
  const [active, setActive] = useState()

  return (
    <Box>
      {items.map(({ text, title }, i) => {
        return (
          <AccordionItem
            active={active === i}
            title={title}
            text={text}
            onClick={() => {
              setActive(active === i ? null : i)
            }}
            sx={{
              mb: 'small',
            }}
          />
        )
      })}
    </Box>
  )
}

Accordion.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

export default Accordion
