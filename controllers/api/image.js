const nasaService = require('../../src/utilities/image-service');

module.exports = {
    getImages,
};

async function getImages(req, res) {
    const { query } = req.query;
    try {
        if (!query) {
            return res.status(400).json({ error: 'Query parameter is required' });
        }

        const imageData = await nasaService.getNasaImage(query);
        res.json(imageData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


module.exports = {
    getImages,
};