// import logo from './logo.svg';
import './App.css';
import './styles.css';
import CarForm from './components/Carform';
import CarList from './components/CarList';
import CarSearch from './components/CarSearch';
import CarValue from './components/CarValue';

function App() {
  return (
    <div className="App">
      <div className='container is-fluid'>
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <div className='title-landing'>
            <h4 className='subtitle is-2'>Car App</h4>
          </div>
          <CarForm />
          <CarSearch />
          <CarList />
          <CarValue />
        </header>
      </div>
    </div>
  );
}

export default App;
