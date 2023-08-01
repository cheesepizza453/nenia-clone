# nenia 메인페이지 클론코딩

링크 : http://miri-portfolio.s3-website.ap-northeast-2.amazonaws.com/projects/nenia/index.html<br/>

2023.07.25 퍼블리싱 진행<br/>
2023.07.30 모션 구현<br/>
2023.07.31 반응형 구현<br/>
2023.08.01 모바일 오류 수정<br/>
<br/>

## 기술스택
HTML, CSS, JavaScript <br/><br/>

## 프로젝트 설명
nenia 메인페이지 클론코딩 프로젝트입니다.
반응형이며 페이지 내 모션들은 자바스크립트로 작업했습니다.<br/><br/>

<br/>

![ezgif com-optimize (1)](https://github.com/cheesepizza453/nenia-clone/assets/71148177/1af322df-3031-495d-b469-0516c2cd9ea7)<br/>
스크롤에 따라 가로로 늘어나는 영역 / 배경 이미지 패럴렉스
<br/>
<br/>
<br/>
<br/>
![ezgif com-optimize (2)](https://github.com/cheesepizza453/nenia-clone/assets/71148177/97bf6c1a-c3dd-408b-9b75-c49749d8d240)
<br/>
가로스크롤 / 스크롤 이미지 슬라이드 
<br/>
<br/>
<br/>
<br/>
![ezgif com-resize (2)](https://github.com/cheesepizza453/nenia-clone/assets/71148177/ea5e8eb8-42a4-4112-b85c-80601e8c8e8d)<br/>
반응형 구현

<br/><br/>
### 회고
- PC사이즈에서 창을 줄일 때 자연스럽게 모바일 디자인으로 바뀌길 원했는데 자바스크립트로 스타일이 변경된 부분이 화면을 줄여도 유지되었습니다.<br/>
이를 해결하기 위해 리사이즈 이벤트 리스너를 추가해 모바일 사이즈를 확인하는 변수를 만들었고, 모바일에서는 모션이 작동되지 않도록 설정했습니다. <br/>
- 시인성을 해치지 않는 모션을 구현하기 위해 스크롤 타이밍을 여러번 확인하며 코드를 작성했습니다. 스크롤에 따라 모션의 느낌이 달라져서 어려웠고, 고민이 더 필요한 부분 같습니다. <br/>
- 디자인에 따라 컨텐츠를 감싸는 html요소를 추가하는 것을 유념하며 html을 작성해야 된다는 것을 깨달았습니다. 처음에 이를 생각하지 못해 작업 중 html 수정이 있었습니다.<br/>
- 반응형 미디어쿼리 사이즈가 겹치는 부분이 제대로 적용되지 않는 문제가 있었습니다. 시행착오를 겪으로 미디어쿼리도 casecade된다는 것을 알았습니다.<br/>
- 태블릿 사이즈에서 가독성을 높히기 위해 태블릿 사이즈에서만 display block 되는 br태그를 사용했습니다.<br/>
