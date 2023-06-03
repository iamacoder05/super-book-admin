// import React, { useState } from 'react';
// import {
// Table,
// TableContainer,
// TableHead,
// TableBody,
// TableRow,
// TableCell,
// TextField,
// IconButton,
// TablePagination,
// FormControlLabel,
// Checkbox,
// // DatePicker,
// } from '@mui/material';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';

// const data = [
// { id: 1, username: 'John', phoneNumber: '1234567890', status: 'Active', registeredDate: new Date('2021-01-01') },
// { id: 2, username: 'Jane', phoneNumber: '9876543210', status: 'Inactive', registeredDate: new Date('2021-02-01') },
// { id: 3, username: 'Bob', phoneNumber: '4561237890', status: 'Active', registeredDate: new Date('2021-03-01') },
// // Add more data as needed
// ];

// const ITEMS_PER_PAGE = 5;
// const ROWS_PER_PAGE_OPTIONS = [5, 10, 25];

// const PlayerTable = () => {
// const [searchTerm, setSearchTerm] = useState('');
// const [currentPage, setCurrentPage] = useState(0);
// const [rowsPerPage, setRowsPerPage] = useState(ITEMS_PER_PAGE);
// const [showActive, setShowActive] = useState(true);
// const [showInactive, setShowInactive] = useState(true);
// const [registeredDate, setRegisteredDate] = useState(null);

// const handleChange = (event) => {
// setSearchTerm(event.target.value);
// setCurrentPage(0); // Reset to the first page when performing a new search
// };

// const handlePageChange = (_, page) => {
// setCurrentPage(page);
// };

// const handleRowsPerPageChange = (event) => {
// setRowsPerPage(parseInt(event.target.value, 10));
// setCurrentPage(0);
// };

// const handleActiveChange = (event) => {
// setShowActive(event.target.checked);
// };

// const handleInactiveChange = (event) => {
// setShowInactive(event.target.checked);
// };

// const handleRegisteredDateChange = (date) => {
// setRegisteredDate(date);
// };

// const filteredData = data.filter((user) => {
// const isActive = showActive && user.status === 'Active';
// const isInactive = showInactive && user.status === 'Inactive';
// const isRegisteredDateMatch = !registeredDate || user.registeredDate.toDateString() === registeredDate.toDateString();
// return isActive || isInactive;
// });
// const paginatedData = filteredData.slice(
//     currentPage * rowsPerPage,
//     (currentPage + 1) * rowsPerPage
//     );
    
//     return (
//     <div>
//     <div style={{ marginBottom: '16px' }}>
//     <TextField
//            label="Search"
//            value={searchTerm}
//            onChange={handleChange}
//            variant="outlined"
//          />
//     <FormControlLabel
//     control={<Checkbox checked={showActive} onChange={handleActiveChange} />}
//     label="Active"
//     />
//     <FormControlLabel
//     control={<Checkbox checked={showInactive} onChange={handleInactiveChange} />}
//     label="Inactive"
//     />
//     {/* <DatePicker
//     label="Registered Date"
//     value={registeredDate}
//     onChange={handleRegisteredDateChange}
//     renderInput={(params) => <TextField {...params} variant="outlined" />}
//     /> */}
//     </div>
//     <TableContainer>
//     <Table stickyHeader>
//       <TableHead>
//         <TableRow>
//           <TableCell>ID</TableCell>
//           <TableCell>Username</TableCell>
//           <TableCell>Phone Number</TableCell>
//           <TableCell>Status</TableCell>
//           <TableCell>Action</TableCell>
//         </TableRow>
//       </TableHead>
//       <TableBody>
//         {paginatedData.map((user) => (
//           <TableRow key={user.id}>
//             <TableCell>{user.id}</TableCell>
//             <TableCell>{user.username}</TableCell>
//             <TableCell>{user.phoneNumber}</TableCell>
//             <TableCell>{user.status}</TableCell>
//             <TableCell>
//               <IconButton>
//                 <EditIcon />
//               </IconButton>
//               <IconButton>
//                 <DeleteIcon />
//               </IconButton>
//             </TableCell>
//           </TableRow>
//         ))}
//       </TableBody>
//     </Table>
//   </TableContainer>

//   <TablePagination
//     component="div"
//     count={filteredData.length}
//     page={currentPage}
//     onPageChange={handlePageChange}
//     rowsPerPage={rowsPerPage}
//     rowsPerPageOptions={ROWS_PER_PAGE_OPTIONS}
//     onRowsPerPageChange={handleRowsPerPageChange}
//   />
// </div>
// );
// };

// export default PlayerTable;

import React, { useState } from 'react';

import CustomDatePicker from '../../utils/CustomDatePicker/CustomDatePicker';

const PlayerTable = () => {
    const [selectedRange, setSelectedRange] = useState('');
  
    const handleDateRangeChange = (range) => {
      setSelectedRange(range);
    };
  
    const initialDate = new Date(); // Set the initial date here
  
    return (
      <div>
        <CustomDatePicker onApply={handleDateRangeChange} />
        <p>Selected Date Range:  {selectedRange}</p>
      </div>
    );
  };
  

export default PlayerTable;

  