import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import EditorHeader from './EditorHeader';
import EditorInfo from './EditorInfo';

class EditForm extends Component {
  render() {
    const { article, handleSubmit } = this.props;
    return (
      <form id="editor-form" onSubmit={handleSubmit}>
        <EditorHeader />
        <EditorInfo article={article} />
      </form>
    );
  }
}

EditForm.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'article',
  fields: []
})(EditForm);
