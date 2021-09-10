# CSS FLEX

보통 FLEX 라고 불리우는 것들은 ``레이아웃 배치 전용 기능`` 으로 고안되었다.

그래서 레이아웃을 만들 때 float이나 inline-block 등을 이용한 방식보다 강력하다.

구조

```html
<div class="container">
  <div class="item">item 1</div>
  <div class="item">item 2</div>
  <div class="item">item 3</div>
</div>
```

여기서 ``container``를 **Flex Container**라고 지칭.

그리고 ``item``들을 **Flex item**이라고 한다.

즉, Flex 시스템은 컨테이너에 적용하는 속성과 아이템에 적용하는 속성으로 나뉘어진다.

## 컨테이너에 적용하는 속성들

* **display: flex;**

```css
.container {
  display: flex;
}
```

은 다음과 같이 배치된다.

![flex-layout-example](/static/img/css/flex/flex-layout-example.png)

즉 div 의 컨텐츠 내용만큼 레이아웃이 배치된다는 것.

마치 inline 처럼.

height 또한 item 중 가장 큰 height에 맞춰진다.

* **display: inline-flex;**

  block과 inline-block 과 동일한 관계라고 보면 된다.

  위 flex 사진에서 오른쪽 비어있는 노란색 부분은 지워진다.

![flex-layout-example2](/static/img/css/flex/flex-layout-example2.png)


### 배치 방향 설정

아이템들이 나열되는 축의 방향을 설정이 가능.

```css
.container {
  flex-direction: row;
  flex-direction: column;
  flex-direction: row-reverse;
  flex-direction: column-reverse;
}
```

그림을 보면 이해가 쉽다.

![flex-layout-example3](/static/img/css/flex/flex-layout-example3.png)

default는 ``row``이다.


### 줄넘김 처리 설정 flex-wrap

```css
.container {
  flex-wrap: nowrap;
  flex-wrap: wrap;
  flex-wrap: wrap-reverse;
}
```

![flex-layout-example4](/static/img/css/flex/flex-layout-example4.png)

### flex-flow

``flex-wrap`` + ``flex-direction``

알아만 두자.


### 정렬

* justify

  아이템들이 정렬되어있는 방향(메인축)으로 정렬

* align

  메인축과 90도를 이룬 축(수직축)



#### 메인축 방향 정렬 ``justify-content``

```css
.container {
  justify-content: flex-start;
  justify-content: flex-end;
  justify-content: center;
  justify-content: space-between;
  justify-content: space-around;
  justify-content: space-evenly;
}
```

* flex-start

  flex-start가 기본값. (아예 설정안하는 것과 같음. 즉. ``display: flex;``일때와 동일.)


* flex-end

  flex-start에서 아이템(요소)들이 마지막에 오른쪽에 배치.(float: right 한것마냥..)

* center

  요소들이 양 옆을 같은 간격(예를 들면 패딩, 마진)을 두고 가운데에 붙어있는 형태.

* space-between

  요소들 사이(between)에 균일한 간격을 만들어줌. 

* space-around

  space-between에서 양 옆 요소들에게 동일한 간격을 줌.

* space-evenly

  IE와 Edge 지원x.

![flex-layout-example5](/static/img/css/flex/flex-layout-example5.png)


#### 수직축 방향 정렬 ``align-items``

```css
.container {
  align-items: stretch;
  align-items: flex-start;
  align-items: flex-end;
  align-items: center;
  align-items: baseline;
}
```

* stretch

  기본값. 아이템(요소)들이 수직축 방향으로 끝(container height만큼)까지 쭈ㅡ욱 늘어난다.

* center

  요소들을 세로 가운데로 정렬.
  height는 각 요소의 height만큼 제각각.


#### 요소 가운데 넣기.

```css
.container {
  justify-content: center;
  align-item: center;
}
```

![flex-layout-example6](/static/img/css/flex/flex-layout-example6.png)

> 대박..


## 아이템에 적용하는 속성들


### 아이템 기본 크기 설정 ``flex-basis``

아이템들의 기본 크기를 설정! (container의 flex-direction이 row일 때에는 너비, column일 때는 높이.)


```css
.item {
  flex-basis: auto; /** default **/
}
```


ex) flex-basis: 100px;

```css 
.item{
  flex-basis: 100px;
}
```

![flex-layout-example7](/static/img/css/flex/flex-layout-example7.png)

원래 width가 100px 안되었던 요소들은 100px 까지 width가 늘어나고, 100px 넘은놈은 줄어들진 않고, 그대로 넘은 상태로 유지.

여기서 만약 100px를 넘는 요소들 또한 너비를 100px가 넘는 놈들까지 딱 100px만큼으로 표현하고 싶다면 ``width``를 설정해라!

```css
.item {
  flex-basis: 100px;
  width: 100px;
}
```

### 너비를 유연하게 늘려보자! ``flex-grow``

```css
.item {
  flex-grow: 0; /** default **/
  flex-grow: 1; /** 0보다 큰 값 **/
}
```

flex-basis에서 여백(노란색 부분)을 지정된 숫자의 비율로 나누어 가진다.

예를 들어,

```css
/** 1:2:1의 비율로 세팅할 경우 **/

.item:nth-child(1) {flex-grow: 1;}
.item:nth-child(1) {flex-grow: 2;}
.item:nth-child(1) {flex-grow: 1;}
```

![flex-layout-example8](/static/img/css/flex/flex-layout-example8.png)

여백의 비로 보았을 때 그림이라 정확하진 않지만 **1:2:1** 로 볼 수 있다.


### 유연하게 줄이기 flex-shrink

존나 어렵네.. 설명은..

특정 요소를 고정 크기로 두고 싶을 때! 사용하면 좋을듯

```css
.container {
  display: flex;
}

.item:nth-child(1) {
  flex-shrink: 0;
  width: 100px;
}

.item:nth-child(2) {
  flex-grow: 1;
}
```

여기에서는 1번째 item을 고정크기인 100px로 두었다.

그러고 container(컨테이너)의 크기를 따로 설정안해주었으니 ``width: 100%`` 일 것. 따라서 100px인 첫번째요소를 고정이며,

다른요소들은 컨테이너의 width에 영향을 받는다.

### 위에 3가지를 한꺼번에 ``flex``

축약형 속성

```css
.item {
  flex: 1; /** flex-grow: 1; flex-shrink: 1; flex-basis: 0%; **/

  flex: 1 1 auto; /** flex-grow: 1; flex-shrink: 1; flex-basis: auto; **/

  flex: 1 500px; /** flex-grow: 1; flex-shrink: 1; flex-basis: 500px; **/
}
```

예를 보자.

1:2:1의 비율로 요소들을 나열할 것이다.

```css
.item {
  flex: 1 1 0;
}

.item:nth-child(2) {
  flex: 2 1 0;
}
```

다음과 같이 된다.

![flex-layout-example9](/static/img/css/flex/flex-layout-example9.png)

> 유용하긴 한 것 같다.

### 카드 배열 시스템

flex-wrap과 flex-basis를 이용해서 카드형식의 요소를 나열할 수 있다.

예를 보자.

```css
.container {
  display: flex;
  flex-wrap: wrap;
}
.item {
  flex: 1 1 40%;
}
```

100%에는 40%가 2개까지 들어갈 수 있으므로 다음 그림처럼 2개씩 나열되는 형태가 된다.

![flex-layout-example10](/static/img/css/flex/flex-layout-example10.png)

만약 flex를 1 1 30%로 한다면?

![flex-layout-example10](/static/img/css/flex/flex-layout-example11.png)


> 무쳤다..


# 참고

<a href="https://studiomeal.com/archives/197" target="_blank">https://studiomeal.com/archives/197</a>