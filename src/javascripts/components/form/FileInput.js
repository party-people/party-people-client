import React, { Component, PropTypes } from 'react';

export default class FileInput extends Component {
  render() {
    const { field, className } = this.props;
    return(
      <div className="file-input_group">
        <div className="file-input_wrap">
          <input
            className={className}
            type='file'
            name={field.name}
            {...field}
            value={null} />
            {field.error && field.touched &&
              <div className="input_error">
                <div className="error_msg">
                  {field.error}
                </div>
                <div className="error_line">
                </div>
              </div>
            }
        </div>
      </div>
    );
  }
}

FileInput.propTypes = {
  field: PropTypes.object.isRequired
};

FileInput.defaultProps = {
  className: 'input',
  placeholder: '',
  defaultValue: ''
};
