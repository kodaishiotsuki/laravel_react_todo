import { Card, CardContent, CardHeader, List } from "@mui/material";
import React from "react";
import ToDoDetail from "./ToDoDetail";

export default function ToDo(props) {
    return (
        <Card>
            <CardHeader title={props.toDo.title} />
            <CardContent>
                <List>
                    {props.toDo.to_do_details.map((detail) => {
                        return <ToDoDetail detail={detail} key={detail.id} />;
                    })}
                </List>
            </CardContent>
        </Card>
    );
}
