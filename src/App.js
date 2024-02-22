import './App.css';
import Camera from './camera.webp'
import Laptop from './laptop.png'
import Powerbanks from './powerbanks.webp'
import Printer from './printer.webp'
import Component from './component';

const images = [{url:Camera, alt:'camera'},
{url:Laptop ,alt:'laptop'},
{url:Powerbanks ,alt:'powerbanks'},
{url:Printer,alt:'printer' }];


function App() {
  return (
    <div className="App">
      <div className='navbar'>
      <h1>Image Gallery</h1>
      <hr />
      </div>
      <h3><i>Click on image!</i></h3>
      <Component images={images}/>
    </div>
  );
}

export default App;
