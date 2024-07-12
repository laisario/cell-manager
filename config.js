const environment = process.env.NODE_ENV;

const suffix = {
  dev: '-dev',
  development: '-development',
  test: '-test',
};

const options = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: 
    `${process.env.DB_NAME}${suffix[environment] || suffix.test}`,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  dialect: 'DB',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: process.env.DEBUG !== 'false',
};

module.exports = {
  development: {
    ...options,
  },
  test: {
    ...options,
  },
};