import { Shopify } from "@shopify/shopify-api";
import db from "../../../db/models/postgres/index.js";
// import { orderObj } from "../helper_functions/shopify/helper.js";
import "colors"

export const AppInstallations = {
  includes: async function (shopDomain) {
    const shopSessions =
      await Shopify.Context.SESSION_STORAGE.findSessionsByShop(shopDomain);
    console.log(
      shopSessions,
      "shopSessions include function is runing From Stroage".bgCyan,
      shopDomain
    );
    if (shopSessions.length > 0) {
      console.log(
        "shopSessions include function is runing with if condiction".bgCyan
      );
      for (const session of shopSessions) {
        if (session.accessToken) return true;
      }
    }

    return false;
  },

  delete: async function (shopDomain) {
    const shopSessions =
      await Shopify.Context.SESSION_STORAGE.findSessionsByShop(shopDomain);
    await Shopify.Context.SESSION_STORAGE.deleteSession(shopDomain);
    console.log(
      shopDomain,
      "Session Deleted From Stroage".bgCyan,
      shopSessions
    );

    if (shopSessions.length > 0) {
      console.log("shopSessions if condition run".bgCyan);
      await Shopify.Context.SESSION_STORAGE.deleteSessions(
        shopSessions.map((session) => session.id)
      );
    }
  },
};

export const ordersCreateWebhookHandler = async (order, shop) => {
  try {
      await Shopify.Webhooks.Registry.process(req, res);
      console.log(`Webhook processed, returned status code 200`);
    console.log(
      "ordersCreateWebhookHandler is working from webhook handler".bgGreen
    );

    // let obj = await orderObj(order);
    //     const [row, created] = await db.CostCenter.findOrCreate({
    //       where: { costCenterCode: match, storeId: session.id },
    //       defaults: {
    //         ...body,
    //       },
    //     });
  } catch (err) {
     console.log(`Failed to process webhook: ${err.message}`);
     if (!res.headersSent) {
       res.status(500).send(e.message);
     }
    console.log("==================================");
    console.log("Failed to ordersCreateWebhookHandler.");
    console.log("==================================", err);
  }
};
export const appUninstalledWebhookHandler = async (_topic, shop, _body) => {
  await AppInstallations.delete(shop);
};
