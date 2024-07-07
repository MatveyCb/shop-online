import {
    getData, rendercard
} from "./script/service.js"

let firstslider = document.querySelector("#hits")

let secondslider = document.querySelector("#discount")

let tirdslider = document.querySelector("#acssesoris")

getData("products", "?popular=true").then(data => {
    console.log(firstslider)
    rendercard(data, firstslider, true)
})

getData("products", "?discount=true").then(data => {
    console.log(secondslider)
    rendercard(data, secondslider, true)
})

getData("products", "?category=accessories").then(data => {
    console.log(tirdslider)
    rendercard(data, tirdslider, true)
})

let addFeedback = document.querySelector(".addfeedback")

let feedbackForm = document.querySelector(".feedback__form")

addFeedback.addEventListener("click", () => {
    feedbackForm.classList.toggle("active")
})