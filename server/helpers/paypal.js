const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AVGM3TIIt7u6APxwS7dJPUiuqK1erU9BiVd8TJpWaD0TdiSXhDC0reqOumGehYvFwz3eNi2M5PtV4GFF",
  client_secret: "EG-mz9BdALLUtnmMs8KG3besax6esABD0V_VU2p07wMHHSPyu7ybA58-6M93s11mXBEpWfS-Ne4_RYoe",
});

module.exports = paypal;
