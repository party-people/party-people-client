import React, { Component, PropTypes } from 'react';

export default class TextArea extends Component {
  render() {
    const { field, className, placeholder, defaultValue } = this.props;
    return(
      <div className="form__item textarea">
        <div className="form__item__wrapper textarea_wrap">
          <textarea
            className={className}
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

TextArea.propTypes = {
  field: PropTypes.object.isRequired
};

TextArea.defaultProps = {
  className: 'textarea',
  placeholder: '',
  defaultValue: ''
};
