import express from "express";
const router = express.Router();
import ErrorHander from "../utils/errorHandler.js";
import formController from "../controller/formController.js";
import checkoutWebhookController from "../controller/checkoutWebhookController.js";
import orderWebhookController from "../controller/orderWebhookController.js";

/* hits on orderFulfillment*/
router.post("/ordersWebhook", async (req, res) => {
    console.log("🎉 We got an order!hjkkklkl");
    try {
      var order = req.body;
      console.log(order);
      let shopId = req.query.current_shop_id;
      console.log(shopId +' Order-1');
      orderWebhookController(order, req, shopId);
      res.sendStatus(200);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });


//STEP -3
/*hits on checkout webhook*/
router.post("/checkoutWebhook", async (req, res) => {
    console.log("🎉 Checkout order Triggered");
    try {
      const currentShop = req.query.shop;
      // console.log(req.body);
      const order = req.body;
      let shopId = req.query.current_shop_id;
      console.log(shopId +' checkout-1');
      checkoutWebhookController(currentShop, order, shopId);
      res.sendStatus(200);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });



/* hits on checkout form*/
router.post("/demoApp", function (req, res) {
    res.set("Access-Control-Allow-Origin", "*");
    const currentShop2 = req.query.shop;
    console.log(currentShop2 + " the thing we want at checkout demo app ");
    const Student = req.body;
    var result = formController(Student, currentShop2, res);
    if (result != "failed") {
      res.json({
        msg: "success",
        status: 200,
        data: result,
      });
    } else {
      console.log("shop not found");
      res.json({
        msg: "shop not found",
        status: 404,
      });
    }
  });

export default router;
