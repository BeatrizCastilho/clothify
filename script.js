function updateAll(){
    updatePrice();
    updatePreview();
}

function updatePrice(){
    let model = document.getElementById("model").value;
    let size = document.getElementById("size").value;

    let price = 79.9;

    if(model === "Jaqueta") price = 149.9;
    if(model === "Moletom") price = 119.9;
    if(size === "GG") price += 10;

    document.getElementById("price").innerText =
        "Preço: R$ " + price.toFixed(2);
}

function updatePreview(){
    let model = document.getElementById("model").value;
    let size = document.getElementById("size").value;
    let color = document.getElementById("color").value;
    let text = document.getElementById("text").value;

    document.getElementById("preview").style.background = color;
    document.getElementById("previewModel").innerText = model;
    document.getElementById("previewSize").innerText = "Tamanho: " + size;
    document.getElementById("previewText").innerText = text;
}

function loadImage(event){
    let reader = new FileReader();
    reader.onload = function(){
        let img = document.getElementById("previewImage");
        img.src = reader.result;
        img.style.display = "block";
    }
    reader.readAsDataURL(event.target.files[0]);
}

function addToCart(){
    alert("Produto adicionado ao carrinho com sucesso!");
}

updateAll();
