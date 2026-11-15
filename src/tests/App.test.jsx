import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { ProjectsProvider } from '../context/ProjectsContext';

const renderApp = () => {
  return render(
    <ProjectsProvider>
      <App />
    </ProjectsProvider>
  );
};

test('renders the title and seeded projects', () => {
  renderApp();
  expect(screen.getByText(/Personal Project Showcase App/i)).toBeInTheDocument();
  expect(screen.getByText('Project 1')).toBeInTheDocument();
});

test('adds a new project', async () => {
  renderApp();
  const user = userEvent.setup();
  
  await user.type(screen.getByLabelText(/Title/i), 'My New Project');
  await user.type(screen.getByLabelText(/Description/i), 'Some description');
  await user.click(screen.getByRole('button', { name: /^Add$/i }));

  expect(screen.getByText('My New Project')).toBeInTheDocument();
});

test('filters projects by search', async () => {
  renderApp();
  const user = userEvent.setup();
  
  await user.type(screen.getByPlaceholderText(/Search Projects/i), 'Project 2');
  
  expect(screen.getByText('Project 2')).toBeInTheDocument();
  expect(screen.queryByText('Project 1')).not.toBeInTheDocument();
});