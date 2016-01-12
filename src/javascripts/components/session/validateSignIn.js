import { errors, required, isEmail } from '../../utilities/validation';

export default function validateSignIn(data) {
  return errors(data, {
    user_id: required,
    email: [required, isEmail]
  });
}
