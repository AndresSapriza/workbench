const users = [
  {
    id: 1,
    name: "kabeza",
    email: "kabeza@gmail.com",
    password: "niidea",
  },
  {
    id: 2,
    name: "rodrigo",
    email: "rodrigo@gmail.com",
    password: "retro",
  },
];

const projects = [
  {
    id: 1,
    name: "WBench",
    description: "It is a tool which enhace projects performances",
    members: [
      {
        id: 1,
        name: "kabeza",
        email: "kabeza@gmail.com",
      },
      {
        id: 2,
        name: "rodrigo",
        email: "rodrigo@gmail.com",
      },
    ],
  },
];
const newUser = {
  id: null,
  name: "",
  email: "",
  password: "",
};

const newProject = {
  id: null,
  name: "",
  description: "",
  type: "",
  admin: "",
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  users,
  projects,
  newUser,
  newProject,
};
