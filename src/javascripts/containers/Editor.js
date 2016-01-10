import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNewArticle, updateArticle } from '../actions/articles';
import EditorForm from '../components/editor/EditorForm';
import EditorItems from '../components/editor/EditorItems';
import EditorBody from '../components/editor/EditorBody';

class Editor extends Component {
  componentDidMount() {
    this.props.dispatch(createNewArticle());
  }

  handleArticleSubmit(data) {
    this.props.dispatch(updateArticle(JSON.stringify({ article: data })));
  }

  render() {
    const { article } = this.props
    return(
      <div id="editor">
        <div id="editor-erea">
          <EditorForm article={article} onSubmit={this.handleArticleSubmit.bind(this)} />
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
