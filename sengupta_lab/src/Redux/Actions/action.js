// actions.js
import axios from 'axios';

export const fetchJobs = () => {
  return (dispatch) => {
    axios
      .get('http://localhost:8000/jobs')
      .then((response) => {
        dispatch({ type: 'FETCH_JOBS', payload: response.data });
      })
      .catch((error) => {
        console.error('Error fetching to get jobs list:', error);
      });
  };
};