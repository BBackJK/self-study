# Spring Boot Embeded Tomcat

스프링 부트에는 톰캣 서버가 내장되어 있다.

어떻게 동작할까?

내장 톰캣 서버가 자동 설정의 일부이기 때문.

**스프링 부트에서는 톰캣과 서블릿 서버가 자동으로 설정**되어 있다.

# SpringBootServletInitializer

스프링부트를 어플리케이션을 실행할 때에는 내장 톰캣을 이용하여 jar파일을 사용한다.

하지만 내장 톰캣이 아닌 외부 톰캣(서버에 이미 설치되어 있고 구성되어 있는 전통적으로 구성되어져온 apache-tomcat)을 사용하고 싶을 때에는 war파일을 이용하여 배포해야한다. (내장 톰캣을 사용하면 안되므로)

그렇다면 war로 배포하려면 어떻게 해야할까?

spring boot의 pom.xml에서 다음과 같이 추가하자.

```xml
/* ... */


<package>war</package>

/* ... */

<dependencies>

  /* ... */

  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-tomcat</artifactId>
    <scope>provided</scope>
  </dependency>

  /* ... */

</dependencies>
/* ... */
```

또한 web.xml(Deployment Descriptor, DD)에 애플리케이션을 등록하여주자.

왜?

Servlet Container인 **Apache Tomcat이 구동될 때 /WEB-INF 디렉토리에 존재하는 web.xml을 읽어 웹 어플리케이션을 구성**하기 때문.

하지만 Servlet 3.0 스펙으로 업데이트되면서 web.xml이 없이도 동작이 가능해졌다.

왜?

web.xml 설정을 WebApplicationInitializer 인터페이스를 구현하여 대신할 수 있게 되었고, 프로그래밍적으로 ServletContext에 Spring IoC 컨테이너를 생성하여 추가할 수 있도록 변경됐기 때문이다.

아와 더불어 web.xml이 없는 **Spring Boot는 웹 어플리케이션을 외부 Tomcat에 동작하도록 하기 위해서는 WebApplicationInitializer 인터페이스를 구현한 SpringBootServletInitializer를 상속 받아야 한다.**

