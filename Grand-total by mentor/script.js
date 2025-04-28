function calculate() {
  let price_1 = parseFloat(document.getElementById("price_1").value);
  let qty_1 = parseFloat(document.getElementById("qty_1").value);
  let total_1 = price_1 * qty_1;
  document.getElementById("total_1").value = total_1.toFixed(2);

  let price_2 = parseFloat(document.getElementById("price_2").value);
  let qty_2 = parseFloat(document.getElementById("qty_2").value);
  let total_2 = price_2 * qty_2;
  document.getElementById("total_2").value = total_2.toFixed(2);

  let subtotal = total_1 + total_2;
  document.getElementById("subtotal").innerHTML = subtotal.toFixed(2);

  let discount = parseFloat(document.getElementById("discount").value);
  let discountAmount = (subtotal * discount) / 100;
  let vat = parseFloat(document.getElementById("vat").value);
  let vatTotal = (subtotal * vat) / 100;
  //   /  let grand_total = subtotal - (subtotal * discount) / 100;
  let grand_total = subtotal + vatTotal - discountAmount;
  document.getElementById("grandtotal").innerHTML = grand_total.toFixed(2);

  //   let discount = parseFloat(document.getElementById("discount").value);
  //   let vat = parseFloat(document.getElementById("").value);
  //   let vatAmount = (subtotal * 15) / 115;
  //   let grand_total = subtotal + vatAmount - (subtotal * discount) / 100;
  //   document.getElementById("grandtotal").innerHTML = grand_total.toFixed(2);
}
