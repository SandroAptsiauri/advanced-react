import { lazy, Suspense } from "react";
import Form from "./components/Form";

const AdvancedReact = lazy(() => import("./components/AdvancedReact"));
const App: React.FC = () => {
  return (
    <>
      <Suspense fallback={<h1>LOADING . . . </h1>}>
        <AdvancedReact />
      </Suspense>
      <Form />
    </>
  );
};

export default App;
