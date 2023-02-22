import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';
import axios from "axios";
import CryptoFullData from "./types";
import "./paginater.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Paginater() {
    // define states
    const [cryptoPerPage] = useState(5);
    const [offset, setOffset] = useState(1);
    const [cryptos, setAllCryptos] = useState<any[]>([]);
    const [pageCount, setPageCount] = useState(10)

    const getCryptoInformation = (data: CryptoFullData[]) => {
        data.map(row => console.log("https://cryptoicons.org/api/icon/" + row["symbol"].toLowerCase() + "/200"))
        return (
            data.map(row => <TableRow key={row["name"]} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell><img src={"https://cryptoicons.org/api/icon/" + row["symbol"].toLowerCase() + "/200"} /></TableCell>
                <TableCell component="th" scope="row">{row["name"]}</TableCell>
                <TableCell>{row["quotes"]["USD"]["price"]}</TableCell>
            </TableRow> 
            )
        )
    }

    const getAllCryptoInformation = async () => {
        // get cryptocurrencies information
        const res = await axios.get("https://api.coinpaprika.com/v1/tickers");
        const data = res.data as CryptoFullData[]
        console.log(data);
        const slice = data.slice(offset - 1, offset - 1 + cryptoPerPage);

        // get display crypto information
        const cryptoInfo = getCryptoInformation(slice);

        // Using hooks to set the value
        setAllCryptos(cryptoInfo);
        setPageCount(Math.ceil(data.length / cryptoPerPage));
    }

    const handlePageClick = (event: { selected: number; }) => {
        const selectPage = event.selected;
        setOffset(selectPage + 1);
    }

    useEffect(() => {
        getAllCryptoInformation();
    }, [offset])

    return (
        <>
          {/* Display all the posts */}
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Icon</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cryptos}
                </TableBody>
            </Table>
          </TableContainer>
      
          {/* Using React Paginate */}
          <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            onPageChange={handlePageClick}
            pageCount={pageCount}
            containerClassName={"pagination"}
            activeClassName={"active"} />
        </>
      );
}

export default Paginater;