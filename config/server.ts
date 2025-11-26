// dev
// export default ({ env }) => ({
//   host: env('HOST', '0.0.0.0'),
//   port: env.int('PORT', 1337),
//   app: {
//     keys: env.array('APP_KEYS'),
//   },
// });

// prod
module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 8080),
  url: env("RAILWAY_PUBLIC_DOMAIN"), // Railway 自动分配
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
});
