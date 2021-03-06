const init = () => {
//target the form element in order to add an e.listener
  const form = document.querySelector('form')

//add e.listerner to the forom, which require 2 args (type of event, and listener as cb() to handle the event)
//when the event is triggerd, the cb() will execute & the obj representing the event will be passed as an arg
    form.addEventListener('submit', (e) => {
        e.preventDefault() //overrides automatic refresh
        console.log(e) //confirms function is wokring as expected


//To get the value of the input from a user we need to select the specific DOM element and get its value
//There are 3 ways to access the value of a users input      
        const input = e.target.comeon.value
        //const input = e.target.children[1].value
        console.log(input)
        //const input = document.querySelector("#searchByID");
        //console.log(input.value)




        //setting up our fetch

        //fetch('http://localhost:3000/movies')
//Sometimes we only want to fetch one single resources from our server. If we know the id we can pass add it to the end of our URL
//if not we can interpolate by `${id}` or if we want the user's input in this case based on how we are targeting the user's input 
//we can say `${input}` or ${input.value}`
//This is one way to customize our fetch request
        fetch(`http://localhost:3000/movies/${input}`)
        .then(r => r.json())
        .then(movies => {
            console.log(movies) //confirms what type of data being sent back from the server ( arr or obj | arr of obj | obj of arr)
//The user input matches what is on the db we can then render that data on to screen, if not the server will return an error (404)
//## Display Fetched Data on the Page
/**
 * In this case we want to replace the content in the section for the movieDetails from the data retrevied from the server
 * to do this we wor inside the 2nd .then() by first accessing the ele in the DOM to store assign the data 
 */
//if these elements are not the only or first on the page we need to get more specific about how we target them 
//const h4 = document.querySelector('h4')
//const p = document.querySelector('p')
const title = document.querySelector('#movieDetails h4')
const pText = document.querySelector('#movieDetails p')

title.textContent = movies.title;
pText.textContent = movies.summary
        });

    });



}

document.addEventListener('DOMContentLoaded', init);
/**
 * We want to make sure the JavaScript we write executes when the DOM is fully
loaded. Any code related to DOM manipulation should either go in `init` or in a
function called within `init`.
 */