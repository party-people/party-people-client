import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNewArticle } from '../actions/articles';
import EditorHeader from '../components/editor/EditorHeader';
import EditorInfo from '../components/editor/EditorInfo';
import EditorItems from '../components/editor/EditorItems';
import EditorBody from '../components/editor/EditorBody';

class Editor extends Component {
  componentDidMount() {
    this.props.dispatch(createNewArticle());
  }
  render() {
    const { article } = this.props
    return(
      <div id="editor">
        <div id="editor-erea">
          <form id="editor-form">
            <EditorHeader />
            <EditorInfo />
          </form>
          <EditorItems />
        </div>
        <EditorBody />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const article = state.newArticle
  return { article };
}

export default connect(mapStateToProps)(Editor);
