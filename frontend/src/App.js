import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";

import {Gallery} from './pages/Gallery';
import {ImageBrowsing} from './pages/ImageBrowsing';


function App() {
  const router = createBrowserRouter(
      createRoutesFromElements(
        <>
          <Route path="/" element={<Gallery />}></Route>
          <Route path="/:id" element={<ImageBrowsing />}></Route>
        </>
      )
    );

  return (
    <RouterProvider router={router} />
  );
}

export default App;
