import React from 'react'
import Video from '.'

export default {
  title: 'Components/Video',
  component: Video,
}

const mock = {
  video_src: {
    type: 'video',
    thumbnail_height: 360,
    provider_url: 'https://www.youtube.com/',
    thumbnail_url: 'https://i.ytimg.com/vi/gYm9Q6J5gp8/hqdefault.jpg',
    html:
      '<iframe width="480" height="270" src="https://www.youtube.com/embed/gYm9Q6J5gp8?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    provider_name: 'YouTube',
    version: '1.0',
    title: 'Single Page Apps - Fat frontend or fat backend, not both',
    author_name: 'Prismic',
    height: 270,
    author_url: 'https://www.youtube.com/channel/UCJq6AEgtWeZt7ziQ-fLKOeA',
    thumbnail_width: 480,
    width: 480,
    embed_url: 'https://www.youtube.com/watch?v=gYm9Q6J5gp8',
  },
}

export const Default = () => <Video source={mock.video_src} />
Default.story = {
  name: 'Default',
}
