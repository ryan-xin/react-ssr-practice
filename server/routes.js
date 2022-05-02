const { Counter } = require("../src/components/counter");
const { Post } = require("../src/components/post");

// exports an array of objects and each object contains the route path and the component which will be rendered inside App component based on the route path.
module.exports = [
  {
    path: "/",
    exact: true,
    component: Counter,
  },
  {
    path: "/post",
    exact: true,
    component: Post,
  },
];
