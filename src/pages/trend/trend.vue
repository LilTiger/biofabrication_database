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
                <a class="nav-link" href="#">Materials</a>
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
            <div class="trend container-fluid px-4">
              <div>
                <div class="pick">
                  <div class="flex-center date">
                    <div>
                      StartYear：
                      <el-date-picker
                        class="date-pick"
                        v-model="start"
                        type="year"
                        :picker-options="pickerOptions"
                        value-format="yyyy"
                        placeholder="Year of choice"
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
                        placeholder="选择年"
                      >
                      </el-date-picker>
                    </div>
                    <div class="button">
                      <el-button type="primary" @click="handleAnalysis">Search</el-button>
                    </div>
                  </div>
                </div>
                <el-row :gutter="20" class="chart-cells">
                  <el-col :span="12">
                    <div class="chart-cell">
                      <div class="chart-title">Science and technology research topic distribution</div>
                      <div class="chart-img chart-img2">
                        <div class="img" id="trend-chart7" style="margin: 0 auto;width: auto;">
                          <!--                <svg width="514" height="263"></svg>-->
                        </div>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div class="chart-cell">
                      <div class="chart-title">Emerging hot research topics</div>
                      <div class="chart-img chart-img2">
                        <div class="img" id="trend-chart8"></div>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div class="chart-cell">
                      <div class="chart-title">Network of institutional partnerships</div>
                      <div class="chart-img">
                        <div class="img" id="trend-chart3"></div>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div class="chart-cell">
                      <div class="chart-title">Regional distribution of scientific research cooperation</div>
                      <div class="chart-img">
                        <div class="img" id="trend-chart4"></div>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div class="chart-cell">
                      <div class="chart-title">Distribution of high-yield institutions in science and technology</div>
                      <div class="chart-img">
                        <div class="img" id="trend-chart6"></div>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div class="chart-cell">
                      <div class="chart-title">TOP10 international published journals</div>
                      <div class="chart-img">
                        <div class="img" id="trend-chart10"></div>
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
import World from "@/assets/js/map/json/world.json";
import { mapZHName } from "@/assets/js/countryZH";
import * as d3 from "d3-hierarchy";
import Highcharts from "highcharts/highstock";
import HighchartsMore from "highcharts/highcharts-more";
import * as Exporting from "highcharts/modules/exporting";
import * as Oldie from "highcharts/modules/oldie";

HighchartsMore(Highcharts);
Exporting(Highcharts);
Oldie(Highcharts);

import {
  getTrendCity,
  getTrendJournal,
  getTrendOrg,
  getTrendTopics,
  getTrendNewTopics,
  getOrgCooperation
} from "@/request/trend";

export default {
  data() {
    return {
      start: "",
      end: "",
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
  },
  methods: {
    init() {
      let year = this.start + "-" + this.end;

      getOrgCooperation({ year }).then(res => {
        this.drawChart12(res);
      });
      getTrendCity({ year }).then(res => {
        this.drawChart4(res);
      });
      getTrendOrg({ year }).then(res => {
        this.drawChart6(res);
      });
      getTrendTopics({ year }).then(res => {
        this.drawChart11(res);
      });
      // // 接口还没好
      getTrendNewTopics({ year }).then(res => {
        this.drawChart8(res);
      });
      getTrendJournal({ year }).then(res => {
        this.drawChart10(res);
      });
    },
    handleAnalysis() {
      let start = this.start;
      let end = this.end;
      if (start > end) {
        let date = start;
        this.start = end;
        this.end = date;
      }
      this.init();
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
    drawChart3(data) {
      let country = this.setCountry(data);
      let myChart = new echarts.init(document.getElementById("trend-chart3"));
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
          min: 0,
          max: 10000,
          inRange: {
            color: [
              "#eaf0fb",
              "#5686dc",
              // '#2A63CA',
              "#16346a"
            ]
          },
          text: ["Max", "Min"],
          calculable: true,
          itemWidth: 8,
          itemHeight: 50,
          textStyle: {
            fontSize: 9
          }
        },
        series: [
          {
            name: "合作国家",
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
                areaColor: "#eaf0fb"
              }
            },
            data: country,
            nameMap: mapZHName
          }
        ]
      };
      myChart.setOption(option);
    },
    drawChart4(trendLine) {
      let myChart = new echarts.init(document.getElementById("trend-chart4"));
      let option = {
        grid: {
          left: 70,
          bottom: 80,
          top: 10,
          right: 30
        },
        tooltip: {
          trigger: "axis"
        },
        xAxis: {
          type: "category",
          data: trendLine.xaxis,
          axisLabel: {
            rotate: "45",
            fontSize: 10
          }
        },
        dataZoom: [
          {
            type: "inside",
            start: 0,
            end: 20,
            height: 10
          },
          {
            show: true,
            type: "slider",
            start: 0,
            end: 20,
            height: 10
          }
        ],
        yAxis: {
          type: "value"
        },
        series: {
          type: "bar",
          label: {
            show: true,
            position: "inside",
            rotate: 90,
            color: "#ffffff"
          },
          itemStyle: {
            normal: {
              color: "#7FB3ED"
            }
          },
          data: trendLine.data
        }
      };
      myChart.setOption(option);
    },
    drawChart6(data) {
      if (data.length < 1) return;
      let myChart = new echarts.init(document.getElementById("trend-chart6"));
      let point = [];
      let max = data[0].count;

      data.map(res => {
        point.push([
          Math.random() * 100,
          Math.random() * 100,
          parseInt(res.count),
          res.name
        ]);
      });
      let option = {
        tooltip: {
          formatter: function() {
            let arr = arguments[0].value;
            return arr[3] + " 投入 " + arr[2];
          }
        },

        grid: {
          left: "8%",
          top: "10%"
        },
        xAxis: {
          show: false
        },
        yAxis: {
          show: false,
          scale: true
        },
        dataZoom: [
          {
            type: "inside",
            start: 0,
            end: 10,
            height: 20
          },
          {
            show: true,
            type: "slider",
            start: 0,
            end: 10,
            height: 20
          }
        ],
        series: [
          {
            data: point,
            label: {
              show: true,
              position: "top",
              color: "#000",
              formatter: function(params) {
                return params.value[3] + "投入" + params.value[2];
              }
            },
            type: "scatter",
            symbolSize: function(data) {
              // return 50 - (1 - data[2] / max) * 10
              // return Math.log2(data[2]).toFixed(5)*2;
              return Math.pow(data[2], 1 / 3) / 1.2;
            },
            emphasis: {
              focus: "series",
              label: {
                show: true,
                formatter: function(param) {
                  return param.data[3];
                },
                position: "top"
              }
            },
            itemStyle: {
              shadowBlur: 10,
              shadowColor: "rgba(120, 36, 50, 0.5)",
              shadowOffsetY: 5,
              color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                {
                  offset: 0,
                  color: "rgb(251, 118, 123)"
                },
                {
                  offset: 1,
                  color: "rgb(204, 46, 72)"
                }
              ])
            }
          }
        ]
      };
      myChart.setOption(option);
    },
    drawChart7(trendLine) {
      if (trendLine.length < 1) return;
      const arr = [];
      const key = "全部";
      let index = 1;
      let count = 0;
      trendLine.forEach(item => {
        const arrItem = {
          id: `${key}.${item.name}`,
          value: item.count,
          depth: 1,
          index: index
        };
        index += 1;
        arr.push(arrItem);
        count += Number(item.count);
        item.list.forEach(listItem => {
          const arrItem = {
            id: `${key}.${item.name}.${listItem.name}`,
            value: listItem.count,
            depth: 2,
            index: index
          };
          index += 1;
          arr.push(arrItem);
          count += Number(listItem.count);
        });
      });

      arr.unshift({ id: key, value: count, depth: 0, index: 0 });

      let myChart = new echarts.init(document.getElementById("trend-chart7"));

      function initChart(seriesData, maxDepth) {
        var displayRoot = stratify();

        function stratify() {
          return d3
            .stratify()
            .parentId(function(d) {
              return d.id.substring(0, d.id.lastIndexOf("."));
            })(seriesData)
            .sum(function(d) {
              return d.value || 0;
            })
            .sort(function(a, b) {
              return b.value - a.value;
            });
        }

        function overallLayout(params, api) {
          var context = params.context;
          d3
            .pack()
            .size([api.getWidth() - 2, api.getHeight() - 2])
            .padding(3)(displayRoot);
          context.nodes = {};
          displayRoot.descendants().forEach(function(node, index) {
            context.nodes[node.id] = node;
          });
        }

        function renderItem(params, api) {
          var context = params.context;
          // Only do that layout once in each time `setOption` called.
          if (!context.layout) {
            context.layout = true;
            overallLayout(params, api);
          }
          var nodePath = api.value("id");
          var node = context.nodes[nodePath];
          if (!node) {
            // Reder nothing.
            return;
          }
          var isLeaf = !node.children || !node.children.length;
          var focus = new Uint32Array(
            node.descendants().map(function(node) {
              return node.data.index;
            })
          );
          var nodeName = isLeaf
            ? nodePath
                .slice(nodePath.lastIndexOf(".") + 1)
                .split(/(?=[A-Z][^A-Z])/g)
                .join("\n")
            : "";
          var z2 = api.value("depth") * 2;
          return {
            type: "circle",
            focus: focus,
            shape: {
              cx: node.x,
              cy: node.y,
              r: node.r
            },
            transition: ["shape"],
            z2: z2,
            textContent: {
              type: "text",
              style: {
                // transition: isLeaf ? 'fontSize' : null,
                text: nodeName,
                fontFamily: "Arial",
                width: node.r * 1.3,
                overflow: "truncate",
                fontSize: node.r / 3
              },
              emphasis: {
                style: {
                  overflow: null,
                  fontSize: Math.max(node.r / 3, 12)
                }
              }
            },
            textConfig: {
              position: "inside"
            },
            style: {
              fill: api.visual("color")
            },
            emphasis: {
              style: {
                fontFamily: "Arial",
                fontSize: 12,
                shadowBlur: 20,
                shadowOffsetX: 3,
                shadowOffsetY: 5,
                shadowColor: "rgba(0,0,0,0.3)"
              }
            }
          };
        }
        var option = {
          dataset: {
            source: seriesData
          },
          tooltip: {},
          visualMap: [
            {
              show: false,
              min: 0,
              max: maxDepth,
              dimension: "depth",
              inRange: {
                color: ["#fff", "rgb(221, 255, 255)", "rgb(160, 210, 242)"]
              }
            }
          ],
          hoverLayerThreshold: Infinity,
          series: {
            type: "custom",
            renderItem: renderItem,
            progressive: 0,
            coordinateSystem: "none",
            encode: {
              tooltip: "value",
              itemName: "id"
            }
          }
        };
        myChart.setOption(option);
        myChart.on("click", { seriesIndex: 0 }, function(params) {
          drillDown(params.data.id);
        });

        function drillDown(targetNodeId) {
          displayRoot = stratify();
          if (targetNodeId != null) {
            displayRoot = displayRoot.descendants().find(function(node) {
              return node.data.id === targetNodeId;
            });
          }
          // A trick to prevent d3-hierarchy from visiting parents in this algorithm.
          displayRoot.parent = null;
          myChart.setOption({
            dataset: {
              source: seriesData
            }
          });
        }

        // Reset: click on the blank area.
        myChart.getZr().on("click", function(event) {
          if (!event.target) {
            drillDown();
          }
        });
      }

      initChart(arr, 3);
    },
    drawChart8(data) {
      let myChart = new echarts.init(document.getElementById("trend-chart8"));
      let point = [];
      data.map(item => {
        point.push([
          Math.random().toFixed(3) * 100,
          Math.random().toFixed(3) * 100,
          parseInt(item.count),
          item.name
        ]);
      });

      let option = {
        tooltip: {
          formatter: function() {
            let arr = arguments[0].value;
            return arr[3] + " ： " + arr[2];
          }
        },
        grid: {
          left: "8%",
          top: "10%"
        },
        xAxis: {
          show: false
        },
        yAxis: {
          show: false,
          scale: true
        },
        series: [
          {
            data: point,
            label: {
              show: true,
              position: "inside",
              color: "#000",
              fontSize: 9,
              formatter: function(params) {
                return params.value[3];
              }
            },
            type: "scatter",
            symbolSize: function(data) {
              // return Math.sqrt(data[2]) / 5e2
              return data[2] / 1.2;
            },
            emphasis: {
              focus: "series",
              label: {
                show: true,
                formatter: function(param) {
                  return param.data[3];
                },
                position: "top"
              }
            },
            itemStyle: {
              // shadowBlur: 10,
              // shadowColor: 'rgba(233, 242, 251, 0.5)',
              // shadowOffsetY: 5,
              borderWidth: 2,
              borderColor: "rgb(126, 178, 224)",
              color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [
                {
                  offset: 0,
                  color: "rgb(234, 243, 250)"
                },
                {
                  offset: 1,
                  color: "rgb(126, 178, 224)"
                }
              ])
            }
          }
        ]
      };
      myChart.setOption(option);
    },
    drawChart10(trendLine) {
      let myChart = new echarts.init(document.getElementById("trend-chart10"));
      let xaxis = trendLine.xaxis.reverse();

      let option = {
        grid: {
          left: 130,
          bottom: 30,
          top: 10,
          right: 30
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: "category",
          axisLabel: {
            // fontSize:9,
            // rotate: 20,
            // //   // position:'inside',
            formatter: function(param) {
              if (param.length > 18) {
                return param.substring(0, 18) + "...";
              } else {
                return param;
              }
            }
          },
          // show: false,
          data: xaxis
        },
        series: [
          {
            label: {
              show: true,
              position: "right",
              color: "#86888B",
              formatter: function(param) {
                return param.value;
              }
            },
            type: "bar",
            itemStyle: {
              normal: {
                color: "#5470C6"
              }
            },
            data: trendLine.data.reverse()
          }
        ]
      };
      myChart.setOption(option);
    },
    drawChart11(data) {
      let series = [];
      data.forEach(item => {
        let list = [];
        item.list.forEach(it => {
          list.push({
            name: it.name,
            value: parseInt(it.count)
          });
        });
        series.push({
          name: item.name,
          value: parseInt(item.count),
          data: list
        });
      });
      Highcharts.chart("trend-chart7", {
        chart: {
          type: "packedbubble",
          height: 350,
          width: 500
        },
        tooltip: {
          useHTML: true,
          pointFormat: "<b>{point.name}:</b> {point.y}"
        },
        title: {
          text: null
        },
        exporting: {
          enabled: false
        },
        legend: {
          enabled: false
        },
        credits: {
          enabled: false
        },
        plotOptions: {
          packedbubble: {
            minSize: "10%",
            maxSize: "120%",
            zMin: 0,
            zMax: 8000,
            layoutAlgorithm: {
              gravitationalConstant: 0.05,
              splitSeries: true,
              seriesInteraction: false,
              dragBetweenSeries: true,
              parentNodeLimit: true
            },
            dataLabels: {
              enabled: true,
              allowOverlap: true,
              format: "{point.name}",
              style: {
                color: "black",
                textOutline: "none",
                fontWeight: "normal",
                fontSize: 9
              }
            }
          }
        },
        series: series
      });
    },
    drawChart12(data) {
      let link = data.links;
      let node = data.nodes;
      let categories = node;
      let links = [];
      link.forEach(item => {
        links.push({
          source: item.node1,
          target: item.node2,
          value: item.value
        });
      });
      let nodes = [];
      node.forEach(item => {
        nodes.push({
          id: item.name,
          name: item.name,
          symbolSize: Math.pow(item.count, 1 / 3) / 1.5,
          value: item.count,
          category: item.name,
          label: {
            show: true,
            fontSize: 9
          }
        });
      });
      let myChart = new echarts.init(document.getElementById("trend-chart3"));
      let option = {
        // grid: {
        //   bottom: '40%',
        //   top: '40%',
        // },40
        tooltip: {},
        // legend: [
        //   {
        //     data: categories.map(function (a) {
        //       return a.name;
        //     })
        //   }
        // ],
        animationDurationUpdate: 1500,
        animationEasingUpdate: "quinticInOut",
        series: [
          {
            name: "机构合作关系网络",
            type: "graph",
            layout: "circular",
            circular: {
              rotateLabel: true
            },
            data: nodes,
            links: links,
            categories: categories,
            roam: true,
            zoom: 0.55,
            label: {
              position: "right",
              formatter: "{b}"
            },
            lineStyle: {
              color: "source",
              curveness: 0.3
            }
          }
        ]
      };
      myChart.setOption(option);
    },
    routePush(path){
      this.$router.push({ path:path })
    },
    sidebarToggle(){
      document.body.classList.toggle('sb-sidenav-toggled');
      localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
    }
  }
};
</script>

<style scoped lang="less">
@import "../../assets/css/styles.css";
@import "../../assets/css/bootstrap.min.css";
@import '../../assets/global';

.trend {
  background: linear-gradient(
    180deg,
    rgba(221, 234, 255, 0.88) 0%,
    #ffffff 10%
  );

  .pick {
    padding: 51px 154px 78px;
    // border-bottom: 2px solid #3eb3f1;
    position: relative;
    z-index: 2;

    &:after {
      z-index: -1;
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url("../../assets/images/trend/bg.png");
      background-size: 100% 100%;
    }

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
      line-height: 21px;
      font-family: MicrosoftYaHei;

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

  .chart-cells {
    padding-top: 20px;
    //padding-bottom: 205px;

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
        margin-top: 40px;
        display: flex;
        justify-content: center;
        background-color: #fff;

        .img {
          width: 100%;
          height: 350px;
          //background: #0D5370;
        }
      }
      .chart-img2 {
        margin-top: 20px;
        .img {
          width: 100%;
          height: 350px;
        }
      }
    }

    .chart-cell:hover {
      background: #f8f8f8;

      .chart-title {
        color: #3eb3f1;
      }
    }
  }
}

#trend-chart3 {
  //background-color: #ECEDF1;
  //height: 283px;
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
