const app = require("./src/app");
const connectDB = require("./src/config/db");
const { port } = require("./src/secret");

app.listen(port, async () => {
  console.log(`Listening to port ${port}`);
  await connectDB();
});
