import React, { useState, useEffect } from "react"

export default function NasaImages() {
  const [images, setImages] = useState([])
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    const fetchImages = async () => {

        if (!searchQuery) {
          setImages([])
          return
        }

        const response = await fetch(
          `https://images-api.nasa.gov/search?q=${searchQuery}&media_type=image`
        )

        const data = await response.json()

        // Extract image data from the response
        const imageItems = data.collection.items

        setImages(imageItems)

    }

    fetchImages()
  }, [searchQuery])

  return (
    <div>
     <div style={{textAlign:"center", paddingTop:"20px"}}>
      <input 
        type="text"
        placeholder="Search NASA Images"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      </div>
      <div className="image-list" style={{ display: "flex", flexWrap: "wrap" }}>
        {images.map((image, index) => (
          <div
            key={index}
            style={{ flex: "1 0 calc(33.33% - 20px)", maxWidth: "250px", width: "100%", margin: "10px" }}
          >
            <img
              src={image.links[0].href}
              alt={image.data[0].title}
              style={{ width: "100%", height: "auto", maxWidth: "250px" }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
