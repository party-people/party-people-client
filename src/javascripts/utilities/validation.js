export function required(value) {
  if (!!value === false) {
    return 'Required';
  }
}

export function isEmail(value) {
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return 'Invalid email address';
  }
}

function filterErrors(funcs, value) {
  const errors = funcs.map(func => func(value));
  return errors.filter(error => !!error)[0];
}

export function errors(data, fields) {
  const errors = {};
  Object.keys(fields).forEach((key) => {
    const value = data[key];
    const funcs = [].concat(fields[key]);
    const error = filterErrors(funcs, value);
    if (error) {
      errors[key] = error;
    }
  });

  return errors;
}
