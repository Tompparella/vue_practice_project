export default (password?: string): boolean => {
  if (!password) return false;
  const longEnough = password.length >= 8;
  const hasCapital = /[A-Z]/.test(password);
  const hasSpecial = /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(password);
  const hasNumber = /.*[0-9].*/.test(password);
  return longEnough && hasCapital && hasSpecial && hasNumber;
};
