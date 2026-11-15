import { useMemo } from 'react';
import { useProjectsContext } from '../context/ProjectsContext';

function useProjects() {
  const { state, dispatch } = useProjectsContext();

  // Filter based on search term
  const filteredProjects = useMemo(function () {
    const term = state.searchTerm.trim().toLowerCase();
    
    if (!term) return state.projects;

    return state.projects.filter(function (project) {
      const matchesTitle = project.title.toLowerCase().includes(term);
      const matchesDescription = project.description.toLowerCase().includes(term);
      return matchesTitle || matchesDescription;
    });
  }, [state.projects, state.searchTerm]);

  function setSearch(value) {
    dispatch({ type: 'SET_SEARCH', payload: value });
  }

  function addProject(newProject) {
    dispatch({ type: 'ADD_PROJECT', payload: newProject });
  }

  return {
    filteredProjects: filteredProjects,
    searchTerm: state.searchTerm,
    setSearch: setSearch,
    addProject: addProject,
  };
}

export default useProjects;