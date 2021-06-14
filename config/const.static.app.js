import packageJSON from "../package.json";
import { ENV } from "./const.webpack";

export const API_ENV = {
  production: {
    product: {
      version: process.env.PRODUCT_PROD_VER,
      host: process.env.PRODUCT_PROD_HOST,
      port: process.env.PRODUCT_PROD_PORT,
    },
  },
  development: {
    product: {
      version: process.env.PRODUCT_DEV_VER,
      host: process.env.PRODUCT_DEV_HOST,
      port: process.env.PRODUCT_DEV_PORT,
    },
  },
};

const VARIABLES = {
  DEBUGGING: false,
  MONITORING: true,
  VERSION: packageJSON.version,
};

const ENV_VARIABLES = {
  production: {
    "process.env.SETTING": VARIABLES,
    "process.env.NODE_ENV": "production",
    appEnv: {
      ...API_ENV[ENV],
    },
  },
  development: {
    "process.env.SETTING": VARIABLES,
    "process.env.NODE_ENV": "development",
    appEnv: {
      ...API_ENV[ENV],
    },
  },
};

export default {
  variables: ENV_VARIABLES[ENV],
};
