import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    //minWidth: 650,

  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable(props) {
  const classes = useStyles();

  const {titre, data} = props

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>

          <TableRow>
            <TableCell>Name</TableCell>
          {titre.map(item =>
            <TableCell align="center">{item}</TableCell>)}
          </TableRow>

        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.projectName}>
              <TableCell component="th" scope="row">
                {item.projectName}
              </TableCell>
              <TableCell align="right">{item.wtgFullName}</TableCell>
              <TableCell align="right">{item.portEntryBlade}</TableCell>
              <TableCell align="right">{item.portEntryNacelle}</TableCell>
              <TableCell align="right">{item.portEntryTower}</TableCell>
              <TableCell align="right">{Math.round(item.log_bud_G4/1000)} k€</TableCell>
              <TableCell align="right">{Math.round(item.log_bud_built/1000)}k€</TableCell>
              <TableCell align="right">{Math.round(1000*(item.log_bud_G4-item.log_bud_built)/(item.log_bud_built))/10} %</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
