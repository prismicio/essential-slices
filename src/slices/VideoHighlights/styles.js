import { Icon } from '../../components'

const tabItem = {
  marginBottom: 0,
  px: 'small',
  py: 'xsmall',
  display: 'block',
  width: 'inherit',
  textAlign: 'left',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  backgroundSize: '1em 1em',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right center',
  backgroundImage: `url('${Icon.encode('playIcon')}')`,
  ':hover': {
    textDecoration: 'underline',
  },
  '&.active': {
    backgroundImage: `url('${Icon.encode('playIconBlack')}')`,
    fontWeight: 'bold',
  },
}

export default tabItem
