const Validation = storedValues => {
  let errors = {};

  if (!storedValues.fullName) {
    errors.fullName = 'Name is required.';
  }
  if (!storedValues.email) {
    errors.email = 'Email is required.';
  } else if (!/\S+@\S+\.\S+/.test (storedValues.email)) {
    errors.email = 'Email is invalid.';
  }
  if (!storedValues.password) {
    errors.password = 'Password is required.';
  } else if (storedValues.password.length < 8) {
    errors.password = 'Weak password must be more than 8 characters.';
  } else if (storedValues.password.length > 12) {
    errors.password = 'Too Strong password must be less than 10 characters.';
  }
  //   else if (
  //     !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/.test(
  //       storedValues.password
  //     )
  //   ) {
  //     errors.password =
  //       "Password must contain one uppercase letter, one number and a special character";
  //   }
  return errors;
};

export default Validation;
