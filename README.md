# 원티드 프리온보딩 프론트엔드 코스 사전과제 완료
## 데모페이지 🖥️

![](https://velog.velcdn.com/images/sgsg9447/post/e98b11c3-1ef3-451b-87b9-d764411c9ab2/image.gif)
## 자기소개


IT교육 기획 및 운영을 담당하던 서비스기획자에서 서비스개발자가 되려하는 김슬기입니다 👩🏻‍💻

SW 교육 경험 -> 카이스트 비학위과정 SW사관학교 정글3기 수료 (21.11 ~ 22.03)

많이 만들어보는 것 만큼 개발 실력을 높이는 것에 좋은것이 없다 생각되어 하루에 하나씩 작은 기능들을 나누어 구현해보고 있었습니다. 

그러던 중, 원티드 프리온보딩 프로젝트 온보딩 코스를 알게되어 제가 생각한 취업 전 가장 좋은 방법이자 저에게 가장 필요한 코스라 생각되어 지원하게되었습니다.

지금까지는 이론 위주의 공부였다면, 남은 5주간 실전형 프로젝트형 프리온보딩 코스에 참여하여 실력을 높이고 성장하고 싶습니다!


### 개발 블로그
https://velog.io/@sgsg9447


## 과제 구현 방법 설명
### 0. 프로젝트 구조
```bash
├── public
│   ├── data
│	│	└──feeds.json
│   └── index.html
│  
├── src
│   ├── components
│	│	└──FeedMake.jsx
│	│	└──Feeds.jsx
│	│	└──GNB.jsx
│	│	└──LoginInputValidator.jsx
│   ├── pages
│	│	└──Home.jsx
│	│	└──Login.jsx
│	│	└──PreAssignmentGuide.jsx
│   ├── styles
│	│	└──colors.js
│	│	└──globalStyles.js
│   └── App.js
│   └── index.js
│
└── README.md
``` 

### 1. Assignment 1 - Login
✅ 로그인 컴포넌트를 개발합니다. (최소화 - input 2개, button 1개) 
약간의 랜더링 최적화를 고려해주세요. (Hint: Ref 사용)
✅ 로그인 시(ID, PW 입력 후 버튼 클릭)
- useRef dom 조작
```jsx
  const emailRef = useRef();

  useEffect(() => {
    emailRef.current.focus();
  }, []);

```
하긴했지만,,, 뭔가이상하다....(🔺)


✅ Local Storage 에 로그인 정보 저장 (다시 접속했을 경우에 정보가 유지 되어야 합니다.)
```jsx
  const validate = (e) => {
    localStorage.setItem('user', JSON.stringify(e));
    setUser(e);
    navigate('/home');
  };

```
✅ 메인 페이지로 이동합니다.(로그인이 완료되면)
```jsx
  useEffect(() => {
    setLoading(true);
    if (user !== null) {
      navigate('/home');
    }
    setLoading(false);
  }, [user]);
```

### 2. Assignment2 - GNB
✅ 로그인 후 이동하는 메인페이지의 GNB를 구현해주세요.
✅ 구현 시 스크롤에 관계 없이 화면 상단에 고정되는 sticky GNB 를 구현해주세요.
```jsx
const Container = styled.div`
  position: sticky;
  top: 0;
`
```
✅ 모바일 사이즈의 경우 가운데 Input 창이 사라져야 하고 양옆으로(space-between) 정렬 되어야 합니다.
```jsx
const Container = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;

  @media (max-width: 550px) {
    input {
      display: none;
    }
  }
`;
```
✅ 가장 오른쪽 아이콘을 Logout으로 변경해주세요.
```jsx
 <OneBtn onClick={handleLogout}>logout</OneBtn>

const OneBtn = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  background-color: ${colors.lightGray};
  font-size: 12px;
  :hover {
    background-color: ${colors.darkGray};
  }
`;
```
✅ 그 외 기능은 평가하지 않습니다. (가운데 검색바는 input 요소로만 만들어주세요. 기능은 X)
```jsx
<input placeholder="검색" />
```

### 3. Assignment3 - Validation
✅ 이메일과 비밀번호의 유효성을 확인합니다.
✅ 이메일 조건 - @ , . 포함
✅ 비밀번호 조건 - 대문자, 숫자, 특수문자 포함 8자리 이상
```jsx
const VALIDATOR = {
  email: {
    required: { value: true, message: '이메일을 입력해 주세요' },
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: '옳바른 이메일형식을 입력해주세요',
    },
  },
  password: {
    required: { value: true, message: '비밀번호를 입력해 주세요' },
    pattern: {
      value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i,
      message:
        '비밀번호는 문자 숫자 특수문자의 조합으로 8자 이상으로 입력해주세요',
    },
  },
};
```
✅ 로그인 시 이메일과 비밀번호가 등록되어 있는 것과 일치 여부 확인
Validation 상태를 CSS로 표현해주세요.
```jsx
<ErrorContainer>
  <h2>{formState.errors?.email?.message}</h2> 
</ErrorContainer>

const ErrorContainer = styled.div`
  height: 10px;
  h2 {
    color: ${colors.tomato};
  }
  font-size: 12px;
  display: flex;
  flex-direction: column;
  margin:3px
`;


```
✅ Email Input Validation Check를 통해 Email 형식이 아닌 경우 표시를해주세요. (ex. boder가 red색상으로 변경)
```jsx
 <LoginInputValidator
    register={register}
    name={'email'}
    isError={formState.errors.email === undefined ? false : true}/>
```

✅ Password Input Validation Check를 통해 Password 형식이 아닌 경우 표시를 해주세요. (ex. boder가 red색상으로 변경.)
```jsx
<LoginInputValidator
   type="password"
   register={register}
   name={'password'}
   isError={formState.errors.password === undefined ? false : true}/>
```

✅ Login Button Validation Check가 모두 통과된 경우에만 Button 색상을 진하게 변경해주세요. (통과 되지 못한 경우와 구별이 가능해야 합니다.)
```jsx
const LoginButton = styled.button`
  cursor: ${(p) => (p.valid ? 'pointer' : 'no-drop')};
  ~~
  opacity: ${(p) => (p.valid ? 1 : 0.4)};
`;
```
✅ 유효성 검사 시 아래 두 가지를 적용해서 구현해주세요.
✅ 정규표현식 사용
```jsx
email:{ 
       value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
}
password:{ 
       value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i,
}
```
✅ Validation 함수 분리
![](https://velog.velcdn.com/images/sgsg9447/post/94b762e6-c2fe-456c-ba1c-030f8c363691/image.png)

### 4. Assignment4 - Routing
✅ 로그인,로그아웃 시 라우팅 로직을 통해 페이지가 이동 되도록 구현해주세요. (Local Storage)
```jsx
<Routes>
    <Route path="/home" element={<Home user={user} setUser={setUser} />} />
    <Route path="login" element={<Login user={user} setUser={setUser} />} />
</Routes>
```

✅ 로그인이 완료되면 라우터에서 Main Page로 이동되어야 합니다. (history push 사용 X)

```jsx
  const validate = (e) => {
    localStorage.setItem('user', JSON.stringify(e));
    setUser(e);
    navigate('/home');
  };
```
✅ 로그아웃되면 (Local Storage가 삭제되면) Login Page로 이동되어야 합니다.(history push 사용 X)

```jsx
//GNB.jsx
 const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

//Home.jsx
 useEffect(() => {
    setLoading(true);
    if (user === null) {
      navigate('/login');
    }
    setLoading(false);
  }, [user]);
```

### 5. Assignment5 - Feeds
✅ 피드 컴포넌트를 개발합니다.

![](https://velog.velcdn.com/images/sgsg9447/post/3d60d822-5158-4706-bb8b-8d36305d9f9b/image.png)

✅ 레이아웃을 인스타그램과 동일하게 구현해주시면 됩니다. (픽셀 단위까지 맞추실 필요는 없으나 보기에 자연스럽도록 개발해주세요.)

![](https://velog.velcdn.com/images/sgsg9447/post/a309d02c-8ab1-4f78-9bb9-646cf621bbb5/image.png)

✅ 각 Feed의 정보는 public/data 디렉토리에 json형식으로 구성하여 fetch, axios 등을 이용하여 data를 요청해야 합니다.
Feed는 최소 3개이상 랜더링 되도록 구현해주세요.
>unsplash random 으로 받아오기!

```json
{
  "feeds": [
    {
      "id":1,
      "name": "sseulgirang",
      "img": "https://source.unsplash.com/random/500x500",
      "comments": [
        {
          "name": "sseulgirang",
          "comment": "하이루"
        },
        {
          "name": "팔로워1",
          "comment": "바이루"
        }
      ]
    },
    {
      "id": 2,
      "name": "Sseul",
      "img": "https://source.unsplash.com/random/500x900",
      "comments": [
        {
          "name": "Sseul",
          "comment": "하이루우."
        },
        {
          "name": "팔로워2",
          "comment": "바이루우2."
        }
      ]
    },
    {
      "id": 3,
      "name": "seulgikim",
      "img": "https://source.unsplash.com/random/900x500",
      "comments": [
        {
          "name": "seulgikim",
          "comment": "하이루우우."
        },
        {
          "name": "팔로워3",
          "comment": "바이루루우우."
        }
      ]
    }
  ]
}

```
🚨 각각의 Feed에 댓글을 추가할 수 있도록 개발해주세요. (Enter key & 클릭으로 게시 가능하도록) 
```jsx
const onEnter = useCallback(
    (e) => {
      if (e.keyCode === 'Enter') {
        addComment(id);
      }
    },
    [feeds, comment]
  );

```
왜 안되지....... 로직은 맞는데.........

✅ Feed는 화면 중앙에 위치 해야하며 모바일 대응이 가능해야 합니다.

✅ 게시 후 Input은 초기화 되어야 합니다.

✅ Feed의 이미지는 자유롭게 사용하시되 각각 사이즈가 각각 달라야 합니다. (ex. 정사각형, 세로가 긴 것, 가로가 긴 것 등)
(사이즈를 변경하셔도 됩니다. 같은 사이즈 X) 

✅Feeds의 Image가 로딩된 후 컴포넌트가 로딩 되도록 Loading을 구현해 주세요 (로딩바는 없어도 괜찮습니다. Hint: image.onload)
```jsx
<img src={img} alt="image" loading="lazy" />

```
✅ 메인 Page 전체에 반응형 CSS가 적용 되어있는지 평가합니다. (Media Query 사용)

```jsx
//Feeds.jsx
const Wrap = styled.div`
  max-width: 420px;
  margin: 0 auto;
`;

//FeedMake.jsx
const ImgBox = styled.div`
  max-width: 420px;
  height: 420px;
  text-align: center;
  background-color: #dbdbdb;
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

//GNB.jsx
 @media (max-width: 550px) {
    input {
      display: none;
    }
  }
```