export default (password: string): boolean => {
  const longEnough = password.length >= 8;
  const hasCapital = /[A-Z]/.test(password);
  const hasSpecial = /.!@#$%^&*()_+-=/.test(password);
  const hasNumber = /^\d+$/.test(password);
  return longEnough && hasCapital && hasSpecial && hasNumber;
};