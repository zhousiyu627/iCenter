<template>
  <div class="regs">
    <div class="templateContainer">
      <div class="breadCrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '#' }">政策标准</el-breadcrumb-item>
          <el-breadcrumb-item>标准公告</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="twocolumns">
        <div class="box news">
          <div class="newslist">
            <ul>
              <li style="list-style-type:disc">
                <a href="">轻小型无人机技术标准（UTC）驾驶员培训考核体系基本要求</a>
              </li>
              <li style="list-style-type:disc">
                <a href="">航空食品企业航机员操作规范</a>
              </li>
              <li style="list-style-type:disc">
                <a href="">国内航线航空邮件收入结算办法</a>
              </li>
              <li style="list-style-type:disc">
                <a href="">中国境内始发航线逾重行李票证结算办法</a>
              </li>
              <li style="list-style-type:disc">
                <a href="">航空运输客运销售代理人业务规范</a>
              </li>
              <li style="list-style-type:disc">
                <a href="">航空运输货运销售代理人业务规范</a>
              </li>
              <li style="list-style-type:disc">
                <a href="">食品安全国家标准 航空食品卫生规范</a>
              </li>
              <li style="list-style-type:disc">
                <a href="">货物航空冷链运输规范</a>
              </li>
              <li style="list-style-type:disc">
                <a href="">航空客运销售代理人服务规范</a>
              </li>
              <li style="list-style-type:disc">
                <a href="">航空货运销售代理人服务规范</a>
              </li>
            </ul>
          </div>
        </div>
          <div class="sidebar">
            <ul>
              <li class="nav-item">
                <a href="#" class="nav-link">标准公告
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">动态
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">立项
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
  overflow: hidden;
  margin-top: 16px;
  padding: 0;
}
.twocolumns {
  align-items: flex-start;
  display: grid;
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
  margin: 1rem 0 1.214286em;
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
.news {
  width: 720px;
  float: left;
  overflow: hidden;
  margin-top: 16px;
  padding: 0;
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
