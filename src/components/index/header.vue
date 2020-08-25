<template>
  <div class="header">
    <div class="header1">
      <ul class="w small">
        <li>
          <!-- logo part -->
          <a href="http://www.caac.gov.cn/index.html">
            <img src="../../assets/image/caac.png" height="16px" />中国民用航空局
          </a>
          <div class="topbar">
            <ul>
              <li>
                <a href="http://www.caac.gov.cn/GYMH/">关于民航局</a>
              </li>
              <li>
                <a href="http://www.caac.gov.cn/FWDT/">民航工作</a>
              </li>
              <li>
                <a href="http://www.caac.gov.cn/XWZX/">民航新闻</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="header2">
      <ul class="w">
        <div class="logo2" href="/">
          <img alt src="../../assets/image/logotext.png" height="50px" />
          <!-- <span>民航局信息中心</span> -->
        </div>
        <div class="nav2">
          <ul class="topnav">
            <li>
              <a href="/">主页</a>
            </li>
            <li>
              <a href="javascript:;" @click="goNews()">近期新闻</a>
            </li>
            <li>
              <a href="/">关于中心</a>
            </li>
            <li>
              <a href="javascript:;" @click="goJobs()">人才招聘</a>
            </li>
            <li>
              <a href="/">与我们合作</a>
            </li>
          </ul>
        </div>
        <!-- search -->
        <div class="search">
          <input type="test" placeholder="输入关键词" />
          <button>搜索🔍</button>
        </div>
      </ul>
    </div>
    <div class="dropdown">
      <ul class="w">
        <el-menu
          :default-active="activeIndex"
          mode="horizontal"
          class="el-dropdown"
          background-color="#0076c0"
          text-color="white"
          active-text-color="white"
          height="30px"
          width="1000px"
          font-size="1rem"
        >
          <el-submenu style="width: 200px" index="1">
            <template slot="title" href="javascript:;" @click="goDesc()">中心概况</template>
            <el-menu-item index="1-1" href="javascript:;" @click="goDesc()">中心简介</el-menu-item>
            <el-submenu index="1-2">
              <template slot="title">部门组织</template>
              <el-menu-item index="1-2-1">部门1</el-menu-item>
              <el-menu-item index="1-2-2">部门2</el-menu-item>
              <el-menu-item index="1-2-3">部门3</el-menu-item>
            </el-submenu>
            <el-menu-item index="1-3">资源中心</el-menu-item>
            <el-menu-item index="1-4">员工动态</el-menu-item>
          </el-submenu>
          <el-menu-item style="width: 190px" index="2" href="javascript:;" @click="goNews()">新闻中心</el-menu-item>
          <el-menu-item style="width: 190px" index="3" href="javascript:;" @click="goProdlist()">业务范围</el-menu-item>
          <el-submenu style="width: 190px" index="4">
            <template slot="title">政策标准</template>
            <el-menu-item index="4-1">标准公告</el-menu-item>
            <el-menu-item index="4-2">动态</el-menu-item>
            <el-menu-item index="4-3">立项</el-menu-item>
          </el-submenu>
          <el-menu-item style="width: 190px" index="5">党建文化</el-menu-item>
        </el-menu>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goNews() {
      let routeData = this.$router.resolve({ path: "/icenter/news" });
      window.open(routeData.href, "_blank");
    },
    goJobs() {
      let routeData = this.$router.resolve({ path: "/icenter/jobs" });
      window.open(routeData.href, "_blank");
    },
    goProdlist() {
      let routeData = this.$router.resolve({ path: "/icenter/prodlist" });
      window.open(routeData.href, "_blank");
    },
    goDesc() {
      let routeData = this.$router.resolve({ path: "/icenter/desc" });
      window.open(routeData.href, "_blank");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
* {
  margin: 0;
  padding: 0;
}
.w {
  margin: 0px auto;
  max-width: 960px;
}
li {
  list-style: none;
  text-align: -webkit-match-parent;
}
a {
  color: #2353ba;
  text-decoration: none;
  transition: color 0.2s linear;
}
.small {
  font-size: 0.857143em;
}
::selection {
  background: #333;
  color: #ddd;
  text-shadow: none;
}
.header1 > ul > li {
  display: flex;
  margin: 0 -1em;
  flex-wrap: wrap;
  justify-content: space-between;
  float: left;
}
.header1 > ul > li > ul {
  display: flex;
  margin-right: 10px;
}
.header1 a {
  color: #fff;
  display: block;
  padding: 0.5em 1em;
  text-decoration: none;
  transition: 0.2s linear;
}
li ul,
li ol {
  margin-top: 0.214286em;
}
.header1 ul ul {
  display: flex;
  margin: 0;
}
.header1 img {
  vertical-align: -0.25rem;
}
.topbar {
  display: block;
  height: 30px;
  position: absolute;
  float: left;
  margin-left: 720px;
  white-space: nowrap;
}
.nav2 {
  display: block;
  position: absolute;
  float: left;
  margin-left: 410px;
  white-space: nowrap;
  height: 30px;
  width: 600px;
  padding-top: 1rem;
}
.nav2 ul li {
  float: left;
}
.nav2 ul li a {
  display: block;
  height: 30px;
  padding: 0 20px;
  line-height: 28px;
  font-size: 16px;
  color: whitesmoke;
  text-decoration: none;
  white-space: nowrap;
}
.header1 {
  height: 30px;
  width: 100%;
  /* 层叠w */
  margin: 0px auto;
  /* background-color: #0f3062; */
  background-color: #0f3062;
}
.header2 {
  height: 120px;
  /* 层叠w */
  margin: 0px auto;
  background-color: #003e7e;
  transition: 0.2s linear;
}
.tabs {
  width: 1000px;
  height: 50px;
}
.logo2 {
  align-items: center;
  display: flex;
  /* padding: -2rem; */
  margin-left: -9rem;
  width: 251px;
  height: 110px;
  float: left;
  color: #fff;
  line-height: 1.11111;
  transition: 0.2s linear;
}
.logo2 span {
  width: 9.8125rem;
}
.dropdown {
  float: left;
  border: 0;
  height: 60px;
  width: 100%;
  background-color: #0076c0;
  overflow: hidden;
  margin-bottom: 1.5em;
}
.el-dropdown {
  margin: 0 auto;
  float: left;
  text-align: center;
}
.search {
  float: left;
  width: 303px;
  height: 26px;
  background-color: #fff;
  margin-left: 600px;
  margin-top: -40px;
}
.search input {
  width: 240px;
  height: 26px;
  border: 1px solid #767676;
  border-right: 0;
  color: #bfbfbf;
  font-size: 15px;
  padding-left: 15px;
}
.search button {
  float: right;
  width: 63px;
  height: 25px;
  background-color: #efefef;
  border: 0;
  font-size: 14px;
}

/* .nav2 ul li a:hover{
    border-bottom:2px solid white;
} */
</style>
