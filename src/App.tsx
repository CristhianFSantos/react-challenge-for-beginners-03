import { useCallback } from "react";
import "./App.scss";
import { CustomButtom } from "./components/CustomButton/CustomButton";
import { Header } from "./components/Header/Header";

function App() {
  const handleSubmit = useCallback(() => {
    console.log("Formulário enviado");
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="card">
        <CustomButtom label="Enviar Formulário" onClick={handleSubmit} />
      </div>
    </div>
  );
}

export default App;
