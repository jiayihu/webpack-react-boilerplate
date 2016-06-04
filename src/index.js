import 'babel-polyfill';
import ReactDOM from 'react-dom';
import routes from './app/routes';

if(module.hot) {
  module.hot.accept();
}

ReactDOM.render(routes, document.getElementById('app'));
console.log('Boh');
