const express = require('express');
const app = express();

/*
    Definiti o ruta de tip GET numita `/chat-log`.

    Endpoint-ul trebuie sa returneze un raspuns de tip JSON cu urmatorul format:
        {
            "data": [
                {
                    "userId": 123,
                    "message": "mesaj"
                },
                ...
            ]
        }

    Datele se vor citi din fisierul history.txt
*/

// ...

/* 
    Definiti o ruta de tip GET numita `/history` care sa accepte un segment dinamic (Ex: `/history/1986`)
    ce reprezinta un id de user.

    Raspunsul trebuie sa contina doar mesajele ce apartin user id-ului pasat sub forma:
    {
        "data": [
            {
                "userId": "123",
                "message": "mesaj"
            },
        ]
    }

*/

// ...

/*
    Definiti o ruta de tip POST denumita `/new-message`.
    
    Aceasta accepta un body de tip JSON cu urmatoarea forma:
    {
        "userId": "123",
        "message": "mesaj"
    }

    Folosind aceste date, adaugati in fisierul `history.txt` mesajul sub forma:

    `<userId>:<mesaj>\n`

    Raspunsul trebuie sa fie de forma:

    {
        "status": "ok"
    }
*/

// ...

module.exports = app;