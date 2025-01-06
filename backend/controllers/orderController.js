const middleware = require("../utils/middleware");
const Order = require("../models/productModel");

const addOrderItems = middleware.asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No order items");
    return;
  } else {
    const order = new Order({
      orderItems: orderItems.map((item) => ({
        ...item,
        product: item.product._id,
        _id: undefined,
      })),
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  }
});

const getMyOrders = middleware.asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id });

  res.status(200).json(orders);
});

const getMyOrdersById = middleware.asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    "user, name email"
  );

  if (order) {
    res.status(200).json(order);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});

const updateOrderToPaid = middleware.asyncHandler(async (req, res) => {
  res.send("update order to paid ");
});

const updateOrderToDelivered = middleware.asyncHandler(async (req, res) => {
  res.send("update Order to Delivered");
});

const getOrders = middleware.asyncHandler(async (req, res) => {
  res.send("get all orders items");
});

module.exports = {
  addOrderItems,
  getMyOrders,
  getMyOrdersById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
};
