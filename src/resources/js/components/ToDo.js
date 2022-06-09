import { Card, CardContent, CardHeader, List } from "@mui/material";
import React from "react";
import ToDoDetail from "./ToDoDetail";

export default function ToDo() {
    return (
        <Card>
            <CardHeader title="todo test" />
            <CardContent>
                <List>
                    {[0, 1, 2, 3].map((value) => {
                        return <ToDoDetail key={value.id} />;
                    })}
                </List>
            </CardContent>
        </Card>
    );
}
