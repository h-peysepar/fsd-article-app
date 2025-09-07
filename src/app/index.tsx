import { Toaster } from "@/shared/ui/sonner";
import { RouterProvider, StoreProvider } from "./providers";
import { AppRouter } from "./router";
import { Header } from "@/widgets/header/ui";

function App() {
  return (
    <StoreProvider>
      <RouterProvider>
        <Header />
        <AppRouter />
        <Toaster />
      </RouterProvider>
    </StoreProvider>
  );
}

export default App;
