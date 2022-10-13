import React from 'react';
import './App.css';
import Counter from './components/counter';
import GenreToggle from './components/genreToggle';
import HelloWorld from './components/helloWorld';
import SearchBar from './components/searchBar';

function App() {
  return  (
    <div style={ { background: 'black', paddingBottom: '100px'} }>
      <HelloWorld/>
      <Counter/>
      <SearchBar/>
      <GenreToggle/>
    </div>
  );
}

export default App;
