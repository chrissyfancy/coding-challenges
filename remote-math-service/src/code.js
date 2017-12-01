let remoteMathService = (cb) => {
  callOneService((err, one) => {
    callTwoService((err, two) => {
      return cb(undefined, one + two);
    })
  })
}

let callOneService = (cb) => {
  return new Promise((resolve, reject) => {
    cb(undefined, 1);
    if (cb) {
      resolve()
    } else {
      reject()
    }
  })
  .then(response => { return response })
  .catch(error => { console.error(`Error in callOneService: ${error} `)})
}

let callTwoService = (cb) => {
  return new Promise((resolve, reject) => {
    cb(undefined, 2);
    if (cb) {
      resolve()
    } else {
      reject()
    }
  })
  .then(response => { return response })
  .catch(error => { console.error(`Error in callTwoService: ${error} `)})
}

remoteMathService(function(err, answer) {
  if (err) console.log("error ", err);
  if (answer !== 3) {
    console.log("wrong answer", answer);
  } else {
    console.log("correct");
  }
});

exports.remoteMathService = remoteMathService;
exports.callOneService = callOneService;
exports.callTwoService = callTwoService;
