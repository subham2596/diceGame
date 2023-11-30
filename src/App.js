import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import RollDice from './components/RollDice';
import { Provider } from 'react-redux';
import RulesContext from './utils/RulesContext';
import store from './utils/store';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "playing",
    element: <RollDice />
  }
])

function App() {
  return (
    <Provider store={store}>
    <div className="App">
        <RouterProvider router={appRouter} />
    </div>
    </Provider>
  );
}

export default App;
