import { useState } from 'react';
import {
  Box,
  Card,
  Table,
  Button,
  Divider,
  TableRow,
  TableBody,
  TableCell,
  CardHeader,
  IconButton,
  TextField,
  Popover,
  TableHead,
  TableSortLabel,
} from '@mui/material';
import { fCurrency } from 'src/utils/format-number';
import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';
import { Scrollbar } from 'src/components/scrollbar';

// ----------------------------------------------------------------------

export function AppNewInvoice({ title, subheader, tableData }) {
  const [filters, setFilters] = useState({
    invoiceNumber: '',
    category: '',
    status: '',
    priceMin: '',
    priceMax: '',
  });

  const [sort, setSort] = useState({ field: '', direction: 'asc' });
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeColumn, setActiveColumn] = useState(null);

  // Handle sorting
  const handleSort = (field) => {
    setSort((prev) => ({
      field,
      direction: prev.field === field && prev.direction === 'asc' ? 'desc' : 'asc',
    }));
  };

  // Handle filter popover
  const handleOpenFilter = (event, column) => {
    setAnchorEl(event.currentTarget);
    setActiveColumn(column);
  };

  const handleCloseFilter = () => {
    setAnchorEl(null);
    setActiveColumn(null);
  };

  // Filtered & sorted data
  const filteredData = tableData
    .filter((row) =>
      filters.invoiceNumber ? row.invoiceNumber.toLowerCase().includes(filters.invoiceNumber.toLowerCase()) : true
    )
    .filter((row) => (filters.category ? row.category.toLowerCase().includes(filters.category.toLowerCase()) : true))
    .filter((row) => (filters.status ? row.status === filters.status : true))
    .filter((row) => (filters.priceMin ? row.price >= parseFloat(filters.priceMin) : true))
    .filter((row) => (filters.priceMax ? row.price <= parseFloat(filters.priceMax) : true))
    .sort((a, b) => {
      if (!sort.field) return 0;
      const order = sort.direction === 'asc' ? 1 : -1;
      if (sort.field === 'price') return (a.price - b.price) * order;
      return a[sort.field].localeCompare(b[sort.field]) * order;
    });

  return (
    <Card>
      <CardHeader title={title} subheader={subheader} sx={{ mb: 3 }} />

      {/* Table */}
      <Scrollbar sx={{ minHeight: 402 }}>
        <Table sx={{ minWidth: 680 }}>
          {/* Table Header with Filters */}
          <TableHead>
            <TableRow>
              {['invoiceNumber', 'category', 'price', 'status'].map((column) => (
                <TableCell key={column}>
                  <TableSortLabel
                    active={sort.field === column}
                    direction={sort.direction}
                    onClick={() => handleSort(column)}
                  >
                    {column.charAt(0).toUpperCase() + column.slice(1)}
                  </TableSortLabel>

                  {/* Filter Icon */}
                  <IconButton size="small" onClick={(event) => handleOpenFilter(event, column)}>
                    <Iconify icon="mdi:filter" width={18} />
                  </IconButton>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {filteredData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.invoiceNumber}</TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell>{fCurrency(row.price)}</TableCell>
                <TableCell>
                  <Label
                    variant="soft"
                    color={
                      (row.status === 'progress' && 'warning') ||
                      (row.status === 'out of date' && 'error') ||
                      'success'
                    }
                  >
                    {row.status}
                  </Label>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Scrollbar>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Box sx={{ p: 2, textAlign: 'right' }}>
        <Button size="small" color="inherit">
          View all
        </Button>
      </Box>

      {/* Filter Popover */}
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleCloseFilter}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Box sx={{ p: 2, minWidth: 200 }}>
          {activeColumn === 'invoiceNumber' && (
            <TextField
              label="Invoice Number"
              size="small"
              fullWidth
              value={filters.invoiceNumber}
              onChange={(e) => setFilters((prev) => ({ ...prev, invoiceNumber: e.target.value }))}
            />
          )}

          {activeColumn === 'category' && (
            <TextField
              label="Category"
              size="small"
              fullWidth
              value={filters.category}
              onChange={(e) => setFilters((prev) => ({ ...prev, category: e.target.value }))}
            />
          )}

          {activeColumn === 'price' && (
            <>
              <TextField
                label="Min Price"
                type="number"
                size="small"
                fullWidth
                value={filters.priceMin}
                onChange={(e) => setFilters((prev) => ({ ...prev, priceMin: e.target.value }))}
                sx={{ mb: 1 }}
              />
              <TextField
                label="Max Price"
                type="number"
                size="small"
                fullWidth
                value={filters.priceMax}
                onChange={(e) => setFilters((prev) => ({ ...prev, priceMax: e.target.value }))}
              />
            </>
          )}

          {activeColumn === 'status' && (
            <TextField
              label="Status"
              size="small"
              fullWidth
              value={filters.status}
              onChange={(e) => setFilters((prev) => ({ ...prev, status: e.target.value }))}
            />
          )}
        </Box>
      </Popover>
    </Card>
  );
}
