const apiKey = "MaplGFbWfJXnkrI0Iz8eH5l16HzpuIduCZYulLsXKUEQCBNKF-ZtFeLbTuIrcuPFDDtg65Xi-rqkL14_x53rd2xGokoCc0MuQSPx_NdFduBNX5sLR1h6VBjm9OhHX3Yx"

const Yelp = {}

const search = (term, location, sortBy) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
    headers: {
      Authorization: `Bearer ${apiKey}`
    }
  })
}