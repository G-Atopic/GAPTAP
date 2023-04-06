import Grid from '@mui/material/Grid'
import React from 'react'
import Table from 'src/views/dashboard/UserTable'
import FormLayoutsIcons from 'src/views/form-layouts/FormLayoutsIcons'

const Cadastro = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={6} sx={{ minHeight: 500 }}>
        <FormLayoutsIcons />
      </Grid>
      <Grid item xs={6}>
        <Table />
      </Grid>
    </Grid>
  )
}

export default Cadastro
