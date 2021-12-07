module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e9b662a5b8b6aba52318ae629c5b839c'),
  },
});
