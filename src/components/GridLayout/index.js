import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'theme-ui'

const px = (n) => (typeof n === 'number' ? `${n}px` : n)

const widthToColumns = (width) =>
  Array.isArray(width)
    ? width.map(widthToColumns)
    : !!width && `repeat(auto-fit, minmax(${px(width)}, 1fr))`

const countToColumns = (n) =>
  Array.isArray(n)
    ? n.map(countToColumns)
    : !!n && (typeof n === 'number' ? `repeat(${n}, 1fr)` : n)

const columnOptions = (columns) =>
  columns ? countToColumns(columns) : 'repeat(auto-fit, minmax(150px, 1fr))'

const Grid = React.forwardRef(
  ({ width, columns, rowGap, columnGap, ...props }, ref) => {
    const gridTemplateColumns = width
      ? widthToColumns(width)
      : columnOptions(columns)

    return (
      <Box
        ref={ref}
        __themeKey="container"
        variant="grid"
        {...props}
        __css={{
          display: 'grid',
          gridRowGap: rowGap,
          columnGap,
          gridTemplateColumns,
        }}
      />
    )
  }
)

Grid.defaultProps = {
  columns: undefined,
  columnGap: undefined,
  rowGap: undefined,
  width: undefined,
}

Grid.propTypes = {
  columns: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  columnGap: PropTypes.number,
  rowGap: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default Grid
