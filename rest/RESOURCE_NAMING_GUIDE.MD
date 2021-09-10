# REST 리소스 네이밍 가이드

REST 에서 중요한 데이터를 **Resource**라 한다.


## 1. resource는 싱글톤(singleton) 혹은 콜렉션(collection)이어야 한다.

예를 들어, 'customers'은 콜렉션 resource이며, 'customer'는 싱글톤 resource이다.

우리는 이 URI를 통해 어떤 자원인지 식별할 수 있다.

> collection resource ) /customers
> singleton resource ) /customers/{customerId}

## 2. resource 는 서브 콜렉션 (sub-collection) resource를 포함할 수 있다.

예를 들어, 'account'라는 resource는 'customer'안에 서브 콜렉션으로 포함된다. 따라서 다음과 같이 사용할 수 있다.

> /customers/{customerId}/accounts

유사하게, 'account' 의 singleton resource를 적용시키면

> /customers/{cusotmerId}/accounts/{accountId}

**REST API는 URI를 사용한다.**

## 3. resource는 명사를 사용하여 표현해라.

동사는 사용해서는 안된다.


예를 들면,

> http://api.example.com/device-management/managed-devices <br/> http://api.example.com/device-management/managed-devices/{device-id} <br/> http://api.example.com/user-management/users/ <br/> http://api.example.com/user-management/users/{user-id}

좀 더 명확하게 하기 위해서 resource 원형(archetypes) 4가지 범주(document, collection, store, controller)로 나눈 다음 항상 resource를 하나의 원형 (archetypes)으로 지정한 다음 명명 규칙을 일관되게 사용하는 것을 목표로 해야한다.

### document

* **document resource는 객체 인스턴스 혹은 데이터베이스 record 와 유사한 단일 개념**이다.

* REST 에서, resource collection안에 있는 단일 resource를 볼 수 있다.

* document의 상태 표현에는 일반적으로 값이 있는 필드와 다른 관련 resource에 대한 링크가 모두 포함된다.

* document resource 원형을 나타내기 위해 "단수" 이름 사용

예를 들면,

> http://api.example.com/device-management/managed-devices/**{device-id}** <br/> http://api.example.com/user-management/users/**{user-id}** <br/> http://api.example.com/user-management/users/**admin**

### collection

* **collection resource는 서버에서 관리되는 자원의 집합**이다.

* 클라이언트는 collection에 새로운 resource가 추가되는 것을 제안할 수 있다.

* 하지만, 새로운 resource를 만들지 여부를 선택하는 것은 컬렉션에 달려 있다.

* collection resource는 포함하려는 항목을 선택하고 포함된 resource의 URI도 결정한다.

* collection resource 원형(archetype)을 표현하기 위해 **복수형 이름을 사용한다.**

예)

> http://api.example.com/device-management/**managed-devices** <br/> http://api.example.com/user-management/**users** <br/> http://api.example.com/user-management/users/{user-id}/**accounts**


### store

* store는 클라이언트에서 관리되는 resource 저장소이다.

* store resource를 사용하면 API 클라이언트가 resource를 넣고 다시 꺼내고 삭제할 시기를 결정할 수 있다.

* store는 새 URI를 만들지 않는다.

* 대신에, 각각 저장된 resource들은 URI를 가지고 있다.

* 이 URI은 처음 store에 넣을 때 클라인언트에 의해 선택되어진다.

* collection resource 처럼 복수형 이름을 사용.

예)

> http://api.example.com/song-management/users/{user-id}/**playlists**

### controller

* controller resource는 절차적 개념을 모델링 한다.

* controller resource는 parameter와 반환 값(retuen values)이 있는 실행 가능한 함수(function)와 같다. 

* controller 원형(archetype)을 나타내기 위해 동사를 사용한다.

예)

> http://api.example.com/cart-management/users/{user-id}/cart/checkout <br/> http://api.example.com/song-management/users/{user-id}/playlist/play


## 4. 일관성이 핵심이다.

**모호함을 최소화하고 가독성과 유지보수성을 최대화하기 위해 일관된 리소스 명명 규칙과 URI 형식을 사용**.

일관성을 달성하기 위해 아래 디자인 힌트를 알려드립니다!

### 4.1 slash(/)를 사용하여 계층적인 관계를 표현해라.

예)

> http://api.example.com/device-management <br/> http://api.example.com/device-management/managed-devices <br/> http://api.example.com/device-management/managed-devices/{device-id} <br/> http://api.example.com/device-management/managed-devices/{device-id}/scripts <br/> http://api.example.com/device-management/managed-devices/{device-id}/scripts/{script-id}

### 4.2 URI 마지막에 slash(/)를 사용하지 말아라.

예)

> http://api.example.com/device-management/managed-devices/ (bad uri) <br/> http://api.example.com/device-management/managed-devices (better good)

### 4.3 URI의 가독성 향상을 위해 하이픈(-)을 사용해라.

UX적인 측면에서 가독성이 좋아지므로 아주 좋다.

예)

> http://api.example.com/inventory-management/managed-entites/{id}/install-script-location  (More readable) <br/> http://api.example.com/inventory-management/managed-entites/{id}/installScriptLocation (Less readable)


### 4.4 언더스코어(_)를 사용하지 말아라.

혼란을 피하기 위해, 언더스코어(_) 대신 하이픈(-)을 사용해라.

예)

> http://api.example.com/inventory-management/managed-entities/{id}/install-script-location (More readable) <br/> http://api.example.com/inventory-management/managed-entities/{id}/install_script_location (Less readable)


### 4.5 URI안에 소문자를 사용하여라.

### 4.6 파일 확장자를 사용하지 말아라.


## 5. CRUD 함수 이름을 URI에 절대 사용하지 말아라.

즉, HTTP method가 Get 인 경우 REST API URI에 Get이라는 단어를 사용하지말아라! 다른 method도 마찬가지.

## 6. 쿼리 구성 요소를 사용하여 URI collection을 filtering 해라.

즉, 다음과 같이 사용하여라.

> http://api.example.com/device-management/managed-devices <br/> http://api.example.com/device-management/managed-devices?region=USA <br/> http://api.example.com/device-management/managed-devices?region=USA&brand=XYZ <br/> http://api.example.com/device-management/managed-devices?region=USA&brand=XYZ&sort=installation-date

