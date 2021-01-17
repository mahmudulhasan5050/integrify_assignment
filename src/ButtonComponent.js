import React from 'react';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'
const ButtonComponent = ({ id }) => {

    return (

        <Grid>
            <Button component={Link} to={`/single/${id}`} variant="contained" color="primary">DETAILS</Button>
        </Grid>

    );

}
export default ButtonComponent;