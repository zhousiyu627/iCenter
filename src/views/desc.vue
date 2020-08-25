<template>
  <div class="desc">
      <div class="templateContainer">
        <div class="breadCrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '#' }">中心概况</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '#' }">中心简介</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="twocolumns">
          <div class="content">
              <h1 class="titleh1">关于信息中心</h1>
              <p><img src="../assets/image/video4.png" width="720px" /></p>
              <br>
              <p>中国民用航空局信息中心是中国民用航空局直属的事业单位。下设行政办公室、党委办公室、科研规划处（项目管理办公室）、公共服务系统建设处等八个部门。</p>
              <h2>主要职责</h2>
              <p>
                  受民航局委托，承担民航政务信息系统的规划、建设、整合、运行保障、应用推广、技术支持和培训等工作；承担民航政务信息资源共享工作，开展民航大数据的综合衔接和利用工作；承担民航行业信息化、大数据、网络安全新技术、新产品的研发工作，开展相关技术开发、技术转让、技术服务、技术咨询及技术培训等工作。
              </p>
          </div>
          <div class="sidebar">
              <ul>
              <li class="nav-item">
                <a href class="nav-link">关于信息中心</a>
              </li>
              <li class="nav-item">
                <a href class="nav-link">部门组织</a>
              </li>
              <li class="nav-item">
                <a href class="nav-link">资源中心</a>
              </li>
              <li class="nav-item">
                <a href class="nav-link">员工动态</a>
              </li>
            </ul>
          </div>
      </div>
      </div>

  </div>
</template>

<script>

</script>
<style scoped>
.templateContainer {
  margin: 0 auto;
  max-width: 960px;
}
div{
    display:block;
}
.twocolumns {
  align-items: flex-start;
  display: grid;
  /* grid-template-columns: 81.36% 18.64%; */
  grid-template-columns: 720px 220px;
  flex-wrap: wrap;
  justify-content: space-between;
}
ul {
  padding-left: 2em;
  margin: 1.5em 0 0.214286em;
}
li {
  text-align: -webkit-match-parent;
  display: list-item;
}
a {
  color: #2353ba;
  text-decoration: none;
  transition: color 0.2s linear;
}
.breadCrumb {
  /* border-bottom: 1px solid #ededed; */
  font-size: 0.8125rem;
  line-height: 1.25rem;
  margin: 0;
  padding: 0 0 10px 1px;
}
.sidebar{
    margin:-1rem;
}
h2 {
  line-height: 1;
  margin: 1.5em 0 0.214286em;
}
ul.nav {
  margin: 0 0;
  padding-inline-start: 0 !important;
}
li.nav-item {
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  margin: 0;
  width: 100%;
}
a.nav-link {
  color: #0076c0;
  display: block;
  padding: 0.75rem;
}
h1 {
    font-size: 2.5vw;
        color: #194178;
        font-weight: 600;
}
.content{
        margin-top: 1rem;
}
.titleh1{
    margin-bottom: 1.8rem;
}
</style>
