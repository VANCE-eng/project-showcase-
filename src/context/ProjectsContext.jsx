import { createContext, useReducer, useContext } from 'react';

const ProjectsContext = createContext();

const initialState = {
  projects: [
    { id: 1, title: 'Project 1', description: 'Description of the project', image: '' },
    { id: 2, title: 'Project 2', description: 'Description of the project', image: '' },
    { id: 3, title: 'Project 3', description: 'Description of the project', image: '' },
  ],
  searchTerm: '',
};

function reducer(state, action) {
  if (action.type === 'ADD_PROJECT') {
    return {
      ...state,
      projects: [{ ...action.payload, id: Date.now() }, ...state.projects],
    };
  }

  if (action.type === 'SET_SEARCH') {
    return { ...state, searchTerm: action.payload };
  }

  return state;
}

function ProjectsProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ProjectsContext.Provider value={{ state, dispatch }}>
      {children}
    </ProjectsContext.Provider>
  );
}

function useProjectsContext() {
  const context = useContext(ProjectsContext);
  if (!context) {
    throw new Error('useProjectsContext must be used inside ProjectsProvider');
  }
  return context;
}

export { ProjectsProvider, useProjectsContext };