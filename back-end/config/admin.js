module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9373f02ccd920148a98e37a587b0f6b3'),
  },
});
