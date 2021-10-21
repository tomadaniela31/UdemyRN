import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses', 
    headers:{
        Authorization: 'Bearer F0fobrYOPnBBn393MpBRtinNMnbgDSi5_q71GRDoTcxvyH5aY8G1eiZeHfM_D3BnGX1Xzlm5POmI4oZxcxGWKHpoe5sn77wbu06tW9mPiJqdod8Q9Nj9UP7dlRNcYXYx'

    }
});

//yelp.get('/search')

