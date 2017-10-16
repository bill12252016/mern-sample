var mongoHOST=process.env.MONGO_HOST || 'localhost';

const config = {
  mongoHOST: mongoHOST,
  mongoURL: 'mongodb://'+mongoHOST+':27017/magic-blog-exam',
  port: process.env.PORT || 8000,
};

export default config;
