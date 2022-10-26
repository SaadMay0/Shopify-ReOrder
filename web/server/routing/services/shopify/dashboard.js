import { Shopify } from "@shopify/shopify-api";
import db from "../../../db/models/postgres/index.js";
// import { orderObj } from "../helper_functions/shopify/helper.js";
import {createScriptTag}  from "../../../shopify/rest_api/online_store/script.tag.js";
import "colors";
// import { Shop } from "@shopify/shopify-api/dist/rest-resources/2022-10/shop.js";


export const dashboard = async (req, res) => {
  let shop = "saad-checkout-ui-ext.myshopify.com"// req.query.shop;
  // const session = await Shopify.Utils.loadOfflineSession(req,res,false);
     const session = await Shopify.Utils.loadOfflineSession(shop);
  createScriptTag(session);
  console.log("dashboard is working".yellow, session);
  res.status(200).send(process.env);
};
   