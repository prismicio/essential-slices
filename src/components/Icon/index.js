import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'theme-ui'

const Icons = {
  feature: `
<svg
    aria-hidden="true"
    focusable="false"
    width="20"
    height="20"
    xmlns="http://www.w3.org/2000/svg"
>
    <g fill="none">
        <path d="M-2-2h24v24h-24z" />
        <path
            d="M10 0c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm-2 15l-5-5 1.41-1.41 3.59 3.58 7.59-7.59 1.41 1.42-9 9z"
            fill="currentColor"
            fill-rule="nonzero"
        />
    </g>
</svg>`,
  notIncluded: `
<svg
  aria-hidden="true"
  focusable="false"
  width="20"
  height="20"
  xmlns="http://www.w3.org/2000/svg"
>
  <g fill="none">
    <path d="M-2-2h24v24h-24z" />
    <path
      d="M5 9v2h10v-2h-10zm5-9c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
      fill="currentColor"
      fill-rule="nonzero"
    />
  </g>
</svg>`,
  play: `
<svg
    aria-hidden="true"
    focusable="false"
    width="20"
    height="20"
    xmlns="http://www.w3.org/2000/svg"
>
    <g fill="none">
        <path d="M-2-2h24v24h-24z" />
        <path
            d="M8 14.5l6-4.5-6-4.5v9zm2-14.5c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
            fill="gray"
            fill-rule="nonzero"
        />
    </g>
</svg>`,
  playBlack: `
<svg
    aria-hidden="true"
    focusable="false"
    width="20"
    height="20"
    xmlns="http://www.w3.org/2000/svg"
>
    <g fill="none">
        <path d="M-2-2h24v24h-24z" />
        <path
            d="M8 14.5l6-4.5-6-4.5v9zm2-14.5c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
            fill="currentColor"
            fill-rule="nonzero"
        />
    </g>
</svg>`,
  arrowDown: (props) => (
    <svg
      width="12"
      height="8"
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 12 8"
      {...props}
    >
      <g fill="none">
        <path fill="#000" d="M1.41.59l4.59 4.58 4.59-4.58 1.41 1.41-6 6-6-6z" />
        <path d="M-6-8h24v24h-24z" />
      </g>
    </svg>
  ),
  arrowRight: (props) => (
    <svg
      width="8"
      height="12"
      viewBox="0 0 8 12"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <path d="M-8-6h24v24H-8z" />
        <path
          fill="currentColor"
          fillRule="nonzero"
          d="M.59 10.59L5.17 6 .59 1.41 2 0l6 6-6 6z"
        />
      </g>
    </svg>
  ),
  arrowLeft: (props) => (
    <svg
      width="8"
      height="12"
      viewBox="0 0 8 12"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <path d="M-8-6h24v24H-8z" />
        <path
          fill="currentColor"
          fillRule="nonzero"
          d="M7.41 10.59L2.83 6l4.58-4.59L6 0 0 6l6 6z"
        />
      </g>
    </svg>
  ),
}

const Icon = React.forwardRef(({ name, variant, ...props }, ref) => {
  return (
    <Box
      ref={ref}
      as={Icons[name]}
      {...props}
      variant={variant}
      __themeKey="icons"
    />
  )
})

Icon.encode = (name) => `data:image/svg+xml; utf8, ${Icons[name]}`

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  variant: PropTypes.string,
}

Icon.defaultProps = {
  variant: 'default',
}

export default Icon
