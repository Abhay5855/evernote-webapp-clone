import ReactQuill from "react-quill";
import debounce from "../helper";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import React from "react";

class SidebarComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <div>Hello from Sidebar</div>;
  }
}

export default withStyles(styles)(SidebarComponent);
