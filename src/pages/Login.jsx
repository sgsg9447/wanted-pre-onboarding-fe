import React from 'react';
import styled from 'styled-components';
import { FaFacebookSquare } from 'react-icons/fa';
import useLogin from '../customhook/useLogin';

export default function Login({ user, setUser }) {
  const { emailInputRef, form, error, onChange, onSubmit } = useLogin();
  return (
    <LoginContainer>
      <LoginBox onSubmit={onSubmit}>
        <LoginImg />
        <LoginInput
          placeholder="testID: abc@abc.com"
          isValidated={true}
          autoComplete="email"
          name="email"
          onChange={onChange}
          value={form.email}
          error={!error.email}
          ref={emailInputRef}
        />
        <LoginInput
          placeholder="testPW: 123456@A"
          type="password"
          isValidated={true}
          autoComplete="password"
          name="password"
          onChange={onChange}
          value={form.password}
          error={!error.password}
        />
        <LoginButton
          isValidated={true}
          type="submit"
          disabled={!(error.email && error.password)}
          error={error.email && error.password}
        >
          로그인
        </LoginButton>
        <LineContainer>
          <Line></Line>
          <Or>또는</Or>
          <Line></Line>
        </LineContainer>

        <FacebookContainer>
          <FaFacebookSquare />
          <FacebookText>Facebook으로 로그인</FacebookText>
        </FacebookContainer>
        <PasswordText>비밀번호를 잊으셨나요?</PasswordText>
      </LoginBox>
      <SignInBox>
        <span>계정이 없으신가요?</span>
        <SignInText>가입하기</SignInText>
      </SignInBox>
      <DownloadBox>
        <p>앱을 다운로드 하세요</p>
        <DownBtnBox>
          <DownBtnImg />
          <DownBtnImg2 />
        </DownBtnBox>
      </DownloadBox>
    </LoginContainer>
  );
}

// Styled Component

const LoginContainer = styled.div`
  min-height: 100vh;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LoginBox = styled.form`
  width: 350px;
  height: 400px;
  background-color: white;
  border: 1px solid #b9b9b9;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const SignInBox = styled.div`
  width: 350px;
  height: 70px;
  margin-top: 10px;
  background-color: white;
  border: 1px solid #b9b9b9;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #464646;
`;

const LoginImg = styled.img.attrs({
  src: 'https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png',
})`
  width: 150px;
  margin-bottom: 30px;
`;

const LoginInput = styled.input`
  width: 270px;
  height: 38px;
  padding: 10px;
  font-size: 12px;
  border: 1px solid;
  border-color: ${(props) => (props.error ? 'red' : '#dbdbdb')};
  border-radius: 2px;
  margin-bottom: 5px;
`;
const LoginButton = styled.button`
  width: 270px;
  height: 38px;
  padding: 10px;
  font-size: 14px;
  font-weight: 800;
  background-color: ${(props) => (props.error ? '#0099ff' : '#a5aeb4')};
  border-radius: 5px;
  margin-top: 5px;
  color: white;
  text-align: center;
  cursor: pointer;
`;

const LineContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 15px;
  width: 268px;
  margin: 15px 40px 20px;
`;
const Line = styled.div`
  height: 1px;
  width: 105px;
  background-color: #dbdbdb;
`;

const Or = styled.div`
  font-size: 13px;
  color: #8e8e8e;
`;

const FacebookContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #3d5a99;
  font-weight: bold;
`;

const FacebookText = styled.div`
  display: flex;
  margin-top: 5px;
  margin-left: 5px;
`;

const PasswordText = styled.div`
  color: #2a5883;
  font-size: 12px;
  margin-top: 20px;
`;

const SignInText = styled.div`
  color: #3495f6;
  margin-left: 5px;
  cursor: pointer;
`;

const DownloadBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const DownBtnBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;

const DownBtnImg = styled.img.attrs({
  src: 'https://www.instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png',
})`
  width: 150px;
  margin-bottom: 30px;
  margin-right: 10px;
`;
const DownBtnImg2 = styled.img.attrs({
  src: 'https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png',
})`
  width: 150px;
  margin-bottom: 30px;
`;
