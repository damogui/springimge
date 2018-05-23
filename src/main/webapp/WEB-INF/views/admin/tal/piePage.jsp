<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
<head>
    <title></title>

    <%@ taglib prefix="c"   uri="http://java.sun.com/jsp/jstl/core" %>
    <%@ taglib prefix="fn"  uri="http://java.sun.com/jsp/jstl/functions" %>
    <%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
    <%--静态文件目录 --%>
    <%--ctxPath--%>
    <c:set var="ctxPath" value="${pageContext.request.contextPath}" />
    <%--项目路径 --%>
    <c:set var="path" value="${ctxPath}" />

    <c:set var="staticPath" value="${ctxPath}" />
    <link rel="stylesheet" type="text/css" href="${staticPath }/static/js/jquery-easyui/themes/gray/easyui.css">
    <script type="text/javascript" src="<%=request.getContextPath() %>/static/js/jquery-easyui/jquery.min.js"></script>
    <script type="text/javascript" src="<%=request.getContextPath() %>/static/js/echarts.min.js"></script>
    <script type="text/javascript" src="${staticPath }/static/js/jquery-easyui/jquery.easyui.min.js"></script>
    <script type="text/javascript" src="${staticPath }/static/js/jquery-easyui/locale/easyui-lang-zh_CN.js"></script>
    <script type="text/javascript" src="${staticPath }/static/js/page/pie.js"></script>
    <style type="text/css">
        .data_echart {
            padding: 35px 70px 50px;
            height: 370px;
        }
    </style>
    <script>
        $(function () {
            debugger;
            SetEChart(1);
            $("#chartChoice").combobox({onChange:function (newValue,oldValue) {

                    SetEChart(parseInt(newValue));

                }})


        })

    </script>
</head>
<body>
<select id="chartChoice" name="resourceType" class="easyui-combobox" data-options="width:140,height:29,editable:false,panelHeight:'auto'">
    <option value="1">饼1</option>
    <option value="2">饼2</option>
    <option value="3">饼3</option>
</select>
<div class="data_echart" id="drawchart" style="width:650px;">
    ecahrt图

</div>
</body>
</html>




