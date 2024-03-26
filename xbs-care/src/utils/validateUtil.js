export const validateRequired = value => {
    return value.trim() ? { isValid: true } : { isValid: false, message: "The field is required." };
  };

export const validateEmail = value => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value) ? { isValid: true } : { isValid: false, message: "Invalid email format." };
  };