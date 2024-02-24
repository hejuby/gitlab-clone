# Gitlab 클론 코딩
원본 사이트 : <a href="https://about.gitlab.com/" target="_blank">Gitlab</a>

## 파일 구조
```
KDT8-M1
┣ index.html
┣ README.md
┣ images
┗ css
  ┣ common.css
  ┣ reset.css
  ┣ slider.css
  ┗ style.css
┗ js
  ┣ main.js
  ┗ slider.js
```

## 주요 구현 기능
1. ```position: sticky;```를 사용해 최상단 광고배너 및 그 아래 출력되는 헤더를 구현하였습니다.
2. CSS를 사용한 헤더 드롭다운 메뉴를 구현하였습니다.
![Header](./images/markdown/header.png)
3. ```position: fixed;``` 및 ```z-index```를 활용하여 화면 전체를 덮는 검색탭을 구현하였습니다.
  3-1. 자바스크립트를 통해 검색창 ```input``` 요소와의 상호작용을 구현하였습니다.
![Search](./images/markdown/search.png)
4. ```:hover```를 이용한 버튼 또는 링크 호버 애니메이션 효과를 구현하였습니다.
![Hover](./images/markdown/hover.png)
5. ```transition```을 활용한 탭 스위칭 및 애니메이션 효과를 구현하였습니다.
![Tabs](./images/markdown/tabs.png)
6. 가상 요소를 활용해 섹션 일부분을 덮는 배경 요소를 구현하였습니다.
![PseudoElement](./images/markdown/pseudo-element.png)
7. CSS Flexbox 및 Grid를 이용한 다양한 레이아웃을 구현하였습니다.
![Grid1](./images/markdown/grid1.png)
![Grid2](./images/markdown/grid2.png)
8. 자바스크립트를 이용한 슬라이더 기능을 구현하였습니다.
  8-1. 마우스 휠을 이용해 좌우 이동
  8-2. 마우스 이벤트를 활용한 드래그 이동
  8-3. 버튼을 이용해 전체 슬라이더의 일정 비율 이동
  8-4. <a href="https://gsap.com/" target="_blank">GSAP</a>을 활용한 네비게이션 바 구현
  ![Navigation1](./images/markdown/navigation1.png)
  ![Navigation2](./images/markdown/navigation2.png)