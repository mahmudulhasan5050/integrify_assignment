import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid'
import CardIntegrify from './CardIntegrify'

const MainIntegrify = () => {


    const [integrifyLists, setIntegrifyLists] = useState([{ id: 'waiting for id' }]);

    useEffect(() => {
        const getRequest = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setIntegrifyLists(response.data);

            }
            catch (err) {
                console.log(err);
            }
        }
        getRequest();

    }, []);

    return (
        <Grid container >
            <CardIntegrify data={integrifyLists} />
        </Grid>
    );
};

export default MainIntegrify;