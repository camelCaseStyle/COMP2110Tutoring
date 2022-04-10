// Exploring URL Hashes
import { split_hash } from "./util.js"
import {Views} from "./views.js"
// allBooks is a global variable that will hold the array
// of books loaded from the JSON file
let allBooks = []

// loadData will load the JSON data using fetch
// and call redraw() when it is ready
const loadData = () => {
    fetch('./books.json')
    .then(res => res.json())
    .then(data =>{
        allBooks = data;
        console.log(allBooks)
        redraw();
    })
    
}

// redraw is called whenever the page needs to be 
// updated, it calls the appropriate view function
const redraw = () => {
    if(window.location.hash === '#!/books'){
        Views.BooksView(allBooks);
    }else{
        Views.HomeView();
    }

}



window.onload = loadData;
window.onhashchange = redraw;


