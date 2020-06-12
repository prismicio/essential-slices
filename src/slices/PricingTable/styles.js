import { Icon } from '../../components'

export const table = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gridColumnGap: 'vMargin',
}

export const tableOption = {
  bg: 'secondary',
  borderRadius: 'card',
  mb: 'vSpace',
  p: 'hPadding',
  '@media all and (min-width: 40em)': {
    '&:nth-of-type(2n)': {
      bg: 'white',
      border: '1px solid',
    },
  },
}

export const features = {
  mt: 'hPadding',
  ul: {
    pl: '0',
    listStyleType: 'none',
  },
  li: {
    mb: '1em',
    display: 'flex',
    alignItems: 'center',
  },
  'li:before': {
    content: `url('${Icon.encode('feature')}')`,
    mr: '25px',
    width: '1em',
    height: '1em',
    color: 'primary',
  },
  'li.not-included:before': {
    content: `url('${Icon.encode('notIncluded')}')`,
    color: 'textGrey',
  },
  '.feature-icon': {
    color: 'primary',
  },
}
