import ReactQuill from "react-quill";
import debounce from "../helper";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import React from "react";
import { removeHTMLTags } from "../helper";

class SidebarItemComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <div>Hello from sidebaritem</div>;
  }
}

export default withStyles(styles)(SidebarItemComponent);
