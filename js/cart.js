let articles = [];

function display(articles) {
  let cont = "";
  for (article of articles) {
    cont += `
  
  <tr>
    <th scope="row"><img src="${article.image}" class ="w-25 p-3" width="10px"> <span>${article.name}</span></th>
    <td id="cost">USD ${article.unitCost}</td>
    <td><input id="valueCount" type="number" value=1 min = 1 onclick="subtotal(this.value)"></td>
    <td id="subtotal"><span>USD</span> </td>
  </tr>
 `;
  }
  document.getElementById("cart").innerHTML = cont;
}

function subtotal(number) {
  for (let article of articles) {
    subtotal1 = article.unitCost * number;
    a = article.currency + "" + subtotal1;
    document.getElementById("subtotal").innerHTML = a;
    showCost();
  }
}

function showCost() {
  let shippingcost = subtotal1 * number;
  shippingcost.toFixed(2)
  document.getElementById("comissionText").innerHTML = shippingcost.toFixed(2);

  document.getElementById("totalCostText").innerHTML = subtotal1 + shippingcost;
  document.getElementById("productCostText").innerHTML = subtotal1;
}

function showAlertSuccess() {
  alert("Compraste con Éxito");
}

function showAlertError() {
  alert("Revisa que todos los datos esten completos");
}
function Requirements() {
  let nombre = document.getElementById("calle").value;
  let num = document.getElementById("num").value;
  let corner = document.getElementById("esquina").value;
  let check2 = document.getElementById("bronze").checked;
  let check1 = document.getElementById("silver").checked;
  let check3 = document.getElementById("gold").checked;
  let cardcode = document.getElementById("cardcode").value;
  let cardnum = document.getElementById("cardnum").value;
  let carddate = document.getElementById("carddate").value;

  if ((nombre || num || corner || cardcode || cardnum || carddate) === "") {
    showAlertError();
    window.location("cart.html");
  } else if ((check1 || check2 || check3) === true) {
    showAlertSuccess();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  getJSONData(CART_INFO_URL + "25801.json").then(function (resultObj) {
    if (resultObj.status === "ok") {
      articles = resultObj.data.articles;
      display(articles);
      subtotal(1);

      showCost();
    }
  });

  document.getElementById("bronze").addEventListener("change", function () {
    number = 0.15;
    showCost();
  });
  document.getElementById("silver").addEventListener("change", function () {
    number = 0.07;
    showCost();
  });
  document.getElementById("gold").addEventListener("change", function () {
    number = 0.05;
    showCost();
  });
  document.getElementById("end").addEventListener("click", function () {
    Requirements();
  });
});
