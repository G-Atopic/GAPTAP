import Grid from '@mui/material/Grid'
import React from 'react'
import FormLayoutsBasic from 'src/views/form-layouts/FormLayoutsBasic'
import TableStickyHeader from 'src/views/tables/TableStickyHeader'

const Cadastro = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={6}>
        <FormLayoutsBasic />
      </Grid>
      <Grid item xs={6}>
        <TableStickyHeader />
      </Grid>
    </Grid>
  )
}

export default Cadastro
