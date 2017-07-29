import axios from 'axios';

function getData() {
  return {
    type: 'FETCHING_DATA'
  }
}

function getDataSuccess(data) {
  return {
    type: 'FETCHING_DATA_SUCCESS',
    data
  }
}

function getDataFailure() {
  return {
    type: 'FETCHING_DATA_FAILURE'
  }
}

export default function fetchData(url) {
  return dispatch => {
    dispatch(getData());
    axios.get(url)
    .then(res => {
      dispatch(getDataSuccess(res.data.data.children)); 
    })
    .catch(err => dispatch(getDataFailure()));
  }
}
