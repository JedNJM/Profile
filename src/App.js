import './App.css';
import Photo from './Photo';
import INFO from './Information';
import Contact from './Contact';
function App() {
  return (
   <>
   <div className="container mt-5">
  <div className="row d-flex justify-content-center">
    <div className="col-md-7">
      <div className="card p-3 py-4">
        <Photo />
        <div className="text-center mt-3">
        <INFO />
        <Contact />
        </div>
      </div>
    </div>
  </div>
</div>

    </> 
  );
}

export default App;
