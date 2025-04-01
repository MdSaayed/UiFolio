import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import Home from "./pages/Home";


const router = createBrowserRouter([
	{ path: "/", element: <Home /> },
	
	// { path: "*", element: <NotFound /> },
]);


function App() {
	// Fix for "global is not defined" issue in Vite
// if (typeof global === "undefined") {
//   // @ts-ignore
//   window.global = window;
// }


	return (
		<>
				<RouterProvider router={router} />
		</>
	);
}

export default App;