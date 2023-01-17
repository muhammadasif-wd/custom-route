import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Header/Navbar";
import Private from "./Hooks/usePrivate";
import nastedRoutes from "./Routes/nastedRoutes";
import privateRoutes from "./Routes/privateRoutes";
import publicRoutes from "./Routes/publicRoutes";

function App() {
  return (
    <div>
      {/* Import navbar */}
      <Navbar />
      <Routes>
        {/* Public routes */}
        {publicRoutes.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />}></Route>
        ))}
        {/* Private Routes */}
        {privateRoutes.map(({ path, Component }, index) => (
          <Route
            key={index}
            path={path}
            element={
              <Private>
                <Component />
              </Private>
            }
          ></Route>
        ))}
        {/* Nasted Routes */}
        {nastedRoutes.map(({ path, Component }, index) => (
          <>
            <Route index path="/hello" element=""></Route>
            <Route key={index} path={path} element={<Component />}></Route>
          </>
        ))}
      </Routes>
    </div>
  );
}

export default App;
