import { PEOPLE_URL, ORG_URL } from '../constants/config';
  
  const API = {
    fetchPersons: async () => {
      const endpoint = PEOPLE_URL;
      return await (await fetch(endpoint)).json();
    },
    deletePerson: async (personId) => {

      const endpoint = PEOPLE_URL + `&ids=${personId}`;

      return await (await fetch(endpoint, {method: 'DELETE'})).json();
    },
    addPerson: async (data) => {
      const endpoint = PEOPLE_URL;

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

      return await (await fetch(endpoint, requestOptions)).json();
    },
    fetchOrganizations: async () => {
      const endpoint = ORG_URL;

      return await (await fetch(endpoint)).json();
    }
  };
  
  export default API;