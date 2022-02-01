import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import { PageNumbering, Stack } from './Pages.styled';

const Pages = ({ changePage, currentPage, pages }) => {

    return (
        <PageNumbering>
            <Stack spacing={10} >
                <Pagination count={pages} page={currentPage} onChange={changePage} />
            </Stack>
        </PageNumbering>
    );
};

export default Pages;