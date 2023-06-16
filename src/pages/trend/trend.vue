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
            <div class="hotspot container-fluid px-4">
              <div>
                <div class="pick">
                  <div class="date">
                    <div class="search-input">
                      Subject area：
                      <el-input v-model="keywords" placeholder="Please enter the content"></el-input>
                    </div>
                    <div class="start-date">
                      StartYear：
                      <el-date-picker
                        class="date-pick"
                        v-model="start"
                        type="year"
                        value-format="yyyy"
                        :picker-options="pickerOptions"
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
                        value-format="yyyy"
                        :picker-options="pickerOptions"
                        placeholder="Year of choice"
                      >
                      </el-date-picker>
                    </div>
                    <div class="button">
                      <el-button type="primary" @click="handleAnalysis">Analysis</el-button>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="point point1">Subject related words</div>
                </div>
                <div class="check">
                  <el-checkbox
                    :indeterminate="isIndeterminate"
                    v-model="checkAll"
                    @change="handleCheckAllChange"
                    class="check-all"
                  >select all
                  </el-checkbox>
                  <el-checkbox-group
                    v-model="checked"
                    @change="handleCheckedChange"
                    class="check-group"
                  >
                    <el-checkbox v-for="item in checkedList" :label="item" :key="item">{{
                        item
                      }}</el-checkbox>
                  </el-checkbox-group>
                  <el-button type="primary" @click="handlereset" class="reset"
                  >Reset</el-button
                  >
                </div>
                <el-row :gutter="20" class="chart-cells">
                  <el-col :span="12">
                    <div class="chart-cell">
                      <div class="chart-title">The publication trend of paper results</div>
                      <div class="chart-img">
                        <div class="img" id="hotspot-chart1"></div>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div class="chart-cell">
                      <div class="chart-title">Citation trend</div>
                      <div class="chart-img">
                        <div class="img" id="hotspot-chart6"></div>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div class="chart-cell">
                      <div class="chart-title">Periodical distribution</div>
                      <div class="chart-img">
                        <div class="img" id="hotspot-chart5"></div>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div class="chart-cell">
                      <div class="chart-title">Distribution of input mechanism</div>
                      <div class="chart-img">
                        <div class="img" id="hotspot-chart4"></div>
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
import cTable from "@/components/table";
import * as echarts from "echarts";

import {
  getHotPaper,
  getHotOrg,
  getHotJournal,
  getAreas,
  getCited
} from "@/request/hotspot";

export default {
  components: {
    cTable
  },
  data() {
    return {
      keywords: "Tissue engineering",
      territory: "",
      start: "",
      end: "",
      checked: [],
      checkedList: [],
      isIndeterminate: true,
      checkAll: false,
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
    this.getCheckLists();
  },
  methods: {
    init() {
      let checked = [...this.checked];
      if (this.keywords && !checked.includes(this.keywords)) {
        checked.unshift(this.keywords);
      }
      this.territory = checked.join(";");
      this.getChart();
    },
    getCheckLists() {
      let params = {
        year: this.start + "-" + this.end,
        territory: this.keywords
      };
      getAreas(params).then(res => {
        let checkList = [];
        // this.checked = [this.keywords]
        res.map(item => {
          checkList.push(item.name);
          if (this.checked.length < 2 && !this.checked.includes(item.name)) {
            this.checked.push(item.name);
          }
        });
        this.checkedList = checkList;
        this.init();
      });
    },
    getChart() {
      let param = {
        year: this.start + "-" + this.end,
        territory: this.territory
      };
      getHotPaper(param).then(res => {
        this.drawChart1(res);
      });
      getHotOrg(param).then(res => {
        this.drawChart4(res);
      });
      getHotJournal(param).then(res => {
        this.drawChart5(res);
      });
      getCited(param).then(res => {
        this.drawChart6(res);
      });
    },
    //Reset
    handlereset() {
      this.checked = []; //选中的数组
      this.checkAll = false; //全选/不全选的按钮
      this.isIndeterminate = false; //全选/不全选的按钮样式变成一开始的模样
      this.init();
    },
    handleAnalysis() {
      this.checked = [];
      this.getCheckLists();
    },
    handleCheckAllChange(val) {
      this.checked = val ? this.checkedList : [];
      this.isIndeterminate = false;
      this.init();
    },
    handleCheckedChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.checkedList.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.checkedList.length;
      this.init();
    },
    setOption(data, type, Axis, chart) {
      function isChinese(temp) {
        var re = /[^\u4E00-\u9FA5]/;
        if (re.test(temp)) return false;
        return true;
      }
      let color = [];
      let charts = [1, 2, 5];
      if (charts.indexOf(chart) > -1) {
        color = [
          "#538AEC",
          "#6CBBC2",
          "#5AA860",
          "#007f80",
          "#dfd7c2",
          "#c0d09d",
          "#81a380",
          "#32788a",
          "#284852",
          "#66b2ff",
          "#00994d",
          "#3399ff"
        ];
      } else {
        color = [
          "#D97458",
          "#E4C477",
          "#DAA67B",
          "#f5eb7a",
          "#e0e7bb",
          "#cccc00",
          "#ffa31a",
          "#ffa64d",
          "#ffff99",
          "#ffccff",
          "#ff80bf",
          "#ff5c33"
        ];
      }
      let series = [];
      let keywords = data.keywords ? data.keywords : data.territorys;
      let seriesData = data.data
        ? data.data
        : data.datalist
        ? data.datalist
        : data.detailed;
      let axis = data.axis ? data.axis : data.xaxis;
      keywords.map((item, index) => {
        let d = seriesData[index];
        if (d.length < axis.length) {
          for (let i = d.length; i < axis.length; i++) {
            d.push("0");
          }
        }
        if (type === "line") {
          series.push({
            name: item,
            type: "line",
            data: d,
            areaStyle: {
              opacity: 0.3
            }
          });
        } else if (type === "bar") {
          series.push({
            name: item,
            type: "bar",
            barGap: 0,
            data: d
          });
        }
      });
      let xAxis = {
        type: "category",
        data: axis
      };
      let yAxis = {
        type: "value"
      };
      if (Axis === "yAxis") {
        xAxis.axisLabel = {
          // rotate: 20,
          // fontSize: 10
          formatter: function(param) {
            if (isChinese(param[0]) && param.length > 9) {
              return param.slice(0, 9) + "...";
            } else if (param.length > 18) {
              return param.slice(0, 18) + "...";
            } else {
              return param;
            }
          }
        };
      }
      let option = {
        grid: {
          bottom: 30,
          top: 75,
          left: Axis === "yAxis" ? 135 : 50
        },
        color: color,
        tooltip: {
          trigger: "axis"
        },

        xAxis: Axis === "yAxis" ? yAxis : xAxis,
        yAxis: Axis === "yAxis" ? xAxis : yAxis,
        legend: {
          data: keywords
        },
        series: series
      };
      return option;
    },
    drawChart1(data) {
      let myChart = new echarts.init(document.getElementById("hotspot-chart1"));
      myChart.setOption(this.setOption(data, "line", "xAxis", 1), true);
    },
    drawChart4(data) {
      let myChart = new echarts.init(document.getElementById("hotspot-chart4"));
      myChart.setOption(this.setOption(data, "bar", "yAxis", 4), true);
    },
    drawChart5(data) {
      let myChart = new echarts.init(document.getElementById("hotspot-chart5"));
      myChart.setOption(this.setOption(data, "bar", "yAxis", 5), true);
    },
    drawChart6(data) {
      let myChart = new echarts.init(document.getElementById("hotspot-chart6"));
      myChart.setOption(this.setOption(data, "line", "xAxis", 6), true);
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

.hotspot {
  background: linear-gradient(
    180deg,
    rgba(221, 234, 255, 0.88) 0%,
    #ffffff 10%
  );

  .pick {
    z-index: 2;
    position: relative;
    padding: 50px 0 41px 0;
    margin-bottom: 20px;
    .title {
      font-size: 40px;
      font-weight: bold;
      font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;

      color: #4d5d75;
      line-height: 52px;
      padding-bottom: 40px;
      text-align: center;
      margin: 0 114px;
    }

    .date {
      margin-top: 28px;
      font-size: 14px;
      font-family: MicrosoftYaHei;
      color: #4d5d75;
      line-height: 19px;
      display: flex;
      margin-left: 40px;

      .start-date,
      .end-date {
        margin-left: 40px;
        .el-input {
          width: 180px;
        }
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
          left: 130px;
        }

        /deep/ .el-input__icon {
          display: none;
        }
      }

      .search-input {
        /deep/ .el-input__inner {
          height: 45px;
          width: 248px;
          border: 1px solid rgba(77, 93, 117, 0.5);
        }

        /deep/ .el-input {
          width: auto;
        }
      }
    }

    .button {
      /deep/ .el-button {
        // padding: 13px 61px;
        margin-left: 40px;
        width: 121px;
        height: 45px;
        background: #3eb3f1;
        border-radius: 6px;
        font-size: 18px;
        font-weight: bold;
        color: #ffffff;
      }
    }
  }

  .check-group {
    display: inline;
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

  .point {
    padding-left: 20px;
    margin-left: 30px;
    // padding-top: 19px;
  }
  .point1 {
    border-top: 2px solid #3eb3f1;
  }

  .point:after {
    left: 0px;
    top: 7px;
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

    .chart-cell:hover {
      background: #f8f8f8;

      .chart-title {
        color: #3eb3f1;
      }
    }
  }

  .check {
    justify-content: flex-start;
    padding: 20px 48px;
    // border-bottom: 1px solid rgba(77, 93, 117, 0.15);
    background: #f8f8f8;
    position: relative;

    .check-all {
      margin-right: 30px;
    }

    /deep/ .el-checkbox {
      padding: 5px 0;
    }

    /deep/ .el-checkbox__inner {
      width: 20px;
      height: 20px;
      border-radius: 3px;
      border: 1px solid #3eb3f1;
    }

    /deep/ .el-checkbox__input.is-checked .el-checkbox__inner,
    /deep/ .el-checkbox__input.is-indeterminate .el-checkbox__inner {
      background: #3eb3f1;
    }

    /deep/ .el-checkbox__label {
      font-size: 16px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #4d5d75;
      line-height: 22px;
    }

    /deep/ .el-checkbox__inner::after {
      width: 4px;
      height: 8px;
      top: 2px;
      left: 6px;
      border: 2px solid #fff;
      border-top: 0;
      border-left: 0;
    }

    /deep/ .el-checkbox__input.is-indeterminate .el-checkbox__inner::before {
      top: 7px;
      height: 4px;
    }
    .reset {
      position: absolute;
      right: 20px;
      bottom: 40px;
    }
  }
}

.table {
  margin-top: 26px !important;
  width: 1200px;
  /deep/.el-table .el-table__cell {
    padding: 0;
  }
}
/deep/.el-table__header {
  width: 1200px !important;
}
/deep/.el-table__body {
  width: 1200px !important;
}
</style>
