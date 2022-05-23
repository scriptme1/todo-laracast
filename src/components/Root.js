import React from 'react';
import App from './App';
import NavigationBar from './NavigationBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import NoMatch from './pages/NoMatch';

export default function Root() {
  //   const routes = [
  //     { path: '/', name: 'Home', Component: App, exact: true },
  //     { path: '/about', name: 'About', Component: About, exact: false },
  //     { path: '/contact', name: 'Contact', Component: Contact, exact: false },
  //     { path: '/blog', name: 'Blog', Component: Blog, exact: true },
  //     { path: '/blog/:id', name: 'Post', Component: BlogPost, exact: false },
  //     { path: '*', name: 'No Match', Component: NoMatch, exact: false },
  //   ];

  return (
    <Router>
      <div className="todo-app-container">
        <NavigationBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="*" element={<NoMatch />} />
            <Route path="/about" element={<About />} />

            {/* {routes.map(({ path, Element}) => (
              <Route key={path} path={path} >
                <Element />
              </Route>
            ))} */}

            {/* The Old way of react-router-dom */}
            {/* <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route exact path="/blog">
              <Blog />
            </Route>
            <Route path="/blog/:id">
              <BlogPost />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}
