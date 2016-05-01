import data from './data.json';

function get() {
  return data;
}

function post(newData) {
  return data.concat(newData);
}

export default {
  get,
  post,
};
