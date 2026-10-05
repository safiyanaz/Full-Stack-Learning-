import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider 
} from "react-router-dom"
import MainLayouts from "./layouts/MainLayouts";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage"; 
import Job from "./pages/Job";
import AddJobs from "./pages/AddJobs";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element = {<MainLayouts />}>
      <Route index element= {<HomePage/>}/>
      <Route path="/jobs"  element= {<JobsPage/>}/>
      <Route path="/jobs/:id"  element= {<JobPage/>}/>
      <Route path="*"  element= {<NotFoundPage/>}/>
    </Route>
));


const App = () => {
  return <RouterProvider router={router}/>
}

export default App