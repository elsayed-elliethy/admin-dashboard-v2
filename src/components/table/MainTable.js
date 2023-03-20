// import {
//     Avatar,
//     Box,
//     Card,
//     Container,
//     IconButton,
//     styled,
//     Table,
//     TableBody,
//     TableCell,
//     TableHead,
//     TableRow,
//     Typography,
//   } from '@mui/material';
//   import { useNavigate } from 'react-router-dom';
//   import VisibilityIcon from '@mui/icons-material/Visibility';
//   import EditIcon from '@mui/icons-material/Edit';
//   import CloseIcon from '@mui/icons-material/Close';


//   const CardHeader = styled(Box)(() => ({
//     display: 'flex',
//     paddingLeft: '24px',
//     paddingRight: '24px',
//     marginBottom: '12px',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   }));
  
//   const Title = styled('span')(() => ({
//     fontSize: '1rem',
//     fontWeight: '500',
//     textTransform: 'capitalize',
//   }));
  
//   const ProductTable = styled(Table)(() => ({
//     minWidth: 400,
//     whiteSpace: 'pre',
  
//     '& small': {
//       width: 50,
//       height: 15,
//       borderRadius: 500,
//       boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
//     },
//     '& td': { borderBottom: 'none' },
//     '& td:first-of-type': { paddingLeft: '16px !important' },
//   }));
  
//   const MainTable = ({ title, tableHead, list, edit, show }) => {
//     const navigation = useNavigate();
//     return (
//         <Container sx={{ mt: 2 }} fixed>
//       <Card elevation={3} sx={{ pt: '20px', mb: 3 }}>
//         <CardHeader>
//           <Title>{title}</Title>
//         </CardHeader>
  
//         <Box overflow="auto">
//           <ProductTable>
//             <TableHead>
//               <TableRow>
//                 {tableHead.map((ele, index) => (
//                   <TableCell key={index} sx={{ px: 3 }} colSpan={2} align="center">
//                     {ele}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             </TableHead>
  
//             <TableBody>
//               {list.map((item, index) => (
//                 <TableRow key={index} hover>
//                   <TableCell colSpan={2} align="center" sx={{ px: 3, textTransform: 'capitalize' }}>
//                     <Box display="flex" alignItems="center" justifyContent="center" margin={'auto'}>
//                       <Avatar src={item.imgUrl} align="center" sx={{ px: 0 }} />
//                     </Box>
//                   </TableCell>
//                   <TableCell colSpan={2} align="center" sx={{ px: 3, textTransform: 'capitalize' }}>
//                     {item.name}
//                   </TableCell>
  
//                   <TableCell align="center" colSpan={2} sx={{ px: 0, textTransform: 'capitalize' }}>
//                     ${item.price > 999 ? (item.price / 1000).toFixed(1) + 'k' : item.price}
//                   </TableCell>
  
//                   <TableCell sx={{ px: 0 }} align="center" colSpan={2}>
//                     {item.available ? (
//                       item.available < 20 ? (
//                         <Typography variant="p">available</Typography>
//                       ) : (
//                         <Typography variant="p">in stock</Typography>
//                       )
//                     ) : (
//                       <Typography variant="p">out of stock</Typography>
//                     )}
//                   </TableCell>
  
//                   <TableCell sx={{ px: 0 }} colSpan={2} align="center">
//                     <IconButton onClick={() => navigation(show)}>
//                     <VisibilityIcon />
//                     </IconButton>
//                     <IconButton onClick={() => navigation(edit)}>
//                     <EditIcon color="primary" />
//                     </IconButton>
//                     <IconButton >
//                     <CloseIcon color="error" />
//                     </IconButton>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </ProductTable>
//         </Box>
//       </Card>
//       </Container>
//     );
//   };
  
//   export default MainTable;
import React from "react";
import {
  useTable,
  useFilters,
  useGlobalFilter,
  useBlockLayout,
  usePagination,
  useResizeColumns,
  useFlexLayout,
} from "react-table";
import { useSticky } from "react-table-sticky";
import styles from "./Table.module.css";
import { Container } from "react-bootstrap";
import { TiDelete } from "react-icons/ti";
import { FcApproval } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import FilterComponent from "./FilterComponent";
import { IconButton } from "@mui/material";
  import VisibilityIcon from '@mui/icons-material/Visibility';
  import EditIcon from '@mui/icons-material/Edit';
  import CloseIcon from '@mui/icons-material/Close';
const MainTable = ({columns,data,deleteHandler,updateMyData,filterPlaceholder,btnContent,add,show,edit}) => {
  const location = useLocation();
  const defaultColumn = React.useMemo(
    () => ({
      // When using the useFlexLayout:
      // minWidth: 30, // minWidth is only used as a limit for resizing
      width: 300, // width is used for both the flex-basis and flex-grow
      // maxWidth: 200, // maxWidth is only used as a limit for resizing
    }),
    []
  )
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
      defaultColumn,
      updateMyData,
    },
    useFilters,
    useGlobalFilter,
    useBlockLayout,
    useSticky,
    usePagination,
    useFlexLayout
  );
  const { globalFilter } = state;
  const navigation = useNavigate();
  //
  // const listingsBody = page.map((row, i) => {
  //   prepareRow(row);
  //   return (
  //     <tr {...row.getRowProps()}>
  //       {row.cells.map((cell) => {
  //         return (
  //           <td
  //             {...cell.getCellProps()}
  //             className="d-flex justify-content-center align-items-center"
  //           >
  //             {cell.render("Cell") === "listingActions" ? (
  //               <>
  //                 <button
  //                   className="btn  py-0 px-1"
  //                   onClick={() => deleteHandler(row.cells[0].value)}
  //                   // onClick={() => console.log(row.cells[0].value)}
  //                 >
  //                   <TiDelete className="fs-2" fill="red" />
  //                 </button>
  //               </>
  //             ) : (
  //               cell.render("Cell")
  //             )}
  //           </td>
  //         );
  //       })}
  //     </tr>
  //   );
  // });
  const body = page.map((row, i) => {
    prepareRow(row);
    return (
      <tr {...row.getRowProps()}>
        {row.cells.map((cell) => {
          return (
            <td
              {...cell.getCellProps()}
              className="d-flex justify-content-center align-items-center"
            >
              {cell.render("Cell") === "actions" ? (
                // <button
                //   className="btn  py-0"
                //   onClick={() => deleteHandler(row.cells[0].value)}
                //   // onClick={() => console.log(row.cells[0].value)}
                // >
                //   <TiDelete className="fs-2" fill="red" />
                // </button>
                <>
              {show==="true" && <IconButton onClick={() => navigation(`${row.cells[0].value}`)}>
                                     <VisibilityIcon />
                                    </IconButton>}
                                    <IconButton onClick={() => navigation(`${edit}/${row.cells[0].value}`)}>
                                    <EditIcon color="primary" />
                                    </IconButton>
                                    <IconButton onClick={() => deleteHandler(row.cells[0].value)} >
                                    <CloseIcon color="error" />
                                    </IconButton>
                </>
              ) : (
                cell.render("Cell")
              )}
            </td>
          );
        })}
      </tr>
    );
  });

  //
  return (
    <>
      {filterPlaceholder && (
        <FilterComponent
          filter={globalFilter}
          setFilter={setGlobalFilter}
          placeholder={filterPlaceholder}
          btnContent={btnContent}
          link={add}
        />
      )}
      
      <Container>
        <table {...getTableProps()} className={`${styles.sticky}`}>
          <thead className={styles.header}>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} className={styles.body}>
            {body}
          </tbody>
        </table>
      </Container>
      {location.pathname !== "/adminDashboard" && (
        <Container className="my-2">
          <div className="pagination mx-auto d-flex justify-content-center">
            {/* <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
              {"<<"}
            </button>{" "} */}
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
              {"<<"}
            </button>{" "}
            <button onClick={() => nextPage()} disabled={!canNextPage}>
              {">>"}
            </button>{" "}
            {/* <button
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              {">>"}
            </button>{" "} */}
            <span>
              Page{" "}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>{" "}
            </span>
            <span className="d-none d-md-block">
              | Go to page:{" "}
              <input
                type="number"
                defaultValue={pageIndex + 1}
                onChange={(e) => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0;
                  gotoPage(page);
                }}
                style={{ width: "100px" }}
              />
            </span>{" "}
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
              }}
            >
              {[5, 10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>
        </Container>
      )}
    </>
  );
};

export default MainTable;
