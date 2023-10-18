const API_URL = 'http://localhost:4000';

const getResponse = (res) =>
  res.ok ? res.json() : Promise.reject(new Error(`Ошибка: ${res.status}`));

export function getProfileInfo() {
  return fetch(`${API_URL}/profile`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(getResponse);
}

export function getProjects() {
  return fetch(`${API_URL}/projects`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(getResponse);
}

export function getPages() {
  return fetch(`${API_URL}/pages`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(getResponse);
}

export function getSkillsText() {
  return fetch(`${API_URL}/skillsText`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(getResponse);
}

export function getSkills() {
  return fetch(`${API_URL}/skills`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(getResponse);
}

export function getExperience() {
  return fetch(`${API_URL}/experience`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(getResponse);
}

export function getContacts() {
  return fetch(`${API_URL}/contacts`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(getResponse);
}

export function deleteItem(endpoint, itemId) {
  return fetch(`${API_URL}/${endpoint}/${itemId}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(getResponse);
}

export function changePageVisibility(id, isEnabled) {
  return fetch(`${API_URL}/pages/${id}`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      isEnabled,
    }),
  }).then(getResponse);
}

export function getItemInfo(endpoint, itemId) {
  return fetch(`${API_URL}/${endpoint}/${itemId}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(getResponse);
}

export function changeProfileInfo(info) {
  return fetch(`${API_URL}/profile`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(info),
  }).then(getResponse);
}
