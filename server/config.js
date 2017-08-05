const config = {
  mongoHOST: process.env.MONGODB_HOST || 'localhost',
  mongoURL: 'mongodb://'+mongoHOST+':27017/magic-blog-exam',
  port: process.env.PORT || 8000,
};

export default config;
