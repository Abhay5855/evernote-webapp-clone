import ReactQuill from "react-quill";
import debounce from "../helper";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import React from "react";
import { async } from "@firebase/util";

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
    const { classes } = this.props;
    return (
      <div className={classes.EditorComponent}>
        <ReactQuill
          value={this.state.text}
          onChange={this.updateBody}
        ></ReactQuill>
      </div>
    );
  }

  updateBody = async (val) => {
    this.setState({ text: val });
    this.update();
  };
  update = debounce(() => {
    console.log("updating database");
  }, 2000);
}

export default withStyles(styles)(EditorComponent);
