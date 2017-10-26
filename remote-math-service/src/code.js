remoteMathService = (cb) => {
  var one, two;
  callOneService(function(err, num) {
    one = num;
  });
  callTwoService(function(err, num) {
    two = num;
  });
  setTimeout(function() {
    return cb(undefined, one + two);
  }, 2000);
}

var callOneService = (cb) => {
  setTimeout(function() {
    return cb(undefined, 1);
  }, 1000);
}

var callTwoService = (cb) => {
  setTimeout(function() {
    return cb(undefined, 2);
  }, 1000);
}

remoteMathService(function(err, answer) {
  if (err) console.log("error ", err);
  if (answer !== 3) {
    console.log("wrong answer", answer);
  } else {
    console.log("correct");
  }
});
