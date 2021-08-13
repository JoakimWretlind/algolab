// import loadable from '@loadable/component'
import React, { useState } from 'react';
import { DataContext, TaskContext, ImageContext } from './components/context/AllContex';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './globalStyle';
import { About, BigO, CodeEditor, Contact, DataStructures, Home, Links, Navbar, SmoothScroll, ViewCode } from './components/index';

function App() {
  const [value, setValue] = useState('');
  const [task, setTask] = useState('');
  const [imgValue, setImgValue] = useState('');

  return (
    <>
      <GlobalStyle />
      <SmoothScroll>
        <Router>
          <Navbar />
          <Switch>
            <DataContext.Provider value={{ value, setValue }}>
              <TaskContext.Provider value={{ task, setTask }}>
                <ImageContext.Provider value={{ imgValue, setImgValue }}>
                  <Route path="/" exact component={Home} />
                  <Route path="/about" exact component={About} />
                  <Route path="/datastructures" exact component={DataStructures} />
                  <Route path="/bigonotation" exact component={BigO} />
                  <Route path="/links" exact component={Links} />
                  <Route path="/contact" exact component={Contact} />
                  <Route path="/viewcode" exact component={ViewCode} />
                  <Route path="/codeeditor" exact component={CodeEditor} />
                </ImageContext.Provider>
              </TaskContext.Provider>
            </DataContext.Provider>
          </Switch>
        </Router>
      </SmoothScroll>
    </>
  );
}

export default App;
