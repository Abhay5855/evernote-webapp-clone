import ReactQuill from "react-quill";
import debounce from "../helper";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import React from "react";

class EditorComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      title: "",
      id: ""
    };
  }

  render() {
    // const { classes } = this.props;
    return (
      <div className={this.props.EditorComponent}>
        <ReactQuill></ReactQuill>
      </div>
    );
  }
}

export default withStyles(styles)(EditorComponent);
