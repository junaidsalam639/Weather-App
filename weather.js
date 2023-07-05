let input = document.getElementById("inp");
console.log(input);
let city = document.getElementById("city");
let image = document.getElementById("img1");
let temp = document.getElementById("temp");
let type = document.getElementById("type");
let API_KEY = '6d83156e4e40ca97d0c6924b832fe00c'

const data = async function (search) {  //Jb tk response nhi milega tb tk wait krega
    let getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}&units=metric`);
    console.log(getData);
    let jsonData = await getData.json();
    console.log(jsonData);
    console.log(jsonData.name);

    if (jsonData.cod == 400) {
        alert("Please Enter Location");
        image.src = 'error1.png'
        city.innerHTML = "";
        temp.innerHTML = "";
        type.innerHTML = "";
    }
    if (jsonData.cod == 404) {
        alert("Please Enter Write Location");
        image.src = 'error2.png'
        city.innerHTML = "";
        temp.innerHTML = "";
        type.innerHTML = "";
    }


    city.innerHTML = search;
    temp.innerHTML = Math.floor(jsonData.main.temp) + "°C";
    type.innerHTML = jsonData.weather[0].main;
    if (type.innerHTML == "Clouds") {
        image.src = 'clouds.png'
    } else if (type.innerHTML == "Clear") {
        image.src = "clears.png"
    } else if (type.innerHTML == "Rain") {
        image.src = "rain.png"
    } else if (type.innerHTML == "Snow") {
        image.src = "rain.png"
    } else if (type.innerHTML == "Haze") {
        image.src = "haze.png"
    } else if (type.innerHTML == "Strom") {
        image.src = "strom.png"
    } else if (type.innerHTML == "Smoke") {
        image.src = "strom.png"
    }
    input.value = "";

}

function myFun() {
    let search = input.value;
    data(search);
}



// // callback function
// function abc(a,callback){
//     console.log("wait...");
//     setTimeout(()=>{
//         let plus = 10 + a;
//        callback("Data Save " + plus);
//     },1000)
// }

// abc(10 , function (data){
//     console.log(data);
// })


// // promises function
// let promise = new Promise (function (resolve , reject){
//     setTimeout(()=>{
//            resolve("Hello!");
//     },1000)
// })

// promise.then(function (data){
//     console.log(data);
// }).catch(function (error){
//     console.log(error);
// })

// // async/await
// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve(fetch('https://jsonplaceholder.typicode.com/posts'));
//       }, 2000);
//     });
//   }
  
//   async function asyncCall() {
//     console.log('calling');
//     const result = await resolveAfter2Seconds();
//     console.log(result);
//     console.log("Data save");
//   }
  
//   asyncCall();





