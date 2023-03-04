import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./pages/home";
import Logo from "./assets/logo.svg";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="sticky flex bg-white p-4 sm:px-8 lg:pl-32">
        <img src={Logo} alt="Mosh" />
      </div>
      <Home />
    </QueryClientProvider>
  );
}

export default App;
