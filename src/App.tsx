import { useCallback, useState } from "react";
import "./App.scss";
import { CustomButtom } from "./components/CustomButton/CustomButton";
import { CustomDropdown } from "./components/CustomDropdown/CustomDropdown";
import { CustomInput } from "./components/CustomInput/CustomInput";
import { CustomRadio } from "./components/CustomRadio/CustomRadio";
import { Header } from "./components/Header/Header";
import { ProgressBar } from "./components/ProgressBar/ProgressBar";
import { AppFormType } from "./shared/AppForm.model";
import { CustomValidators } from "./shared/custom-validator";

const EMPTY_FORM: AppFormType = {
  name: "",
  email: "",
  status: "",
  genre: "",
};

function App() {
  const [progress, setprogress] = useState(0);
  const [isFormValid, setisFormValid] = useState(false);
  const [_, setformGroup] = useState<AppFormType>(EMPTY_FORM);
  const [completed, setcompleted] = useState(false);

  const formControl = useCallback((value: string, name: string) => {
    setcompleted(false);
    setformGroup((prevState) => {
      const newFormValue = { ...prevState, [name]: value };
      validateForm(newFormValue);
      return newFormValue;
    });
  }, []);

  function validateForm(form: AppFormType) {
    const nameIsValid = CustomValidators.nameValidator(form.name);
    const emailIsValid = CustomValidators.emailValidator(form.email);
    const statusIsValid = form.status !== "";
    const genreIsValid = form.genre !== "";

    setisFormValid(
      nameIsValid && emailIsValid && statusIsValid && genreIsValid
    );

    handleProgress(
      Number(nameIsValid) +
        Number(emailIsValid) +
        Number(statusIsValid) +
        Number(genreIsValid)
    );
  }

  const handleSubmit = useCallback(() => {
    alert("Formulário enviado com sucesso!");
    setformGroup(EMPTY_FORM);
    setprogress(0);
    setisFormValid(false);
    setcompleted(true);
  }, []);

  const handleProgress = (aQuarter: number) => {
    setprogress(progress + aQuarter * 25);
  };

  return (
    <div className="App">
      <Header />
      <div className="card">
        <CustomInput
          clearInput={completed}
          name="name"
          label="Nome Completo"
          inputControl={formControl}
        />
        <CustomInput
          clearInput={completed}
          name="email"
          label="E-mail"
          inputControl={formControl}
        />
        <CustomDropdown
          clearDropdown={completed}
          name="status"
          dropdownControl={formControl}
          label="Estado Civil"
          options={["Solteiro", "Casado", "Divorciado", "Viúvo"]}
        />
        <CustomRadio
          clearRadio={completed}
          name="genre"
          label="Gênero"
          options={["Masculino", "Feminino"]}
          inputControl={formControl}
        />
        <CustomButtom
          disabled={!isFormValid}
          label="Enviar Formulário"
          onClick={handleSubmit}
        />
        <ProgressBar value={progress} />
      </div>
    </div>
  );
}

export default App;
