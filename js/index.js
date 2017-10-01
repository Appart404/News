"use strict";

/*
  App
  <App />
*/
var App = React.createClass({
  displayName: "App",

  getInitialState: function getInitialState() {
    return {
      articles: {
        'article': {
          "color": "e8d89b",
          "title": "EKHebdo N°2",
          "thumbnail": "https://gitacrown.github.io/EKHebdo/numero/24sep.html",
          "category": "Hebdo",
          "excerpt": "Deuxième numéro de l'Hebdo Entre Kheys avec au menu : La fic de Chedfa, des bots et des problèmes.",
          "date": new Date()
        },
        'article-1': {
          "color": "e8d89b",
          "title": "EKHebdo N°1",
          "thumbnail": "",
          "category": "Hebdo",
          "excerpt": "Premier numéro de l'Hebdo Entre Kheys ! On va parler des changements sur Discord...",
          "date": new Date()
        },
        'article-2': {
          "color": "FE5621",
          "title": "Hail the size of baseballs in New York",
          "thumbnail": "",
          "category": "News",
          "excerpt": "A rare and unexpected event occurred today as hail the size of snowball hits New York citizens.",
          "date": new Date()
        },
        'article-3': {
          "color": "673AB7",
          "title": "Earthquake destorying San Fransisco",
          "thumbnail": "",
          "category": "News",
          "excerpt": "A massive earthquake just hit San Fransisco leaving behind a giant crater.",
          "date": new Date()
        }
      }
    };
  },
  renderArticle: function renderArticle(key) {
    return React.createElement(
      "div",
      { className: "column" },
      React.createElement(Article, { key: key, index: key, details: this.state.articles[key] })
    );
  },
  render: function render() {
    return React.createElement(
      "div",
      { className: "app" },
      React.createElement(
        "div",
        { className: "container" },
        Object.keys(this.state.articles).map(this.renderArticle)
      )
    );
  }
});

/*
  Article
  <Article />
*/
var Article = React.createClass({
  displayName: "Article",

  render: function render() {
    var details = this.props.details,
        styles = {
      backgroundColor: '#' + details.color
    };

    return React.createElement(
      "article",
      { className: "article" },
      React.createElement(
        "h3",
        { className: "article__category", style: styles },
        details.category
      ),
      React.createElement(
        "h2",
        { className: "article__title" },
        details.title
      ),
      React.createElement(
        "p",
        { className: "article__excerpt" },
        details.excerpt
      )
    );
  }
});

ReactDOM.render(React.createElement(App, null), document.querySelector('#app'));
