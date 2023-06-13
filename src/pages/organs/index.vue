<template>
  <div>
    <header>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Manufacturing Multi-Organs (MM)</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <!-- Sidebar Toggle-->
          <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" @click="sidebarToggle"><i class="fas fa-bars"></i></button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav me-auto mb-2 mb-auto">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" @click="routePush('/organs')">Organs</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" @click="routePush('/models')">Models</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" @click="routePush('/materials')">Materials</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://gulab.info/about/">About</a>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-light" onmouseover="this.style.backgroundColor='black';" onmouseout="this.style.backgroundColor='';"
                      type="submit" style="color:white">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </header>

    <div class="sb-nav-fixed">

    <div id="layoutSidenav">
      <div id="layoutSidenav_nav" style="z-index: 3">
        <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
          <div class="sb-sidenav-menu">
            <div class="nav">
              <div class="sb-sidenav-menu-heading">Statistics</div>
              <a class="nav-link" @click="routePush('/organs')">
                <div class="sb-nav-link-icon"><i class="fas fa-chart-pie"></i></div>
                Components
              </a>
              <div class="sb-sidenav-menu-heading">Knowledge analysis</div>
              <a class="nav-link collapsed" @click="routePush('/trend')" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                <div class="sb-nav-link-icon"><i class="fas fa-chart-area"></i></div>
                Tendency
              </a>

              <a class="nav-link collapsed" @click="routePush('/hostpost')" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                <div class="sb-nav-link-icon"><i class="fa fa-book fa-fw"></i></div>
                Focus
              </a>

              <a class="nav-link collapsed"  @click="routePush('/cooperation')" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                <div class="sb-nav-link-icon"><i class="fas fa-users"></i></div>
                Collaboration
              </a>
              <div class="sb-sidenav-menu-heading">Function assess</div>
              <a class="nav-link" @click="routePush('/organFunction')">
                <div class="sb-nav-link-icon"><i class="fas fa-chart-bar"></i></div>
                Frequency
              </a>

            </div>
          </div>

        </nav>
      </div>
      <div id="layoutSidenav_content">
        <main>
          <div class="container-fluid px-4">

            <form class="row g-3 needs-validation" id="form1" novalidate onsubmit="return false" style="margin: 0">
              <div class="col-6">
                <label for="validationCustom" class="form-label"><strong><span style="color:darkblue">Organ:</span></strong></label>
                <select class="form-select" id="validationCustom" @change="handleSecTopic()" required style="display: inline-block;width: calc(100% - 110px)">
                  <option selected disabled value="">Choose...</option>
                </select>
                <div class="invalid-feedback">
                  Please select a valid organ.
                </div>
              </div>
            </form>
            <h1 class="mt-4 keyword_position" ref="keyword_position">Position</h1>
            <ol class="breadcrumb mb-4">
              <li class="breadcrumb-item active keyword_position1" ref="keyword_position1">Position 1</li>
            </ol>
            <div class="row">
              <div class="mb-4 searchDiv">
                <form class="row g-3 needs-validation" id="form" novalidate onsubmit="return false">
                  <div class="col-4">
                    <label for="validationCustom0" class="form-label">FirstKeyword</label>
                    <select class="form-select" id="validationCustom0" required>
                      <option selected disabled value="">Choose...</option>
                    </select>
                    <div class="invalid-feedback">
                      Please select a valid FirstKeyword.
                    </div>
                  </div>
                  <div class="col-3">
                    <label for="validationCustom1" class="form-label">SecondKeyword</label>
                    <select class="form-select" id="validationCustom1" required>
                      <option selected disabled value="">Choose...</option>
                    </select>
                    <div class="invalid-feedback">
                      Please select a valid SecondKeyword.
                    </div>
                  </div>
                  <div class="col-3">
                    <label for="validationCustom2" class="form-label">ThirdKeyword</label>
                    <select class="form-select" id="validationCustom2" required>
                      <option selected disabled value="">Choose...</option>
                    </select>
                    <div class="invalid-feedback">
                      Please select a valid ThirdKeyword.
                    </div>
                  </div>

                  <div class="col-2">
                    <label class="form-label" style="display: block;visibility: hidden">label</label>
                    <div class="btn_group">
                      <button type="button" class="btn btn-light" onclick="Reset()">Reset</button>
                      <button class="btn btn-primary">Search</button>
                    </div>
                  </div>
                </form>
                <iframe id="iFrame" name="iFrame" src="about:blank" style="display:none;"></iframe>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6">
                <div class="card mb-4">
                  <div class="card-header">
                    <i class="fas fa-chart-bar me-1"></i>
                    Statistic of national rankings
                  </div>
                  <div class="card-body"><div id="country" style="width:100%;height:400px"></div></div>
                </div>
              </div>
              <div class="col-xl-6">
                <div class="card mb-4">
                  <div class="card-header">
                    <i class="fas fa-chart-bar me-1"></i>
                    Statistic of institutional rankings
                  </div>
                  <div class="card-body"><div id="institution" style="width:100%;height:400px"></div></div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-6">
                <div class="card mb-4">
                  <div class="card-header">
                    <i class="fas fa-chart-pie me-1"></i>
                    Statistic of Manufacturing Strategy
                  </div>
                  <div class="card-body"><div id="Pie" style="width:100%; height:400px"></div></div>
                </div>
              </div>
              <div class="col-xl-6">
                <div class="card mb-4">
                  <div class="card-header">
                    <i class="fas fa-chart-bar me-1"></i>
                    Statistic of Biomaterials
                  </div>
                  <div class="card-body"><div id="Bar" style="width:100%; height:400px"></div></div>
                </div>
              </div>
            </div>
            <div class="card mb-4">
              <div class="card-header">
                <i class="fas fa-chart-area me-1"></i>
                Statistic of Cells
              </div>
              <div class="card-body"><canvas id="Area" width="100%" height="30%"></canvas></div>
            </div>



            <div class="card mb-4">
              <div class="card-header">
                <i class="fas fa-table me-1"></i>
                Related Papers
              </div>
              <div class="card-body">
                <el-table
                  :data="tableData"
                  stripe
                  :border="false"
                  :default-sort = "{prop: 'date', order: 'descending'}"
                  style="width: 100%">
                  <el-table-column
                    prop="title"
                    sortable
                    label="Title"
                    width="200">
                  </el-table-column>
                  <el-table-column
                    prop="authors"
                    sortable
                    label="Author(s)">
                  </el-table-column>
                  <el-table-column
                    prop="year"
                    sortable
                    label="Year"
                    width="80">
                  </el-table-column>
                  <el-table-column
                    prop="journal"
                    sortable
                    label="Journal"
                    width="200">
                  </el-table-column>

                  <el-table-column
                    prop="cited_times"
                    sortable
                    align="center"
                    label="Citation"
                    width="100">
<!--                    <template slot-scope="scope">-->
<!--                      <div v-if="!!scope.row.citation">-->
<!--                        <p v-for="item in scope.row.citation" :key="item.zh_title">-->
<!--                          {{item.zh_title+item.authors}}-->
<!--                        </p>-->
<!--                      </div>-->
<!--                      <div v-else><p style="text-align: center">-</p></div>-->
<!--                    </template>-->
                  </el-table-column>

                  <el-table-column
                    prop="keywords"
                    sortable
                    label="Keywords">
                  </el-table-column>
                  <el-table-column
                    prop="doi"
                    sortable
                    label="Doi"
                    width="230">
                    <template slot-scope="scope">
                      <a :href="'https://doi.org/'+scope.row.doi">{{scope.row.doi}}</a>
                    </template>
                  </el-table-column>
                </el-table>

                <div style="text-align: end;position: relative;margin-top: 20px">
                  <el-pagination
                    background
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-size="limit"
                    layout="prev, pager, next, jumper"
                    :total="total">
                  </el-pagination>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer class="py-4 bg-light mt-auto">
          <div class="container-fluid px-4">
            <div class="d-flex align-items-center justify-content-between small">
              <div class="text-muted">Copyright &copy; Group of Bioinspired Engineering 2023</div>
            </div>
          </div>
        </footer>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
// import '../../assets/js/jquery-3.6.0.min.js'
// import '../../assets/js/bootstrap.bundle.min.js'
import * as echarts from "echarts";

import {
  getPieChartData,
  getBarChartData,
  getAreaChartData,
  getSearchList,
  getKeywordList,
  getAllSecTopic,
  getCountryList,
  getOrgList
} from "@/request/organs";
export default {
  name: 'index',
  data(){
    return{
      organ: '',
      tableData: [],
      limit: 10,
      currentPage: 1,
      total: 0

    }
  },
  mounted () {
    this.organ= this.$route.query.s;
    if (!!!this.organ)
      this.getSAllSecTopic();

    document.getElementById('form1').style.display= 'none';
    this.updateDom();
    if (!!!this.organ)
      document.getElementById('form1').style.display= 'block';


    const forms = document.querySelectorAll('.needs-validation')
    var form = document.getElementById('form');
    $("#form").attr("target","iFrame");
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }else {
          this.getCountry($("#validationCustom2").val())
          this.getInstitution($("#validationCustom2").val())
        }
        form.classList.add('was-validated')
      }, false)
    })

    this.axiosAll();
    this.searchList();
    this.getSelectData();
    this.handleChange();
    this.getCountry('');
    this.getInstitution('');
  },
  methods:{

    axiosAll(){
      // Interface Connection
      let parameter = { organ: this.organ };

      // Pie Chart
      getPieChartData(parameter).then(res => {
        let label_strategy = res['axis'];
        let count_strategy = res['data'].map((item,inx)=>{
          let obj= { name:label_strategy[inx], value:item };
          return obj;
        });

        let ctx = echarts.init(document.getElementById('Pie'));
        let option = {
          tooltip: {
            trigger: 'item'
          },
          legend: {
            // top: '5%',
            // left: 'center'
            orient: 'vertical',
            left: 'left',
            // selectedMode:false
          },
          series: [
            {
              type: 'pie',
              avoidLabelOverlap: false,
              itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
              },
              label: {
                show: true,
                formatter: '{b}: {@2012} ({d}%)'
              },
              labelLine: {
                show: true
              },
              data: count_strategy
            }
          ]
        };
        ctx.setOption(option);
      });
      // Bar Chart
      getBarChartData(parameter).then(res => {
        let color= ['#28c7fa', '#ff006c', '#47d6b6', '#f96d00', '#9c1de7', '#fef200', '#39bdc8', '#7a57d1', '#fc5185', '#575151'];
        let label_material = res['axis'];
        let count_material = res['data'].map((item,inx)=>{
          let obj= { itemStyle:{color: color[(inx)%10]}, value:item };
          return obj;
        });

        // 计算最大值
        let max = Math.max(...count_material);
        let maxRoundedUp;
        if (max <= 100) {
          maxRoundedUp =
            Math.ceil(max / 10) * 10;
        } else {
          maxRoundedUp = Math.ceil(max / 100) * 100;
        }
        let ctx = echarts.init(document.getElementById('Bar'));
        let option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            data: label_material.slice(0, 10),
            axisLabel:{
              interval: 0,
              rotate: 45
            }
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: count_material,
              type: 'bar',
              label: {
                show: true,
                position: 'top'
              },
            }
          ]
        };
        ctx.setOption(option);


      });
      // Area Chart
      getAreaChartData(parameter).then(res => {

        let label_cell = res['axis'];
        let count_cell = res['data'];
        var ctx = document.getElementById("Area");

        // 计算最大值
        let max = Math.max(...count_cell);
        let maxRoundedUp;
        if (max <= 100) {
          maxRoundedUp = Math.ceil(max / 10) * 10;
        } else {
          maxRoundedUp = Math.ceil(max / 100) * 100;
        }

        var myLineChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: label_cell.slice(0, 12),  // 使用slice切片 选择数量最多的前十个
            datasets: [{
              label: "count",
              lineTension: 0.3,
              backgroundColor: ['#28c7fa', '#ff006c', '#47d6b6', '#f96d00', '#9c1de7',
                '#fef200', '#39bdc8', '#7a57d1', '#fc5185', '#575151', '#28c7fa', '#ff006c'],
              borderColor: "#00d8b1",
              pointRadius: 5,
              pointBackgroundColor:['#28c7fa', '#ff006c', '#47d6b6', '#f96d00', '#9c1de7',
                '#fef200', '#39bdc8', '#7a57d1', '#fc5185', '#575151', '#28c7fa', '#ff006c'],
              pointBorderColor: "rgba(255,255,255,0.8)",
              pointHoverRadius: 1,
              pointHoverBackgroundColor: "rgba(2,117,216,1)",
              pointHitRadius: 50,
              pointBorderWidth: 2,
              data: count_cell,
              fill: false,
            }],
          },
          options: {
            scales: {
              xAxes: [{
                time: {
                  unit: 'date'
                },
                gridLines: {
                  display: false
                },
                ticks: {
                  maxTicksLimit: 16
                }
              }],
              yAxes: [{
                ticks: {
                  min: 0,
                  max: maxRoundedUp,
                  maxTicksLimit: 5
                },
                gridLines: {
                  color: "rgba(0, 0, 0, .125)",
                }
              }],
            },
            legend: {
              display: false
            }
          }
        });
      });
    },

    searchList(){
      let parameter = { page:this.currentPage, limit:this.limit, param: this.organ };
      getSearchList(parameter).then(res => {
        this.tableData= [];
        let jsonlist = res['dataList'];
        this.tableData= jsonlist;
        this.total= res['total'];
      });
    },

    getSelectData(){
      getKeywordList({}).then(res => {
        let data= res;
        var arr= data.firstKeywordList;
        var allHtml = "<option selected disabled value=\"\">Choose...</option>";
        for (var i = 0; i<arr.length; i++) {
          var obj = arr[i];
          var str = "<option>"+obj+"</option>";
          allHtml += str;
        }
        document.getElementById("validationCustom0").innerHTML = allHtml;
      });
    },

    getSAllSecTopic(){
      getAllSecTopic({}).then(res => {
        let data= res;
        let arr= [];
        for (let key in data){ arr.push(key) };
        let allHtml = "<option selected disabled value=\"\">Choose...</option>";
        for (var i = 0; i<arr.length; i++) {
          var obj = arr[i];
          var str = "<option>"+obj+"</option>";
          allHtml += str;
        }
        document.getElementById("validationCustom").innerHTML = allHtml;
      })
    },

    getSecondKeyword(firstKeyword, secondKeyword){
      let parameter = { param: this.organ, firstKeyword: firstKeyword, secondKeyword: secondKeyword  };

      getKeywordList(parameter).then(res => {
        let data= res;
        if (!!secondKeyword){

          var thirdList= data.thirdList;
          var allHtml1 = "<option selected disabled value=\"\">Choose...</option>";
          for (var j = 0; j<thirdList.length; j++) {
            var obj1 = thirdList[j];
            var str1 = "<option>"+obj1+"</option>";
            allHtml1 += str1;
          }
          document.getElementById("validationCustom2").innerHTML = allHtml1;
        }else {

          var arr= data.secondKeywordList;
          var allHtml = "<option selected disabled value=\"\">Choose...</option>";
          for (var i = 0; i<arr.length; i++) {
            var obj = arr[i];
            var str = "<option>"+obj+"</option>";
            allHtml += str;
          }
          document.getElementById("validationCustom1").innerHTML = allHtml;
        }
      });
    },

    handleChange(){
      let that= this;
      $("#validationCustom0").change(function(){
        var opt=$("#validationCustom0").val();
        that.getSecondKeyword(opt)
      })
      $("#validationCustom1").change(function(){
        that.getSecondKeyword($("#validationCustom0").val(),$("#validationCustom1").val())
      })
    },

    getCountry(val){
      let param={ keyword: val, organ:this.organ };

      getCountryList(param).then(res => {
        const data= res;
        data.forEach((item,index)=>{
          item.itemStyle={
            barBorderRadius: [0, 10, 10, 0],
            // color: this.color[index%this.color.length],
            color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
              { offset: 0, color: '#0663dbb3' },
              { offset: 0.2, color: '#0663dbb3' },
              { offset: 1, color: '#0663db' }
            ])
          };
          item.label= {
            show: true,
            color: '#8f949f',
            position: 'right',
            valueAnimation: true
          }
        });
        let xAxisData = data.map((item)=>{ return item.name});
        let seriesData=  data.splice(0,100).reverse();
        let ctx = echarts.init(document.getElementById('country'));
        let option  = {
          tooltip: {},
          grid : {
            left: 0,
            // right : 0,
            bottom : 0,
            top : 10,
            containLabel : true
          },
          dataZoom:[
            {
              type: 'slider',
              maxValueSpan:9,//显示数据的条数(默认显示10个)
              show: true,
              width:  '5',
              height:  '100%',
              yAxisIndex: [0],
              // left: '93%', //滑动条位置
              start:100,//默认为0
              end: 100-9/seriesData.length*100,//默认为100
              orient:"vertical",
              filterMode: 'empty',
              zoomLock:true,
              fillerColor: "#2f96f6", // 滚动条颜色
              borderColor: "rgba(17, 100, 210, 0.12)",
              backgroundColor: '#c1dcff',//两边未选中的滑动条区域的颜色
              handleSize:0, // 两边手柄尺寸
              showDataShadow: false,//是否显示数据阴影 默认auto
              showDetail: false, // 拖拽时是否展示滚动条两侧的文字
              top:'1%',
              right:'5',
            },
            {
              type: 'inside', //内置滑动，随鼠标滚轮展示
              yAxisIndex: [0],
              start: 100,//初始化时，滑动条宽度开始标度
              end: 100-9/seriesData.length*100,//默认为100
              zoomOnMouseWheel:false, //如何触发缩放。可选值为：true：表示不按任何功能键，鼠标滚轮能触发缩放。false：表示鼠标滚轮不能触发缩放。'shift'：表示按住 shift 和鼠标滚轮能触发缩放。'ctrl'：表示按住 ctrl 和鼠标滚轮能触发缩放。'alt'：表示按住 alt 和鼠标滚轮能触发缩放。。
              moveOnMouseMove:true,
              moveOnMouseWheel:true,//鼠标滚轮实现移动
            }
          ],
          xAxis: [
            {
              name: '',
              type: 'value',
              nameTextStyle:{
                color:'#262626'
              },
              axisTick: {show: false},
              axisLine: {
                show: false,
                lineStyle:{
                  color:'#ededed'
                }
              },
              splitLine:{
                show: true,
                lineStyle:{
                  color:'#ededed'
                }},
              axisLabel:{
                color:'#6F6F6F',
              },
            }
          ],
          yAxis: [
            {
              type: 'category',
              axisTick: {show: false},
              axisLine: {
                show: true,
                lineStyle:{
                  color:'#979797'
                }
              },
              axisLabel:{
                color:'#6F6F6F',
                interval: 0,
                // rotate: 45,
                formatter: function(params) {
                  var newParamsName = "";
                  var paramsNameNumber = params.length;
                  var provideNumber = 20;
                  if (paramsNameNumber > provideNumber) {
                    newParamsName= params.substr(0,provideNumber)+'...';
                  } else {
                    newParamsName = params;
                  }
                  return newParamsName;
                }
              },
              data:  xAxisData.splice(0,100).reverse()
            }
          ],
          series: [
            {
              type: 'bar',
              barGap: 0,  //两个柱状之间的间隙
              barWidth :25, //柱形的宽度
              data: seriesData
            }
          ]
        };
        ctx.setOption(option);
      });
    },

    getInstitution(val){

      let param={ keyword: val, organ:this.organ };
      getOrgList(param).then(res => {
        const data= res;
        data.forEach((item,index)=>{
          item.itemStyle={
            barBorderRadius: [0, 10, 10, 0],
            // color: this.color[index%this.color.length],
            color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
              { offset: 0, color: '#788de0b3' },
              { offset: 0.2, color: '#788de0b3' },
              { offset: 1, color: '#788de0' }
            ])
          };
          item.label= {
            show: true,
            color: '#8f949f',
            position: 'right',
            valueAnimation: true
          }
        });
        let xAxisData = data.map((item)=>{ return item.name});
        let seriesData= data.splice(0,100).reverse();
        let ctx = echarts.init(document.getElementById('institution'));
        let option  = {
          tooltip: {},
          grid : {
            left: 0,
            // right : 0,
            bottom : 0,
            top : 10,
            containLabel : true
          },
          dataZoom:[
            {
              type: 'slider',
              maxValueSpan:9,//显示数据的条数(默认显示10个)
              show: true,
              width:  '5',
              height:  '100%',
              yAxisIndex: [0],
              // left: '93%', //滑动条位置
              start:100,//默认为0
              end: 100-9/seriesData.length*100,//默认为100
              orient:"vertical",
              filterMode: 'empty',
              zoomLock:true,
              fillerColor: "#2f96f6", // 滚动条颜色
              borderColor: "rgba(17, 100, 210, 0.12)",
              backgroundColor: '#c1dcff',//两边未选中的滑动条区域的颜色
              handleSize:0, // 两边手柄尺寸
              showDataShadow: false,//是否显示数据阴影 默认auto
              showDetail: false, // 拖拽时是否展示滚动条两侧的文字
              top:'1%',
              right:'5',
            },
            {
              type: 'inside', //内置滑动，随鼠标滚轮展示
              yAxisIndex: [0],
              start: 100,//初始化时，滑动条宽度开始标度
              end: 100-9/seriesData.length*100,//默认为100
              zoomOnMouseWheel:false, //如何触发缩放。可选值为：true：表示不按任何功能键，鼠标滚轮能触发缩放。false：表示鼠标滚轮不能触发缩放。'shift'：表示按住 shift 和鼠标滚轮能触发缩放。'ctrl'：表示按住 ctrl 和鼠标滚轮能触发缩放。'alt'：表示按住 alt 和鼠标滚轮能触发缩放。。
              moveOnMouseMove:true,
              moveOnMouseWheel:true,//鼠标滚轮实现移动
            }
          ],
          xAxis: [
            {
              name: '',
              type: 'value',
              nameTextStyle:{
                color:'#262626'
              },
              axisTick: {show: false},
              axisLine: {
                show: false,
                lineStyle:{
                  color:'#ededed'
                }
              },
              splitLine:{
                show: true,
                lineStyle:{
                  color:'#ededed'
                }},
              axisLabel:{
                color:'#6F6F6F',
              },
            }
          ],
          yAxis: [
            {
              type: 'category',
              axisTick: {show: false},
              axisLine: {
                show: true,
                lineStyle:{
                  color:'#979797'
                }
              },
              axisLabel:{
                color:'#6F6F6F',
                interval: 0,
                // rotate: 45,
                formatter: function(params) {
                  var newParamsName = "";
                  var paramsNameNumber = params.length;
                  var provideNumber = 20;
                  if (paramsNameNumber > provideNumber) {
                    newParamsName= params.substr(0,provideNumber)+'...';
                  } else {
                    newParamsName = params;
                  }
                  return newParamsName;
                }
              },
              data: xAxisData.splice(0,100).reverse()
            }
          ],
          series: [
            {
              type: 'bar',
              barGap: 0,  //两个柱状之间的间隙
              barWidth :25, //柱形的宽度
              data: seriesData
            }
          ]
        };
        ctx.setOption(option);
      });

    },

    Reset(){
      $("#form")[0].reset();
    },

    GetOrgan(name) {
      let  reg = new  RegExp( "(^|&)" + name + "=([^&]*)(&|$)" );
      let  r = window.location.search.substr(1).match(reg);
      if (r!= null ) return   unescape(r[2]); return  null ;
    },

    updateDom(){
      if (!!this.organ) {
        this.$refs.keyword_position.innerText=this.organ;
        this.$refs.keyword_position1.innerText='Statistics of strategies, biomaterials, cells with respect to countries and institutions in fabricating the human ' + this.organ + '.';
      } else {
        this.$refs.keyword_position.innerText='Organs';
        this.$refs.keyword_position1.innerText = 'Statistics of strategies, biomaterials, cells with respect to countries and organizations in fabricating the human organs.';
      }
    },

    handleSecTopic(){
      this.organ= $("#validationCustom").val();
      this.updateDom();
      this.axiosAll();
      this.searchList();
      this.getCountry('');
      this.getInstitution('');
    },

    handleCurrentChange(val) {
      this.currentPage= val;
      this.searchList();
    },

    sidebarToggle(){
      document.body.classList.toggle('sb-sidenav-toggled');
      localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
    },

    routePush(path){
      this.$router.push({ path:path })
    }

  }
}
</script>

<style lang="less" scoped>
@import "../../assets/css/styles.css";
@import "../../assets/css/bootstrap.min.css";

.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
</style>
