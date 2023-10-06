const API_URL = 'http://localhost:4000';

const getResponse = (res) =>
  res.ok ? res.json() : Promise.reject(new Error(`Ошибка: ${res.status}`));

export function getProfileInfo() {
  return fetch(`${API_URL}/profile`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(getResponse);
}

export function getProjects() {
  return fetch(`${API_URL}/projects`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(getResponse);
}

export function getMenu() {
  return fetch(`${API_URL}/menu`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(getResponse);
}

export function getSkillsText() {
  return fetch(`${API_URL}/skillsText`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(getResponse);
}

export function getSkills() {
  return fetch(`${API_URL}/skills`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(getResponse);
}

export function getExperience() {
  return fetch(`${API_URL}/experience`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(getResponse);
}

export function getContacts() {
  return fetch(`${API_URL}/contacts`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(getResponse);
}
