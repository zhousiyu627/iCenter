<template>
  <div class="newscontent">
    <div class="templateContainer">
        <div class="breadCrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>新闻中心</el-breadcrumb-item>
          <el-breadcrumb-item>新闻内容</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="twocolumns">
        <div class="news1">
            <h1>冯正霖深入党支部工作联系点 参加《习近平谈治国理政》第三卷学习交流</h1>
          <article id="content" class="content">
            <p>8月20日，民航局党组书记、局长冯正霖深入党支部工作联系点民航适航审定中心第二党支部，了解《习近平谈治国理政》第三卷学习情况，并与党员干部交流学习体会。</p>
            <p>冯正霖在了解党支部建设情况后表示，去年以来，第二党支部扎实开展标准化规范化建设，推进党建工作与业务工作深度融合，做了大量工作。今年以来，面对突如其来的新冠肺炎疫情，中心全体党员干部舍小家顾大家，甘于吃苦奉献，敢于攻坚克难，保持积极进取的工作状态，充分发挥了党支部的战斗堡垒作用和党员的先锋模范作用，各方面工作取得明显成效。</p>
            <p>冯正霖认真听取了第二党支部5名党员代表的学习体会，他强调，学好用好《习近平谈治国理政》第三卷，是当前和今后一个时期各级党组织和广大党员干部的一项重要政治任务。适航审定中心系统的党员干部要持续深入学习《习近平谈治国理政》第三卷，扎实做好常态化疫情防控形势下的适航审定工作，不断提升适航审定能力，全力推进国家重点型号产品的适航审定，为保障航空安全、服务民用航空工业发展作出新贡献。</p>
            <p>冯正霖指出，《习近平谈治国理政》第三卷是全面系统反映习近平新时代中国特色社会主义思想的最新权威著作，学好用好《习近平谈治国理政》第三卷，要着力解决好为什么学、怎么学和学习成果转化的问题。在谈到为什么学时，他表示，《习近平谈治国理政》第三卷蕴含着强大真理力量和鲜明时代价值，对于我们进一步深入认识和理解中国共产党为什么“能”、马克思主义为什么“行”、中国特色社会主义为什么“好”，筑牢信仰之基、补足精神之钙、把稳思想之舵，增强“四个意识”、坚定“四个自信”、坚决做到“两个维护”，具有十分重要的意义。</p>
            <p>在谈到怎么学时，他指出，要原原本本学，突出学习的经常性、整体性、连贯性，做到真学真懂、入脑入心；要带着感情学，深入学习贯彻习近平总书记关于人民至上、生命至上的重要论述，牢固树立“以人民为中心”的发展理念，做到初心不改、矢志不渝；要联系实际学，紧密结合学习习近平总书记对民航工作的重要指示批示，特别是关于适航审定工作的重要指示批示，把自己摆进去，把职责摆进去，把工作摆进去，做到学用结合、知行合一。</p>
            <p>在谈到学习成果转化时，他强调，要把学习成果转化为昂扬向上的精神状态、砥砺奋进的决心勇气、干事创业的方法能力，学出信仰忠诚，学出使命担当，学出能力本领，全面提高规章标准解析、型号产品审定、审定项目管控等能力，努力实现“三个世界一流”的奋斗目标。</p>
            <p>冯正霖最后强调，适航审定中心党委要进一步加强党支部建设，强化党支部的政治功能和组织力，推动基层党组织全面进步全面过硬，为实现适航审定工作高质量发展提供坚强组织保证。</p>
            <p>适航审定中心第一党支部全体党员列席，适航审定中心党委班子成员、民航局政工办负责同志参加学习交流。</p>
          <footer></footer>
          </article>
        </div>
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
#news1 > footer {
clear: both;
display: flex;
flex-direction: column-reverse;
min-height: 5em;
}
footer{
    height:70px;
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
/* .pod {
  background: #f8f8f8;
  border: 1px solid #ddd;
}
.pod > h2 {
  background: #003e7e;
  color: #fff;
  margin: 0;
  padding: 5px;
}
.pod > ul {
  margin-top: 1rem;
  padding: 5px;
  list-style: none;
  margin: 0 0 0.214286em;
}
.pod > ul li {
  padding: 3px 0;
} */
article {
  display: block;
}
p{
    margin: 1.5em 0 .214286em;
}
.sidebar{
    margin:-1rem;
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
