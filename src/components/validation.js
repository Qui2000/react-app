import React from 'react';

const validation = (values) => {
    let errors = {};

    if(!values.firstName) {
        errors.firstName = "First name is required";
    }
    if(!values.lastName) {
        errors.lastName = "Last name is required";
    }
    if(!values.address) {
        errors.address = "Address is required";
    }
    if(!values.address) {
        errors.address = "Address is required";
    }
    if(!values.email) {
        errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email is invalid";
    }
    if(!values.password) {
        errors.password = "Password is required";
    }
    if(!values.termCondition) {
        errors.termCondition = "Term Condition is required";
    }

  return errors;
};

export default validation;
