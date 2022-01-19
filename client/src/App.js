import './App.css';
import {Route, Switch} from 'react-router-dom';
import Layout from './containers/Layout';

import About from './pages/About';
import PokemonList from './containers/BuildPokemonList';
import PokemonCard from './containers/BuildPokemonCard';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Switch>
          <Route path="/about" component={About}></Route>
          <Route path="/" exact component={PokemonList}></Route>
          <Route path="/:name" component={PokemonCard}></Route>
        </Switch>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
