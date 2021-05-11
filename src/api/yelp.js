import axios from 'axios';

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer X_UDgcYPVtBdkPQluClR-EJNL770jL-c9VXUw015tHZJKomCGpWfkOdFpQB4R8WI2HUOFA3qBVnHqZNb9FY0zuhdDo7nR2I7y8X70L9FhvRj5YKYYjt0ovxAU8yYYHYx'
    }
})