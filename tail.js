

function tail(array) {
  if (Array.isArray(array) && array.length > 0) {
    return array.slice(-1);
  } else {
    return []; // Return an empty array if the input array is empty or has only one element
  }
}

module.exports = tail

