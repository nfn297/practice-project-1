import React, { useState, useRef } from "react";
import ErrorModal from "../UI/ErrorModal";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const [error, setError] = useState("");

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const submitHandler = () => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredName.trim().length == 0 || enteredAge.trim().length == 0) {
      return setError({
        title: "Username or Age is empty",
        message: "Please enter username or age.",
      });
    }

    if (+enteredAge < 0) {
      return setError({
        title: "Invalid age",
        message: "Please enter a non negative value for age (> 0).",
      });
    }

    const userInfo = {
      username: enteredName,
      age: enteredAge,
      id: Math.random().toString(),
    };

    props.onAddUser(userInfo);

    nameInputRef.current.value = ''
    ageInputRef.current.value = ''
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          errorTitle={error.title}
          errorMessage={error.message}
          onDismiss={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref = {nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            ref = {ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
