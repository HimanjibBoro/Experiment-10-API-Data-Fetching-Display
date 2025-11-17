document.getElementById("fetchBtn").addEventListener("click", fetchScenery);

function fetchScenery() {
    fetch("https://picsum.photos/v2/list?page=1&limit=100")
        .then(response => response.json())
        .then(data => displayRandomImage(data))
        .catch(error => console.log("Error:", error));
}

function displayRandomImage(data) {
    const randomIndex = Math.floor(Math.random() * data.length);
    const imageData = data[randomIndex];

    const imageCard = document.getElementById("imageCard");

    imageCard.innerHTML = `
        <h2>Scenery Details</h2>
        <img src="${imageData.download_url}" alt="Nature Image">
        <p><strong>Photographer:</strong> ${imageData.author}</p>
        <p><strong>Image ID:</strong> ${imageData.id}</p>
        <p><strong>Original Size:</strong> ${imageData.width} × ${imageData.height}</p>
    `;
}
