import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button 
        startIcon={<SaveIcon />}
        size="small" 
        style={{}} 
        onClick={() => console.log('howdy')} 
        href="#" 
        variant='contained' 
        color="primary">
          Hello World
        </Button>
        <img src={logo} className="App-logo" alt="logo" />
      </header>

    </div>
  );
}

export default App;
