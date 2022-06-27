import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const registerInfo = [
  { email: 'abc@abc.com', password: '123456@A', name: '김슬기' },
];

function useLogin() {
  const emailInputRef = useRef();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState({
    email: false,
    password: false,
  });
  const navigate = useNavigate();

  useEffect(() => {
    emailInputRef.current.focus();
  }, []);

  function checkValidation(value, name) {
    let reg = null;
    if (name === 'email') {
      // @, . 포함
      reg = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    } else if (name === 'password') {
      // 대문자, 숫자, 특수문자 포함 8자리 이상
      reg = /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[~!@#$%^&*()_+`-]).{8,}$/;
    }

    if (reg !== null) setError({ ...error, [name]: reg.test(value) });
  }

  const onChange = useCallback(
    (e) => {
      const { value, name } = e.target;

      setForm({ ...form, [name]: value });
      checkValidation(value, name);
    },
    [form, error]
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      for (const info of registerInfo) {
        if (info.email === form.email && info.password === form.password) {
          try {
            localStorage.setItem('user', JSON.stringify(info));
          } catch (e) {
            console.log('localStorage is not working');
          }
          navigate('/info');
          break;
        }
      }
    },
    [form]
  );

  return { emailInputRef, form, error, onChange, onSubmit };
}

export default useLogin;
