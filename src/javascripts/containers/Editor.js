import React, { Component } from 'react';
import EditorHeader from '../components/editor/EditorHeader';
import EditorInfo from '../components/editor/EditorInfo';

export default class Editor extends Component {
  render() {
    return(
      <div id="editor">
        <div id="editor-erea">
          <form id="editor-form">
            <EditorHeader />
            <EditorInfo />
          </form>
        </div>
      </div>
    );
  }
}
