import React from "react";
import Grid from "@mui/material/Grid";
import ToDo from "../components/ToDo";
import { useCurrentToDoList, useGetToDoList } from "../hooks/ToDoList";

export default function Home() {
    const { isLoading } = useGetToDoList();
    const toDoList = useCurrentToDoList();

    if (isLoading) {
        return "Now Loading...";
    }

    return (
        <Grid container spacing={2}>
            {toDoList.map((toDo) => (
                <Grid item xs={3} key={toDo.id}>
                    <ToDo toDo={toDo} />
                </Grid>
            ))}
        </Grid>
    );
}
