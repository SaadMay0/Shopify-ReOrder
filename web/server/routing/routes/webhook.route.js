import express from "express";
import {
  ordersCreateWebhookHandler,
  appUninstalledWebhookHandler,
} from "../services/webhook/webhook.js";
import "colors";
const router = express.Router();

const webhookTypesFuncMap = {
  orders_updated: ordersCreateWebhookHandler,
  app_uninstalled: appUninstalledWebhookHandler,
};

router.post("/:type", async (req, res) => {
  try {
    console.log("ordersCreateWebhookHandler is working ".red);
    const { body, params, headers } = req;
    const { type } = params;
    const shop = headers["x-shopify-shop-domain"];
    console.log("==========================");
    console.log("webhook received", shop, type);
    console.log("==========================");

    if (!shop || !type) {
      res.status(403).send({});
      return;
    }

    res.status(200).send({});
    await webhookTypesFuncMap[type](body, shop);
  } catch (err) {
    console.log(err);
    res.status(500).send({});
  }
});

export default router;
