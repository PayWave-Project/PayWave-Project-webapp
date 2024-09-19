import validator from 'validator';

export function isValidName(name: string): string | null {
  const regex = /^[A-Za-z\s'-]{1,50}$/;
  return regex.test(name) ? null : 'Invalid name';
}

export function isValidPhoneNumber(phone: string): string | null {
  const regex = /^[+]?[1-9]\d{1,14}$/; // E.164 format
  return regex.test(phone) ? null : 'Invalid phone number';
}



export function isValidEmail(email: string): string | null {
  return validator.isEmail(email) ? null : 'Invalid email address';
}

export function isValidPassword(password: string): string | null {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return regex.test(password) ? null : 'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character';
}

export function doPasswordsMatch(password: string, confirmPassword: string): string | null {
  return password === confirmPassword ? null : 'Passwords do not match';
}

export function isValidBVN(bvn: string): string | null {
  const bvnRegex = /^[0-9]{11}$/;

  if (!bvn) {
    return 'BVN is required';
  }

  if (!bvnRegex.test(bvn)) {
    return 'BVN must be 11 digits long and contain only numbers';
  }

  return null; 
}
export function isValidRCNumber(rcNumber: string): string | null {
  const rcRegex = /^[0-9]{5,7}$/;

  if (!rcNumber) {
    return 'RC number is required';
  }

  if (!rcRegex.test(rcNumber)) {
    return 'RC number must be between 5 and 7 digits and contain only numbers';
  }

  return null; 
}
export function isValidBusinessName(name: string): string | null {
  const nameRegex = /^[a-zA-Z0-9\s\-\']{3,}$/;

  if (!name) {
    return 'Business name is required';
  }

  if (!nameRegex.test(name.trim())) {
    return 'Business name must be at least 3 characters long and contain only letters, numbers, spaces, hyphens, or apostrophes';
  }

  if (/\s{2,}/.test(name)) {
    return 'Business name cannot have consecutive spaces';
  }

  return null; // No errors
}

export function validateForm(data: any): any {
  const errors: any = {};

  errors.firstName = isValidName(data.firstName);
  errors.lastName = isValidName(data.lastName);
  errors.phoneNo = isValidPhoneNumber(data.phoneNo);
  errors.emailAddress = isValidEmail(data.emailAddress);
  errors.password = isValidPassword(data.password);
  errors.cPassword = doPasswordsMatch(data.password, data.cPassword);

  return errors;
}

export function validateBusinessForm(data: any): any {
  const errors: any = {};
console.log(data)
  errors.businessName = isValidBusinessName(data.businessName);
  errors.rcNumber = isValidRCNumber(data.rcNumber);
  errors.bvn = isValidBVN(data.bvn);

  return errors;
}