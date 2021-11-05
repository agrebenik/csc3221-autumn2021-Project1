// setup the XHR object
const http = new coreHTTP;

// Create Data
const data = {
  userId: "1",
  title: "Special Task",
  completed: false
};

// setup the endpoints
const endPt = "https://jsonplaceholder.typicode.com/todos/";

const cmd = "GET ALL";

switch (cmd) {
  case "GET ALL":
    http.get(endPt)
      .then(data => console.log(data))
      .catch(err => console.log(err));
  break;
  case "GET ONE":
    http.get(endPt+3)
      .then(data => console.log(data))
      .catch(err => console.log(err));
    break;
  case "POST":
    http.post(endPt, data)
      .then(data => console.log(data))
      .catch(err => console.log(err));
    break;
  case "PUT":
    http.put(endPt+3, data)
      .then(data => console.log(data))
      .catch(err => console.log(err));
    break;
  case "DELETE":
    http.delete(endPt+3)
      .then(data => console.log(data))
      .catch(err => console.log(err));
    break;
};
