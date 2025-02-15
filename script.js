function MudarCor(){
    const cor = document.getElementById(cor).value;
    const imagemCamisa = document.querySelector(".Camisa img");
    const imagens = {
"Off White": "WRS-BSC-OVR.webp",
"marrom": "WRS-BSC-OVR2.webp",
"Preta": "WRS-BSC-OVR3.webp"
    }
};
if (imagens[corSelecionada]) {imagemCamisa.src = imagens[corSelecionada]};