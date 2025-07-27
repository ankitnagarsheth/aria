/*  legacy-transaction-dl-pixel.js  */
export function setup(pixel) {
  /* helper: cents → dollars */
  const toMoney = cents => Math.round(cents) / 100;

  /* fire after payment is complete */
  pixel.on('checkout_completed', ({ data }) => {
    const ck = data.checkout;

    /* ----------  products  ---------- */
    const products = (ck.line_items || []).map(li => ({
      id          : li.product_id,
      sku         : li.sku,
      variantId   : li.variant_id,
      name        : li.title,
      price       : toMoney(li.price),
      quantity    : li.quantity,
      productType : li.product_type,
      brand       : li.vendor
    }));

    /* first coupon, if any */
    const couponCode = (
      ck.discount_applications &&
      ck.discount_applications.length > 0
    )
      ? ck.discount_applications[0].code
      : undefined;

    /* ----------  legacy transaction object  ---------- */
    const transactionData = {
      transactionNumber      : ck.order_id,
      transactionId          : ck.order_number,
      transactionAffiliation : ck.shop,
      transactionTotal       : toMoney(ck.total_price),
      transactionTax         : toMoney(ck.total_tax),
      transactionShipping    : toMoney(ck.shipping_price),
      transactionSubtotal    : toMoney(ck.subtotal_price),
      promoCode              : couponCode,
      currency               : ck.currency,
      products               : products
    };

    /* ----------  push to dataLayer  ---------- */
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(
      transactionData,
      { pageType: 'Transaction', event: 'Transaction' }
    );

    /* dev-only; comment out in prod */
    console.log('DL Transaction →', transactionData);
  });
}
