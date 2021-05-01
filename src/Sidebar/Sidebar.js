import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import React from "react";
import { Button, List, Divider } from "@material-ui/core";
import SidebarItemComponent from "../SidebarItem/SidebarItem";

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

    if (notes) {
      return (
        <div className={classes.SidebarContainer}>
          <Button onClick={this.newNoteBtnClick} className={classes.newNoteBtn}>
            {this.state.addingNote ? "Cancel" : "New Note"}
          </Button>
          {this.state.addingNote ? (
            <div>
              <input
                className={classes.newNoteInput}
                type="text"
                placeholder="Add a new Title"
                onKeyUp={(e) => this.updateTitle(e.target.value)}
              ></input>
            </div>
          ) : null}
          <List>
            {notes.map((_note, _index) => {
              return (
                <div key={_index}>
                  <SidebarItemComponent
                    _note={_note}
                    _index={_index}
                    selectedNoteIndex={selectedNoteIndex}
                    selectNote={this.selectNote}
                    deleteNote={this.deleteNote}
                  ></SidebarItemComponent>
                  <Divider></Divider>
                </div>
              );
            })}
          </List>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  newNoteBtnClick = () => {
    this.setState({ title: null, addingNote: !this.state.addingNote });
  };

  updateTitle = (txt) => {
    console.log("Here it is :", txt);
  };

  newNote = () => {
    this.props.newNote(this.state.title);
    this.setState({ title: null, addingNote: false });
  };

  selectNote = (n, i) => {
    this.props.selectNote(n, i);
  };

  deleteNote = (note) => {
    this.props.deleteNote(note);
  };
}

export default withStyles(styles)(SidebarComponent);
