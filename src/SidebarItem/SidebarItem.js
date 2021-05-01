import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import React from "react";
import { ListItem } from "@material-ui/core";
import { removeHTMLTags } from "../helper";

class SidebarItemComponent extends React.Component {
  render() {
    const { _index, classes, selectedNoteIndex, _note } = this.props;

    return (
      <div key={_index}>
        <ListItem></ListItem>
      </div>
    );
  }
}

export default withStyles(styles)(SidebarItemComponent);
