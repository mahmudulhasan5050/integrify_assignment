import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { useParams } from 'react-router-dom'
import ButtonBack from './ButtonBack'


const useStyles = makeStyles(theme => ({

}))

const SingleCard = ({ data }) => {

    const { id } = useParams();

    const [integrifySingle, setIntegrifySingle] = useState();
    useEffect(() => {
        const getRequest = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users/' + id);
                setIntegrifySingle(response.data);

            }
            catch (err) {
                console.log(err);
            }
        }
        getRequest();

    }, []);



    return (

        <Grid container direction="column" justify="center" alignItems="center" style={{ marginTop: "10em" }} >
            {integrifySingle ?
                <Grid>
                    <Card style={{ padding: "2em", backgroundColor: "gray" }}>
                        <Typography>-Name: {integrifySingle.name}</Typography>
                        <Typography>-User Name: {integrifySingle.username}</Typography>
                        <Typography>-Email: {integrifySingle.email}</Typography>
                        <Typography>-Phone: {integrifySingle.phone}</Typography>
                        <Typography>-Company: {integrifySingle.company["name"]}</Typography>
                        <Typography>-Website: {integrifySingle.website}</Typography>
                        <Typography>-Address:</Typography>
                        <ul>
                            <li>Street: {integrifySingle.address["street"]}</li>
                            <li>Suite: {integrifySingle.address["suite"]}</li>
                            <li>City: {integrifySingle.address["city"]}</li>
                            <li>Zipcode: {integrifySingle.address["zipcode"]}</li>
                        </ul>

                    </Card>
                </Grid> : null}
            <Grid item>
                <ButtonBack />
            </Grid>
        </Grid>

    );
}

export default SingleCard;