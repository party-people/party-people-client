import React, { Component, PropTypes } from 'react';

export default class Input extends Component {
  render() {
    const { field, id, className, type, placeholder, defaultValue } = this.props;
    return(
      <div className="input_group">
        <div className="input_wrap">
          <input
            id={id}
            className={className}
            type={type}
            name={field.name}
            placeholder={placeholder}
            defaultValue={defaultValue}
            {...field} />
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

Input.propTypes = {
  id: PropTypes.string.isRequired,
  field: PropTypes.object.isRequired
};

Input.defaultProps = {
  type: 'text',
  className: 'input',
  placeholder: '',
  defaultValue: ''
};
