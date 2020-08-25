<template>
  <div class="product">
    <div class="productimg">
      <div class="templateContainer">
        <img src="../assets/image/product1.png" width="720px" />
      </div>
    </div>
    <div class="icons">
      <div class="u-layout u-layoutTable u-layout--2up">
        <a class="promo-item u-layoutTable-item">
          <img src="../assets/image/add.png" class="promo-image" alt width="40px" height="40px" />
          <div class="promo-link">
            <span class="promo-text">新增功能</span>
            <span class="icon icon-chevronright" aria-hidden="true"></span>
          </div>
        </a>
        <a class="promo-item u-layoutTable-item">
          <img src="../assets/image/desc.png" class="promo-image" width="40px" height="40px" />
          <div class="promo-link">
            <span class="promo-text">使用说明</span>
            <span class="icon icon-chevronright" aria-hidden="true"></span>
          </div>
        </a>
      </div>
    </div>
    <div class="templateContainer">
      <div class="title">
        <h2 class="sectionTitle-heading">使用手册</h2>
        <article id="content" class="content">
            <p>查询浦东机场航班信息有了新选择。从11月28日起，浦东机场官方APP客户端正式上线，苹果手机或IPAD用户登录苹果应用商店搜索“上海浦东机场”，可以免费下载安装。机场APP紧密结合旅客出发和到达流程，提供相应的航班动态信息、动线导引、机场设施信息、相关法规政策、购物餐饮等全方位的信息。</p>
            <p>与国内第三方航空信息类APP相比，浦东机场APP直连机场数据中心，提供的信息更加全面、及时，大大便利了“拇指族”通过智能手机和移动网络查询浦东机场航班信息</p>
            <p>功能一：查询从浦东机场起降的当日或隔日航班动态。</p>
            <p>功能二：查询出发航班值机、登机时间和值机柜台和登机口位置。比如，以往在浦东机场乘飞机的旅客只有到机场看航班显示屏才能知道航班动态和办票柜台等信息，办出登机牌后才知道登机口信息。使用这款APP，赶航班的旅客到机场之前就能预知值机柜台、登机口在哪个位置，等于将机场航班显示屏搬到了手机屏幕上，可以帮助旅客节省时间，提前规划好行程。</p>
            <p>功能三：数字地图提供最快路线指引。即便是初次到浦东机场搭乘航班的旅客，也可以在该官方APP独家具备的数字地图的指引下，从最接近值机柜台的门口进入候机大厅，直达值机柜台。办好登机牌后，数字地图还能向旅客提供登机路径，指引旅客用最短路线赶到登机口。</p>
            <p>功能四：查询到达航班行李提取转盘信息。</p>
          <footer></footer>
          </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style scoped>
.templateContainer {
  margin: 0 auto;
  max-width: 960px;
}
div {
  display: block;
}
.productimg {
  background-color: white;
}
.icons {
  width: 100%;
  margin-top: 0;
  border-bottom: 1px solid #dedede;
  max-width: none;
  position: relative;
  box-sizing: border-box;
  margin: 0 auto;
  word-wrap: break-word;
}
.icons .u-layout--2up {
  max-width: 817px;
}
.u-layoutTable {
  display: flex;
  width: 100%;
}
.u-layout {
  margin-left: auto;
  margin-right: auto;
}
.promo-item:first-child {
  border-left: 0;
}
.u-layout--2up .u-layoutTable-item {
  width: 50%;
}
a.promo-item {
  color: #333;
}
a:link,
a:visited {
  text-decoration: none;
}
.promo-item {
  padding: 0 60px;
  margin: 0;
  border-left: 1px solid #dedede;
}
.icons .u-layout--2up .promo-item {
  padding: 30px 30px 31px;
}

.u-layoutTable-item {
  display: flex;
  align-self: auto;
  flex-flow: column;
  -webkit-box-flex: 1;
  flex-grow: 1;
}
.promo-image {
  display: block;
  margin: 0 auto;
  width: 40px;
  height: 40px;
}
img {
  border: 0;
}
.promo-item .promo-link:lang(zh-CN) {
  font-family: "SF Pro SC", "SF Pro Text", "SF Pro Icons", "PingFang SC",
    "Helvetica Neue", "Helvetica", "Arial", sans-serif;
}
.promo-item .promo-link:lang(zh) {
  letter-spacing: 0;
}
.icons .promo-link {
  text-align: center;
}
.promo-image + .promo-link {
  margin-top: 16px;
}
.promo-item .promo-link {
  color: #0070c9;
  line-height: 1.5;
  font-weight: 400;
  font-size: 0.9375rem;
}
.promo-item .promo-text,
.promo-item .icon {
  display: inline;
}
:lang(zh-CN) {
  font-family: "SF Pro SC", "SF Pro Text", "SF Pro Icons", "PingFang SC",
    "Helvetica Neue", "Helvetica", "Arial", sans-serif;
}
.sectionTitle {
  position: relative;
  box-sizing: border-box;
  margin: 0 auto;
  width: 817px;
  margin-top: 48px;
  padding-bottom: 12px;
  word-wrap: break-word;
  text-align: center;
}
.sectionTitle-heading:lang(zh-CN) {
  font-family: "SF Pro SC", "SF Pro Display", "SF Pro Icons", "PingFang SC",
    "Helvetica Neue", "Helvetica", "Arial", sans-serif;
}
.sectionTitle-heading:lang(zh) {
  line-height: 1.175;
}
.sectionTitle-heading {
  margin-top:1rem;
  margin-bottom: 0;
  font-size: 40px;
  font-weight: 500;
  letter-spacing: 0.008em;
  text-align:center;
}
h2{
margin: 0;
padding: 0;
}
article {
  display: block;
}
p{
    margin: 1.5em 0 .214286em;
}
footer{
    height:70px;
}
</style>
