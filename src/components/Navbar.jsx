import * as React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Stack, Container } from '@mui/material';
import ListAltIcon from '@mui/icons-material/ListAlt';

const Navbar = () => {
  return (
    <AppBar position="static" color='inherit'>
        <Container>
            <Toolbar>
                <IconButton color='inherit' size='large' edge='start' aria-label='logo'>
                    <ListAltIcon />
                </IconButton>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                    MY TODO
                </Typography>
                <Stack direction='row' spacing={2}>
                    {/* <Button color='inherit' size='large' edge='start' aria-label='Home' href='/'>Home</Button>
                    <Button color='inherit' size='large' edge='start' aria-label='Home' href='/completed'>Completed Todos</Button> */}
                </Stack>
            </Toolbar>
        </Container>
    </AppBar>
        
  )
}

export default Navbar