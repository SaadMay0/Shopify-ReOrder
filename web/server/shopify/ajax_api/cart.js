export const addItemsToCart = async (items) => {
  let formData = {
    items: items,
  };

  return fetch(window.Shopify.routes.root + "cart/add.js", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const clearCartItems = async (items) => {
  let formData = {
    items: items,
  };

  return fetch(window.Shopify.routes.root + "cart/clear.js", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

// document
//   .querySelectorAll(".sanomads_reorder")
//   .forEach((reorderBtn) => {
//     reorderBtn.addEventListener("click", function () {
//       // grab the order id
//       // make a call to the app server with the order id, and get the items in that order
//       // clear cart
//       // pass the items to addItemsToCart function
//       // redirect to the checkout page
//     });
//   })
  
