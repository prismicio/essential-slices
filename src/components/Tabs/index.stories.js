import React from 'react'
import Tabs from '.'

export default {
  title: 'Components/Tabs',
  component: Tabs,
}

export const Default = () => (
  <Tabs>
    <Tabs.Item label="Label1">Content1</Tabs.Item>
    <Tabs.Item label="Label2">Content2</Tabs.Item>
    <Tabs.Item label="Label3">Content3</Tabs.Item>
  </Tabs>
)

Default.story = {
  name: 'Default',
}
