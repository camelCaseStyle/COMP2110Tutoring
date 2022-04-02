import {people} from './people.js'
import { Views } from './views.js'


let state = 'brief';
window.onload = function(){
    applyBindings();
    //Views.briefView(people)
    state = 'detail'
}

function applyBindings(){
    let switchView = document.getElementById('switch');
    if(switchView) switchView.addEventListener('click', changeView);
    let oldWay = document.getElementById('old-way');
    if(oldWay) oldWay.addEventListener('click', embedHTMLBasicWay)
}

function changeView(){
    if(state ===  'brief'){
        Views.briefView(people)
        state = 'detail'
    }else if(state === 'detail'){
        Views.detailedView(people)
        state = 'brief'
    }
}
// I am so clunky and not good :(
function embedHTMLBasicWay(){
    let target = document.getElementById('basic');
    let content = `
        <div>This is another way of generating HTML</div>
        <div>
            <ul>
                <li> Example of  list </li>
                <li> Example of  list </li>
                <li> Example of  list </li>
            </ul>
        </div>
    `;

    target.innerHTML = content;
}