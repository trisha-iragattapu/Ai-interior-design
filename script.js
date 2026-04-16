function generateImage() {
  const file = document.getElementById("fileInput").files[0];
  const style = document.getElementById("style").value;
  const gallery = document.getElementById("gallery");

  if (!file) {
    alert("Please upload empty room image");
    return;
  }

  gallery.innerHTML = "";

  let images = [];

  if (style === "modern") {
    images = [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0",
      "https://images.unsplash.com/photo-1618220179428-22790b461013",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0"
    ];
  } 
  else if (style === "luxury") {
    images = [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
      "https://images.unsplash.com/photo-1617806118233-18e1de247200",
      "https://images.unsplash.com/photo-1615873968403-89e068629265"
    ];
  } 
  else if (style === "minimal") {
    images = [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36"
    ];
  }

  images.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    gallery.appendChild(img);
  });
}