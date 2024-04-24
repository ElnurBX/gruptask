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
let id = JSON.parse(localStorage.getItem("id")) || 11;

localStorage.setItem("cars", JSON.stringify(cars));
localStorage.setItem("id", JSON.stringify(id));
// console.log(id, local);

//?form input
const carNameInp = document.getElementById("carName");
const carTypeInp = document.getElementById("carType");
const fuelCapacityInp = document.getElementById("carFuilValum");
const carMotorsTypeInp = document.getElementById("carMotorsType");
const passengersCountInp = document.getElementById("passengersCount");
const carPriceInp = document.getElementById("carPrice");
const imageInp = document.getElementById("carimglink");
//?

class Cars {
    constructor(name, model, passengers, image, fuelCapacity, gearBox, price) {
        this.id = id;
        this.name = name;
        this.model = model;
        this.passengers = passengers;
        this.image = image;
        this.fuelCapacity = fuelCapacity;
        this.gearBox = gearBox;
        this.price = price;
        id++;
        localStorage.setItem("id", id);
    }
}

function getDataFromForm() {
    let nameVal = carNameInp.value;
    let modelVal = carTypeInp.value;
    let fuelCapacityVal = fuelCapacityInp.value;
    let gearboxVal = carMotorsTypeInp.value;
    let passengerCapacityVal = passengersCountInp.value;
    let priceVal = carPriceInp.value;
    let imageVal = imageInp.value;
    if (testFormNull(
        nameVal,
        modelVal,
        fuelCapacityVal,
        gearboxVal,
        passengerCapacityVal,
        priceVal,
        imageVal,
        
    )) {
        alert("zehmet olmasa formu tam doldurun")
        return
    } else {
        return {
            nameVal,
            modelVal,
            fuelCapacityVal,
            gearboxVal,
            passengerCapacityVal,
            priceVal,
            imageVal,
        };
    }
}


function testFormNull(
        nameVal,
        modelVal,
        fuelCapacityVal,
        gearboxVal,
        passengerCapacityVal,
        priceVal,
        imageVal,
    )
    {
        if (
            nameVal.trim()=="" ||
            modelVal.trim()=="" ||
            fuelCapacityVal.trim()=="" ||
            gearboxVal.trim()=="" ||
            passengerCapacityVal.trim()=="" ||
            priceVal.trim()=="" ||
            imageVal.trim()=="" 
        ) {
            return true
        } else {
            return false
        }

}





const add = document.getElementById("add");

add.addEventListener("submit", (e) => {
    e.preventDefault();
    const {
        nameVal,
        modelVal,
        fuelCapacityVal,
        gearboxVal,
        passengerCapacityVal,
        priceVal,
        imageVal,
    } = getDataFromForm();
    let newCar = new Cars(
        nameVal,
        modelVal,
        passengerCapacityVal,
        imageVal,
        fuelCapacityVal,
        gearboxVal,
        priceVal,
    );

    cars.push(newCar);
    localStorage.setItem("cars", JSON.stringify(cars));
    resetForm()
});

function resetForm(){

    carNameInp.value="";
    carTypeInp.value="";
    fuelCapacityInp.value="";
    carMotorsTypeInp.value="";
    passengersCountInp.value="";
    carPriceInp.value="";
    imageInp.value="";
}