import dotenv from "dotenv";

dotenv.config();

const {
  APP_PORT,
  APP_NAME,
  NODE_ENV,
  DB_DATABASE,
  DB_USERNAME,
  DB_PASSWORD,
  DB_HOST,
  DB_DIALECT,
  DB_LOGGING,
  HOST,
  SHOPIFY_API_KEY,
  SHOPIFY_API_SECRET,
  SHOPIFY_WEBHOOK_SECRET,
  SCOPES,
  SHOP,
  ADH_SHOP,
} = process.env;

const IS_PROD = NODE_ENV === "production";
const IS_LOCAL = "isLocal" in process.env && process.env.isLocal === "true";

const sharedConfig = {
  SHOPIFY_API_KEY,
  SHOPIFY_API_SECRET,
  SHOPIFY_WEBHOOK_SECRET,
  SHOP,
  // HOST: HOST.replace(/https:\/\//, ""),
  // SCOPES: SCOPES.split(","),
  APP_PORT: APP_PORT || 8081,
  APP_NAME,
  NODE_ENV,
  IS_PROD,
  IS_LOCAL,  
  ADH_SHOP,
  DATABASE: {
    DATABASE: DB_DATABASE,
    USERNAME: DB_USERNAME,
    PASSWORD: DB_PASSWORD,
    HOST: DB_HOST,
    DIALECT: DB_DIALECT,
    LOGGING: DB_LOGGING,
  },
};

export default sharedConfig;
