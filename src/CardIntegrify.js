import React from 'react';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import ButtonComponent from './ButtonComponent'


const CardIntegrify = ({ data }) => {
    return (

        <Grid container justify="center">
            { data ? data.map((list, index) => (
                <Card style={{ backgroundColor: "white", marginBottom: "1em", width: "30em", marginRight: "1em", padding: "2em" }}>
                    <Grid item container key={index} direction="column" alignItems="center" >
                        {list ?
                            <Avatar>{(list.name).slice(0, 1)}</Avatar>
                            : null}

                        <Grid item>
                            <Typography>{list.name}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography>@{list.username}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography><a>http://{list.website}</a></Typography>
                        </Grid>
                        <Grid item>
                            <ButtonComponent id={list.id} />
                        </Grid>
                    </Grid>
                </Card>
            )) : null}
        </Grid >

    );
}
export default CardIntegrify;