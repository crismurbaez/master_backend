const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();

const { PORT } = process.env || 3001;
const URL = 'https://api.github.com/users/google/repos';

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    (async () => {
        try {
            // fetch api
            let api = await axios.get(URL)
            // refactoring data
            let data = await api.data.map(e => {
                return (
                    {
                        watchers: e.watchers,
                        url: e.url,
                    }
                );
            })
            // sort data
            let data_sort = data?.sort((a, b) => {
                return b.watchers - a.watchers;
            })
            //cut the first 10 elements of the array and  pack into JSON
            most_populate = {
                message: "Google User's 10 Most Popular Repositories on Rest API Github",
                data: data_sort.slice(0, 10)
            }


            // send data
            res.send(most_populate);

        } catch (error) {
            console.log(error);
        }
    })();
})


app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
})
