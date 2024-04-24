carsItem=document.getElementById("carlist")
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
    }
    ,
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
    }
    ,
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
    }
    ,
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
    }
    ,
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
    }
    ,
    {
        id:8,
        name: "Toyota Corolla3",
        model: "sedan",
        fuelCapacity: 50,
        gearBox: "mecanica",
        passengers: 4,
        price: 25000,
        image:
            "https://s3-alpha-sig.figma.com/img/702f/356e/48fe531e6fd2626c5d1041dbfcde3341?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ko3YmACSiuvhf10VqRgyWmQRydJqezCQ5Q~OXxQp59E9RNWvc3vVFbiQN9BjH0VMuGfQwT5xTqz9sitpApXwszMonjNvwNkwjlz-Ppi3SaCrb79ChT9M5g5BiUnc2QADR3d-LYBjTNgev6wWwlh8SN0CH6scUCIyXHgQI0nP376y~sHNBGq8Gowx0BepeV5gR2XQkTkXuWZuvbvIfm0ZKNna-~zhcO2TCWAcYfqeyL9wlZfmZF4k26L9K996k0yvqjkYHdK4DtlpoM9-dSJewil8nm~h10o-S1lLUCkFimcu1Wenb4FfzGwcQDIrY7W9D4pPmp09VBZ131Bq9PawPQ__",
    }
    ,
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
    }
    ,
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
    }
    
    

];
console.log(cars);
function renderUI(array){
let x=""
for (let i = 0; i < array.length; i++) {


        const car =array[i]
        x += `
        <div class="card col-4">
                <div class="card__header">
                    <i class="d-none secid">${car.id}</i>
                    <div class="card__header__left">
                        <h5>${car.name}</h5>
                        <span>${car.model}</span>
                    </div>
                    <button class="favorite  " onclick="addbasket(${car.id})">
                    <i class="fa-solid fa-heart"></i>
                    </button>
                </div>
                <div class="card__img">
                    <img src="${car.image}" alt="Car Image">
                </div>
                <div class="card__properties">
                    <img src="../assets/img/ferec/gas-station.png" alt="Gas Station">
                    <span>${car.fuelCapacity }L</span>
                    <img src="../assets/img/ferec/Car (1).png" alt="Car">
                    <span>${car.gearBox }</span>
                    <img src="../assets/img/ferec/profile-2user.png" alt="People">
                    <span>${car.passengers } People</span>
                </div>
                <div class="card__bottom">
                    <div class="card__bottom__left">
                        <span><b>$${car.price }.00/</b>day</span>
                    </div>
                    <div class="card__bottom__right">
                        <button id="rent" onclick="deleteCar(${car.id})">delete </button>
                    </div>
                </div>
            </div>
        `; 
    

}

    carsItem.innerHTML=x

}

function deleteCar(id){
    const target = cars.find((car) => car.id == id);
    const indexOfTarget = cars.indexOf(target);
    cars.splice(indexOfTarget, 1);
    localStorage.setItem("cars", JSON.stringify(cars));
    renderUI(cars);
}
renderUI(cars)
