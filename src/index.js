import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, withRouter, Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Home from './components/Home';
import Strategy from './components/Strategy';
import News from './components/News';
import Leadership from './components/Leadership';
import Partnerships from './components/Partnerships';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import config from './config';

const Routes = ({ content }) => {
  const routes = [
    { path: '/', Component: Home, props: { content } },
    { path: '/strategy', Component: Strategy, props: { content } },
    { path: '/news', Component: News, props: { content } },
    { path: '/leadership', Component: Leadership, props: { content } },
    { path: '/partnerships', Component: Partnerships, props: { content } },
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
  const [content, setContent] = useState({});

  useEffect(() => {
    const NEWS_ITEM_FIELDS = `
      _id
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
            allHome {
              title
              subtitle
              intro
              summaryRaw
            }
            allPublication(sort: { _createdAt: DESC }) {
              ${NEWS_ITEM_FIELDS}
            }
            allArticle(sort: { _createdAt: DESC }) {
              ${NEWS_ITEM_FIELDS}
            }
            allAbout {
              summaryRaw
              innovationRaw
              speedToMarketRaw
              validationRaw
            }
            allLeadership {
              managementTeam {
                _key
                name
                title
                link
                bioRaw
                photo {
                  asset {
                    url
                  }
                }
              }
              advisors {
                _key
                name
                title
                link
              }
              KOLs {
                _key
                name
                area
                link
              }
              consultants {
                _key
                name
                area
                link
              }
            }
            allPartnerships {
              sections {
                title
                contentRaw
              }
              phone
              address
            }
          }
        `,
      }),
    })
      .then((res) => res.json())
      .then(({ data }) => setContent(data));
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [props.location]);

  return (
    <>
      <NavBar />
      <div className="page-content">
        <Routes content={content} />
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
