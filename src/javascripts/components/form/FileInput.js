import React, { Component, PropTypes } from 'react';

export default class FileInput extends Component {
  render() {
    const { field, id, className } = this.props;
    return(
      <div className="form__item file-input">
        <div className="form__item__wrapper file-input_wrap">
          <input
            id={id}
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
  id: PropTypes.string.isRequired,
  field: PropTypes.object.isRequired
};

FileInput.defaultProps = {
  className: 'input'
};
