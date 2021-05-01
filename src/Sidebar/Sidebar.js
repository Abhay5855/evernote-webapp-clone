import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import React from "react";
import { Button } from "@material-ui/core";

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

    return (
      <div className={classes.SidebarContainer}>
        <Button onClick={this.newNoteBtnClick} className={classes.newNoteBtn}>
          New Note
        </Button>
      </div>
    );
  }

  newNoteBtnClick = () => {
    console.log("button clicked");
  };
}

export default withStyles(styles)(SidebarComponent);
