import './components/simpsons/Family';
import './App.css';
import Family from "./components/simpsons/Family";
import Characters from "./components/character/Characters";

function App() {
    return (
        <div className="main">
            <h1>Simpsons</h1>
            <Family/>
            <h1>Rick and Morty</h1>
            <Characters/>
        </div>
    );
}

export default App;
