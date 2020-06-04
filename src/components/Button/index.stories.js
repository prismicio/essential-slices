import React from 'react'
import Button from '.'

export default {
  title: 'Components/Button',
  component: Button,
}

export const Default = () => <Button label="Click Here" />

export const Link = () => {
  const mock = {
    button_label: 'Click Here',
    button_link: {
      link_type: 'Web',
      url: '/dashboard',
    },
  }

  return (
    <Button
      label={mock.button_label}
      variant="primary"
      link={mock.button_link}
    />
  )
}

export const LinkResolver = () => {
  const linkResolver = (doc) => `/link/to/${doc.uid}`
  const mock = {
    button_label: 'Click Here',
    button_link: {
      link_type: 'Document',
      uid: 9,
    },
  }

  return (
    <Button
      label={mock.button_label}
      link={mock.button_link}
      linkResolver={linkResolver}
    />
  )
}
