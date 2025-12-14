function publish() {
const article = {
title: title.value,
description: content.value
};

let articles = JSON.parse(localStorage.getItem("articles")) || [];
articles.push(article);
localStorage.setItem("articles", JSON.stringify(articles));

alert("Article publié !");
}
