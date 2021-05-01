import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import React from "react";
import { ListItem, ListItemText } from "@material-ui/core";
import { removeHTMLTags } from "../helper";
import DeleteIcon from "@material-ui/icons/Delete";

class SidebarItemComponent extends React.Component {
  render() {
    const { _index, classes, selectedNoteIndex, _note } = this.props;

    return (
      <div key={_index}>
        <ListItem
          className={classes.ListItem}
          selected={selectedNoteIndex === _index}
          alignItems="flex-start"
        >
          <div
            className={classes.textSection}
            onClick={() => this.selectNote(_note, _index)}
          >
            <ListItemText
              primary={_note.title}
              secondary={removeHTMLTags(_note.body.substring(0, 30)) + "..."}
            ></ListItemText>
          </div>

          <DeleteIcon
            onClick={() => this.deleteNote(_note)}
            className={classes.deleteIcon}
          ></DeleteIcon>
        </ListItem>
      </div>
    );
  }
  selectNote = (n, i) => this.props.selectNote(n, i);
  deleteNote = (note) => {
    if (window.confirm(`Do you want to delete: ${note.title}`))
      this.props.deleteNote(note);
  };
}

export default withStyles(styles)(SidebarItemComponent);
