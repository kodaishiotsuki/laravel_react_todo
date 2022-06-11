import Delete from "@mui/icons-material/Delete";
import {
    Card,
    CardActions,
    CardContent,
    IconButton,
    List,
    TextField,
} from "@mui/material";
import React, { useState } from "react";
import {
    useDeleteToDoMutateTask,
    useUpdateToDoMutateTask,
} from "../hooks/ToDo";
import ToDoDetail from "./ToDoDetail";

export default function ToDo(props) {
    const [timer, setTimer] = useState(null);

    // toDoの変数を定義
    let toDo = {
        id: props.id,
        title: props.title,
    };

    /** 名称更新イベント */
    const { updateToDoMutation } = useUpdateToDoMutateTask();
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

    /** 削除ボタン押下イベント */
    const { deleteToDoMutation } = useDeleteToDoMutateTask();
    const eventDeleteToDo = (event) => {
        deleteToDoMutation.mutate(toDo);
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
            <CardActions>
                <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={eventDeleteToDo}
                >
                    <Delete />
                </IconButton>
            </CardActions>
        </Card>
    );
}
