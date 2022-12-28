import { DashboardLayout } from "./Components/templates/dashboard-layout";
import Home from "./pages/Home";

function App({ children }) {
  return (
    <>
      <DashboardLayout>
        {children}
      <Home />  
      </DashboardLayout>
    </>
  );
}

export default App;
