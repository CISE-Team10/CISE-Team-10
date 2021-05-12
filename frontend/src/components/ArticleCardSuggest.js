import React from 'react';
//import { Link } from 'react-router-dom';
import '../App.css';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';


const SuggestBookCard = (props) => {
    const  book  = props.book;

    const StyledTableCell = withStyles((theme) => ({
        head: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        body: {
          fontSize: 14,
        },
      }))(TableCell);
      
      const StyledTableRow = withStyles((theme) => ({
        root: {
          '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
          },
        },
      }))(TableRow);


    return(        
        <StyledTableRow key={book.title}>
            <StyledTableCell component="th" scope="row">
                {book.title}
            </StyledTableCell>
            <StyledTableCell align="left">{book.author}</StyledTableCell>
            <StyledTableCell align="left">{book.year}</StyledTableCell>
            <StyledTableCell align="left">{book.software_engineering_methodology}</StyledTableCell>
            <StyledTableCell align="left">{book.claim}</StyledTableCell>
            <StyledTableCell align="left">{book.strength_of_evidence}</StyledTableCell>,
            <StyledTableCell align="left">{book.link}</StyledTableCell>
        </StyledTableRow>
    )
};

export default SuggestBookCard;