import { app } from "./app";

const startServer = () => {
  try {
    app.listen(4000, () => {});
  } catch (_error) {
    process.exit(1);
  }
};

startServer();
