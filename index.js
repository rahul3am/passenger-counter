// document.getElementById("count-el").innerText=5;

// let count = 0

// console.log(count)

let count = 0;

function increment() {
    count++
    document.getElementById("count-el").textContent = count
}

let saveEl = document.getElementById("save-el");
function save(){
    let text=  count + " - "
    saveEl.textContent+=text
    count=0
    document.getElementById("count-el").textContent = count
}












// let myAge = 23;
// let humanDogRatio=7;
// let myDogAge = myAge*humanDogRatio;
// console.log(myDogAge)
