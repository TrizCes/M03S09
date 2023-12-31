const jwt = require('jsonwebtoken');

const payload = {
  sub: '1234567890',
  name: 'Foo',
  email: 'foo@email.com',
  admin: true,
  exp: Math.floor(Date.now() / 1000) + 60 * 60,
};

const secretKey = 'secret';

const token = jwt.sign(payload, secretKey, { algorithm: 'HS256' });

console.log(token);
