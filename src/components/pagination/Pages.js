import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import { PageNumbering, Stack } from './Pages.styled';

const Pages = ({ setCurrentPage, pages }) => {

    return (
        <PageNumbering>
            <Stack spacing={10} >
                <Pagination count={pages} />
            </Stack>
        </PageNumbering>
    );
};

export default Pages;