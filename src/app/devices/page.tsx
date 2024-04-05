"use client"

import * as React from 'react';
import Link from "next/link";
import {Box, Paper, Button} from '@mui/material';
import {DataGrid, GridColDef, GridRowParams} from '@mui/x-data-grid';
import DevicesIcon from '@mui/icons-material/Devices';
import DevicesData from "@/sample-data/devices.json";


const rowsPerPage = 10;
const columns: GridColDef[] = [
    {
        field: 'ipV4',
        headerName: 'IP V4',
        width: 200,
        sortable: false,
        filterable: false,
    },
    {
        field: 'hostname',
        headerName: 'Hostname',
        width: 200,
    },
    {
        field: 'operationSystem',
        headerName: 'Operating System',
        width: 200,
    },
    {
        field: 'manufacturer',
        headerName: 'Manufacturer',
        width: 200,
    },
    {
        field: 'action',
        headerName: 'Action',
        width: 200,
        type: 'actions',
        getActions: (params: GridRowParams) => [
            <Link key={params.id} href={`/devices/${params.id}`}>
                <Button
                    size="small"
                    color="primary"
                    variant="contained"
                    startIcon={<DevicesIcon/>}
                >
                    Details
                </Button>
            </Link>,
        ],
    },
];


export default function EnhancedTable() {

    return (
        <Box>
            <Paper>
                <DataGrid
                    rows={DevicesData}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: rowsPerPage,
                            },
                        },
                    }}
                    pageSizeOptions={[rowsPerPage]}
                    disableRowSelectionOnClick
                />
            </Paper>
        </Box>
    );
}