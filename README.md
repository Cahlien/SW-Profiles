## Intro

Thank you for taking the time to review my work!  This is the first Next.js 
app that I have made or worked on; I learned Next.js on November 7, 2021.
Other technologies used include bootstrap, axios, redux, and the redux 
toolkit.  I had not used redux in quite some time, so I thought this was a 
good opportunity to brush up on it, as well.  

## Description

The application is a simple SPA, as requested, and has instructions on
the home page providing step-by-step guidance on how to use the application.

The search bar in the upper right corner takes the name or partial name
of a character and returns search results matching that submission.

The client-side application submits a get request with a query param
to the application's server, which then submits a request to SWAPI
with the same query param and returns the results to the client.

The results are displayed in a table below the instructions, which has
a column holding a button for each character that allows the user to view
that character's details.

Upon viewing a character's details, the user is presented with a profile
page comprised of four distinct sections, each containing some details 
about the character that may be of interest to the user.  Each section
retrieves that information independently of the others by submitting a
request to the associated API endpoint on the server, which then gets
the requested data from SWAPI and returns the results.

If the user searches for another character at any time, the user is 
redirected to the home page and the search is performed.

Responsiveness is implemented throughout the application using bootstrap 5.

## API Endpoints

1. /api/characters
2. /api/characters/\[id]
3. /api/films
4. /api/films/\[id]
5. /api/species
6. /api/species/\[id]
7. /api/starships
8. /api/starships/\[id]
