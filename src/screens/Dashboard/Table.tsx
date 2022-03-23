import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { CardWrapper } from "@components/global/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function createData(
  name: string,
  monday: boolean,
  tuesday: boolean,
  wednesday: boolean,
  thursday: boolean,
  friday: boolean,
  saturday: boolean,
  sunday: boolean
) {
  return {
    name,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday,
  };
}

const rows = [
  createData("Meditation", true, false, false, false, false, true, false),
  createData("Read Book", false, true, false, true, false, true, false),
  createData("Gym", true, false, false, false, false, true, false),
];

export default function BasicTable(props: any) {
  return (
    <CardWrapper>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Habit</TableCell>
              <TableCell align="center">Mon</TableCell>
              <TableCell align="center">Tues</TableCell>
              <TableCell align="center">Wed</TableCell>
              <TableCell align="center">Thur</TableCell>
              <TableCell align="center">Fri</TableCell>
              <TableCell align="center">Sat</TableCell>
              <TableCell align="center">Sun</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                onClick={() => {
                  props?.onClick?.(row.name);
                }}
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                {Object.values(row)
                  .slice(1)
                  .map((value, index) => (
                    <TableCell align="center" key={index}>
                      {value ? (
                        <DoneOutlinedIcon fontSize="small" htmlColor="green" />
                      ) : (
                        <CloseOutlinedIcon fontSize="small" htmlColor="red" />
                      )}
                    </TableCell>
                  ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </CardWrapper>
  );
}