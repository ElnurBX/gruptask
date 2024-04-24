carsItem = document.getElementsByClassName("carsItem");
let cars = JSON.parse(localStorage.getItem("cars")) || [
    {
        id: 0,
        name: "Toyota Corolla1",
        model: "sedan",
        fuelCapacity: 50,
        gearBox: "mecanica",
        passengers: 4,
        price: 25000,
        image:
            "https://s3-alpha-sig.figma.com/img/702f/356e/48fe531e6fd2626c5d1041dbfcde3341?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ko3YmACSiuvhf10VqRgyWmQRydJqezCQ5Q~OXxQp59E9RNWvc3vVFbiQN9BjH0VMuGfQwT5xTqz9sitpApXwszMonjNvwNkwjlz-Ppi3SaCrb79ChT9M5g5BiUnc2QADR3d-LYBjTNgev6wWwlh8SN0CH6scUCIyXHgQI0nP376y~sHNBGq8Gowx0BepeV5gR2XQkTkXuWZuvbvIfm0ZKNna-~zhcO2TCWAcYfqeyL9wlZfmZF4k26L9K996k0yvqjkYHdK4DtlpoM9-dSJewil8nm~h10o-S1lLUCkFimcu1Wenb4FfzGwcQDIrY7W9D4pPmp09VBZ131Bq9PawPQ__",
    },
    {
        id: 1,
        name: "Toyota Corolla2",
        model: "sedan",
        fuelCapacity: 50,
        gearBox: "mecanica",
        passengers: 4,
        price: 25000,
        image:
            "https://s3-alpha-sig.figma.com/img/702f/356e/48fe531e6fd2626c5d1041dbfcde3341?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ko3YmACSiuvhf10VqRgyWmQRydJqezCQ5Q~OXxQp59E9RNWvc3vVFbiQN9BjH0VMuGfQwT5xTqz9sitpApXwszMonjNvwNkwjlz-Ppi3SaCrb79ChT9M5g5BiUnc2QADR3d-LYBjTNgev6wWwlh8SN0CH6scUCIyXHgQI0nP376y~sHNBGq8Gowx0BepeV5gR2XQkTkXuWZuvbvIfm0ZKNna-~zhcO2TCWAcYfqeyL9wlZfmZF4k26L9K996k0yvqjkYHdK4DtlpoM9-dSJewil8nm~h10o-S1lLUCkFimcu1Wenb4FfzGwcQDIrY7W9D4pPmp09VBZ131Bq9PawPQ__",
    },
    {
        id: 2,
        name: "Toyota Corolla3",
        model: "sedan",
        fuelCapacity: 50,
        gearBox: "mecanica",
        passengers: 4,
        price: 25000,
        image:
            "https://s3-alpha-sig.figma.com/img/702f/356e/48fe531e6fd2626c5d1041dbfcde3341?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ko3YmACSiuvhf10VqRgyWmQRydJqezCQ5Q~OXxQp59E9RNWvc3vVFbiQN9BjH0VMuGfQwT5xTqz9sitpApXwszMonjNvwNkwjlz-Ppi3SaCrb79ChT9M5g5BiUnc2QADR3d-LYBjTNgev6wWwlh8SN0CH6scUCIyXHgQI0nP376y~sHNBGq8Gowx0BepeV5gR2XQkTkXuWZuvbvIfm0ZKNna-~zhcO2TCWAcYfqeyL9wlZfmZF4k26L9K996k0yvqjkYHdK4DtlpoM9-dSJewil8nm~h10o-S1lLUCkFimcu1Wenb4FfzGwcQDIrY7W9D4pPmp09VBZ131Bq9PawPQ__",
    },

    {
        id: 3,
        name: "Toyota Corolla3",
        model: "sedan",
        fuelCapacity: 50,
        gearBox: "mecanica",
        passengers: 4,
        price: 25000,
        image:
            "https://s3-alpha-sig.figma.com/img/702f/356e/48fe531e6fd2626c5d1041dbfcde3341?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ko3YmACSiuvhf10VqRgyWmQRydJqezCQ5Q~OXxQp59E9RNWvc3vVFbiQN9BjH0VMuGfQwT5xTqz9sitpApXwszMonjNvwNkwjlz-Ppi3SaCrb79ChT9M5g5BiUnc2QADR3d-LYBjTNgev6wWwlh8SN0CH6scUCIyXHgQI0nP376y~sHNBGq8Gowx0BepeV5gR2XQkTkXuWZuvbvIfm0ZKNna-~zhcO2TCWAcYfqeyL9wlZfmZF4k26L9K996k0yvqjkYHdK4DtlpoM9-dSJewil8nm~h10o-S1lLUCkFimcu1Wenb4FfzGwcQDIrY7W9D4pPmp09VBZ131Bq9PawPQ__",
    },
    {
        id: 4,
        name: "Toyota Corolla3",
        model: "sedan",
        fuelCapacity: 50,
        gearBox: "mecanica",
        passengers: 4,
        price: 25000,
        image:
            "https://s3-alpha-sig.figma.com/img/702f/356e/48fe531e6fd2626c5d1041dbfcde3341?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ko3YmACSiuvhf10VqRgyWmQRydJqezCQ5Q~OXxQp59E9RNWvc3vVFbiQN9BjH0VMuGfQwT5xTqz9sitpApXwszMonjNvwNkwjlz-Ppi3SaCrb79ChT9M5g5BiUnc2QADR3d-LYBjTNgev6wWwlh8SN0CH6scUCIyXHgQI0nP376y~sHNBGq8Gowx0BepeV5gR2XQkTkXuWZuvbvIfm0ZKNna-~zhcO2TCWAcYfqeyL9wlZfmZF4k26L9K996k0yvqjkYHdK4DtlpoM9-dSJewil8nm~h10o-S1lLUCkFimcu1Wenb4FfzGwcQDIrY7W9D4pPmp09VBZ131Bq9PawPQ__",
    },
    {
        id: 5,
        name: "Toyota Corolla3",
        model: "sedan",
        fuelCapacity: 50,
        gearBox: "mecanica",
        passengers: 4,
        price: 25000,
        image:
            "https://s3-alpha-sig.figma.com/img/702f/356e/48fe531e6fd2626c5d1041dbfcde3341?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ko3YmACSiuvhf10VqRgyWmQRydJqezCQ5Q~OXxQp59E9RNWvc3vVFbiQN9BjH0VMuGfQwT5xTqz9sitpApXwszMonjNvwNkwjlz-Ppi3SaCrb79ChT9M5g5BiUnc2QADR3d-LYBjTNgev6wWwlh8SN0CH6scUCIyXHgQI0nP376y~sHNBGq8Gowx0BepeV5gR2XQkTkXuWZuvbvIfm0ZKNna-~zhcO2TCWAcYfqeyL9wlZfmZF4k26L9K996k0yvqjkYHdK4DtlpoM9-dSJewil8nm~h10o-S1lLUCkFimcu1Wenb4FfzGwcQDIrY7W9D4pPmp09VBZ131Bq9PawPQ__",
    },
    {
        id: 6,
        name: "Toyota Corolla3",
        model: "sedan",
        fuelCapacity: 50,
        gearBox: "mecanica",
        passengers: 4,
        price: 25000,
        image:
            "https://s3-alpha-sig.figma.com/img/702f/356e/48fe531e6fd2626c5d1041dbfcde3341?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ko3YmACSiuvhf10VqRgyWmQRydJqezCQ5Q~OXxQp59E9RNWvc3vVFbiQN9BjH0VMuGfQwT5xTqz9sitpApXwszMonjNvwNkwjlz-Ppi3SaCrb79ChT9M5g5BiUnc2QADR3d-LYBjTNgev6wWwlh8SN0CH6scUCIyXHgQI0nP376y~sHNBGq8Gowx0BepeV5gR2XQkTkXuWZuvbvIfm0ZKNna-~zhcO2TCWAcYfqeyL9wlZfmZF4k26L9K996k0yvqjkYHdK4DtlpoM9-dSJewil8nm~h10o-S1lLUCkFimcu1Wenb4FfzGwcQDIrY7W9D4pPmp09VBZ131Bq9PawPQ__",
    },
    {
        id: 7,
        name: "Toyota Corolla3",
        model: "sedan",
        fuelCapacity: 50,
        gearBox: "mecanica",
        passengers: 4,
        price: 25000,
        image:
            "https://s3-alpha-sig.figma.com/img/702f/356e/48fe531e6fd2626c5d1041dbfcde3341?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ko3YmACSiuvhf10VqRgyWmQRydJqezCQ5Q~OXxQp59E9RNWvc3vVFbiQN9BjH0VMuGfQwT5xTqz9sitpApXwszMonjNvwNkwjlz-Ppi3SaCrb79ChT9M5g5BiUnc2QADR3d-LYBjTNgev6wWwlh8SN0CH6scUCIyXHgQI0nP376y~sHNBGq8Gowx0BepeV5gR2XQkTkXuWZuvbvIfm0ZKNna-~zhcO2TCWAcYfqeyL9wlZfmZF4k26L9K996k0yvqjkYHdK4DtlpoM9-dSJewil8nm~h10o-S1lLUCkFimcu1Wenb4FfzGwcQDIrY7W9D4pPmp09VBZ131Bq9PawPQ__",
    },
    {
        id: 8,
        name: "Toyota Corolla3",
        model: "sedan",
        fuelCapacity: 50,
        gearBox: "mecanica",
        passengers: 4,
        price: 25000,
        image:
            "https://s3-alpha-sig.figma.com/img/702f/356e/48fe531e6fd2626c5d1041dbfcde3341?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ko3YmACSiuvhf10VqRgyWmQRydJqezCQ5Q~OXxQp59E9RNWvc3vVFbiQN9BjH0VMuGfQwT5xTqz9sitpApXwszMonjNvwNkwjlz-Ppi3SaCrb79ChT9M5g5BiUnc2QADR3d-LYBjTNgev6wWwlh8SN0CH6scUCIyXHgQI0nP376y~sHNBGq8Gowx0BepeV5gR2XQkTkXuWZuvbvIfm0ZKNna-~zhcO2TCWAcYfqeyL9wlZfmZF4k26L9K996k0yvqjkYHdK4DtlpoM9-dSJewil8nm~h10o-S1lLUCkFimcu1Wenb4FfzGwcQDIrY7W9D4pPmp09VBZ131Bq9PawPQ__",
    },
    {
        id: 9,
        name: "Toyota Corolla3",
        model: "sedan",
        fuelCapacity: 50,
        gearBox: "mecanica",
        passengers: 4,
        price: 25000,
        image:
            "https://s3-alpha-sig.figma.com/img/702f/356e/48fe531e6fd2626c5d1041dbfcde3341?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ko3YmACSiuvhf10VqRgyWmQRydJqezCQ5Q~OXxQp59E9RNWvc3vVFbiQN9BjH0VMuGfQwT5xTqz9sitpApXwszMonjNvwNkwjlz-Ppi3SaCrb79ChT9M5g5BiUnc2QADR3d-LYBjTNgev6wWwlh8SN0CH6scUCIyXHgQI0nP376y~sHNBGq8Gowx0BepeV5gR2XQkTkXuWZuvbvIfm0ZKNna-~zhcO2TCWAcYfqeyL9wlZfmZF4k26L9K996k0yvqjkYHdK4DtlpoM9-dSJewil8nm~h10o-S1lLUCkFimcu1Wenb4FfzGwcQDIrY7W9D4pPmp09VBZ131Bq9PawPQ__",
    },
    {
        id: 10,
        name: "Toyota Corolla3",
        model: "sedan",
        fuelCapacity: 50,
        gearBox: "mecanica",
        passengers: 4,
        price: 25000,
        image:
            "https://s3-alpha-sig.figma.com/img/702f/356e/48fe531e6fd2626c5d1041dbfcde3341?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ko3YmACSiuvhf10VqRgyWmQRydJqezCQ5Q~OXxQp59E9RNWvc3vVFbiQN9BjH0VMuGfQwT5xTqz9sitpApXwszMonjNvwNkwjlz-Ppi3SaCrb79ChT9M5g5BiUnc2QADR3d-LYBjTNgev6wWwlh8SN0CH6scUCIyXHgQI0nP376y~sHNBGq8Gowx0BepeV5gR2XQkTkXuWZuvbvIfm0ZKNna-~zhcO2TCWAcYfqeyL9wlZfmZF4k26L9K996k0yvqjkYHdK4DtlpoM9-dSJewil8nm~h10o-S1lLUCkFimcu1Wenb4FfzGwcQDIrY7W9D4pPmp09VBZ131Bq9PawPQ__",
    },
];
let fishlist = JSON.parse(localStorage.getItem("fishlist")) || [];
let basketItems = JSON.parse(localStorage.getItem("basketItems")) || [];
console.log(cars);
function renderUI(array) {
    for (let i = 0; i < 3; i++) {
        let x = "";
        for (let j = 0; j < 4; j++) {
            const car = array[i * 4 + j];
            if (checkfishlist(car.id)) {
                test = "check";
            } else {
                test = "";
            }
            x += `
        <div class="card col-4">
                <div class="card__header">
                    <i class="d-none secid">${car.id}</i>
                    <div class="card__header__left">
                        <h5>${car.name}</h5>
                        <span>${car.model}</span>
                    </div>
                    <button class="favorite ${test}   " onclick="addFislist(${car.id})">
                    <i class="fa-solid fa-heart"></i>
                    </button>
                </div>
                <div class="card__img">
                    <img src="${car.image}" alt="Car Image">
                </div>
                <div class="card__properties">
                    <img src="../assets/img/ferec/gas-station.png" alt="Gas Station">
                    <span>${car.fuelCapacity}L</span>
                    <img src="../assets/img/ferec/Car (1).png" alt="Car">
                    <span>${car.gearBox}</span>
                    <img src="../assets/img/ferec/profile-2user.png" alt="People">
                    <span>${car.passengers} People</span>
                </div>
                <div class="card__bottom">
                    <div class="card__bottom__left">
                        <span><b>$${car.price}.00/</b>day</span>
                    </div>
                    <div class="card__bottom__right">
                        <button id="rent" onclick="addBasket(${car.id})" >add </button>
                    </div>
                </div>
            </div>
            
        `;
        }

        carsItem[i].innerHTML = x;
    }
}

renderUI(cars);

function addFislist(id) {
    const fav = document.getElementsByClassName("favorite");
    const target = cars.find((car) => car.id == id);
    const findfis = fishlist.find((car) => car.id == id);
    if (findfis) {
        const indexOfTarget = cars.indexOf(findfis);
        fishlist.splice(indexOfTarget, 1);
        localStorage.setItem("fishlist", JSON.stringify(fishlist));
        fav[id].classList.toggle("check");
    } else {
        fishlist.push(target);
        fav[id].classList.toggle("check");
        localStorage.setItem("fishlist", JSON.stringify(fishlist));
    }
}
function checkfishlist(id) {
    const target = fishlist.find((item) => item.id == id);
    if (target) {
        return true;
    } else {
        return false;
    }
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
    } else {
        basketItem.count++;
        basketItem.totalPrice =basketItem.count * basketItem.item.price ;
                
        localStorage.setItem("basketItems", JSON.stringify(basketItems));
    }
}
