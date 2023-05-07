import ReactDOM from 'react-dom';
import App from './components/App'

const app = App();
const elementRoot = document.querySelector(".root");

ReactDOM.render(app, elementRoot);