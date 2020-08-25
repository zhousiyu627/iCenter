<template>
  <div class="news">
    <div class="templateContainer">
      <div class="breadCrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>新闻中心</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="twocolumns">
        <div class="box news1">
          <h2>中心动态</h2>
          <div class="newslist">
            <ul>
              <li style="list-style-type:disc">
                <a
                  href="http://www.caac.gov.cn/XWZX/MHYW/202008/t20200820_204130.html"
                >冯正霖深入党支部工作联系点 参加《习近平谈治国理政》第三卷学习交流</a>
              </li>
              <li style="list-style-type:disc">
                <a
                  href="http://www.caac.gov.cn/XWZX/MHYW/202008/t20200820_204116.html"
                >民航医学中心举行庆祝“中国医师节”活动 冯正霖出席并寄语民航全行业医务工作者</a>
              </li>
              <li style="list-style-type:disc">
                <a
                  href="http://www.caac.gov.cn/XWZX/MHYW/202008/t20200819_204107.html"
                >2020年“中国医师节”慰问信</a>
              </li>
              <li style="list-style-type:disc">
                <a
                  href="http://www.caac.gov.cn/XWZX/MHYW/202008/t20200818_204103.html"
                >冯正霖与哥伦比亚驻华大使进行视频交流</a>
              </li>
              <li style="list-style-type:disc">
                <a
                  href="http://www.caac.gov.cn/XWZX/MHYW/202008/t20200813_204035.html"
                >民航江西空管分局驻村第一书记的扶贫故事</a>
              </li>
              <li style="list-style-type:disc">
                <a
                  href="http://www.caac.gov.cn/XWZX/MHYW/202008/t20200820_204130.html"
                >民航总医院深入新疆开展医疗扶贫</a>
              </li>
              <li style="list-style-type:disc">
                <a
                  href="http://www.caac.gov.cn/XWZX/MHYW/202008/t20200820_204116.html"
                >民航局召开8月例行新闻发布会</a>
              </li>
              <li style="list-style-type:disc">
                <a
                  href="http://www.caac.gov.cn/XWZX/MHYW/202008/t20200819_204107.html"
                >民航局召开规划工作领导小组办公室会议</a>
              </li>
              <li style="list-style-type:disc">
                <a
                  href="http://www.caac.gov.cn/XWZX/MHYW/202008/t20200819_204107.html"
                >民航局党组2020年巡视工作动员部署会在京召开</a>
              </li>
              <li style="list-style-type:disc">
                <a
                  href="http://www.caac.gov.cn/XWZX/MHYW/202008/t20200820_204130.html"
                >冯正霖深入党支部工作联系点 参加《习近平谈治国理政》第三卷学习交流</a>
              </li>
              <li style="list-style-type:disc">
                <a
                  href="http://www.caac.gov.cn/XWZX/MHYW/202008/t20200820_204116.html"
                >民航医学中心举行庆祝“中国医师节”活动 冯正霖出席并寄语民航全行业医务工作者</a>
              </li>
              <li style="list-style-type:disc">
                <a
                  href="http://www.caac.gov.cn/XWZX/MHYW/202008/t20200819_204107.html"
                >2020年“中国医师节”慰问信</a>
              </li>
              <li style="list-style-type:disc">
                <a
                  href="http://www.caac.gov.cn/XWZX/MHYW/202008/t20200818_204103.html"
                >冯正霖与哥伦比亚驻华大使进行视频交流</a>
              </li>
              <li style="list-style-type:disc">
                <a
                  href="http://www.caac.gov.cn/XWZX/MHYW/202008/t20200813_204035.html"
                >民航江西空管分局驻村第一书记的扶贫故事</a>
              </li>
              <li style="list-style-type:disc">
                <a
                  href="http://www.caac.gov.cn/XWZX/MHYW/202008/t20200820_204130.html"
                >民航总医院深入新疆开展医疗扶贫</a>
              </li>
              <li style="list-style-type:disc">
                <a
                  href="http://www.caac.gov.cn/XWZX/MHYW/202008/t20200820_204116.html"
                >民航局召开8月例行新闻发布会</a>
              </li>
              <li style="list-style-type:disc">
                <a
                  href="http://www.caac.gov.cn/XWZX/MHYW/202008/t20200819_204107.html"
                >民航局召开规划工作领导小组办公室会议</a>
              </li>
              <li style="list-style-type:disc">
                <a
                  href="http://www.caac.gov.cn/XWZX/MHYW/202008/t20200819_204107.html"
                >民航局党组2020年巡视工作动员部署会在京召开</a>
              </li>
            </ul>
          </div>
        </div>
          <!-- <div class="pod">
            <h2>新闻中心</h2>
            <ul>
              <li>
                <a href="/">中心动态</a>
              </li>
              <li>
                <a href="/">民航新闻</a>
              </li>
              <li>
                <a href="/">政府信息</a>
              </li>
              <li>
                <a href="/">行业资讯</a>
              </li>
            </ul>
          </div>-->
          <div class="sidebar">
            <ul>
              <li class="nav-item">
                <a href class="nav-link">中心动态</a>
              </li>
              <li class="nav-item">
                <a href class="nav-link">民航新闻</a>
              </li>
              <li class="nav-item">
                <a href class="nav-link">政府信息</a>
              </li>
              <li class="nav-item">
                <a href class="nav-link">行业资讯</a>
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
.block {
  position: relative;
  touch-action: pan-y;
}
.box {
  border: 1px solid #e2e4e4;
  margin: 1rem 0;
  padding: 1em 0;
}
ul {
  padding-left: 2em;
  margin: 1.5em 0 1.214286em;
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
.news1 {
  width: 720px;
  float: left;
  overflow: hidden;
  margin-top: 16px;
  padding: 0;
}
.news2 {
  width: 220px;
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
/* .pod {
  background: #f8f8f8;
  border: 1px solid #ddd;
}
.pod > h2 {
  background: #003e7e;
  color: #fff;
  margin: 0;
  padding: 5px;
} */
.news1 > h2 {
  margin-top: 1rem;
}
/* .pod > ul {
  margin-top: 1rem;
  padding: 5px;
  list-style: none;
  margin: 0 0 0.214286em;
}
.pod > ul li {
  padding: 3px 0;
} */
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
