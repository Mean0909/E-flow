const DEFAULT_USER = {
  username: 'admin',
  email: 'admin',
  phone: '017755470',
  password: '12345678'
};

function getStoredUser() {
  const raw = localStorage.getItem('sercUser');
  if (!raw) return { ...DEFAULT_USER };
  try {
    return { ...DEFAULT_USER, ...JSON.parse(raw) };
  } catch (e) {
    return { ...DEFAULT_USER };
  }
}

function saveStoredUser(user) {
  localStorage.setItem('sercUser', JSON.stringify(user));
}

function normalizeIdentity(value) {
  return String(value || '').trim().toLowerCase();
}

function findUser(identity) {
  const user = getStoredUser();
  const input = normalizeIdentity(identity);
  if (!input) return null;
  if ([user.username, user.email, user.phone].map(normalizeIdentity).includes(input)) {
    return user;
  }
  return null;
}

function loginUser(identity, password) {
  const user = findUser(identity);
  if (!user) return false;
  if (String(password) !== String(user.password)) return false;
  sessionStorage.setItem('sercLoggedIn', 'true');
  sessionStorage.setItem('sercCurrentUser', user.username);
  return true;
}

function logoutUser() {
  sessionStorage.removeItem('sercLoggedIn');
  sessionStorage.removeItem('sercCurrentUser');
}

function isLoggedIn() {
  return sessionStorage.getItem('sercLoggedIn') === 'true';
}

function updatePassword(identity, newPassword) {
  const user = findUser(identity);
  if (!user) return false;
  user.password = String(newPassword);
  saveStoredUser(user);
  return true;
}

function generateOtp() {
  const otp = '123456';
  const expiresAt = Date.now() + 90 * 1000;
  sessionStorage.setItem('sercOtp', otp);
  sessionStorage.setItem('sercOtpExpiresAt', String(expiresAt));
  return otp;
}

function verifyOtp(input) {
  const otp = sessionStorage.getItem('sercOtp');
  const expiresAt = Number(sessionStorage.getItem('sercOtpExpiresAt') || '0');
  if (!otp || !expiresAt) return 'missing';
  if (Date.now() > expiresAt) return 'expired';
  if (String(input) !== String(otp)) return 'invalid';
  return 'success';
}
