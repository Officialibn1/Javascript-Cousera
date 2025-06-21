var xhr = new XMLHttpRequest();

var url = './health_article.json';

xhr.open('GET', url, true);

xhr.responseType = 'json';

xhr.onload = function() {
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');

    articles.forEach((article) => {
        const articleDiv = document.createElement('div');

        articleDiv.classList.add('article');

        const title = document.createElement('h1');

        title.innerText = article.title;

        articleDiv.appendChild(title);

        const description = document.createElement('p');

        description.innerText = article.description;

        articleDiv.appendChild(description);

        const waysTitle = document.createElement('h3');

        waysTitle.innerText = 'Ways to Acheive:';

        articleDiv.appendChild(waysTitle)

        const waysList = document.createElement('ul');

        article.ways_to_achieve.forEach(way => {
            const list = document.createElement('li');

            list.innerText = way;

            waysList.appendChild(list)
        });

        articleDiv.appendChild(waysList);

        const benefitsTitle = document.createElement('h3');

        benefitsTitle.innerText = 'Benefits:';

        articleDiv.appendChild(benefitsTitle);

        const benefitsList = document.createElement('ul');

        article.benefits.forEach(benefit => {
            const benefitList = document.createElement('li');

            benefitList.innerText = benefit;

            benefitsList.appendChild(benefitList);
        });

        articleDiv.appendChild(benefitsList)

        articlesDiv.appendChild(articleDiv);
    });


}

xhr.onerror = function() {
    alert('Failed to load health data!!')
}

xhr.send()