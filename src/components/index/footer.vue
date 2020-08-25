<template>
  <div class="footer">
    <div class="footer1 row1">
      <div class="footercolumns templateContainer">
        <div>
          <img class="left" loading="lazy" src="../../assets/image/caac.png" height="60px" />
          <address>
            <a href="http://www.caac.gov.cn/index.html/">中国民用航空局</a>
            <br />中国民航信息中心
            <br />中国北京市东城区
            <br />东四西大街157号
            <br />(010)6666 8888
          </address>
        </div>
        <div>
          <h2>行业链接</h2>
          <ul class="join">
            <li>
              <a href="http://www.cata.org.cn/">中国航空运输协会</a>
            </li>
            <li>
              <a href="http://www.airchina.com.cn/cn/index.shtml">中国国际航空股份有限公司</a>
            </li>
            <li>
              <a href="http://www.icscc.org.cn">中国民航国际合作服务中心</a>
            </li>
            <li>
              <a href="https://www.cauc.edu.cn/zhv3/">中国民航大学</a>
            </li>
          </ul>
        </div>
        <div>
          <h2>政府链接</h2>
          <ul class="join">
            <li>
              <a href="http://www.mot.gov.cn">交通运输部</a>
            </li>
            <li>
              <a href="http://www.nra.gov.cn">国家铁路局</a>
            </li>
            <li>
              <a href="http://www.spb.gov.cn">国家邮政局</a>
            </li>
            <li>
              <a href="http://www.gov.cn">中央政府门户网站</a>
            </li>
          </ul>
        </div>
        <div>
          <h2>联系我们</h2>
          <ul class="join">
            <li>
              <!-- <a href="/">联系信息中心</a> -->
              <el-popover placement="right" width="200" trigger="manual" v-model="visible">
                <img src="../../assets/image/caac.png" height="100px" />
                <a slot="reference" @click="visible = !visible">联系信息中心</a>
              </el-popover>
            </li>
            <li>
              <a href>关注微信公众号</a>
            </li>
            <li>
              <a href>关注微博</a>
            </li>
            <li>
              <a href>APP下载</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      popupActivo: false,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
}
div {
  display: block;
}
.templateContainer {
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1%;
}
.footer1 {
  background: linear-gradient(#fff, #f3f3f3);
  padding-bottom: 2em;
  font-size: 0.92857em;
  margin-top:3rem;
}
.footer .row1 address {
  font-style: normal;
  margin: 0;
}
a {
  color: #2353ba;
  text-decoration: none;
  transition: color 0.2s linear;
}
img.left {
  float: left;
  margin: 0.285714em 1em 1em 0;
}
.row1 img {
  margin-top: 0.5rem;
}
.row1 .footercolumns {
  justify-content: space-between;
}
.footercolumns {
  display: flex;
}
.row1 .footercolumns > :first-child {
  margin-top: 2.5em;
  min-width: 300px;
}
h2 {
  line-height: 1.238095;
  margin: 1.5em 0 0.214286em;
}
.join {
  margin-top: 0.214286em;
}
.footer1 ul {
  list-style: none;
  padding-left: 0;
  margin: 0.5em 0 0.214286em;
}
a:any-link {
  cursor: auto;
}
.footer1 .footercolumns > :nth-child(n + 2) {
  padding-left: 0.7em;
}
address{
  display: block;
  float:left;
}
.footer1{
  float:left;
  width:100%;
  border-top: 4px solid #00264d;
}
</style>
