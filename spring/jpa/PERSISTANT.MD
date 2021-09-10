# 프록시

엔티티를 조회한다고 해서 하앙 연관된 엔티티가 사용되는 것이 x.

**회원 <- 팀**

이라는 관계에서

회원을 조회한다고 해도 회원이 가입한 팀까지 조회하지 않을 수도 있다.

JPA는 entity가 실제로 사용되기 전까지 데이터베이스 **조회를 지연할 수 있도록** 제공하는데 이를 **지연 로딩** 이라고 하며,

**실제 사용하는 시점에 데이터베이스에서 필요한 데이터를 가져오는 것.**

이때 지연 로딩을 사용하여 객체를 가져올 때 실제 entity 객체가 아닌 가짜 entity를 사용하며, 이를 **프록시 객체** 라고 한다.

# 프록시 확인

``PersistenceUnitUtil.isLoaded(Object entity)``를 사용하면 초기화 여부를 확인 가능.

초기화 되었거나 프록시 인스턴스가 아니라면 ``true``를, 초기화가 되었다면 ``false``를 반환한다.

만약 프록시 객체인지 확인하고 싶다면, getClass().getName()을 호출했을 때 클래스명 뒤에 ``javassist``가 붙어있다면 프록시 객체.

# 즉시 로딩, 지연 로딩

## 즉시로딩 (EAGER LOADING)

엔티티를 조회할 때 연관된 엔티티를 함께 조회한다.

즉시 로딩을 사용하고 싶다면 연관 관계 매핑의 fetch 속성을 ``FetchType.EAGER``를 사용.

하이버네이트(jpa)는 즉시 로딩을 최적화하기 위해 가능하면 **조인 쿼리**를 통해 연관 엔티티를 한 번에 조회.

이때 실행되는 쿼리는 내부 조인(INNER JOIN)이 아닌 **외부 조인(OUTER JOIN)**을 사용.

> NULL 값을 허용해야 하기 때문에!

이러한 디폴트 쿼리가 있지만 성능 최적화 부분에서 내부 조인이 유리한 경우가 있다. 이럴 경우 ``@JoinColumn(nullable = false)``를 사용하면 내부 조인을 사용한다.

## 지연 로딩 (LAZY LOADING)

연관된 엔티티를 실제로 사용할 때 조회.

연관 관계 매핑의 fetch 속성을 ``FetchType.LAZY``로 설정

즉,

```java
@Entity
public class Member {
  ...


  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "TEAM_ID")
  private Team team;

  ...
}
```
이 있을 경우, ``Member``를 조회하면 ``Team``을 바로 조회하지 않고, team 멤버 변수에 **프록시 객체**를 넣어둔다. 실제 ``Team`` 데이터가 필요한 순간에서야 데이터베이스를 조회해 프록시 객체를 Team 객체로 초기화 한다.

> 만약 ``Team``과 ``Member``를 항상 함께 사용한다면 처음부터 한 번에 가져오는 것이 효율적.


## JPA 기본 전략

* ``@ManyToOne``, ``@OneToOne`` : 즉시 로딩
* ``@OneToMany``, ``@ManyToMany`` : 지연 로딩

**모든 연관 관계에 지연 로딩을 사용하는 것을 추천.**

이 후 완성단계에서 반드시 즉시 로딩이 필요한 경우에만 사용하는 것이 최적화 하는데 유리.

## 즉시 로딩 사용할 시 주의점

* ``@ManyToOne``, ``@OneToOne``
  * ``optional = false``: 내부 조인
  * ``optional = true``: 외부 조인

* ``@OneToMany``, ``@ManyToMany``
  * ``optional = false``: 외부 조인
  * ``optional = true``: 외부 조인
    