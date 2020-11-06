import React, {Fragment} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

export default function ContainerBox({children, ...props}) {
    return (
        <Fragment>
            <CssBaseline />
            <Container style={{overflowX: "hidden"}}>
                <Box my={2}>
                    {children}
                </Box>
            </Container>
        </Fragment>
    );
}
