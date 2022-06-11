import { Card, CardContent, List, TextField } from "@mui/material";
import React, { useState } from "react";
import { useUpdateToDoMutateTask } from "../hooks/ToDo";
import ToDoDetail from "./ToDoDetail";

export default function ToDo(props) {
    const [timer, setTimer] = useState(null);

    // toDoの変数を定義
    let toDo = {
        id: props.id,
        title: props.title,
    };

    // useUpdateToDoMutateTaskを呼び出し
    const { updateToDoMutation } = useUpdateToDoMutateTask();
    //上書き処理
    const eventUpdateToDo = (event) => {
        clearTimeout(timer);

        const newTimer = setTimeout(() => {
            let data = {
                ...toDo,
                title: event.target.value,
            };
            updateToDoMutation.mutate(data);
        }, 500);
        setTimer(newTimer);
    };

    return (
        <Card>
            <TextField
                variant="standard"
                margin="dense"
                defaultValue={props.toDo.title}
                fullWidth
                onChange={eventUpdateToDo} //更新処理
            />
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
