import { app } from "./app";
import { CONFIG } from "./config";

const startServer = () => {
  try {
    app.listen(CONFIG.PORT, () => {
      // We add logger
      // eslint-disable-next-line no-console
      console.log(`Server is running on ${CONFIG.PORT}`);
    });
  } catch (_error) {
    process.exit(1);
  }
};

startServer();
