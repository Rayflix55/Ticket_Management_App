export const loginUser = (email, password) => {
  const users = JSON.parse(localStorage.getItem('ticketapp_users')) || [];
  const found = users.find(u => u.email === email && u.password === password);
  if (found) {
    localStorage.setItem('ticketapp_session', JSON.stringify(found));
    return true;
  }
  return false;
};

export const registerUser = (email, password) => {
  const users = JSON.parse(localStorage.getItem('ticketapp_users')) || [];
  const exists = users.find(u => u.email === email);
  if (exists) return false;
  users.push({ email, password });
  localStorage.setItem('ticketapp_users', JSON.stringify(users));
  return true;
};

export const logoutUser = () => {
  localStorage.removeItem('ticketapp_session');
};
