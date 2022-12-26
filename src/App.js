import './App.css';
import Filter from './components/Filter/Filter';
import ServiceAdd from './components/ServiceAdd/ServiceAdd';
import ServiceList from './components/ServiceList/ServiceList';


function App() {
  return (
    <div className="App">
      <h1>Курс "React"</h1>
      <h2>Тема: Redux</h2>
      <ServiceAdd />
      <Filter />
      <ServiceList />
    </div>
  );
}

export default App;
