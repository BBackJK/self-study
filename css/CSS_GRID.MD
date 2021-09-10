# CSS GRID

* flex는 한 방향 레이아웃 시스템
* grid는 두 방향(가로-세로) 레이아웃 시스템

![flex-layout-example12](/static/img/css/grid/grid-layout-example1.png)


## 기본적인 HTML 구조

```html
<div class="container">
  <div class="item">A</div>
  <div class="item">B</div>
  <div class="item">C</div>
  <div class="item">D</div>
  <div class="item">E</div>
  <div class="item">F</div>
  <div class="item">G</div>
  <div class="item">H</div>
  <div class="item">I</div>
</div>
```

flex 시스템과 동일하게 컨테이너와 아이템으로 간다.

* 전체적인 용어와 레이아웃

![flex-layout-example13](/static/img/css/grid/grid-layout-example2.png)


* ``Grid Container``

  Grid의 전체 영역.

* ``Grid Item``

  Grid의 자식 요소.

* ``Grid Track``

  Grid 행 또는 열을 합쳐서 부르는 말.

* ``Grid Cell``

  Grid 한 칸.

* ``Grid Line``

  Grid Cell을 구분 짓는 라인(가로-세로)

* ``Grid Number``

  Grid Line의 각 번호.

  번호는

  위-아래로 커지고,
  좌-우로 커진다.

* ``Grid Gap``

  Grid Cell 사이의 간격

* ``Grid Area``

  Grid Cell의 집합.


## 그리드 형태 정의 ``grid-template-rows / grid-template-columns``


```css
.container {

  /** column **/
  grid-template-columns: 200px 200px 500px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-columns: repeat(3, 1fr);
  grid-template-columns: 200px 1fr;
  grid-template-columns: 100px 200px auto;

  /** row **/
  grid-template-rows: 200px 200px 500px;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-template-rows: 200px 1fr;
  grid-template-rows: 100px 200px auto;
}
```

예를 들어서

```
grid-template-columns: 200px 200px 500px;
```

는 grid column을 각각 200px, 200px, 500px로 만들겠다는 의미.


하지만 비율로 정하고 싶다..면?

```
grid-template-columns: 1fr 1fr 1fr;
```

![flex-layout-example14](/static/img/css/grid/grid-layout-example3.png)


### repeat 함수

```css
.container {
  grid-template-columns: repeat(5, 1fr);
}
```

repeat(반복횟수, 반복값).

### minmax 함수

최댓값과 최솟값을 지정 가능.

``minmax(100px, auto)``는 최소한 100px를 너비나 폭을 설정하고
최대는 컨텐츠 크기에 맞춰서 조절되어라!

```css
.container {
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
}
```

![flex-layout-example15](/static/img/css/grid/grid-layout-example4.png)

```css
.container {
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, minmax(100px, auto));
}
```

![flex-layout-example16](/static/img/css/grid/grid-layout-example5.png)


### auto-fill과 auto-fit

* auto-fill

```css
.container {
  grid-template-columns: repeat(auto-fill, minmax(20%, auto));
}
```

auto-fill의 크기를 20%로 설정하였으므로 다음 사진과 같이 1개의 row에는 5개의 cell이 들어간다.

![flex-layout-example17](/static/img/css/grid/grid-layout-example6.png)


cell의 개수가 5개보다 작으면 **공간이 남지만**

auto-fill 대신 auto-fit을 사용하면 auto-fill의 남은 공간을 자동으로 채워준다!!

### 간격 만들기 ``row-gap / column-gap / gap``

각 요소들 사이에 여백을 만들어준다.

gap은 row-gap + column-gap을 합친 것.

> IE에서는 gap의 대체 속성이 없기 때문에, IE와 구조를 통일하고 싶으면 아예 처음부터 gap을 사용하지 않고 구조를 설계하여야 한다.

### 그리드 형태를 자동으로 정의 ``grid-auto-columns / grid-auto-rows``

```css
.container {
  grid-template-rows: repeat(3, minmax(100px, auto));
}
```

의 css가 있다면

각 셀마다 최소 100px의 높이를 확보하고, 콘텐츠의 높이가 100px를 넘어가면 넘어간 만큼 지동(auto)으로 늘어나도록 했다.

여기에서 반복횟수를 3으로 주었지만

애초에 셀의 갯수를 모를때에는 ``grid-auto-rows``를 쓰는 것이 방법이다.

```css
.container {
  grid-auto-rows: minmax(100px, auto);
}
```

### 각 Cell의 영역 지정 ``grid-column-start / grid-column-end / grid-column / grid-row-start / grid-row-end / grid-row``


우선 총 아이템이 9개인 경우 그림으로 Grid Line을 보자.

![flex-layout-example18](/static/img/css/grid/grid-layout-example7.png)

다음과 같이 사용할 수 있다.

```css
.item:nth-child(1) {
  grid-column: 1 / 3; /** grid-column: start / end **/
  grid-row: 1 / 2; /** grid-row: start / end **/
}
```

![flex-layout-example19](/static/img/css/grid/grid-layout-example8.png)


### 영역 이름으로 그리드 정의 ``grid-template-areas``

각 영역에 이름을 붙이고, 그 이름을 이용해서 배치하는 방법

만약 아래와 같이 배치하고 싶다면

![flex-layout-example20](/static/img/css/grid/grid-layout-example9.png)

```css
.container {
  grid-template-areas:
    "header header header"
    "  a     main    b   "
    "  .       .     .   "
    "footer footer footer"
}
```

이렇게 작성한 뒤, 해당 요소에 grid-area 속성으로 이름을 지정!

```css
.header { grid-area: header; }
.sidebar-a { grid-area: a; }
.main-content { grid-area: main; }
.sidebar-a { grid-area: a; }
.footer { grid-area: foorter; }
```

> 동적인 요소에는 쓸모 없을 듯

### 개별 아이템 세로 정렬 ``align-self``

해당 요소를 세로축 방향으로 정렬한다.

```css
.item:nth-child(2) {
  align-self: stretch;
  align-self: start;
  align-self: end;
  align-self: center;
}
```

``align-self: start``

![flex-layout-example21](/static/img/css/grid/grid-layout-example10.png)

### z-index

z축 정렬

```css
.item:nth-child(5) {
  z-index:1;
  transform: scale(2);
}
```

![flex-layout-example22](/static/img/css/grid/grid-layout-example11.png)

> 유용하게 쓰일듯!!

# 호환성

|표준|IE|
|:---:|:---:|
|display: grid;| display: -ms-grid;|
|grid-template-rows|-ms-grid-rows|
|grid-template-columns|-ms-grid-columns|
|grid-row-start|-ms-grid-row|
|grid-column-start|-ms-grid-column|
|gird-row:1 / span 2; 에서 span 2 대신! |-ms-grid-row-span: 2|
|grid-column: 1 / span 2; 에서 span 2 대신!|-ms-grid-column-span: 2|
|align-self|-ms-grid-row-align|
|justify-self|-ms-grid-column-align|

# 출처

<a href="https://studiomeal.com/archives/533" target="_blank">https://studiomeal.com/archives/533</a>
