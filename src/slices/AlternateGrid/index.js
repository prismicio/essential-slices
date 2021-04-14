import React from 'react'
import PropTypes from 'prop-types'
import { RichText } from 'prismic-reactjs'
import { Box, useThemeUI } from 'theme-ui'
import {
  Button,
  Desc,
  Eyebrow,
  Grid,
  Head,
  TextBlock,
  Title,
  Slice,
  Wrap,
} from '../../components'
import { structuredTextPropTypes } from '../../utils/prop-types'

const AlternateGrid = ({ slice, linkResolver }) => {
  const { items, primary } = slice
  const { theme } = useThemeUI()
  const defaultColumnSizes = ['40% 60%', '60% 40%']
  const imageOrder = primary.image_side === 'left' ? 0 : 1
  const columnValues = theme.container.grid.spans
    ? theme.container.grid.spans
    : defaultColumnSizes[imageOrder]

  const columns = primary.optional_image ? columnValues : '1'
  return (
    <Slice sx={{ textAlign: 'center' }}>
      <Wrap>
        <Grid columnGap={[null, null, 'large']} columns={[1, columns]}>
          {primary.optional_image && (
            <Box
              as="img"
              src={primary.optional_image.url}
              sx={{ order: [0, imageOrder], my: 'auto ' }}
            />
          )}
          <Box>
            <Head
              sx={{
                mr: [null, 'medium'],
              }}
            >
              <Box as="header">
                {primary.eyebrow_headline && (
                  <Eyebrow sx={{ textAlign: 'left' }}>
                    <RichText
                      render={primary.eyebrow_headline}
                      linkResolver={linkResolver}
                    />
                  </Eyebrow>
                )}
                {primary.title && (
                  <Title
                    sx={{
                      textAlign: 'left',
                      mb: [0, 0],
                    }}
                  >
                    <RichText
                      render={primary.title}
                      linkResolver={linkResolver}
                    />
                  </Title>
                )}
                {primary.description && (
                  <Desc sx={{ textAlign: 'left', mx: 0 }}>
                    <RichText
                      render={primary.description}
                      linkResolver={linkResolver}
                    />
                  </Desc>
                )}
              </Box>
            </Head>
            <Grid
              columns={[1, 2]}
              rowGap="small"
              columnGap={[null, 'medium']}
              sx={{ mr: ['small', 'medium', imageOrder === 0 ? 'xlarge' : ''] }}
            >
              {items.map(
                ({ description, title, optional_icon: optionalIcon }) => {
                  return (
                    <TextBlock
                      title={title}
                      description={description}
                      icon={optionalIcon}
                      linkResolver={linkResolver}
                    />
                  )
                }
              )}
              {primary.call_to_action &&
                primary.call_to_action.map(({ text, url, color }) => {
                  return <Button label={text} link={url} variant={color} />
                })}
            </Grid>
          </Box>
        </Grid>
      </Wrap>
    </Slice>
  )
}

AlternateGrid.propTypes = {
  slice: PropTypes.shape({
    primary: PropTypes.shape({
      title: structuredTextPropTypes,
      description: structuredTextPropTypes,
      eyebrow_headline: structuredTextPropTypes,
      optional_image: PropTypes.shape({
        url: PropTypes.string,
      }),
      call_to_action: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string,
          url: PropTypes.string,
          color: PropTypes.string,
        })
      ),
      image_side: PropTypes.string,
    }).isRequired,
    items: PropTypes.array.isRequired,
  }).isRequired,
  linkResolver: PropTypes.func,
}

AlternateGrid.defaultProps = {
  linkResolver: () => '/404',
}

export default AlternateGrid
