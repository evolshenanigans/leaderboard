import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'score',
    headerName: 'Score',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Swiggum', firstName: 'Alex', score: 35 },
  { id: 2, lastName: 'Gutierrez', firstName: 'Josh', score: 42 },
  { id: 3, lastName: 'Greathouse', firstName: 'Garret', score: 45 },
  { id: 4, lastName: 'L', firstName: 'Dennis', score: 16 },
  { id: 5, lastName: 'F', firstName: 'Dominic', score: null },
  { id: 6, lastName: 'P', firstName: 'Dominic', score: 150 },
  { id: 7, lastName: 'Hubbel', firstName: 'Hootie', score: 44 },
  { id: 8, lastName: 'Cook', firstName: 'Michael', score: 36 },
  
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
