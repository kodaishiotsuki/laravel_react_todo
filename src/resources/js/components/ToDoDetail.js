import {
    Checkbox,
    IconButton,
    ListItem,
    ListItemButton,
    ListItemIcon,
    TextField,
} from "@mui/material";
import React, { useState } from "react";
import Delete from "@mui/icons-material/Delete";
import { useUpdateToDoDetailMutateTask } from "../hooks/ToDoDetail";

export default function ToDoDetail(props) {
    const [timer, setTimer] = useState(null);
    let toDoDetail = {
        id: props.detail.id,
        name: props.detail.name,
        completed_flag: props.detail.completed_flag,
        to_do_id: props.detail.to_do_id,
    };

    // useUpdateToDoMutateTaskを呼び出し
    const { updateToDoDetailMutation } = useUpdateToDoDetailMutateTask();
    //上書き処理
    const eventUpdateToDoDetail = (event) => {
        clearTimeout(timer);

        const newTimer = setTimeout(() => {
            let data = {
                ...toDoDetail,
                name: event.target.value,
            };
            updateToDoDetailMutation.mutate(data);
        }, 500);
        setTimer(newTimer);
    };

    //チェックボックス
    const eventCheckToDoDetail = (event) => {
        let data = {
            ...toDoDetail,
            completed_flag: event.target.checked,
        };
        updateToDoDetailMutation.mutate(data);
    };

    return (
        <ListItem
            key={props.detail.id}
            secondaryAction={
                <IconButton edge="end" aria-label="delete">
                    <Delete />
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={props.detail.completed_flag}
                        onChange={eventCheckToDoDetail}
                    />
                </ListItemIcon>
                <TextField
                    variant="standard"
                    margin="dense"
                    defaultValue={props.detail.name}
                    fullWidth
                    onChange={eventUpdateToDoDetail} //更新処理
                />
            </ListItemButton>
        </ListItem>
    );
}
