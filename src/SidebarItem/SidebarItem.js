import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import React from "react";
import { ListItem, ListItemText } from "@material-ui/core";
import { removeHTMLTags } from "../helper";

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
        </ListItem>
      </div>
    );
  }
}

export default withStyles(styles)(SidebarItemComponent);
