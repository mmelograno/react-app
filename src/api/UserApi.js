import delay from './delay';

const users = [
  {
    id: 1,
    email: 'user1@test.com',
    firstName: 'User1',
    lastName: 'Doe1',
    password: '123456',
    role: 'ADMIN',
    notifications: [{
      id: 0,
      title: 'Executive Team',
      timestamp: '3 mins ago',
      message: 'This is a test.'
    }, {
      id: 1,
      title: 'Support Team',
      timestamp: '10 mins ago',
      message: 'Application went down on payment tests.'
    }]
  },
  {
    id: 2,
    email: 'user2@test.com',
    firstName: 'User2',
    lastName: 'Doe2',
    password: '123456',
    role: 'EMPLOYEE',
    notifications: [{
      id: 0,
      title: 'Support Team',
      timestamp: '3 mins ago',
      message: 'This is a test.'
    }, {
      id: 1,
      title: 'Support Team',
      timestamp: '10 mins ago',
      message: 'Application went down on payment tests.'
    }]
  },
  {
    id: 3,
    email: 'user3@test.com',
    firstName: 'User3',
    lastName: 'Doe3',
    password: '123456',
    role: 'EMPLOYEE',
    notifications: [{
      id: 0,
      title: 'Support Team',
      timestamp: '3 mins ago',
      message: 'This is a test.'
    }, {
      id: 1,
      title: 'Support Team',
      timestamp: '10 mins ago',
      message: 'Application went down on payment tests.'
    }]
  },
];

const generateId = () => {
  return users.length + 1;
};

class UserApi {
  static getUsers() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], users));
      }, delay);
    });
  }

  static singin(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user.email && user.password) {
          const userFound = users.filter(a => a.email === user.email && a.password === user.password);
          if (userFound.length > 0) {
            const userLoggedIn = userFound.pop();
            userLoggedIn.token = 'fake-jwt-token';
            resolve(userLoggedIn);
          } else {
            reject('Invalid credentials.');
          }
        } else {
          reject('Missing credentials.');
        }
      });
    });
  }

  static saveUser(user) {
    user = Object.assign({}, user); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user.id) {
          const existingUserIndex = users.findIndex(a => a.id === user.id);
          users.splice(existingUserIndex, 1, user);
        } else {
          const existingUserIndex = users.findIndex(a => a.email === user.email);
          if (existingUserIndex >= 0) {
            reject('User already exists.');
          } else {
            user.id = generateId();
            users.push(user);
          }
        }
        resolve(user);
      }, delay);
    });
  }
}

export default UserApi;
