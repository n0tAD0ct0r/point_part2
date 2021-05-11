const { app } = require('./src');

const { NODE_ENV } = process.env;

app.listen(3000, () => {
  console.log(`Environment: ${NODE_ENV}`);
  console.log('Server is starting on port 3000...');
});
