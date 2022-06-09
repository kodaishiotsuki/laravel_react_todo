import {
    IconButton,
    ListItem,
    ListItemButton,
    ListItemText,
} from "@mui/material";
import React from "react";
import Delete from "@mui/icons-material/Delete";

export default function ToDoDetail(props) {
    return (
        <ListItem
            key={props.id}
            secondaryAction={
                <IconButton edge="end" aria-label="delete">
                    <Delete />
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton>
                <ListItemIcon>
                    <Checkbox edge="start" />
                </ListItemIcon>
                <ListItemText primary={`ToDoDetail` + props.id}  />
            </ListItemButton>
        </ListItem>
    );
}
