import { createWebhook } from "../handlers/install/webhook.service.js";
import { EWebhookTopics } from "./helper/webhooks.type.js";

const TOPICS = [
  // EWebhookTopics.APP_UNINSTALLED,
  EWebhookTopics.ORDERS_UPDATED,
];




const installWebhooks = async (session) => {
  try {
    await Promise.all(
      TOPICS.map(async (topic) => {
        const type = topic.split("/").join("_");
        console.log(" installWebhooks topic", topic);

        await createWebhook(session, {
          address: `${process.env.HOST}/api/v1.0/webhook/${type}`,
          topic,
        });
      })
    );
  } catch (err) {
    // ignore when created
  }
};

export default installWebhooks;
