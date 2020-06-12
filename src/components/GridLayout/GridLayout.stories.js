import React from 'react'
import { Box } from 'theme-ui'

import GridLayout from '.'

export default {
  title: 'Components/GridLayout',
  component: GridLayout,
}

const styles = { '& *': { p: 'small' } }

export const Default = () => (
  <Box bg="grey90" p="1rem">
    <GridLayout sx={styles}>
      <Box bg="primary" color="white">
        Number of columns not specified
      </Box>
      <Box bg="white">Number of columns not specified</Box>
      <Box bg="primary" color="white">
        Number of columns not specified
      </Box>
      <Box bg="white">Number of columns not specified</Box>
      <Box bg="primary" color="white">
        Number of columns not specified
      </Box>
      <Box bg="white">Number of columns not specified</Box>
      <Box bg="primary" color="white">
        Number of columns not specified
      </Box>
      <Box bg="white">Number of columns not specified</Box>
      <Box bg="primary" color="white">
        Number of columns not specified
      </Box>
      <Box bg="white">Number of columns not specified</Box>
      <Box bg="primary" color="white">
        Number of columns not specified
      </Box>
      <Box bg="white">Number of columns not specified</Box>
    </GridLayout>
  </Box>
)

export const Columns = () => (
  <>
    <Box bg="grey90" p="1rem">
      <GridLayout sx={styles} columns={[1, 2]}>
        <Box bg="primary" color="white">
          1/2
        </Box>
        <Box bg="white">1/2</Box>
        <Box bg="primary" color="white">
          1/2
        </Box>
        <Box bg="white">1/2</Box>
      </GridLayout>
    </Box>
    <Box bg="grey90" p="1rem">
      <GridLayout sx={styles} columns={[1, '1fr 2fr']}>
        <Box bg="primary" color="white">
          1/3
        </Box>
        <Box bg="white">2/3</Box>
      </GridLayout>
    </Box>
    <Box bg="grey90" p="1rem">
      <GridLayout sx={styles} columns={[1, 3]}>
        <Box bg="primary" color="white">
          1/3
        </Box>
        <Box bg="white">1/3</Box>
        <Box bg="primary" color="white">
          1/3
        </Box>
      </GridLayout>
    </Box>
    <Box bg="grey90" p="1rem">
      <GridLayout sx={styles} columns={[1, '1fr 3fr']}>
        <Box bg="primary" color="white">
          1/4
        </Box>
        <Box bg="white">3/4</Box>
      </GridLayout>
    </Box>
    <Box bg="grey90" p="1rem">
      <GridLayout sx={styles} columns={[1, 2, 4]}>
        <Box bg="primary" color="white">
          1/4
        </Box>
        <Box bg="white">1/4</Box>
        <Box bg="primary" color="white">
          1/4
        </Box>
        <Box bg="white">1/4</Box>
      </GridLayout>
    </Box>
  </>
)

export const Width = () => (
  <>
    <Box bg="grey90" p="1rem">
      <GridLayout sx={styles} width="200px">
        <Box bg="primary" color="white">
          width=200px
        </Box>
        <Box bg="white">width=200px</Box>
        <Box bg="primary" color="white">
          width=200px
        </Box>
        <Box bg="white">width=200px</Box>
        <Box bg="primary" color="white">
          width=200px
        </Box>
        <Box bg="white">width=200px</Box>
        <Box bg="primary" color="white">
          width=200px
        </Box>
        <Box bg="white">width=200px</Box>
        <Box bg="primary" color="white">
          width=200px
        </Box>
        <Box bg="white">width=200px</Box>
        <Box bg="primary" color="white">
          width=200px
        </Box>
        <Box bg="white">width=200px</Box>
      </GridLayout>
    </Box>
  </>
)
