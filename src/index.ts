import app from "./app";

import "./database";

function main() {
  console.log("Server on port", app.get("port"));
  app.listen(app.get("port"));
}
main();
