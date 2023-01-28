import React from 'react'

import {Box, Container, Typography} from '@mui/material'

import products from '@/samples/products-samples';

type Props = {}

function Products({}: Props) {
  return <>
    <Container sx={{ bgcolor: 'tomato', height: '100vh'}}>
      <Typography>Test</Typography>
      <Box></Box>
    </Container>
  </>
}

export default Products;