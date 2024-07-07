let url = "https://66573aef9f970b3b36c8790d.mockapi.io/"

async function getData(param,options=""){
    let res = await fetch(url+param+options)
    let data = await res.json()
    console.log(data)
    return data
}

function rendercard(data,selector,param){
    selector.innerHTML=""
    data.forEach(element => {
        console.log(element)
        selector.innerHTML+=`
        ${param?'<div class="swiper-slide">':""}
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
    </div> ${param?'</div>':""}`
    
    });
}

export {
    getData,rendercard
}