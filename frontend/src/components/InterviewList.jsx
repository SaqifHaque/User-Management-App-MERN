import { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, styled } from '@mui/material';
import { Delete, Edit} from  '@mui/icons-material';

import { deleteUser, getUsers, editUser } from "../service/api";

import { useNavigate } from "react-router-dom";


const EditIcon = styled(Edit)`
    margin-left:10px;
`
 
const defaultValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
}


const InterviewList = () => {
    let [rows, setRows] = useState([defaultValue]);

    const navigate = useNavigate();

    const getRows = async () => { 
        const data =  await getUsers();
        console.log(data, "data");
        setRows(data);
    }

    const editUserDetails = async(userId) => {
        navigate(`/edit/${userId}`);
    }

    const deleteUserDetails = async (userId) => {
        await deleteUser(userId);
        getRows();
    }

    useEffect(() => {     
        getRows();
      }, [] )

    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="left">Username</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Phone</TableCell>
              <TableCell align="left">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row._id + row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.username}</TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">{row.phone}</TableCell>
                <TableCell align="left"><Delete onClick={() => deleteUserDetails(row._id)}/> <EditIcon onClick={() => editUserDetails(row._id)} /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
}

export default InterviewList;