export {Views}

const Views = {
    briefView: function(people){
    
        let briefTemplate = Handlebars.compile(`
            <ul>
                {{#each people}}
                    <li class='name'>{{name}}</li>
                {{/each}}
            </ul>
                `    
        );
        const content  = briefTemplate({people})
        console.log(content);
        document.getElementById('people').innerHTML = content; 
    },

    
}



const detailedTemplate = Handlebars.compile(`
    <ul>
    {{#each people}}
        <li>
        {{name}}
        <img src='{{avatar}}'/>
        </li>
    {{/each}}
    </ul>
`);