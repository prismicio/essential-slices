import React from 'react'
import { Box } from 'theme-ui'
import { RichText } from 'prismic-reactjs'

import Card from '.'
import mock from './mock.json'

export default {
  title: 'Components/Card',
  component: Card,
}

export const Default = () => (
  <Box sx={{ maxWidth: '15rem', mx: 'auto', my: 'xlarge' }}>
    <Card>
      <Card.Image image={mock.image} />
      <Card.Content>
        <Box as="h3" __css={{ fontSize: 'base', mb: 'small' }}>
          {RichText.asText(mock.title)}
        </Box>
        <Box sx={{ fontWeight: 'lean' }}>
          <RichText render={mock.content} />
        </Box>
      </Card.Content>
      <Card.Footer>
        <Box
          as="span"
          __css={{
            fontSize: 'tiny',
            fontWeight: 'heading',
            mb: 'xsmall',
            display: 'block',
          }}
        >
          {mock.footer}
        </Box>
      </Card.Footer>
    </Card>
  </Box>
)

Default.story = {
  name: 'Default',
}
