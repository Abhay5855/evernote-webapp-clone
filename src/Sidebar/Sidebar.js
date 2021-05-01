import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import React from "react";

class SidebarComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      addingNote: false,
      title: null
    };
  }

  render() {
    const { notes, classes, selectedNoteIndex } = this.props;
    return <div></div>;
  }
}

export default withStyles(styles)(SidebarComponent);
