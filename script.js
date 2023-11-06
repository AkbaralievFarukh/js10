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



