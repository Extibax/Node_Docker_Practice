/* Modules */
import colors from "colors";

/* Components */
import app from "./app.js";

async function main() {
  await app.listen(3000);
  console.log(colors.rainbow("Server on port 3000"));
}

main();
