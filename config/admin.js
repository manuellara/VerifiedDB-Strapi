module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'adec8b768779101f06d98ca1b106b47b'),
  },
});
