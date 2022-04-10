export {Views}

const Views = {
    HomeView: function(){
        let target = document.getElementById('content');
        target.innerHTML = `
            <h1>Lorem Ipsum</h1>
        `
    },
    BooksView : function (books){
        let template = Handlebars.compile(`
        <div class="books">
            {{#each books}}
                <div>
                <ul>
                    <li>{{author}}</li>
                    <li>{{title}}</li>
                <ul>
                </div>
            {{/each}}
        <div>
        `)
       
        let htmlContent = template(books);

        let target = document.getElementById('content');
        target.innerHTML = htmlContent;

    }
}

