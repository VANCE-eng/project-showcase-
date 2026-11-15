import ProjectForm from './components/ProjectForm';
import ProjectList from './components/ProjectList';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <h1 className="app-title">Personal Project Showcase App</h1>
      <main className="app-main">
        <ProjectForm />
        <ProjectList />
      </main>
    </div>
  );
}

export default App;