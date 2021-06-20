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

const Routes = ({ items }) => {
  const routes = [
    { path: '/', Component: Home, props: { items } },
    { path: '/about', Component: About },
    { path: '/news', Component: News, props: { items } },
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
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
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
  const [items, setItems] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch(`${config.apiURL}/publishedItems/${config.userID}`).then((res) => res.json()),
      fetch(`${config.apiURL}/itemsToPhotos/${config.userID}`).then((res) => res.json()),
      fetch(`${config.apiURL}/photos/${config.userID}`).then((res) => res.json()),
    ]).then((results) => {
      const [itemsList, itemsToPhotos, photos] = results;
      itemsList.forEach((item, index) => {
        const itemPhotoIds = itemsToPhotos
          .filter((row) => row.itemId === item.itemId)
          .map((row) => row.photoId);
        itemsList[index].itemPhotos = photos.filter(
          (photo) => itemPhotoIds.includes(photo.photoId),
        );
      });
      setItems(itemsList);
    });
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [props.location]);

  return (
    <>
      <NavBar />
      <div className="page-content">
        <Routes items={items} />
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
