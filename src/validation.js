const validation = (values) => {
    const errors = {};
    if (values.age > 150) {
      errors.age = 'Age must be less then 150!'
    } else if (values.age <= 0) {
        errors.age = 'Age must be greater 0!'
    }
    if (values.firstName.length < 3) {
      errors.firstName = 'length of firstName must be at least 3 symbols'
    }
    return errors
}

export default validation;