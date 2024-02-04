async function getNasaImage(query) {
    try {
        const url = `https://images-api.nasa.gov/search?q=${query}`;
        const response = await fetch(url);
        const data = await response.json();
        return data.collection.items; // Extract the items array
    } catch (error) {
        throw new Error(`Error fetching images from NASA API: ${error}`);
    }
}


module.exports = {
    getNasaImage,
};
