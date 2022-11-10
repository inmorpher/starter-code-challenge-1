import styles from "../UI/CreateUser.module.css";
import { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const CreateUser = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [error, setError] = useState();

  const createUserHandler = (event) => {
    event.preventDefault();
    if (inputName.trim().length === 0 || inputAge.trim().length === 0) {
      setError({
        title: "Некорректный вод",
        message: "Эти поля не могут быть пустыми",
      });
      return;
    }
    if (+inputAge < 1) {
      setError({
        title: "Некорректный возраст",
        message: "Возраст долден быть больше 0",
      });
      return;
    }
    props.onCreateUser(inputName, inputAge);
    setInputAge("");
    setInputName("");
  };

  const nameChangeHandler = (event) => {
    setInputName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setInputAge(event.target.value);
  };

  const errorHandler = () => setError(false);

  return (
    <>
      {error && (
        <ErrorModal
          onCloseModal={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={createUserHandler}>
          <label>Имя:</label>
          <input type="text" onChange={nameChangeHandler} value={inputName} />
          <label>Возраст:</label>
          <input
            type="number"
            min="0"
            max="100"
            step="1"
            onChange={ageChangeHandler}
            value={inputAge}
          />
          <Button type="submit">Добавить пользователя</Button>
        </form>
      </Card>
    </>
  );
};

export default CreateUser;
