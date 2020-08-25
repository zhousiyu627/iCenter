<template>
  <div class="jobs">
    <div class="templateContainer">
      <div class="breadCrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>求职招聘</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="twocolumns">
        <div class="jobs1">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item style="width:90%" label="岗位描述">
                    <span>{{ props.row.des }}</span>
                  </el-form-item>
                  <el-form-item style="width:90%; margin-top:1rem;" label="招聘条件">
                    <span>{{ props.row.req }}</span>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>
            <el-table-column label="岗位代码" prop="id"></el-table-column>
            <el-table-column label="招聘岗位" prop="name"></el-table-column>
            <el-table-column label="招聘计划" prop="num"></el-table-column>
          </el-table>
        </div>
        <div class="sidebar">
          <ul>
            <li class="nav-item">
              <a href class="nav-link">职位空缺</a>
            </li>
            <li class="nav-item">
              <a href class="nav-link">信息中心工作</a>
            </li>
            <li class="nav-item">
              <a href class="nav-link">职位介绍</a>
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
      tableData: [
        {
          id: "A01",
          name: "安全监管系统项目管理岗",
          num: "3",
          des: "负责研究民航安全监管、行政执法相关政策及规章，跟踪国内外动态等，依据项目建设程序，协助民航局业务主管单位开展相关项目的系统规划、建设工作，组织编制项目相关文件；分析和深化业务需求，承担项目管理和开发的协调工作；承担相关技术支持、培训以及成果转化推广工作；承办部门领导交办的其它工作。",
          req: "1.全日制本科及以上学历，计算机相关专业，两年及以上IT项目管理相关工作经历；\
                2.英语6级以上，年龄32周岁以下，特别优秀的可适当放宽；\
                3.熟悉国家行政许可审定、监察的相关政策及要求，熟悉民航安全监管、行政执法领域业务，了解民航规章及框架体系。\
                4.熟悉IT项目管理方法、管控流程和Project、XMind等管理工具，有项目管理PMP认证者优先；\
                5.较强的文字组织和方案编写能力，具有丰富的技术需求、项目建设方案、汇报材料等文档编写经验；\
                6.熟练掌握Word、Excel、Visio等Office相关办公软件，具有较强的PPT制作能力；\
                7.具有较强的沟通能力、语言及文字表达能力；\
                8.善于挖掘用户需求、开拓市场；具有良好团队合作精神；\
                9.具有大型信息系统建设经验者优先，具有民航政务信息化经验者优先。",
        },
        {
          id: "A02",
          name: "JAVA软件工程师",
          num: "2",
          des: "完成系统框架和核心代码编写；深入理解业务需求，完成模块设计、编码；参与方案讨论、技术调研，解决开发中的技术难题；分析和提高系统性能；能适应中短期出差，在客户现场完成产品向的开发和交付。" ,        
          req: "1.全日制本科以上学历,计算机相关专业;\
                2.3年以上java开发经验；熟悉民航行业相关业务，有从事民航行业信息化建设经验者优先；\
                3.熟练掌握Java语言、熟悉J2EE领域Servlet,Jquery、CSS、HTML等开发技术；\
                4.熟悉如spring和mybatis等开源框架，熟悉常用框架 SpringMVC,Hibernate，有上述技术的实际开发经验；\
                5.熟练掌握Socket、WebService、Http等接口开发技术，或具有丰富的Web开发经验,熟练掌握XML、HTML、Javascript（Jquery）、AJAX、Json技术；\
                6.对SQL、DDL等熟练掌握，熟悉Mysql，Oracle等数据库中的一种或多种；\
                7.熟悉掌握Tomcat、Jetty、Websphere、WebLogic中一种或多种应用服务器上部署应用；\
                8.良好的表达沟通能力，独立工作能力强,学习能力强；能承受一定压力，有良好的沟通协调能力与团队合作精神。",
        },
        {
          id: "A03",
          name: "数据分析",
          num: "1",
          des: "对多种数据源进行多维度分析和数据诊断，结合实际开展组合分析、数据挖掘等分析建模工作; 结合数据分析成果开展数据产品研究工作，对数据分析类项目开展需求调研和评估;参与数据相关项目的科研立项、方案设计、任务分解及实施工作;承担数据分析报告等相关文案的整理撰写工作。" ,        
          req: "1.硕士学位或者本科双学位；统计学相关专业及其他专业；\
                2.具有良好的数据库知识，能熟练使用SQL等语言；\
                3.具备基本的统计分析知识、熟练掌握Excel；\
                4.了解航空基础知识或接触过民航业相关项目；\
                5.熟悉数据可视化工具可优先考虑；\
                6.特别优秀者，条件1可放宽要求。",
        },
        {
          id: "A04",
          name: "系统架构师",
          num: "1",
          des: "参与项目售前、需求调研、需求分析、技术方案编制、项目实施、项目运维等工作，负责项目整个生命周期的管理和实施，完成系统架构设计和核心代码编写；解决开发中的技术难题；能适应中短期出差，在客户现场完成产品向的开发和交付。" ,        
          req: "1、全日制本科以上学历,计算机相关专业;\
                2、10年以上开发经验，5年以上项目管理经验，有大型项目或项目群管理经验者优先；\
                3、具备丰富的项目管理经验和商务运作经验，熟悉项目整个生命周期必经的过程和每个节点需要产出的标志性交付物。如售前、竞标、商务谈判、合同拟定、需求分析、架构设计、概要设计、详细设计、研发和实施、项目交付、运维支持等。\
                4、精通面向对象的系统分析、设计的理论和实现方法，能熟练使用UML、ROSE及相关工具建立系统分析模型；熟悉大中型软件项目从立项、需求分析、技术方案编制、项目招投标、项目建设、项目运维、项目验收的整个过程；\
                5、熟练掌握C、C++、JAVA等主流开发语言在gcc、eclipse、IDEA等环境下编程；\
                6、熟悉java web开发，熟悉jQuery、ajax等相关开源框架，熟悉常用的网站模版技术及开源框架，熟悉javaScript，css， xml、html等前端技术，能进行前端集成开发工作，熟悉bootstrap、Echart、iframe等前端开发框架；\
                7、熟悉主流的开发框架如：Struct2、Spring、SpringMVC、SpringBoot、Hibernate、iBatis、mybatis等；\
                8、熟悉主流的中间件技术，如Tuxedo、Tomcat、Weblogic、Nginx等的安装和配置，并在此基础上做过相关的程序开发；\
                9、熟悉Oracle、Mysql、DB2等主流数据库，有SQL语言嵌入式开发经验，或者有Hibernate、iBatis等开发框架使用经验。\
                10、了解网络安全技术和网络系统架构，熟悉云平台架构和云平台各个层次（如iaas、paas、Daas、Saas）的主流技术和任务分工。\
                11、了解应用系统高可用解决方案，如负载均衡、主备、双活、集群等。\
                12、良好的表达沟通能力，能较好地与客户沟通业务需求并形成技术方案，制定项目计划，承担压力的能力强，能独自带领项目团队完成既定的任务。",
        },
      ],
    };
  },
};
</script>
<style scoped>
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
.twocolumns {
  align-items: flex-start;
  display: grid;
  /* grid-template-columns: 81.36% 18.64%; */
  grid-template-columns: 720px 220px;
  flex-wrap: wrap;
  justify-content: space-between;
}
.templateContainer {
  margin: 0 auto;
  max-width: 960px;
}
div {
  display: block;
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
.sidebar {
  margin: -1rem;
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.demo-table-expand{
    padding:1rem;
}
</style>