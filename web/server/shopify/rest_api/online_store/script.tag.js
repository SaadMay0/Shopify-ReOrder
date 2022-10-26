import { ScriptTag } from "@shopify/shopify-api/dist/rest-resources/2022-10/index.js";

export const createScriptTag = async (session) => {
  try {
    const script_tag = new ScriptTag({ session: session });
    script_tag.event = "onload";
    script_tag.src = "";
    return script_tag.save({
      update: true,
    });
  } catch (err) {
    console.log(` Catch Error createScriptTag = ${err.name}`, err);
  }
};

{/* <button class="sanomads_reorder" data-order-id="{{ order.id }}">
  reorder
</button> */}
