module.exports = {
  dialect: 'postgres',
  host: '192.168.99.103',
  port: '5434',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    timestamps: true,
    underscored: true,
    underscodredAll: true,
  },
};
