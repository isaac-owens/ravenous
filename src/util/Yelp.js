const apiKey = "MaplGFbWfJXnkrI0Iz8eH5l16HzpuIduCZYulLsXKUEQCBNKF-ZtFeLbTuIrcuPFDDtg65Xi-rqkL14_x53rd2xGokoCc0MuQSPx_NdFduBNX5sLR1h6VBjm9OhHX3Yx"

const Yelp = {
  search(term, location, sortBy) {
    // cors-anywhere will give the CORS permissions needed to hit the API
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    })
      .then(response => {
        return response.json()
      })
        .then(jsonResponse => {
          if (jsonResponse.businesses) {
            jsonResponse.businesses.map(business => {
              return {
                id: business.id,
                imageSrc: business.image_url,
                name: business.name,
                address: business.location[address1],
                city: business.location[city],
                state: business.location[state],
                zipCode: business.location[zip_code],
                category: business.categories[0].title,
                rating: business.rating,
                reviewCount: business.review_count,
              }
            })
          }
        })
  }
}

export default Yelp;
