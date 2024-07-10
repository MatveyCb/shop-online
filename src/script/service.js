let url = "https://66573aef9f970b3b36c8790d.mockapi.io/"

async function getData(param, options = "") {
    let res = await fetch(url + param + options)
    let data = await res.json()
    console.log(data)
    return data
}

function rendercard(data, selector, param) {
    selector.innerHTML = ""
    data.forEach(element => {
        console.log(element)
        selector.innerHTML += `
        ${param ? '<div class="swiper-slide">' : ""}
        <div class="product-card">
        <img src="${element.img}" alt="">
        <h3>
           ${element.title}
        </h3>
        <div class="product-card__nav">
            <p>
                ${element.price}
            </p>
            <button>
                Купити
            </button>
        </div>
    </div> ${param ? '</div>' : ""}`

    });
}
async function postComment(newComment) {
    let res = await fetch(url + "comments", {
        method: `POST`,
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(newComment)
    })
    let data = await res.json()
    return data
}

function convertTimestamp(timestamp) {
    let data = new Date(timestamp * 1000);
    let day = String(data.getDate()).padStart(2, `0`);
    let month = String(data.getMonth() + 1).padStart(2, `0`);
    let year = data.getFullYear();

    return `${day}.${month}.${year}`
}

function renderComments(comments, selector) {
    selector.innerHTML = ""
    comments.forEach(comment => {
        selector.innerHTML += `<div class="feedback__list-item">
        <h3>
            ${comment.title}
        </h3>
        <p class="feedback__dsk">
            ${comment.text}
        </p>
        <div class="row">
            <p>
                ${comment.author}
            </p>
            <p>
                ${convertTimestamp(+comment.date)}
            </p>
        </div>
    </div>`
    })
}

export {
    getData, rendercard, renderComments, postComment
}
