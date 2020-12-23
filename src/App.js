import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import DeleteIcon from '@material-ui/icons/Delete'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonGroup>
          <Button
            endIcon={<SaveIcon />}
            size="large"
            onClick={() => console.log("howdy")}
            href="#"
            variant="contained"
            color="primary"
          >
            Save
          </Button>
          <Button
            endIcon={<DeleteIcon />}
            size="large"
            onClick={() => console.log("howdy")}
            href="#"
            variant="contained"
            color="secondary"
          >
            Discard
          </Button>
        </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
