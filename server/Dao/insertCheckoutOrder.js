import OrderCheckout from "../model/ordersCheckoutModel.js";
/**
 * Insertion of checkout order
 * @param  [type] order       [description]
 * @param  [type] currentShop [description]
 * @return [type]             [void]
 */
export default async function insertFulfilled(order, currentShop) {
  let myorder = new OrderCheckout({
    checkout_id: order.id,
    checkout_token: order.token,
    shop_name: currentShop,
    cart_token: order.cart_token,
    checkout_order_data: order,
    created_at: order.created_at,
  });
  console.log("checkout order inserted succesfully");
  myorder.save();
}
