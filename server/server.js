const app = require("./app");

const PORT = process.env.port || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`); // eslint-disable-line
});
