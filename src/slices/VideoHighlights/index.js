import React from 'react'
import PropTypes from 'prop-types'
import { RichText } from 'prismic-reactjs'
import { Box } from 'theme-ui'
import uuid from 'react-uuid'
import { Desc, Title, Slice, Tabs, Video, Wrap } from '../../components'
import { structuredTextPropTypes } from '../../utils/prop-types'
import tabItem from './styles'

const VideoHighlights = ({ slice }) => {
  const { items, primary } = slice
  return (
    <Slice sx={{ textAlign: 'center' }}>
      <Wrap>
        <Title as="header">
          <RichText render={primary.title} />
        </Title>

        {primary.description && (
          <Desc>
            <RichText render={primary.description} />
          </Desc>
        )}
        <Box data-video-player>
          <Box data-playlist>
            <Tabs variant="vertical">
              {items.map((item) => {
                const tabLabel = (
                  <Box key={uuid()} as="a" sx={tabItem}>
                    {RichText.asText(item.video_title)}
                  </Box>
                )

                return (
                  <Tabs.Item label={tabLabel}>
                    <Video source={item.video_src} />
                  </Tabs.Item>
                )
              })}
            </Tabs>
          </Box>
        </Box>
      </Wrap>
    </Slice>
  )
}

VideoHighlights.propTypes = {
  slice: PropTypes.shape({
    primary: PropTypes.shape({
      title: structuredTextPropTypes,
      description: structuredTextPropTypes,
      eyebrow_headline: PropTypes.array,
      call_to_action: PropTypes.array,
      call_to_action_link: PropTypes.shape({
        url: PropTypes.string,
      }),
    }).isRequired,
    items: PropTypes.array.isRequired,
  }).isRequired,
}

export default VideoHighlights
