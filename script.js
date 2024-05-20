let ItemsDiv = document.getElementById("items");

let ItemsArray = [
    {
        title: "Мотокоса 43",
        image: "img-goods/MOTOKOSA.jpg", 
        lapka: 6,
        pb: 8,
        prise_n: 5499,
        prise_d: 4497,
        prise_c: 4395,
    },{
        title: "Електричний тример 110",
        image: "img-goods/MOTOKOSA2.jpg", 
        lapka: 6,
        pb: 8,
        prise_n: 4497,
        prise_d: 3498,
        prise_c: 3396,
    },{
        title: "Електрична газонокосарка 32",
        image: "img-goods/KOSARKA.jpg", 
        lapka: 6,
        pb: 8,
        prise_n: 4497,
        prise_d: 3297,
        prise_c: 3195,
    },{
        title: "Акумуляторний обприскувач 12 N",
        image: "img-goods/KOSARKA2.jpg", 
        lapka: 6,
        pb: 8,
        prise_n: 2190,
        prise_d: 1698,
        prise_c: 1596,
    }
]

if (ItemsDiv) {
    ItemsArray.forEach((item, index) => {
        ItemsDiv.innerHTML +=
            `<div class="item">
                <div class="item-title">${item.title}</div>
                <img class="item-image" src="${item.image}" alt="ERR">
                <div class="parts-pay">
                    <div><img src="img-market/mono-lapka.png" alt="">${item.lapka}</div>
                    <div><img src="img-market/pb.png" alt="">${item.pb}</div>
                </div>
                <div class="price">
                    <div><span>${item.prise_n}</span><sup>грн</sup></div>
                    <div>${item.prise_d}<sup>грн</sup></div>
                </div>
                <div class="bonus">
                    <div>ціна за купоном</div>
                    <div>${item.prise_c}<sup>грн</sup></div>
                </div>
            </div>`;
    });
}