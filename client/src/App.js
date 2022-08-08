import React, {useEffect} from "react";
import {AppBar, Container, Grid, Grow, Typography} from "@mui/material";
import memories from './images/memories.png'
import Posts from "./Posts/Posts";
import Forms from "./Forms/Forms";
import {useDispatch} from "react-redux";
import {getPosts} from "./actions/post";


const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts);
    }, [dispatch]);
    return (
        <Container maxWidth="lg">
            <AppBar position="static" color="inherit"></AppBar>
            <Typography variant="h2" align="center">Memories</Typography>
            <img src={memories} alt="memories" height="60"/>
            <Grow in>
                <Container>
                    <Grid container justifyItems="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts/>

                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Forms/>
                        </Grid>
                    </Grid>
                </Container>

            </Grow>

        </Container>
    )
};

export default App;