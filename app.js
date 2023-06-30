const input = document.querySelector("#input");
const img = document.querySelector("img");
const gen = document.querySelector("#generator");
const download = document.querySelector("#download");



gen.addEventListener("click",()=>{
    if(input.value === ""){
        alert("Please Enter Word to convert the QR code")
    }else{
    const qrcode = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`
    img.src= qrcode;
    }
})

download.addEventListener("click",async () =>{
    if(input.value === ""){
        alert("Please Enter Word to convert the QR code & Next download")
    }else{
    let res = await fetch(img.src);
    const blob = await res.blob();
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = "qrcode.jpg";
    downloadLink.click();
    }
});