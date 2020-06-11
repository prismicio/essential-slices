import React, { Children, cloneElement, useState } from 'react'
import PropTypes from 'prop-types'
import { Box } from 'theme-ui'
import { Grid } from '..'

const Tabs = ({
  activeIndex: propsActiveIndex,
  children,
  variant,
  ...props
}) => {
  const [activeIndex, setActiveIndex] = useState(propsActiveIndex || 0)
  const activateTab = (index) => setActiveIndex(index)

  let activeContent

  const tabs = Children.map(children, (tab, index) => {
    if (!tab) return undefined

    const tabProps = tab.props || {}
    const isTabActive = index === activeIndex

    if (isTabActive) {
      activeContent = tabProps.children
    }

    return cloneElement(tab, {
      active: isTabActive,
      onActivate: () => activateTab(index),
      variant,
    })
  })

  return (
    <Box variant={variant} {...props} __themeKey="tabs">
      <Grid columns={[1, '2fr 1fr']} columnGap="hPadding">
        <Box variant={`${variant}.content`} __themeKey="tabs">
          {activeContent}
        </Box>
        <Box variant={`${variant}.label`} __themeKey="tabs">
          {tabs}
        </Box>
      </Grid>
    </Box>
  )
}

Tabs.defaultProps = {
  activeIndex: 0,
  variant: 'default',
}

Tabs.propTypes = {
  activeIndex: PropTypes.number,
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
}

export default Tabs
