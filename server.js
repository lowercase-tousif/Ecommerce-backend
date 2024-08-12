const app = require("./src/app");
const { port } = require("./src/secret");

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
