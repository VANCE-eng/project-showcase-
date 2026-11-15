import { useState } from 'react';
import useProjects from '../hooks/useProjects';

const EMPTY = { title: '', description: '' };

function ProjectForm() {
  const { addProject } = useProjects();
  const [form, setForm] = useState(EMPTY);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.title.trim() || !form.description.trim()) return;

    addProject({ 
      title: form.title.trim(), 
      description: form.description.trim(), 
      image: '' 
    });
    
    setForm(EMPTY);
  }

  return (
    <section className="panel">
      <h2>Add Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            value={form.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            rows="4"
            value={form.description}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn">Add</button>
      </form>
    </section>
  );
}

export default ProjectForm;