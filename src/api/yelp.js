import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer I8xZI9kbmqO980BFnyz-wMnomDIxmB9UHcCH67OQePbHtdUur9QZ_ThtjmR2pfxNUQWBfr818BHZJ0PmEmkbWojfdFJT40TS5FDHXhMv9H4MPg63wgdAK5LCr-8zXnYx'
    }
})