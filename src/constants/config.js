
const API_URL = 'https://api.pipedrive.com/v1';
const API_KEY = process.env.REACT_APP_API_KEY;

const PEOPLE_URL = `${API_URL}/persons?api_token=${API_KEY}`;

const ORG_URL = `${API_URL}/organizations?api_token=${API_KEY}`;

export {
  API_URL,
  API_KEY,
  PEOPLE_URL,
  ORG_URL
};