# OpenClassrooms - Intermediate React

This repo contains the API code you will need for the OpenClassrooms course ------.
It goes hand in hand with [the frontend repository](https://github.com/OpenClassrooms-Student-Center/7315991-Intermediate-React).

## Lancer l'API en local

To take the course, you will need to install the API locally on your machine. To do this:

1. Make a `git clone https://github.com/OpenClassrooms-Student-Center/7150606-API-React-intermediaire.git`
2. Install the `node_modules` with `yarn`.
3. Run the API with `yarn start`.

## Consume the API

The Shiny API is a REST API. If you are not sure what a REST API is, feel free to take a look at the excellent course [Adopt REST APIs for your web projects.](https://openclassrooms.com/fr/courses/6573181-adoptez-les-api-rest-pour-vos-projets-web).

Once launched, this API provides you with several routes:

- The route to retrieve freelance profiles:
  `GET /freelancers`

- The route to get the details of a freelance profile:
  `GET /profile/?id={id}`

- The route to get the questionnaire:
  `GET /survey/`

- The route to get the result of the questionnaire:
  `GET /results/?a1={answer1}&a2={answer2}&a3={answer3}...`

## Modifying the API

Feel free to explore the API to test. This code base has been initialized with [Express Generator](https://expressjs.com/fr/starter/generator.html).
