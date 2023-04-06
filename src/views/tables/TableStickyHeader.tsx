// ** React Imports
import { useState, ChangeEvent } from 'react'

// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'

interface Column {
  id: 'name' | 'url'
  label: string
  minWidth?: number
  align?: 'right'
  format?: (value: number) => string
}

const columns: readonly Column[] = [
  { id: 'name', label: 'Name', minWidth: 170 },
  {
    id: 'url',
    label: 'URL',
    minWidth: 170,
    format: (value: number) => value.toLocaleString('en-US')
  }
]

interface Data {
  name: string
  url: string
}

function createData(name: string, url: string): Data {
  return { name, url }
}

const rows = [
  createData('India', 'www.India.domain.prod.com.br'),
  createData('China', 'www.China.domain.prod.com.br'),
  createData('Italy', 'www.Italy.domain.prod.com.br'),
  createData('United States', 'www.States.domain.prod.com.br'),
  createData('Canada', 'www.Canada.domain.prod.com.br'),
  createData('Australia', 'www.Australia.domain.prod.com.br'),
  createData('Germany', 'www.Germany.domain.prod.com.br'),
  createData('Ireland', 'www.Ireland.domain.prod.com.br'),
  createData('Mexico', 'www.Mexico.domain.prod.com.br'),
  createData('Japan', 'www.Japan.domain.prod.com.br'),
  createData('France', 'www.France.domain.prod.com.br'),
  createData('United Kingdom', 'www.UnitedKingdom.domain.prod.com.br'),
  createData('Russia', 'www.Russia.domain.prod.com.br'),
  createData('Nigeria', 'www.Nigeria.domain.prod.com.br'),
  createData('Brazil', 'www.Brazil.domain.prod.com.br')
]

const TableStickyHeader = () => {
  // ** States
  const [page, setPage] = useState<number>(0)
  const [rowsPerPage, setRowsPerPage] = useState<number>(10)

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell key={column.id} align={column.align} sx={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
              return (
                <TableRow hover role='checkbox' tabIndex={-1} key={index}>
                  {columns.map(column => {
                    const value = row[column.id]

                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    )
                  })}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

export default TableStickyHeader
