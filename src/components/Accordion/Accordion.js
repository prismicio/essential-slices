import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Box } from 'theme-ui'
import AccordionItem from './AccordionItem'

const Accordion = ({ slice }) => {
  const [active, setActive] = useState()
  const { items } = slice

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
              mb: '0',
            }}
          />
        )
      })}
    </Box>
  )
}

Accordion.propTypes = {
  slice: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
}

export default Accordion
