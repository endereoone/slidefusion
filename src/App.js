import React from 'react';
import Carousel from './components/Carousel';
import './index.css';
import eagel1 from './image/eagel1.jpg'
import owl1 from './image/owl1.jpg'
import crow from './image/crow.jpg'
import butterfly1  from './image/butterfly1.jpg'
import owl2 from './image/owl2.jpg'
import eagel3 from './image/eagel3.jpg'
import kingfirser from './image/kingfirser.jpg'
import parrot2 from './image/parrot2.jpg'
import heron from './image/heron.jpg'
import butterfly2 from './image/butterfly2.jpg'
import Navbar from './components/Navbar';

const imageList = [
  { url: eagel1, name: 'EAGLE', description: 'Lorem ipsum dolor sit amet...' },
  { url: owl1, name: 'OWL', description: 'Lorem ipsum dolor sit amet...' },
  { url: crow, name: 'CROW', description: 'Lorem ipsum dolor sit amet...' },
  { url: butterfly1, name: 'BUTTERFLY', description: 'Lorem ipsum dolor sit amet...' },
  { url: owl2, name: 'OWL', description: 'Lorem ipsum dolor sit amet...' },
  { url: eagel3, name: 'EAGLE', description: 'Lorem ipsum dolor sit amet...' },
  { url: kingfirser, name: 'KINGFISHER', description: 'Lorem ipsum dolor sit amet...' },
  { url: parrot2, name: 'PARROT', description: 'Lorem ipsum dolor sit amet...' },
  { url: heron, name: 'HERON', description: 'Lorem ipsum dolor sit amet...' },
  { url: butterfly2, name: 'BUTTERFLY', description: 'Lorem ipsum dolor sit amet...' },
];

const App = () => {
  return (
    <div>
      <Navbar />
      <Carousel images={imageList} />
    </div>
  );
};

export default App;
