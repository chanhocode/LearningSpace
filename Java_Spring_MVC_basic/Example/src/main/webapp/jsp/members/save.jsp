<%@ page import="hello.servlet.domain.member.MemberRespository" %>
<%@ page import="hello.servlet.domain.member.Member" %><%--
  Created by IntelliJ IDEA.
  User: jochanho
  Date: 2024/02/03
  Time: 5:04 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
  // request, response는 sublet로 자동 변환되어서 사용되므로 문법상 지원
  MemberRespository memberRespository = MemberRespository.getInstance();

  System.out.println("Member Save");
  String username = request.getParameter("username");
  int age = Integer.parseInt(request.getParameter("age"));

  Member member = new Member(username, age);
  memberRespository.save(member);
%>

<html>
<head>
    <title>Title</title>
</head>
<body>
성공
<ul>
  <li>id=<%=member.getId()%></li>
  <li>username=<%=member.getUsername()%></li>
  <li>age=<%=member.getAge()%></li>
</ul>
<a href="/index.html">main</a>
</body>
</html>
