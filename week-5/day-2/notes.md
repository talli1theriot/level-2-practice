# Week 5 Day 2 — Three requests, side by side

Fill this in from Postman or Bruno. **Never paste your API key in this file.**
This repo is public: anyone on the internet can read it.
Write `{{gemini_key}}` (the variable's name) instead.

| | Weather request | AI request | Add a dish |
| --- | --- | --- | --- |
| Method (GET / POST) | GET | POST | POST |
| Endpoint (the address, filled in for you) | `https://api.open-meteo.com/v1/forecast` | `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent` | `https://dummyjson.com/recipes/add` |
| Where the details go (query params or body?) | Query Param | Body | Body |
| Headers I needed | | x-goog-api-key: {{gemini_key}} | |
| Does it need a key? | No | {{gemini_key}} | No |
| Status I got | 200 | 200 | 201 |
| The part of the response I care about | current.temperature_2m | candidates[0].content.parts[0].text | id and name |

## What was different?

The weather request uses GET because it is asking the server for weather information. The AI request uses POST because it sends information to Gemini and asks it to generate a response. The weather request puts its information in the URL, while the AI request sends its information in the body.


## Did my dish really save?

What status did `Get my dish` give you? What does that tell you?


## Extra (if you finish early)

- Send the same prompt twice. Is the answer the same? Why might that be?
- Try a different model name in the address. What changed in the response?
