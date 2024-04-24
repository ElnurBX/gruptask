const listElement = document.getElementById("tables");
let basketItems = JSON.parse(localStorage.getItem("basketItems")) || [];
function renderUI(list) {
    let innerHTML = "";
    for (let i = 0; i < list.length; i++) {
        innerHTML += `
        <tr>
        <th scope="row">${i + 1}</th>
        <td class="d-xs-none"><img  width="50px" height="50px" src="${list[i].item.image}"/></td>
        <td>${list[i].item.name} ${list[i].item.model}</td>
        <td>${list[i].totalPrice} AZN</td>
        <td><button class="btn btn-danger" onclick="deleteItemFromWishlist(${list[i].item.id
            })">delete</button></td>
        <td>${list[i].count}</td>
        <td><button class="btn btn-primary" onclick="addBasket(${list[i].item.id
            })" >add</button></td>
        </tr>
        `;
    }
    listElement.innerHTML = innerHTML;
}
function addBasket(id) {
    let basketItem = basketItems.find((x) => x.item.id == id);
    if (!basketItem) {
        let target = cars.find((car) => car.id == id);
        let newBasketItem = {
            item: target,
            count: 1,
            totalPrice: target.price
        };
        basketItems.push(newBasketItem);
        localStorage.setItem("basketItems", JSON.stringify(basketItems));
        renderUI(basketItems);
    } else {
        basketItem.count++;
        basketItem.totalPrice =basketItem.count *basketItem.item.price ;
        localStorage.setItem("basketItems", JSON.stringify(basketItems));
        renderUI(basketItems);
    }
}
const deleteItemFromWishlist = (id) => {
    let target = basketItems.find((item) => item.item.id == id);
    if (target.count > 1) {
        target.count--;
        target.totalPrice =target.count *target.item.price ;
        localStorage.setItem("basketItems", JSON.stringify(basketItems));
        renderUI(basketItems);
    } else {
        const indexOftarget = basketItems.indexOf(target);
        basketItems.splice(indexOftarget, 1);
        localStorage.setItem("basketItems", JSON.stringify(basketItems));
        renderUI(basketItems);
    }
};
renderUI(basketItems);
