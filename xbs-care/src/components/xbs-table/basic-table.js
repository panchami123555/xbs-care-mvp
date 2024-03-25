import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiDataGrid: {
      styleOverrides: {
        columnHeader: {
          backgroundColor: '#08A3E0',
          color: '#fff',
        },
      },
    },
  },
});
export default function BasicTable({ columns, rows }) {
  const modifiedColumns = columns.map((column) => ({
    ...column,
    align: 'center',
    headerAlign: 'center',
    headerClassName: 'dataGrid-header',
    cellClassName: 'dataGrid-cell'
  }));

  return (
    <ThemeProvider theme={theme}>
    <div style={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={modifiedColumns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        // checkboxSelection
      />
    </div>
    </ThemeProvider>
  );
}
