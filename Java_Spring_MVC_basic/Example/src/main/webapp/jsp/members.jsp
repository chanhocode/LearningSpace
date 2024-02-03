<%@ page import="hello.servlet.domain.member.MemberRespository" %>
<%@ page import="hello.servlet.domain.member.Member" %>
<%@ page import="java.util.List" %><%--
  Created by IntelliJ IDEA.
  User: jochanho
  Date: 2024/02/03
  Time: 5:12 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
  MemberRespository memberRespository = MemberRespository.getInstance();

  List<Member> members = memberRespository.findAll();
%>
<html>
<head>
    <title>Title</title>
</head>
<body>
<a href="/index.html">main</a>
<table>
  <thead>
  <th>id</th>
  <th>username</th>
  <th>age</th>
  </thead>
  <tbody>
  <%
    for(Member member: members) {
      out.write(" <tr>\n");
      out.write("   <td>"+member.getId()+"</td>\n");
      out.write("   <td>"+member.getUsername()+"</td>\n");
      out.write("   <td>"+member.getAge()+"</td>\n");
      out.write(" </tr>\n");
    }
  %>
  </tbody>
</table>
</body>
</html>
