
import './App.css';
import Grid from '@mui/material/Grid';
import Nav from './components/Nav';
import Content from './components/Content';

function App() {
  return (
      <Grid container spacing={2}>
        <Grid sm={3} md={3} item>
          <Nav />
        </Grid>
        <Grid sm={9} md={9} item>
          <Content />
        </Grid>
      </Grid>
  );
}

export default App;
