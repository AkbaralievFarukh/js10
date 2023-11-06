// setTimeout(() => {
//     console.log(123)
// }, 2000)
// console.log('Hello')
// const handleInterval = setInterval(() => {
//     console.log('Its interval')
// }, 2000)
// const handleClear = () => {
//     clearInterval(handleInterval)
// }
//
// setTimeout(() => {
//     handleClear()
// }, 10000)
// console.log(333)

const name = document.querySelector('#name')
const color = document.querySelector('#color')
const vehicle = document.querySelector('#vehicle')
const model = document.querySelector('#model')
const manufacturer = document.querySelector('#manufacturer')
const input = document.querySelector('#input')
const submit = document.querySelector('#submit')
const getImg = document.querySelector('#get_img')
const imgCat = document.querySelector('#cat_img')

submit.addEventListener('click', () => {
    let value = input.value;
    fetch(`https://swapi.dev/api/people/${value}`)
        .then(res => res.json())
        .then(personData => {
            name.innerHTML = personData.name;
            color.innerHTML = personData.hair_color;
            vehicleUrl = personData.vehicles[0];
            fetch(vehicleUrl)
                .then(res => res.json())
                .then(vehicleData => {
                    vehicle.innerHTML = vehicleData.name;
                    model.innerHTML = vehicleData.model;
                    manufacturer.innerHTML = vehicleData.manufacturer;
                })
        })
})

const apiToken = 'live_Zc4tnamzIqO5XLpMD8aXqETRSVqpdasICqw0bsSiuJ6Hkh6OKyb3o7mkgTJqonnI'
getImg.addEventListener('click', () => {
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(res => res.json())
        .then(imgData => {
            imgUrl = imgData[0].url
            imgCat.setAttribute('src', imgUrl)
        })
})