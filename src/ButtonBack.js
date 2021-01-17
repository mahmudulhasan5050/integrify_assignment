import React from 'react';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'
const ButtonBack = () => {

    return (

        <Grid>
            <Button component={Link} to="/" variant="contained" color="primary">Back</Button>
        </Grid>

    );

}
export default ButtonBack;