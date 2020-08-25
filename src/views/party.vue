<template>
  <div class="party">
    <div class="templateContainer">
      <div class="breadCrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>党建文化</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="twocolumns">
        <div class="box news">
          <div class="newslist">
            <ul>
              <li style="list-style-type:disc">
                <a href="">中国航协党委组织党员赴国航参观学习</a>
              </li>
              <li style="list-style-type:disc">
                <a href="">中国航协举办军民融合深度发展专题讲座</a>
              </li>
              <li style="list-style-type:disc">
                <a href="">中国航协党委和纪委正式成立</a>
              </li>
              <li style="list-style-type:disc">
                <a href="">中国航协召开传达学习贯彻党的十九大精神动员部署会议</a>
              </li>
              <li style="list-style-type:disc">
                <a href="">中国航协深入开展“两学一做”学习教育——民航局张冲峰主任讲专题党课</a>
              </li>
              <li style="list-style-type:disc">
                <a href="">中国航协党委组织党员赴国航参观学习</a>
              </li>
              <li style="list-style-type:disc">
                <a href="">中国航协举办军民融合深度发展专题讲座</a>
              </li>
              <li style="list-style-type:disc">
                <a href="">中国航协党委和纪委正式成立</a>
              </li>
              <li style="list-style-type:disc">
                <a href="">中国航协召开传达学习贯彻党的十九大精神动员部署会议</a>
              </li>
              <li style="list-style-type:disc">
                <a href="">中国航协深入开展“两学一做”学习教育——民航局张冲峰主任讲专题党课</a>
              </li>
            </ul>
          </div>
        </div>
          <div class="sidebar">
            <ul>
              <li class="nav-item">
                <a href="#" class="nav-link">党建文化
                </a>
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
div {
  display: block;
}
.box.news {
  height: 360px;
  overflow: hidden;
  margin-top: 16px;
  padding: 0;
}
.twocolumns {
  align-items: flex-start;
  display: grid;
  /* grid-template-columns: 81.36% 18.64%; */
  grid-template-columns: 720px 220px;
  flex-wrap: wrap;
  justify-content: space-between;
}
.box {
  border: 1px solid #e2e4e4;
  margin: 1rem 0;
  padding: 1em 0;
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
.box > h2 {
  margin-bottom: 0;
  margin-top: 0;
}
.box h2 {
  margin-left: 0.5em;
  margin-right: 0.5em;
}
.news {
  width: 720px;
  float: left;
  overflow: hidden;
  margin-top: 16px;
  padding: 0;
}
h2 {
  line-height: 1;
  margin: 1.5em 0 0.214286em;
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

.news > h2 {
  margin-top: 1rem;
}
.newslist > ul li {
  padding: 7px 0;
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
</style>
