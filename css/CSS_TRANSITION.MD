# CSS transition

선택자가 변화되는 것을 **시간의 흐름**을 줘서 변화를 주는 역할.


## 속성

### delay 

``transition-delay`` 

변화되는 시간을 **지연**시키는 속성.

단위 s --> 초.


### duration

``transition-duration``

변화되는 시간을 **작성**하는 속성.

### property

``transition-property``

변화되는 CSS를 구분하여 따로 처리.

### timing-function

``transition-timing-function``

변화되는 시간에 ease(가속감속) 처리.



## 예제

### duration

```html
<html lang="ko">
  <head>
    <meta charset="UTF-8">
    <title>테스트</title>
    <link rel="stylesheet" href="css파일 경로">
  </head>
  <body>
    <div class="trs-container">
      <div class="box1">BOX 1</div>
      <div class="box2">BOX 2</div>
      <div class="box3">BOX 3</div>
      <div class="box4">BOX 4</div>
      <div class="box5">BOX 5</div>
    </div>
  </body>
</html>
```

```css
.trs-container {
  width: 500px;
  padding: 20px;
  border: 5px solid black;
}

/** classname이 container인 요소의 자식중 div 선택(>)**/
.trs-container > div {
  width: 10px; 
  height: 50px;
  background-color: yellow;
  transition: 0.5s; /** delay와 duration 중 default는 duration. **/
}


.trs-container > div:hover {
  width: 500px;
}
```

### delay

duration 예제에서 css중 box1, 2에만 추가하여 변화 비교하며 확인.

```css
.trs-container {
  width: 500px;
  padding: 20px;
  border: 5px solid black;
}

.trs-container > div {
  width: 10px;
  height: 50px;
  background-color: yellow;
  transition: 0.5s;
}

.trs-container > div:hover {
  width: 500px;
}

.trs-container > box1:hover, .trs-container > box2:hover {
  transition-delay: 0.5s;
}
```


### property

변화의 시간 차를 둘 속성을 정하는 속성.

``transition-property: 속성명, 속성명;``

예제


```css
/** ... */
.trs-container > div { 
  /** ... */
  transition-property: width, background-color;
  transition-duration: 1s, 0.3s;
}

.trs-container > div:hover {
  width: 500px;
  background-color: lightblue;
}
```


### timing-function

변화의 움직임에 ease(가속 또는 감속)효과를 주는 속성


|값|설명|
|:---:|:---:|
|ease| default, **느리게 시작**한 다음 **빠르게 전환**한 다음 **천천히 종료**|
|linear|처음부터 끝까지 같은 속도로 전환|
|ease-in| 가속, 느린 시작으로 빠른 끝 (느린 느낌을 줌.)|
|ease-out| 감속, 빠른 시작으로 느린 끝 (빠른 느낌을 줌.)|
|ease-in-out|느린 시작과 느린 끝으로 전환효과 지정|
|cubic-bezier(n, n, n, n)|3차 베지어 함수에서 자신의 값을 임의적으로 정함|


#### cubic-bezier(n, n, n, n)

transition 속성 혹은 transition-timing-function 속성에서 **전환 시작과 끝까지의 효과를 제어**하는데 사용.

4개의 컨트롤 포인트를 가지는 곡선.

![transition-example](/static/img/css/transition/transition-example-1.png)


* ease: cubic-bezier(0.25, 0.1, 0.25, 1.0)

처음과 끝은 상대적으로 느리게, 중간은 빠르게

![transition-example](/static/img/css/transition/transition-example-2.png)

* linear: cubic-bezier(0.25, 0.25, 0.75, 0.75)

직선 모양.

![transition-example](/static/img/css/transition/transition-example-3.png)

* ease-in: cubic-bezier(0.42, 0.0, 1.0, 1.0)

조금씩 완만하게 상승한다.

처음은 느리고 갈수록 빨라진다.

![transition-example](/static/img/css/transition/transition-example-4.png)

* ease-out: cubic-bezier(0.0, 0.0, 0.58, 1.0)

ease-in과 반대

![transition-example](/static/img/css/transition/transition-example-5.png)

* ease-in-out: cubic-bezier(0.42, 0.0, 0.58, 1.0)

ease와 비슷하지만 조금 더 완만하고 부드러운 느낌을 준다.

![transition-example](/static/img/css/transition/transition-example-6.png)

* ease-in-out: cubic-bezier(0.42, 0.0, 0.58, 1.0)

> 굳이 **자세히** 알 필요는 없을것 같다. ease, ease-in-out을 많이 사용할듯.

## transition 속기법

``transition: 속성 시간 속도 지연시간;``
