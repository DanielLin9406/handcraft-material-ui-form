import { useState, useEffect } from "react";
import { useDebounced } from "./useDebounce";

export const useSignin = (initEmail: any, initPWD: any) => {
  const [email, setEamil] = useState(initEmail);
  const [isEmailValid, setEamilValid] = useState(true);
  const debouncedEmail = useDebounced(email, 200);

  const [PWD, setPWD] = useState(initPWD);
  const [isPWDValid, setPWDValid] = useState(true);
  const debouncedPWD = useDebounced(PWD, 200);

  const validEmail = (email: any) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  const validPWD = (pwd: any) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/;
    return re.test(String(pwd));
  };
  const handleEmailChange = (e: any) => {
    setEamil(e.target.value);
  };
  const handlePWDChange = (e: any) => {
    setPWD(e.target.value);
  };
  useEffect(() => {
    if (debouncedEmail) {
      if (validEmail(debouncedEmail)) {
        setEamilValid(true);
      } else {
        setEamilValid(false);
      }
      setEamil(debouncedEmail);
    }
  }, [debouncedEmail]);
  useEffect(() => {
    if (debouncedPWD) {
      if (validPWD(debouncedPWD)) {
        setPWDValid(true);
      } else {
        setPWDValid(false);
      }
      setPWD(debouncedPWD);
    }
  }, [debouncedPWD]);
  return {
    email,
    PWD,
    isEmailValid,
    isPWDValid,
    setEamil,
    resetEmail: () => setEamil(""),
    resetPWD: () => setPWD(""),
    handleEmailChange,
    handlePWDChange,
  };
};
