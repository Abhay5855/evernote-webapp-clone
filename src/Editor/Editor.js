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

  componentDidMount = () => {
    this.setState({
      text: this.props.selectedNote.body,
      title: this.props.selectedNote.title,
      id: this.props.selectedNote.id
    });
  };

  componentDidUpdate = () => {
    if (this.props.selectedNote.id !== this.state.id) {
      this.setState({
        text: this.props.selectedNote.body,
        title: this.props.selectedNote.title,
        id: this.props.selectedNote.id
      });
    }
  };

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
    this.props.noteUpdate(this.state.id, {
      title: this.state.title,
      body: this.state.text
    });
  }, 1300);
}

export default withStyles(styles)(EditorComponent);
