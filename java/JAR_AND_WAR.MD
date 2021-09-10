# Jar 와 War 차이

**J**ava **Ar**chive

**W**eb **A**pplication A**r**chive


둘다 JAVA의 jar 툴을 이용하여 생성된 압축파일.

어플리케이션을 쉽게 배포하고 동작시킬 수 있도록 관련 파일(리소스, 속성파일 등)들을 패키징해주는 역할


## Jar (Java Archive)

Class와 같은 Java 리소스와 속성 파일, 라이브러리 및 액세서리 파일이 포함되어 있다.

--> **자바 프로젝트를 압축한 파일**

원하는 구조로 구성이 가능.

JRE(Java Runtime Environment)만 가지고도 실행이 가능.


## War (Web Application Archive)

Servlet / jsp 컨테이너에 배치할 수 있는 웹 어플리케이션 압축 파일 포맷.

Servlet Context (JSP, SERVLET, JAR, CLASS, XML, HTML, JAVASCRIPT) 관련 파열들로 패키징.

웹 관련된 포맷이기 때문에 웹 관련 자원만 포함.

WAR는 WEB-INF 및 META-INF 디렉토리로 **사전 정의된 구조를 사용** 하며 WAR파일을 실행하려면 Tomcat, Weblogic, Websphere 등의 웹 서버(WEB) 혹은 웹 컨테이너 (WAS)가 필요.



