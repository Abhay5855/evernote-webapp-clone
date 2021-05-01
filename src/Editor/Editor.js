import ReactQuill from "react-quill";
import debounce from "../helper";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import React from "react";

class EditorComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <div>Hello from editor</div>;
  }
}

export default withStyles(styles)(EditorComponent);
