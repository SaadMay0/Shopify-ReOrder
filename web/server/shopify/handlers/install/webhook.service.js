import { Webhook } from "@shopify/shopify-api/dist/rest-resources/2022-07/index.js";
import "colors"

/**
 * Create a webhook.
 *
 * @param session Session
 * @param params IWebhook
 * @returns
 */

export const createWebhook = async (session, params) => {
  try {
    const webhook = new Webhook({ session });
    webhook.address = params.address;
    webhook.topic = params.topic ;
    webhook.format = params.format;
    webhook.fields = params.fields || undefined;
    console.log("createWebhook Done".red);
    return await webhook.saveAndUpdate();
  } catch (err) {
    console.log(err);
    return undefined;
  }
};
