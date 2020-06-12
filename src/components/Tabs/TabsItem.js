import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'theme-ui'

import { getBaseTabsItemStyles } from './styles'

const TabsItem = ({ active, disabled, label, variant, onActivate }) => {
  const baseTabsItemStyles = getBaseTabsItemStyles(disabled)

  const tabsItemStyles = {
    ...baseTabsItemStyles,
  }

  const onClickHandler = () => {
    if (onActivate) onActivate()
  }

  const defaultProps = !disabled ? { onClick: onClickHandler } : {}
  const className = active ? 'active' : undefined

  return (
    <Box
      variant={`${variant}.item`}
      __themeKey="tabs"
      __css={tabsItemStyles}
      className={className}
      {...defaultProps}
    >
      {label}
    </Box>
  )
}

TabsItem.defaultProps = {
  active: false,
  disabled: false,
  variant: 'default',
  onActivate: undefined,
}

TabsItem.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  variant: PropTypes.string,
  label: PropTypes.string.isRequired,
  onActivate: PropTypes.func,
}

export default TabsItem
