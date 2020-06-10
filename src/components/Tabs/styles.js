export const baseTabsStyles = {}

// Tabs styles.
export const getTabsHeaderStyles = (hideDivider) => {
  const dividerStyles = !hideDivider
    ? { borderBottom: '1px solid', borderColor: 'border' }
    : {}

  return {
    display: 'flex',
    mb: 'small',
    ...dividerStyles,
  }
}

// Tabs Item styles.
export const getBaseTabsItemStyles = (disabled) => {
  const disabledStyles = disabled ? { opacity: 0.5, cursor: 'not-allowed' } : {}

  return {
    alignItems: 'center',
    display: 'flex',
    cursor: 'pointer',
    fontSize: 'small',
    mx: 'xsmall',
    position: 'relative',
    py: 'xsmall',
    outline: 'none',
    ...disabledStyles,
    '&:first-of-type': {
      ml: 0,
    },
    '&.active': {
      fontWeight: 'bold',
      outline: '3px solid currentColor',
      outlineOffset: '5px',
    },
  }
}
