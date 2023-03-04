import { QueryCache, QueryClient, QueryClientProvider } from "react-query";
import Home from "./pages/home";
import Logo from "./assets/logo.svg";

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      if (query.state.data !== undefined) {
        console.error(error);
      }
    },
  }),
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="sticky flex bg-white p-4 sm:px-8 lg:pl-32">
        <img src={Logo} alt="Mosh" />
      </div>
      <Home />
      <footer className="fixed bottom-0 left-0 w-full">
        <p className="p-3 bg-green-100 font-semibold text-center">
          If you're in crisis or experiencing suicidal thoughts call 000 or
          Lifeline 13 11 14
        </p>
      </footer>
    </QueryClientProvider>
  );
}

export default App;
