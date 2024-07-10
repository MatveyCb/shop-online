import {
    getData, rendercard, renderComments, postComment
} from "./script/service.js"

let firstslider = document.querySelector("#hits")
let secondslider = document.querySelector("#discount")
let tirdslider = document.querySelector("#acssesoris")

let feedbackList = document.querySelector(".feedback__list")

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

getData("comments").then(comments => renderComments(comments, feedbackList))

let addFeedback = document.querySelector(".addfeedback")

let feedbackForm = document.querySelector(".feedback__form")

let feedbackInps = document.querySelectorAll(".feedback__form input")

let feedbackTxt = document.querySelector(".feedback__form textarea")

feedbackForm.addEventListener("submit", (event) => {
    event.preventDefault()

    postComment({
        author: feedbackInps[0].value,
        title: feedbackInps[1].value,
        text: feedbackTxt.value
    }).then((data) => {
        console.log(data)
        getData("comments").then(comments => renderComments(comments, feedbackList))
    })
})
addFeedback.addEventListener("click", () => {
    feedbackForm.classList.toggle("active")
})