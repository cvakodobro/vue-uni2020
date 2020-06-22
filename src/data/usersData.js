import restaurants from './restaurants.js'
import accommodation from './accommodations.js'


const users = [{
        "username": "admin",
        "password": "admin",
        "name": "some_name",
        "surname": "some_surname",
        "address": "some_address123",
        "contact": "+111111111111",
    },
    {
        "username": "user",
        "password": "user",
        "name": "some_name",
        "surname": "some_surname",
        "address": "some_address123",
        "contact": "+111111111111",
        "restaurant": restaurants[0],
        "accommodation": accommodation[0],
        "games": [{
                "ops": "SRB - ITA",
                "date": "14.7.2020.",
                "time": "14:30",
                "arena": "Ranko Zeravica"
            },
            {
                "ops": "SRB - ITA",
                "date": "14.7.2020.",
                "time": "14:30",
                "arena": "Ranko Zeravica"
            },
            {
                "ops": "SRB - ITA",
                "date": "14.7.2020.",
                "time": "14:30",
                "arena": "Ranko Zeravica"
            },
            {
                "ops": "SRB - ITA",
                "date": "15.7.2020.",
                "time": "14:40",
                "arena": "Arena - Hall"
            },
            {
                "ops": "SRB - ITA",
                "date": "15.7.2020.",
                "time": "14:30",
                "arena": "Arena - Hall"
            },
            {
                "ops": "SRB - ITA",
                "date": "15.7.2020.",
                "time": "18:30",
                "arena": "Arena - Hall"
            },
            {
                "ops": "SRB - GER",
                "date": "18.7.2020.",
                "time": "19:00",
                "arena": "Stark Arena"
            },
            {
                "ops": "SRB - GER",
                "date": "18.7.2020.",
                "time": "19:00",
                "arena": "Stark Arena"
            },
            {
                "ops": "SRB - GER",
                "date": "14.7.2020.",
                "time": "19:00",
                "arena": "Stark Arena"
            }
        ]

    },
    {
        "username": "user1",
        "password": "user1",
        "name": "some_name1",
        "surname": "some_surname1",
        "address": "some_address1231",
        "contact": "+1111111111115",
        "restaurant": restaurants[3],
        "accommodation": accommodation[2]

    }
]

export default users;