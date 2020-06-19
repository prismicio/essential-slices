import React from 'react'
import PropTypes from 'prop-types'
import { RichText } from 'prismic-reactjs'
import { Box } from 'theme-ui'
import { Icon } from '..'

const AccordionItem = ({ active, title, text, onClick, ...props }) => {
  return (
    <Box {...props}>
      <Box>
        <Box data-accordion-heading>
          <Box
            as="button"
            aria-expanded={active}
            __css={{
              display: 'block',
              font: 'inherit',
              fontSize: 'inherit',
              fontWeight: '500',
              width: '100%',
              height: '100%',
              backgroundColor: 'secondary',
              textAlign: 'left',
              lineHeight: '1.2',
              padding: 'cPadding',
              paddingRight: '80px',
              position: 'relative',
              border: '1px solid transparent',
              transition: 'outline 0.1s linear',
              borderRadius: active ? '8px 8px 0 0' : '8px',
              cursor: 'pointer',
              ':focus': {
                outline: '3px solid currentColor',
                zIndex: '1', // to ensure the outline isn't cut off where it overlaps with the next item below
              },
              ':focus:not(:focus-visible)': {
                outline: 'none',
              },
              '.focus:not(.focus-visible)': {
                outline: 'none',
              },

              '*': {
                m: 0,
              },
            }}
            data-accordion-toggle
            onClick={onClick}
          >
            <RichText render={title} />
            <Box
              __css={{
                display: 'block',
                position: 'absolute',
                width: '0.75rem',
                top: '50%',
                right: '1em',
                transform: active
                  ? 'translateY(-50%) rotate(180deg)'
                  : 'translateY(-50%)',
                transformOrigin: '50% 50%',
                transition: 'all 0.1s linear',
              }}
            >
              <Icon name="arrowDown" />
            </Box>
          </Box>
        </Box>
        {active && (
          <Box
            data-accordion-panel
            __css={{
              backgroundColor: 'secondary',
              borderRadius: '0 0 8px 8px',
              padding: 'cPadding',
              paddingRight: '4rem',
              marginBottom: active ? '0' : 'cPadding',
            }}
          >
            <RichText render={text} />
          </Box>
        )}
      </Box>
    </Box>
  )
}

AccordionItem.propTypes = {
  active: PropTypes.bool,
  title: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      text: PropTypes.string,
      spans: PropTypes.arrayOf(PropTypes.shape({})),
    })
  ),
  text: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      text: PropTypes.string,
      spans: PropTypes.arrayOf(PropTypes.shape({})),
    })
  ),
  onClick: PropTypes.func,
}

AccordionItem.defaultProps = {
  active: false,
  title: null,
  text: null,
  onClick: null,
}

export default AccordionItem
