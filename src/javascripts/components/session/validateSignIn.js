import { errors, required, isEmail } from '../../utilities/validation';

export default function validateSignIn(data) {
  return errors(data, {
    email: [required, isEmail],
    password: required
  });
}
