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
                  Hotspot
                </a>

                <a class="nav-link collapsed" @click="routePush('/cooperation')" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                  <div class="sb-nav-link-icon"><i class="fas fa-users"></i></div>
                  Collaboration
                </a>
                <div class="sb-sidenav-menu-heading">Knowledge Mapping</div>
                <a class="nav-link" @click="routePush('/organFunction')">
                  <div class="sb-nav-link-icon"><i class="fas fa-chart-bar"></i></div>
                  Function
                </a>

              </div>
            </div>

          </nav>
        </div>
        <div id="layoutSidenav_content" style="margin-top:3%">
          <main>
            <div class="frequency container-fluid px-4">
              <div>
                <el-row :gutter="20" class="chart-cells">
                  <el-col :span="24">
                    <div class="chart-cell">
                      <div class="chart-title">Function</div>
                      <div class="charts">
                        <div class="tree" ref="char" :style="{height:height,width:'100%'}" />
                        <div ref="bar" style="height: 400px; width: 100%"/>
                      </div>
                    </div>
                  </el-col>
                </el-row>
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
import * as echarts from "echarts";

import {
  getKeywordsTree,
  getKeywordsFrequency
} from "@/request/frequency";
export default {
  name: "index",
  data() {
    return {
      chart: null,
      chart2: null,
      height: '700px',
      width:'100%',
      content: {},
      keyWord_text:''
    }
  },
  created () {
    this.initTree();
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initTree(){
      getKeywordsTree().then(res => {
        this.initChart(res);
        getKeywordsFrequency({ keyword:res.name }).then(data => {
          this.keyWord_text= res.name;
          this.initBar(data);
        });
      });
    },
    initChart(data) {
      const first_word= data.value;
      const that= this;
      let currentDataIndexs = '';
      this.chart = echarts.init(this.$refs.char, 'macarons');
      this.chart.off('click');
      this.chart.on('click', function (param) {
        if (param.dataType === 'main' && param.data.children.length>0) {
          getKeywordsFrequency({ keyword:param.name }).then(res => {
            that.keyWord_text= param.name;
            that.initBar(res);
          });

          currentDataIndexs = param.dataIndex;
          if (param.data.children) {
            that.chart.dispatchAction({
              type: 'highlight',
              dataIndex: currentDataIndexs
            })
            return
          }

        }
      });
      // this.chart.getZr().on('click', function(event) {
      //   if (!event.target) {
      //     that.chart.dispatchAction({
      //       type: 'downplay',
      //       dataIndex: event.dataIndex
      //     })
      //   }
      // });
      // 节点鼠标移入事件
      this.chart.on('mouseover', function (params) {
        // 取消当前节点的高点，顶替默认事件
        that.chart.dispatchAction({
          type: 'downplay',
          dataIndex: params.dataIndex
        })

        // 高亮点击已保存的相关节点的连线，防止上一步取消了已保存节点的高亮
        that.chart.dispatchAction({
          type: 'highlight',
          dataIndex: !!currentDataIndexs?currentDataIndexs:''
        })
      })

      let option = {
        tooltip: {
          trigger: 'item',
          triggerOn: 'mousemove',
          formatter: function(params) {
            return params.name+'：'+params.value;
          }
        },
        visualMap: {
          left: "left",
          // pieces : [
          //   { min : 150 , color : 'brown' },
          //   { min : 120 , max : 150 , color : 'purple' },
          //   { min : 90 , max : 120 , color : 'red' },
          //   { min : 60 , max : 90 , color : 'orange' },
          //   { min : 25 , max : 60 , color : 'yellow' },
          //   { max : 25 , color : 'green', gt: 0, lte: 25 }
          // ],
          hoverLink: false,
          pieces: [
            {
              gt: 0,
              lte: first_word*0.1,
              color: '#6AA0FF'
            },
            {
              gt: first_word*0.1,
              lte: first_word*0.3,
              color: '#07c2d2'
            },
            {
              gt: first_word*0.3,
              lte: first_word*0.5,
              color: '#3ef6b7'
            },
            {
              gt: first_word*0.5,
              lte: first_word*0.75,
              color: '#18ed00'
            },
            {
              gt: first_word*0.75,
              lte: first_word*0.9,
              color: '#FFAC22'
            },
            {
              gt: first_word*0.9,
              color: '#f15c42'
            }
          ],
          // text: ["Max", "Min"],
        },
        series: [
          {
            type: 'tree',
            name: 'tree1',
            data: [data],
            top: '5%',
            left: '10%',
            bottom: '2%',
            // right: '60%',
            roam: 'move',
            symbolSize: 7,
            label: {
              position: 'left',
              verticalAlign: 'middle',
              align: 'right',
              formatter: function(params) {
                if (params.name.length>10){
                  return params.name.slice(0,13)+'...';
                }else
                  return params.name;
              }
            },
            leaves: {
              label: {
                position: 'right',
                verticalAlign: 'middle',
                align: 'left'
              }
            },
            emphasis: {
              focus: 'relative',
              itemStyle: {
                color: 'red',
                borderColor: 'red',
                shadowColor: 'rgb(94,92,92)',
                shadowBlur: 10,
              },
              label:{
                color: 'red',
              }
            },
            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      this.chart.setOption(option,true);

    },
    initBar(data) {
      this.chart2 = new echarts.init(this.$refs.bar, 'macarons');
      var option = {
        title: {
          text: this.keyWord_text,
          subtext: 'Sub-keyword frequency statistics',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        emphasis:{
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#3bfba8' },
              { offset: 1, color: '#1e7df1' }
            ])
          }
        },
        toolbox: {
          show: true,
          feature: {
            magicType: { type: ['line', 'bar'] },
            restore: {},
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          data: data.xaxis,
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
            rotate: 45,
            // formatter: function(params) {
            //   var newParamsName = "";
            //   var paramsNameNumber = params.length;
            //   var provideNumber = 8; //一行显示几个字
            //   var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
            //   if (paramsNameNumber > provideNumber) {
            //     for (var p = 0; p < rowNumber; p++) {
            //       var tempStr = "";
            //       var start = p * provideNumber;
            //       var end = start + provideNumber;
            //       if (p == rowNumber - 1) {
            //         tempStr = params.substring(start, paramsNameNumber);
            //       } else {
            //         tempStr = params.substring(start, end) + "\n";
            //       }
            //       newParamsName += tempStr;
            //     }
            //   } else {
            //     newParamsName = params;
            //   }
            //   return newParamsName;
            // }
          },
        },
        yAxis: {
          type: 'value',
          nameTextStyle:{
            color:'#262626'
          },
          axisTick: {show: false},
          axisLine: {
            show: true,
            lineStyle:{
              color:'#979797'
            }
          },
          splitLine:{
            show: true,
            lineStyle: {
              type: 'dashed'
            }
          },
          axisLabel:{
            color:'#191919',
          },
        },
        grid : {
          left : '100',
          right : '50',
          bottom : '0 ',
          top : '60',
          containLabel : true
        },
        series: [
          {
            data: data.data,
            type: 'bar',
            barMaxWidth: 45,
            smooth: true,
            label: {
              show: true,
              position: 'top'
            },
            itemStyle: {
              color: '#7fb3ed',
              barBorderRadius: [18, 18, 0, 0]
            },
            areaStyle: {
              opacity: 0.6,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#7fb3ed'
                },
                {
                  offset: 1,
                  color: "#bad7f8"
                }
              ])
            }
          }
        ]
      };
      this.chart2.setOption(option,true);
    },

    sidebarToggle(){
      document.body.classList.toggle('sb-sidenav-toggled');
      localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
    },

    routePush(path){
      this.$router.push({ path:path })
    }
  }
};
</script>

<style scoped lang="less">
@import "../../assets/css/styles.css";
@import "../../assets/css/bootstrap.min.css";
@import '../../assets/global';

.frequency {
  background-color: #EEF1F8;
  min-height: calc(100vh - 148px);

  .charts{
    background: #ffffff;
    //box-shadow: 6px 6px 10px 2px rgba(218,224,237,0.8);
    border-radius: 18px;
    margin-top: 10px;
    .tree{
      border-radius: 10px;
      margin-bottom: 20px;
      border: 2px solid rgba(62, 179, 241, 0.4);
    }
  }
  .chart-cells {
    padding-top: 20px;
    padding-bottom: 70px;

    .chart-cell {
      background: #ffffff;
      box-shadow: 0px 2px 4px 3px rgba(0, 0, 0, 0.05);
      border-radius: 2px;
      width: 100%;
      padding: 35px 30px 30px;
      margin-bottom: 30px;

      .chart-title {
        font-size: 22px;
        font-weight: bold;
        font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
        color: #4d5d75;
        line-height: 29px;
        padding-left: 10px;
        position: relative;
      }

      .chart-title:after {
        display: block;
        position: absolute;
        content: "";
        width: 20px;
        height: 9px;
        background: #3eb3f1;
        border-radius: 0px 11px 11px 0px;
        top: 50%;
        margin-top: -4.5px;
        left: -30px;
      }

      .chart-img {
        margin-top: 30px;
        display: flex;
        justify-content: center;
        background-color: #fff;
        .img {
          width: 514px;
          height: 273px;
          //background: #0D5370;
        }
      }
    }

    //.chart-cell:hover {
    //  background: #f8f8f8;
    //
    //  .chart-title {
    //    color: #3eb3f1;
    //  }
    //}
  }
}
</style>

