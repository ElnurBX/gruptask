
let local = JSON.parse(localStorage.getItem('cars')) || [
    {
        id: 0,
        basket: false,
        carName: "Toyota Corolla1",
        carType: "sedan",
        carFuelVolume: 50,
        carMotorsType: "mecanica",
        passengersCount: 4,
        carPrice: 25000,
        carImgLink: "https://s3-alpha-sig.figma.com/img/702f/356e/48fe531e6fd2626c5d1041dbfcde3341?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ko3YmACSiuvhf10VqRgyWmQRydJqezCQ5Q~OXxQp59E9RNWvc3vVFbiQN9BjH0VMuGfQwT5xTqz9sitpApXwszMonjNvwNkwjlz-Ppi3SaCrb79ChT9M5g5BiUnc2QADR3d-LYBjTNgev6wWwlh8SN0CH6scUCIyXHgQI0nP376y~sHNBGq8Gowx0BepeV5gR2XQkTkXuWZuvbvIfm0ZKNna-~zhcO2TCWAcYfqeyL9wlZfmZF4k26L9K996k0yvqjkYHdK4DtlpoM9-dSJewil8nm~h10o-S1lLUCkFimcu1Wenb4FfzGwcQDIrY7W9D4pPmp09VBZ131Bq9PawPQ__"
    },{
        id: 1,
        basket: false,
        carName: "Toyota Corolla2",
        carType: "sedan",
        carFuelVolume: 50,
        carMotorsType: "mecanica",
        passengersCount: 4,
        carPrice: 25000,
        carImgLink: "https://s3-alpha-sig.figma.com/img/702f/356e/48fe531e6fd2626c5d1041dbfcde3341?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ko3YmACSiuvhf10VqRgyWmQRydJqezCQ5Q~OXxQp59E9RNWvc3vVFbiQN9BjH0VMuGfQwT5xTqz9sitpApXwszMonjNvwNkwjlz-Ppi3SaCrb79ChT9M5g5BiUnc2QADR3d-LYBjTNgev6wWwlh8SN0CH6scUCIyXHgQI0nP376y~sHNBGq8Gowx0BepeV5gR2XQkTkXuWZuvbvIfm0ZKNna-~zhcO2TCWAcYfqeyL9wlZfmZF4k26L9K996k0yvqjkYHdK4DtlpoM9-dSJewil8nm~h10o-S1lLUCkFimcu1Wenb4FfzGwcQDIrY7W9D4pPmp09VBZ131Bq9PawPQ__"
    },{
        id: 2,
        basket: false,
        carName: "Toyota Corolla3",
        carType: "sedan",
        carFuelVolume: 50,
        carMotorsType: "mecanica",
        passengersCount: 4,
        carPrice: 25000,
        carImgLink: "https://s3-alpha-sig.figma.com/img/702f/356e/48fe531e6fd2626c5d1041dbfcde3341?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ko3YmACSiuvhf10VqRgyWmQRydJqezCQ5Q~OXxQp59E9RNWvc3vVFbiQN9BjH0VMuGfQwT5xTqz9sitpApXwszMonjNvwNkwjlz-Ppi3SaCrb79ChT9M5g5BiUnc2QADR3d-LYBjTNgev6wWwlh8SN0CH6scUCIyXHgQI0nP376y~sHNBGq8Gowx0BepeV5gR2XQkTkXuWZuvbvIfm0ZKNna-~zhcO2TCWAcYfqeyL9wlZfmZF4k26L9K996k0yvqjkYHdK4DtlpoM9-dSJewil8nm~h10o-S1lLUCkFimcu1Wenb4FfzGwcQDIrY7W9D4pPmp09VBZ131Bq9PawPQ__"
    },{
        id: 3,
        basket: false,
        carName: "Toyota Corolla4",
        carType: "sedan",
        carFuelVolume: 50,
        carMotorsType: "mecanica",
        passengersCount: 4,
        carPrice: 25000,
        carImgLink: "https://s3-alpha-sig.figma.com/img/702f/356e/48fe531e6fd2626c5d1041dbfcde3341?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ko3YmACSiuvhf10VqRgyWmQRydJqezCQ5Q~OXxQp59E9RNWvc3vVFbiQN9BjH0VMuGfQwT5xTqz9sitpApXwszMonjNvwNkwjlz-Ppi3SaCrb79ChT9M5g5BiUnc2QADR3d-LYBjTNgev6wWwlh8SN0CH6scUCIyXHgQI0nP376y~sHNBGq8Gowx0BepeV5gR2XQkTkXuWZuvbvIfm0ZKNna-~zhcO2TCWAcYfqeyL9wlZfmZF4k26L9K996k0yvqjkYHdK4DtlpoM9-dSJewil8nm~h10o-S1lLUCkFimcu1Wenb4FfzGwcQDIrY7W9D4pPmp09VBZ131Bq9PawPQ__"
    },{
        id: 4,
        basket: false,
        carName: "Toyota Corolla5",
        carType: "sedan",
        carFuelVolume: 50,
        carMotorsType: "mecanica",
        passengersCount: 4,
        carPrice: 25000,
        carImgLink: "https://s3-alpha-sig.figma.com/img/702f/356e/48fe531e6fd2626c5d1041dbfcde3341?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ko3YmACSiuvhf10VqRgyWmQRydJqezCQ5Q~OXxQp59E9RNWvc3vVFbiQN9BjH0VMuGfQwT5xTqz9sitpApXwszMonjNvwNkwjlz-Ppi3SaCrb79ChT9M5g5BiUnc2QADR3d-LYBjTNgev6wWwlh8SN0CH6scUCIyXHgQI0nP376y~sHNBGq8Gowx0BepeV5gR2XQkTkXuWZuvbvIfm0ZKNna-~zhcO2TCWAcYfqeyL9wlZfmZF4k26L9K996k0yvqjkYHdK4DtlpoM9-dSJewil8nm~h10o-S1lLUCkFimcu1Wenb4FfzGwcQDIrY7W9D4pPmp09VBZ131Bq9PawPQ__"
    },{
        id: 5,
        basket: false,
        carName: "Toyota Corolla6",
        carType: "sedan",
        carFuelVolume: 50,
        carMotorsType: "mecanica",
        passengersCount: 4,
        carPrice: 25000,
        carImgLink: "https://s3-alpha-sig.figma.com/img/702f/356e/48fe531e6fd2626c5d1041dbfcde3341?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ko3YmACSiuvhf10VqRgyWmQRydJqezCQ5Q~OXxQp59E9RNWvc3vVFbiQN9BjH0VMuGfQwT5xTqz9sitpApXwszMonjNvwNkwjlz-Ppi3SaCrb79ChT9M5g5BiUnc2QADR3d-LYBjTNgev6wWwlh8SN0CH6scUCIyXHgQI0nP376y~sHNBGq8Gowx0BepeV5gR2XQkTkXuWZuvbvIfm0ZKNna-~zhcO2TCWAcYfqeyL9wlZfmZF4k26L9K996k0yvqjkYHdK4DtlpoM9-dSJewil8nm~h10o-S1lLUCkFimcu1Wenb4FfzGwcQDIrY7W9D4pPmp09VBZ131Bq9PawPQ__"
    },{
        id:6,
        basket: false,
        carName: "Toyota Corolla6",
        carType: "sedan",
        carFuelVolume: 50,
        carMotorsType: "mecanica",
        passengersCount: 4,
        carPrice: 25000,
        carImgLink: "https://s3-alpha-sig.figma.com/img/702f/356e/48fe531e6fd2626c5d1041dbfcde3341?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ko3YmACSiuvhf10VqRgyWmQRydJqezCQ5Q~OXxQp59E9RNWvc3vVFbiQN9BjH0VMuGfQwT5xTqz9sitpApXwszMonjNvwNkwjlz-Ppi3SaCrb79ChT9M5g5BiUnc2QADR3d-LYBjTNgev6wWwlh8SN0CH6scUCIyXHgQI0nP376y~sHNBGq8Gowx0BepeV5gR2XQkTkXuWZuvbvIfm0ZKNna-~zhcO2TCWAcYfqeyL9wlZfmZF4k26L9K996k0yvqjkYHdK4DtlpoM9-dSJewil8nm~h10o-S1lLUCkFimcu1Wenb4FfzGwcQDIrY7W9D4pPmp09VBZ131Bq9PawPQ__"
    },
    {
        id:7,
        basket: false,
        carName: "Toyota Corolla6",
        carType: "sedan",
        carFuelVolume: 50,
        carMotorsType: "mecanica",
        passengersCount: 4,
        carPrice: 25000,
        carImgLink: "https://s3-alpha-sig.figma.com/img/702f/356e/48fe531e6fd2626c5d1041dbfcde3341?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ko3YmACSiuvhf10VqRgyWmQRydJqezCQ5Q~OXxQp59E9RNWvc3vVFbiQN9BjH0VMuGfQwT5xTqz9sitpApXwszMonjNvwNkwjlz-Ppi3SaCrb79ChT9M5g5BiUnc2QADR3d-LYBjTNgev6wWwlh8SN0CH6scUCIyXHgQI0nP376y~sHNBGq8Gowx0BepeV5gR2XQkTkXuWZuvbvIfm0ZKNna-~zhcO2TCWAcYfqeyL9wlZfmZF4k26L9K996k0yvqjkYHdK4DtlpoM9-dSJewil8nm~h10o-S1lLUCkFimcu1Wenb4FfzGwcQDIrY7W9D4pPmp09VBZ131Bq9PawPQ__"
    },
    {
        id:8,
        basket: false,
        carName: "Toyota Corolla6",
        carType: "sedan",
        carFuelVolume: 50,
        carMotorsType: "mecanica",
        passengersCount: 4,
        carPrice: 25000,
        carImgLink: "https://s3-alpha-sig.figma.com/img/702f/356e/48fe531e6fd2626c5d1041dbfcde3341?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ko3YmACSiuvhf10VqRgyWmQRydJqezCQ5Q~OXxQp59E9RNWvc3vVFbiQN9BjH0VMuGfQwT5xTqz9sitpApXwszMonjNvwNkwjlz-Ppi3SaCrb79ChT9M5g5BiUnc2QADR3d-LYBjTNgev6wWwlh8SN0CH6scUCIyXHgQI0nP376y~sHNBGq8Gowx0BepeV5gR2XQkTkXuWZuvbvIfm0ZKNna-~zhcO2TCWAcYfqeyL9wlZfmZF4k26L9K996k0yvqjkYHdK4DtlpoM9-dSJewil8nm~h10o-S1lLUCkFimcu1Wenb4FfzGwcQDIrY7W9D4pPmp09VBZ131Bq9PawPQ__"
    },
    {
        id:9,
        basket: false,
        carName: "Toyota Corolla6",
        carType: "sedan",
        carFuelVolume: 50,
        carMotorsType: "mecanica",
        passengersCount: 4,
        carPrice: 25000,
        carImgLink: "https://s3-alpha-sig.figma.com/img/702f/356e/48fe531e6fd2626c5d1041dbfcde3341?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ko3YmACSiuvhf10VqRgyWmQRydJqezCQ5Q~OXxQp59E9RNWvc3vVFbiQN9BjH0VMuGfQwT5xTqz9sitpApXwszMonjNvwNkwjlz-Ppi3SaCrb79ChT9M5g5BiUnc2QADR3d-LYBjTNgev6wWwlh8SN0CH6scUCIyXHgQI0nP376y~sHNBGq8Gowx0BepeV5gR2XQkTkXuWZuvbvIfm0ZKNna-~zhcO2TCWAcYfqeyL9wlZfmZF4k26L9K996k0yvqjkYHdK4DtlpoM9-dSJewil8nm~h10o-S1lLUCkFimcu1Wenb4FfzGwcQDIrY7W9D4pPmp09VBZ131Bq9PawPQ__"
    },
    {
        id:10,
        basket: false,
        carName: "Toyota Corolla6",
        carType: "sedan",
        carFuelVolume: 50,
        carMotorsType: "mecanica",
        passengersCount: 4,
        carPrice: 25000,
        carImgLink: "https://s3-alpha-sig.figma.com/img/702f/356e/48fe531e6fd2626c5d1041dbfcde3341?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ko3YmACSiuvhf10VqRgyWmQRydJqezCQ5Q~OXxQp59E9RNWvc3vVFbiQN9BjH0VMuGfQwT5xTqz9sitpApXwszMonjNvwNkwjlz-Ppi3SaCrb79ChT9M5g5BiUnc2QADR3d-LYBjTNgev6wWwlh8SN0CH6scUCIyXHgQI0nP376y~sHNBGq8Gowx0BepeV5gR2XQkTkXuWZuvbvIfm0ZKNna-~zhcO2TCWAcYfqeyL9wlZfmZF4k26L9K996k0yvqjkYHdK4DtlpoM9-dSJewil8nm~h10o-S1lLUCkFimcu1Wenb4FfzGwcQDIrY7W9D4pPmp09VBZ131Bq9PawPQ__"
    },
]

let fishlist=JSON.parse(localStorage.getItem('fishlist')) || [];
localStorage.setItem('cars', JSON.stringify(local));
localStorage.setItem('fishlist', JSON.stringify(fishlist));

console.log("test1");
function detastractcar(carName,carType,carFuilValum,passengersCount,carPrice,carMotorsType,carimglink,id){
    
    let data={
        carName:carName,
        carType:carType,
        carFuilValum:carFuilValum,
        carMotorsType:carMotorsType,
        passengersCount:passengersCount,
        carPrice:carPrice,
        carimglink:carimglink,
        id:id
    }
    return data
}
console.log("test2");
//!form add
const carNameInp =document.getElementById("carName")
const carTypeInp =document.getElementById("carType")
const carFuilValumInp =document.getElementById("carFuilValum")
const carMotorsTypeInp =document.getElementById("carMotorsType")
const passengersCountInp =document.getElementById("passengersCount")
const carPriceInp =document.getElementById("carPrice")
const carimglinkInp =document.getElementById("carimglink")

const add=document.getElementById("add")

console.log("test1");
const testnull = (carNameVal, carTypeVal, carFuilValumVal, carMotorsTypeVal, carPriceVal, carimglinkVal) => {
    
    if (!(carNameVal.trim() === "")  && !( carTypeVal.trim() === "")  &&  !(carFuilValumVal.trim() === "")  &&  !(carMotorsTypeVal.trim() === "")  &&  !(carPriceVal.trim() === "")  &&  !(carimglinkVal.trim() === "")) {
        alert("Please fill in all fields");
        alert("All fields are filled correctly");  
        return true   ;
        
    } else {
        
        return false;
        
        
    }
}
console.log("test1");
const cars =document.getElementsByClassName("cars")
function cardfild(local) {
let count=0;

    for (let i = 0; i < cars.length; i++) {
        let inner = '';
    
        for (let j = count; j <count+4; j++) {
            console.log(j);
            
            const car = local[j];
            if (car.basket) {
                buttonlike="check"
            }else{
                buttonlike=""
            }
            inner += `
            <div class="card col-4">
                <div class="card__header">
                    <i class="d-none secid">${car.id}</i>
                    <div class="card__header__left">
                        <h5>${car.carName}</h5>
                        <span>${car.carType}</span>
                    </div>
                    <button class="favorite ${buttonlike} " onclick="addbasket(${car.id})">
                    <i class="fa-solid fa-heart"></i>
                    </button>
                </div>
                <div class="card__img">
                    <img src="${car.carImgLink}" alt="Car Image">
                </div>
                <div class="card__properties">
                    <img src="../assets/img/ferec/gas-station.png" alt="Gas Station">
                    <span>${car.carFuelVolume}L</span>
                    <img src="../assets/img/ferec/Car (1).png" alt="Car">
                    <span>${car.carMotorsType}</span>
                    <img src="../assets/img/ferec/profile-2user.png" alt="People">
                    <span>${car.passengersCount} People</span>
                </div>
                <div class="card__bottom">
                    <div class="card__bottom__left">
                        <span><b>$${car.carPrice}.00/</b>day</span>
                    </div>
                    <button id="rent">Rent Now</button>
                </div>
            </div>
        `;
        
        }  count+=4

        cars[i].innerHTML=inner
    }
    
    
}
console.log("test1");
const favorite = document.getElementsByClassName('favorite');

const secid=document.getElementsByClassName("secid")



cardfild(local) 
function addbasket(id) {
 
    let basketFound = local.find((car) => car.id === id);
    if (!basketFound) {
        console.error(`Car with ID ${id} not found`);
        return;
    }

   
    basketFound.basket = !basketFound.basket;
 
    if (basketFound.basket) {
 
        fishlist.push(basketFound);
        favorite[id-1].classList.toggle("check")
        console.log(`Car with ID ${id} added to basket.`);
    } else {

        fishlist = fishlist.filter(car => car.id !== id);
        favorite[id-1].classList.toggle("check")
        console.log(`Car with ID ${id} removed from basket.`);
    }


    let index = local.findIndex((car) => car.id === id);
    if (index !== -1) {
        local[index] = basketFound;
    }


    localStorage.setItem('cars', JSON.stringify(local));
    localStorage.setItem('fishlist', JSON.stringify(fishlist));


    tabaladder(local);
}


console.log("testfin");


cardfild(local)
//
const tables=document.getElementById("tables")

function tabaladder(fishlist) {
    let adds = '';


    for (let i = 0; i < fishlist.length; i++) {
        
            adds += `
            <tr>
                <th scope="row">${fishlist[i].id}</th>
                <th scope="row">${fishlist[i].carName}</th>
                <td><img src="${fishlist[i].carImgLink}" alt="Car Image" width="100" height="100"></td>
                <td>${fishlist[i].carType}</td>
                <td>${fishlist[i].passengersCount}</td>
                <td>${fishlist[i].carPrice}</td>
                <td>${fishlist[i].carMotorsType}</td>
                <td><button id="delete-${fishlist[i].id}" onclick="removeCar(${fishlist[i].id})">Delete</button></td>
            </tr>`;
        
    }


    tables.innerHTML = adds;
}
tabaladder(fishlist)

function removeCar(id) {
   
    const index = fishlist.findIndex(car => car.id === id);

    if (index !== -1) {
 
        fishlist.splice(index, 1);


        localStorage.setItem('fishlist', JSON.stringify(fishlist));

        console.log(`Car with ID ${id} removed from fishlist.`);
        

        tabaladder(fishlist);
    } else {

        console.error(`Car with ID ${id} not found in fishlist.`);
    }
}


//
add.addEventListener("submit", (e)=>{
    e.preventDefault()
    let id=local.length
    let carNameVal =carNameInp.value
    let carTypeVal =carTypeInp.value
    let carFuilValumVal =carFuilValumInp.value
    let carMotorsTypeVal =carMotorsTypeInp.value
    let passengersCountVal =passengersCountInp.value
    let carPriceVal =carPriceInp.value
    let carimglinkVal =carimglinkInp.value
    let data= detastractcar(carNameVal,carTypeVal,carFuilValumVal,carMotorsTypeVal,passengersCountVal,carPriceVal,carimglinkVal,id)
    // console.log( testnull(carNameVal, carTypeVal, carFuilValumVal, carMotorsTypeVal, carPriceVal, carimglinkVal));
    if ( testnull(carNameVal, carTypeVal, carFuilValumVal, carMotorsTypeVal, carPriceVal, carimglinkVal)) {
     local.push(data)
     
   }
   

    localStorage.setItem('cars', JSON.stringify(local));
})

