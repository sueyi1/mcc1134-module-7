import './App.css';
import { Box } from '@mui/material';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Articles from './pages/Articles';
import {Route, Switch} from 'react-router-dom';
import Drawer from './components/Drawer';

const App = () => {

  return (
      <div>
        <Drawer />
        <Box component="main" sx={{bgcolor: 'background.paper', pt: 8, pb: 6}}>
          <Switch>
            <Route exact from="/" render={props => <Home {...props} />} />
            <Route exact from="/contact" render={props => <Contact {...props} />} />
            <Route exact from="/about" render={props => <About {...props} />} />    
            <Route exact from="/articles" render={props => <Articles {...props} />} />          
          </Switch>
        </Box>
    </div>
  );
}

export default App;
