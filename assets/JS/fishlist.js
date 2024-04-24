carsItem = document.getElementById("carlist")
let fishlist = JSON.parse(localStorage.getItem("fishlist")) || []

function renderUI(array) {
    if (array.length <1) {
        console.log("test1");
        carsItem.innerHTML = `<h3>hecbir wishlist yoxtur</h3>`
    } else {
        console.log("test2");
        let x = ""

        for (let i = 0; i < array.length; i++) {


            const car = array[i]
            if (checkfishlist(car.id)) {
                test = "check"
            } else {
                test = ""
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

        carsItem.innerHTML = x
    }
}

function addFislist(id) {
    const findfis = fishlist.find((car) => car.id == id);
    const indexOfTarget = fishlist.indexOf(findfis);
    fishlist.splice(indexOfTarget, 1);
    localStorage.setItem("fishlist", JSON.stringify(fishlist));
    renderUI(fishlist)

}
function checkfishlist(id) {
    const target = fishlist.find((item) => item.id == id);
    if (target) {
        return true;
    } else {
        return false;
    }
};

renderUI(fishlist)

