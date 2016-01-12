import { errors, required, isEmail } from '../../utilities/validation';

export default function validateSession(data) {
  return errors(data, {
    user_id: required,
    email: [required, isEmail],
    password: required,
    password_confirmation: required
  });
}
