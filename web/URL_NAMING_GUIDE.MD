# url 네이밍 가이드

## 1. 소문자를 사용해라.

URL은 대소문자 구분 없이 생성된다.

URL에 대문자를 사용하게 되면 사이트의 중복 페이지 문제가 발생할 수 있다.

## 2. 특수 문자는 피해라.

URL 안에 특수 문자는 UX 를 방해할 수 있다.

## 3. 사이트 계층 구조에 중점해라.

URL에 있는 slash(/)의 수는 웹 사이트의 구조를 복잡하게 만들 수 있다.

depth가 많을 경우 페이지에서 **덜 중요**한 것이라고 식별할 수 있습니다.

URL은 도메인 -> 카테고리 -> 서브카테고리 -> 제품 or 키워드로 흘러야 한다.

> 예시) https://www.example.com/services/primary-service

## 4. 동적 파라미터를 제거하라.

URL은 2가지의 기본 타입이 올 수 있다.

1. Static
2. Dynamic

Static URL은 HTML 안에서 변경 사항이 없는 한 계속 유지되는 반면에, Dynamic URL은 사이트(웹)의 DB 에 대한 특정 쿼리를 만들(여기서는 사용)수 있기 때문에 변경 사항이 존재한다.

> 정적 URL 예시) https://www.example.com/electronics/

> 동적 URL 예시) https://www.amazon.com/b?node=16225009011&pf_rd_r=60FKTEBBECAJSGMWKGYG&pf_rd_p=5232c45b-5929-4ff0-8eae-5f67afd5c3dc

동적 URL은 종종 특수 문자를 포함하고 URL을 엉성하게 보이게 하며 사용자가 복사 및 공유하기 어려울 수 있으므로 404 오류의 위험이 높아진다. 
선택의 여지가 있다면 URL 구조를 일관되게 유지하고 합리적인 경우 정적 URL을 선택하라.

