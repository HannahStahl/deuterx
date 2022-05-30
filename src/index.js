import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, withRouter, Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import Leadership from './components/Leadership';
import Partnerships from './components/Partnerships';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import config from './config';

const Routes = ({ articles, publications }) => {
  const routes = [
    { path: '/', Component: Home, props: { articles, publications } },
    { path: '/about', Component: About },
    { path: '/news', Component: News, props: { articles, publications } },
    { path: '/leadership', Component: Leadership },
    { path: '/partnerships', Component: Partnerships },
  ];

  if (!routes.map(({ path }) => path).includes(window.location.pathname)) {
    window.location.pathname = '/';
  }

  return (
    <>
      {routes.map(({ path, Component, props }) => (
        <Route key={path} exact path={path}>
          {({ match }) => (
            <CSSTransition
              in={match !== null}
              timeout={0}
              classNames="page"
              unmountOnExit
            >
              <div className="page">
                <Component {...props} match={match} />
              </div>
            </CSSTransition>
          )}
        </Route>
      ))}
    </>
  );
};

const App = withRouter((props) => {
  const [articles, setArticles] = useState([]);
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    const NEWS_ITEM_FIELDS = `
      _key
      title
      subtitle
      description
      link
      pdf {
        asset {
          url
        }
      }
    `;
    fetch(config.sanityURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          query {
            allNews {
              articles {
                ${NEWS_ITEM_FIELDS}
              }
              publications {
                ${NEWS_ITEM_FIELDS}
              }

            }
          }
        `,
      }),
    })
      .then((res) => res.json())
      .then(({ data: { allNews } }) => {
        const { articles: allArticle, publications: allPublication } = allNews[0];
        setArticles(allArticle);
        setPublications(allPublication);
      });
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [props.location]);

  return (
    <>
      <NavBar />
      <div className="page-content">
        <Routes articles={articles} publications={publications} />
      </div>
      <Footer />
    </>
  );
});

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
