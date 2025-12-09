// dev
// module.exports = ({ env }) => ({
//   // host: env("HOST", "0.0.0.0"),
//   port: env.int("PORT", 1337),
//   url: env("RAILWAY_PUBLIC_DOMAIN"), // Railway 自动分配
//   auth: {
//     secret: env('ADMIN_JWT_SECRET'),
//   },
//   app: {
//     keys: env.array('APP_KEYS'),  // 确保这行存在
//   },
// });

// prod
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  // 这里的 url 是关键。只有当设置了 PUBLIC_URL 环境变量时才使用它，否则留空使用默认
  url: env('PUBLIC_URL', ''),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
