import React from "react";
import Grid from "@mui/material/Grid";
import ToDo from "../components/ToDo";

export default function Home() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <ToDo />
            </Grid>
        </Grid>
    );
}
