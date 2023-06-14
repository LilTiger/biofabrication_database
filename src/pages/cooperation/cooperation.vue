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

                <a class="nav-link collapsed" @click="routePush('/cooperation')" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                  <div class="sb-nav-link-icon"><i class="fas fa-users"></i></div>
                  Collaboration
                </a>
                <div class="sb-sidenav-menu-heading">Knowledge Mapping</div>
                <a class="nav-link" @click="routePush('/organFunction')">
                  <div class="sb-nav-link-icon"><i class="fas fa-chart-bar"></i></div>
                  Function Assess
                </a>

              </div>
            </div>

          </nav>
        </div>
  <div id="layoutSidenav_content" style="margin-top:3%">          <main>
            <div class="cooperation container-fluid px-4">
              <div>
                <div class="pick">
                  <div class="flex-center date">
                    <div>
                      StartYear：
                      <el-date-picker
                        class="date-pick"
                        v-model="start"
                        type="year"
                        value-format="yyyy"
                        :picker-options="pickerOptions"
                        placeholder="选择年"
                      >
                      </el-date-picker>
                    </div>
                    <div class="end-date">
                      EndYear：
                      <el-date-picker
                        class="date-pick"
                        v-model="end"
                        type="year"
                        :picker-options="pickerOptions"
                        value-format="yyyy"
                        placeholder="Year of choice"
                      >
                      </el-date-picker>
                    </div>
                    <div class="button">
                      <el-button type="primary" @click="handleAnalysis">Search</el-button>
                    </div>
                  </div>
                </div>
                <el-tabs
                  v-model="active"
                  type="card"
                  @tab-click="tabClick"
                  stretch
                  class="tabs"
                >
                  <el-tab-pane label="overview" name="1">
                    <div class="tab-cell">
                      <div class="point">
                        Trend of international cooperation
                      </div>
                      <div class="chart">
                        <div class="img" id="cooperation-chart1"></div>
                      </div>
                      <c-table
                        :tableData="tableData1"
                        :tableType="tableHead1"
                        :showIndex="true"
                        :isMore="true"
                        :type="'coo'"
                      ></c-table>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="Overall trend" name="2">
                    <div class="tab-cell">
                      <div class="point">
                        Overall trend of international cooperation
                      </div>
                      <div class="chart">
                        <div class="img" id="cooperation-chart2"></div>
                      </div>
                      <c-table
                        :tableData="tableData2"
                        :tableType="tableHead2"
                        :showIndex="false"
                        :isMore="false"
                        :type="'coo'"
                      ></c-table>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="Cooperation trend" name="3">
                    <div class="tab-cell">
                      <div class="point">
                        Trends in TOP-N country cooperation
                      </div>
                      <div class="chart">
                        <div class="img" id="cooperation-chart3"></div>
                      </div>
                      <c-table
                        :tableData="tableData3"
                        :tableType="tableHead3"
                        :showIndex="false"
                        :isMore="false"
                        :type="'coo'"
                      ></c-table>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="Research topic analysis" name="4">
                    <div class="tab-cell">
                      <div class="point">
                        An analysis of international cooperative research topics
                      </div>
                      <div class="chart">
                        <div class="img img1" id="cooperation-chart4"></div>
                      </div>
                      <c-table
                        :tableData="tableData4"
                        :tableType="tableHead4"
                        :showIndex="true"
                        :isMore="true"
                        :type="'coo'"
                      ></c-table>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="Cooperative institution" name="5">
                    <div class="tab-cell">
                      <div class="point">
                        TOP-N International cooperation agency
                      </div>
                      <div class="chart">
                        <div class="img img2" id="cooperation-chart5"></div>
                      </div>
                      <c-table
                        :tableData="tableData5"
                        :tableType="tableHead5"
                        :showIndex="true"
                        :isMore="true"
                        :type="'coo'"
                      ></c-table>
                    </div>
                  </el-tab-pane>
                </el-tabs>
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
import cTable from "@/components/table";
import * as echarts from "echarts";
import World from "@/assets/js/map/json/world.json";
// import { mapZHName } from "@/assets/js/countryZH";

import {
  getTrendCountry,
  getCooperation,
  getCooperCapital,
  getCooperCountry,
  getCooperSubject
} from "@/request/cooperation";

export default {
  components: {
    cTable
  },
  data() {
    return {
      start: "",
      end: "",
      active: "1",
      tableData1: [],
      tableData2: [],
      tableData3: [],
      tableData4: [],
      tableData5: [],
      tableHead1: [
        {
          label: "Cooperative country",
          prop: "name"
        },
        {
          label: "Number of cooperation",
          prop: "count"
        }
      ],
      tableHead2: [
        {
          label: "year",
          prop: "year"
        },
        {
          label: "Frequency of cooperation",
          prop: "foreign"
        },
        {
          label: "Frequency of leading cooperation",
          prop: "inter"
        }
      ],
      tableHead3: [
        {
          label: "year",
          prop: "year",
          width: 80
        },
        {
          label: "Number of countries",
          prop: "countrynum",
          width: 160
        },
        {
          label: "Total frequency",
          prop: "total",
          width: 160
        },
        {
          label: "TOP-10 countries with frequent cooperation",
          prop: "str"
        }
      ],
      tableHead4: [
        {
          label: "Cooperation hot topic TOP-10",
          prop: "keyword",
          width: 300
        },
        {
          label: "Number of cooperation outcomes",
          prop: "count",
          width: 180
        },
        {
          label: "TOP 3 (frequency) of major cooperative countries",
          prop: "country"
        }
      ],
      tableHead5: [
        {
          label: "organization",
          prop: "name",
          width: 220
        },
        {
          label: "Frequency of cooperation",
          prop: "num",
          width: 120
        },
        {
          label: "Cooperative country TOP-3",
          prop: "country",
          width: 270
        },
        {
          label: "Hot topic TOP-3",
          prop: "keyword"
        }
      ],
      isRefresh: false,
      pickerOptions: {
        disabledDate(time) {
          return (
            time.getTime() > Date.now() - 8.64e7 ||
            time.getTime() < Date.parse("1990/1/1")
          );
        }
      }
    };
  },
  mounted() {
    let end = new Date().getFullYear() - 1;
    this.end = end.toString();
    this.start = (end - 9).toString();
    // this.start = '2014'
    this.init();
    // this.drawChart5()
  },
  methods: {
    init() {
      let year = this.start + "-" + this.end;
      if (this.active === "1") {
        getTrendCountry({ year }).then(res => {
          this.tableData1 = res.slice(0, 30);
          this.drawChart1(res);
        });
      } else if (this.active === "2") {
        getCooperation({ year }).then(res => {
          this.tableData2 = res.table.reverse().slice(0, 10);
          this.drawChart2(res.xaxis, res.data);
        });
      } else if (this.active === "3") {
        getCooperCountry({ year }).then(res => {
          this.tableData3 = res.table.reverse().slice(0, 10);
          this.drawChart3(res.years, res.datalist, res.countrys);
        });
      } else if (this.active === "4") {
        getCooperSubject({ year }).then(res => {
          this.tableData4 = res.table;
          this.drawChart4(res.map.xaxis, res.map.yaxis, res.map.data);
        });
      } else if (this.active === "5") {
        getCooperCapital({ year }).then(res => {
          this.tableData5 = res.table;
          this.drawChart5(res.nodes, res.data);
        });
      }
    },
    handleAnalysis() {
      let start = this.start;
      let end = this.end;
      if (start > end) {
        let date = start;
        this.start = end;
        this.end = date;
      }
      this.isRefresh = true;
      this.init();
    },
    tabClick(tab, event) {
      let index = parseInt(tab.index) + 1;
      let name = "tableData" + index;
      if (this.isRefresh || this[name].length === 0) {
        this.init();
      }
    },
    setCountry(data) {
      let country = [];
      data.map(item => {
        country.push({
          ...item,
          value: parseInt(item.count)
        });
      });
      return country;
    },
    drawChart1(data) {
      let country = this.setCountry(data);
      let myChart = echarts.init(
        document.getElementById("cooperation-chart1"),
        "white",
        { renderer: "canvas" }
      );
      echarts.registerMap("World", World);
      let option = {
        grid: {
          left: 10,
          bottom: 20,
          top: 10,
          right: 30
        },
        tooltip: {
          trigger: "item",
          showDelay: 0,
          transitionDuration: 0.2
        },
        visualMap: {
          left: "left",
          min: 1,
          max: 300,
          inRange: {
            color: [
              // '#eaf0fb',
              // '#5686dc',
              "#c8ddf8",
              "#A0BEF4",
              "#71A2FF",
              "#677CC9",
              "#6e83db"
            ]
          },
          text: ["Max", "Min"],
          calculable: true
        },
        series: [
          {
            name: "Trend of international cooperation",
            type: "map",
            roam: false,
            map: "World",
            zoom: 1.1,
            emphasis: {
              label: {
                show: true
              }
            },
            itemStyle: {
              normal: {
                areaColor: "#c8ddf8"
              }
            },
            data: country,
            // nameMap: mapZHName
          }
        ]
      };
      myChart.setOption(option);
    },
    drawChart2(xaxis, data) {
      let myChart = new echarts.init(
        document.getElementById("cooperation-chart2")
      );
      let option = {
        tooltip: {
          trigger: "axis",
          formatter: function(params) {
            let tip;
            if (params != null && params.length > 0) {
              tip =
                '<div style="font-size:14px;color:#666;font-weight:400;line-height:1;">' +
                params[0].name +
                "年" +
                '</div><div style="margin: 10px 0 0;line-height:1;">';
              for (let i = 0; i < params.length; i++) {
                tip +=
                  '<div style="margin: 10px 0 0;line-height:1;">' +
                  params[i].marker +
                  '<span style="font-size:14px;color:#666;font-weight:400;margin-left:2px">' +
                  params[i].seriesName +
                  "</span>" +
                  '<span style="float:right;margin-left:20px;font-size:14px;color:#666;font-weight:800">' +
                  params[i].value +
                  "</span>" +
                  '<div style="clear:both"></div></div>';
              }
              tip += '<div style="clear:both"></div></div>';
            }
            return tip;
          }
        },
        grid: {
          right: 10
        },
        legend: {
          data: ["国际合作频次", "国内主导合作频次"]
        },
        xAxis: {
          type: "category",
          // boundaryGap: false,
          data: xaxis
        },
        yAxis: {
          type: "value"
        },

        series: [
          {
            name: "国际合作频次",
            data: data.foreign,
            type: "line",
            itemStyle: {
              normal: {
                color: "#FF9E13",
                lineStyle: {
                  color: "#FF9E13"
                }
              }
            }
          },
          {
            name: "国内主导合作频次",
            data: data.inter,
            type: "line",
            itemStyle: {
              normal: {
                color: "#3EB3F1",
                lineStyle: {
                  color: "#3EB3F1"
                }
              }
            }
          }
        ]
      };
      myChart.setOption(option);
    },
    drawChart3(years, datalist, countrys) {
      let myChart = new echarts.init(
        document.getElementById("cooperation-chart3")
      );
      let series = [];
      countrys.map((item, index) => {
        series.push({
          name: item,
          data: datalist[index],
          type: "line"
        });
      });

      let option = {
        tooltip: {
          trigger: "axis",
          formatter: function(params) {
            let tip;
            if (params != null && params.length > 0) {
              tip =
                '<div style="font-size:14px;color:#666;font-weight:400;line-height:1;">' +
                params[0].name +
                "年" +
                '</div><div style="margin: 10px 0 0;line-height:1;">';
              for (let i = 0; i < params.length; i++) {
                tip +=
                  '<div style="margin: 10px 0 0;line-height:1;">' +
                  params[i].marker +
                  '<span style="font-size:14px;color:#666;font-weight:400;margin-left:2px">' +
                  params[i].seriesName +
                  "</span>" +
                  '<span style="float:right;margin-left:20px;font-size:14px;color:#666;font-weight:800">' +
                  params[i].value +
                  "</span>" +
                  '<div style="clear:both"></div></div>';
              }
              tip += '<div style="clear:both"></div></div>';
            }
            return tip;
          }
        },
        legend: {
          orient: "vertical",
          x: "right",
          y: "center",
          data: countrys
        },
        xAxis: {
          type: "category",
          // boundaryGap: false,
          data: years
        },
        yAxis: {
          type: "value"
        },
        series: series
      };
      myChart.setOption(option);
    },
    drawChart4(country, subject, datalist) {
      let myChart = new echarts.init(
        document.getElementById("cooperation-chart4")
      );
      let max = 0;
      const data = datalist.map(function(item) {
        if (item[2] > max) max = item[2];
        return [item[1], item[0], parseInt(item[2]), item[2]];
      });
      let option = {
        tooltip: {
          position: "top",
          formatter: function(params) {
            return (
              "与 " +
              "<span style='color:#4c87bf'>" +
              country[params.value[0]] +
              "</span>" +
              " 在 " +
              "<span style='color:#4c87bf'>" +
              country[params.value[0]] +
              "</span>" +
              "主题方向 合作" +
              "<span style='color:#4c87bf'>" +
              params.value[3] +
              "</span>" +
              "次"
            );
          }
        },
        grid: {
          left: 10,
          bottom: 10,
          // right: 20,
          containLabel: true
        },
        xAxis: {
          type: "category",
          data: country,
          boundaryGap: false,
          splitLine: {
            show: true
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            rotate: "45",
            margin: 20
          }
        },
        yAxis: {
          // min:1000,
          type: "category",
          data: subject,
          axisLine: {
            show: false
          },
          axisLabel: {
            margin: 20
            // interval:0.01
          }
        },
        series: [
          {
            name: "Punch Card",
            type: "scatter",
            symbolSize: function(val) {
              // let size = val[2] === 0 ? 0 : 50 - (1 - val[2] / max) * 20
              return val[2] === 0
                ? 0
                : Math.log(parseInt(val[2])).toFixed(8) * 3;
            },
            data: data,
            animationDelay: function(idx) {
              return idx * 5;
            }
          }
        ]
      };
      myChart.setOption(option);
    },
    drawChart5(nodes, links) {
      let myChart = new echarts.init(
        document.getElementById("cooperation-chart5")
      );
      const node = nodes.map(item => {
        return { name: item };
      });
      let lineStyle= { opacity : 0};
      let link= links.map((line)=>{
        if (line.source === 'China1'){
          line['lineStyle']= lineStyle;
        }
        return line;
      })

      node.forEach(item=>{
        if (item.name==='China1')
          item.itemStyle= { color: 'white' }
      })

      let option = {
        tooltip: {
          trigger: "item",
          triggerOn: "mousemove",
          formatter: function(param) {
            let data= param.data;
            if (data.source && data.target && data.value) {
              let source = data.source;
              source = source.slice(0, source.length - 1);
              let target = data.target;
              target = target.slice(0, target.length - 1);
              let value = data.value;
              return `${source} -- ${target}<span style="font-weight:700;margin-left: 20px">${value}</span>`;
            }
          }
        },
        series: [
          {
            right: 180,
            type: "sankey",
            data: node,
            links: link,
            layoutIterations: 0,
            emphasis: {
              focus: "adjacency"
            },
            nodeGap: 18,
            levels: [
              {
                depth: 0,
                itemStyle: {
                  color: "#fbb4ae"
                },
                lineStyle: {
                  color: "source",
                  opacity: 0.6
                },
                label: {
                  formatter: function(param) {
                    if ( param.data.name==='China1' )
                      return '';
                    let name = param.data.name;
                    return name.slice(0, name.length - 1);
                  }
                }
              },
              {
                depth: 1,
                itemStyle: {
                  color: "#b3cde3"
                },
                lineStyle: {
                  color: "source",
                  opacity: 0.6
                },
                label: {
                  formatter: function(param) {
                    let name = param.data.name;
                    return name.slice(0, name.length - 1);
                  }
                }
              },
              {
                depth: 2,
                itemStyle: {
                  color: "#ccebc5"
                },
                lineStyle: {
                  color: "source",
                  opacity: 0.6
                },
                label: {
                  formatter: function(param) {
                    let name = param.data.name;
                    return name.slice(0, name.length - 1);
                  }
                }
              },
              {
                depth: 3,
                itemStyle: {
                  color: "#decbe4",
                  fontSize: 10
                },
                lineStyle: {
                  color: "source",
                  opacity: 0.6
                },
                label: {
                  formatter: function(param) {
                    let name = param.data.name;
                    return name.slice(0, name.length - 1);
                  }
                }
              }
            ],
            lineStyle: {
              curveness: 0.5
            }
          }
        ]
      };
      myChart.setOption(option);
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

.cooperation {
  background: linear-gradient(
    180deg,
    rgba(221, 234, 255, 0.88) 0%,
    #ffffff 10%
  );
  .pick {
    position: relative;
    z-index: 2;
    padding: 51px 154px 78px;

    .title {
      font-size: 40px;
      font-weight: bold;
      font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
      color: #4d5d75;
      line-height: 52px;
      padding-bottom: 67px;
      padding-top: 0;
      text-align: center;
    }
    .date {
      font-size: 16px;
      color: #4d5d75;
      font-family: MicrosoftYaHei;
      line-height: 21px;
      .end-date {
        margin-left: 50px;
      }
      .date-pick {
        /deep/ .el-input__inner {
          height: 45px;
          line-height: 45px;
          font-size: 16px;
          padding-left: 17px;
          border-radius: 5px;
          border: 1px solid rgba(77, 93, 117, 0.5);
        }
        /deep/ .el-input__prefix {
          background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAwCAYAAABuZUjcAAAAAXNSR0IArs4c6QAAA7BJREFUaEPtWV1oW2UYfp6TLMyucw6LCk4RKopuVZyygXgjIt6Y09Yf3IScdRvuwpt5YU5VFAKK0MSL7caL6bYuAzfxZybxRkS8EWGbbsw6RbE3UkGlMOe6OrPkPHLSJqZpoic5Jy3KyUUg3/c+P3l4z5vAS7TxGrRGn3SgPQCmDYNP5MbHJtqALyodHBkdcBy9DaDPAJ/JZcfe8spHr4WpVMr4cvLiOQBXuhgSuXw2M+QV36zOtOycJHP+7ve7+1etTaVSjhdOz8YffzrVe+nCxQs1UvJEIZve7EWkVU3cso9D2lS9X7l61ep3Xk/NeOFcZFwSh3a8uI4OY/UE4uUep+x89fcZz0SM2KNeRFrVlJ3ie4DurN4bEeMOasXsAl1DxQ8OvDJFUvXnNePDCfu2EvEaoXslXOXHUNBYEr8J/DwqPHvscPrbSqu6b/Ftya0QD0BaGbRooHzkJVA7CocyRzg08txNTtmZENQbqEiXyAjOGBFjgGbCflPQzrqHbhbSCRDFhdqMQHqgekbwvKjjfvxR3CxoTZ32J4DKCziFGMhNkHrqtPcznki6s3jD3CFL0Vj0rmP7X/260dByTpXhnS9sKBVLpwFF5/qbEzQTyZKASOWA/D6fTd/aLEV3jp+anD1fbSmSH+az6bifxE3LLkh6eN7MzMb+njWt5rhp2d9JumX+wSy7idfGDIFv8ocz61uZGdxmb5ewF9J0NIrH3j+YOeXH+CPbkxtLJbwLso/E7tyh9MFWfGYieVbA7bV2ace4C3LnfONM9WPeK6dv435NdooPjXeaXKe4f0wc5I8RGk91St5NXFnOG5BubPpwdlM4aO4F4zBo8m7y/V+M8xypo91MqlNuiVsAre34B6hTYb+4cI77TbBdfJh4u4n5rQ8Tb0xwcGQ07jjOPgjX+U23gid+NgxjV258rOB+7FricSs5BeH6QEzXhjV+KmQz60LjzVL9z7ZKoC3ShKxrPR4ab5FAmHi3W6ORP0w8TNxjAmGreAwqsLIw8cCi9Ei0KHEzYf8pqLIaJDGZz2Zu9si1pGWmlfxBQv/cX3UWaVr2SUn3zLsQI3woP57+eEld/YuYOWI/qLI+qm4JSX5B0xrdIzm767AiMQU0Lq+W7avEJNxQr04aezlsPX91WeWzgq5dNmttCBP8JcLI+sqC1rTs+yEdFXBNGxxLXkrgV5Bb8tn0p7WV+NZdqb6ZP2ZfAnAfqQEJK5bcWRNBEpcluivNz3qv6Hn5yL7UtFv2FylDMBiqOr9eAAAAAElFTkSuQmCC);
          width: 23px;
          height: 24px;
          background-size: 100%;
          background-position: right;
          display: block;
          position: absolute;
          top: 50%;
          margin-top: -12px;
          left: 180px;
        }
        /deep/ .el-input__icon {
          display: none;
        }
      }
      .button {
        margin-left: 60px;
        //margin-top: 27px;
        //display: flex;
        //justify-content: center;

        /deep/ .el-button {
          // padding: 13px 30px;
          width: 80px;
          height: 45px;
          background: #3eb3f1;
          border-color: #3eb3f1;
          border-radius: 6px;
          font-size: 16px;
          //font-weight: bold;
          line-height: 22px;
        }
      }
    }
  }
  .pick:after {
    position: absolute;
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-image: url("../../assets/images/trend/bg.png");
    background-size: 100% 100%;
    top: 0;
    left: 0;
    z-index: -1;
  }
  /deep/ .el-tabs--card > .el-tabs__header .el-tabs__item {
    border: 0;
    height: 50px;
    line-height: 50px;
    background-color: rgba(77, 93, 117, 0.1);
    font-size: 16px;
    color: #4d5d75;
    margin: 21px 0px 0px;
    border-top: 2px solid #3eb3f1;
  }
  /deep/ .el-tabs--card > .el-tabs__header .is-active {
    background: #3eb3f1;
    color: #ffffff;
    font-weight: bold;
  }
  /deep/ .el-tabs--card > .el-tabs__header,
  /deep/ .el-tabs--card > .el-tabs__header .el-tabs__nav {
    border: 0;
  }
  .tab-cell {
    padding: 0 30px;
    .chart {
      margin-top: 35px;
      display: flex;
      justify-content: center;

      .img {
        width: 1000px;
        height: 500px;
        //background-color: #3A81F3;
      }
      .img1 {
        height: 760px;
      }
      .img2 {
        height: 1300px;
      }
    }
    .table {
      margin-top: 64px;
      //border-bottom: 3px solid #3EB3F1;
      margin-bottom: 130px;
      position: relative;
      /deep/ .el-table td.el-table__cell,
      /deep/ .el-table th.el-table__cell.is-leaf {
        border: 2px solid #ffffff;
      }
      /deep/ .el-table thead {
        font-size: 16px;
        color: #4d5d75;
        line-height: 21px;
      }
      /deep/ .el-table .el-table__cell {
        height: 50px;
        font-size: 16px;
        color: #4d5d75;
        line-height: 21px;
      }
      /deep/
        .el-table--striped
        .el-table__body
        tr.el-table__row--striped
        td.el-table__cell {
        //background:none ;
      }
      ///deep/.el-table .odd-row {
      //  background-color: #FFFFFF;
      //  //background-color: red;
      //}
      ///deep/.el-table .even-row {
      //  //background-color: #F8F8F8;
      //  background-color: rgb(234, 241, 251);
      //}
      .arrow {
        position: absolute;
        width: 60px;
        height: 20px;
        background: #3eb3f1;
        border-radius: 0px 0px 10px 10px;
        bottom: -20px;
        left: 50%;
        margin-left: -30px;
      }
      .arrow:after {
        position: absolute;
        content: "";
        border-right: 8px solid transparent;
        border-left: 8px solid transparent;
        border-top: 9px solid #ffffff;
        top: 6px;
        left: 50%;
        margin-left: -8px;
      }
    }
  }
}
#cooperation-chart1 {
  background-color: #ecedf1;
}

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
