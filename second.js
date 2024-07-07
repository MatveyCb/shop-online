import {
    getData, rendercard
} from "./src/script/service.js"

let containerList = document.querySelector(".container__list")

getData("products", "").then(data => {
    rendercard(data, containerList, false)
})
