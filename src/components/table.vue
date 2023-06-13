<template>
  <div class="table" :class="{ 'border-bottom': isMore }">
    <el-table
      fit
      highlight-current-row
      :data="data"
      :row-class-name="tableRowClassName"
      style="width: 100%"
    >
      <el-table-column
        v-if="showIndex"
        type="index"
        align="center"
        label="-"
        width="60"
      >
      </el-table-column>
      <el-table-column
        v-for="item in tableType"
        :key="item.label"
        :prop="item.prop"
        :label="item.label"
        :width="item.width ? item.width : ''"
        align="center"
      >
        <template slot-scope="scope">
          <div class="ellipsis">
            <span v-if="item.prop === 'organization'">
              <span
                class="cursor"
                v-for="(it, i) in scope.row.organization"
                @click="companyClick(it.org_id)"
              >
                <span v-if="i > 0">，</span>
                {{ it.org_name }}
              </span>
            </span>
            <span
              class="cursor"
              v-else-if="item.prop === 'zh_title'"
              @click="paperClick(scope.row.id)"
              >{{ scope.row[item.prop] }}</span
            >
            <span v-else-if="item.prop === 'journal'"
              ><span v-if="scope.row[item.prop]"
                >《{{ scope.row[item.prop] }}》</span
              ></span
            >
            <span v-else>{{ scope.row[item.prop] }}</span>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <div
      class="arrow"
      :class="{ transform: toggleMore }"
      @click="getMore"
      v-if="isMore"
    ></div>
  </div>
</template>

<script>
export default {
  props: ["tableData", "tableType", "isMore", "showIndex", "type"],
  data() {
    return {
      sourceData: [],
      data: [],
      toggleMore: false
    };
  },
  mounted() {
    this.sourceData = this.tableData;
    this.data = this.isMore ? this.tableData.slice(0, 10) : this.tableData;
  },
  watch: {
    tableData(v) {
      this.sourceData = v;
      this.data = this.isMore ? v.slice(0, 10) : v;
    }
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 === 1) {
        return "odd-row";
      } else {
        return "even-row";
      }
    },
    getMore() {
      this.data = !this.toggleMore
        ? this.sourceData
        : this.sourceData.slice(0, 10);
      this.toggleMore = !this.toggleMore;
    },
    paperClick(id) {
      if (id) {
        let path;
        if (this.type === "patent") {
          path = "/patentDetail?id=" + id;
        } else if (this.type === "paper") {
          path = "/paperDetail?id=" + id;
        }
        const routeData = this.$router.resolve({
          path: path
        });
        window.open(routeData.href, "_blank");
      }
    },
    companyClick(id) {
      if (id) {
        const routeData = this.$router.resolve({
          path: "/companyDetail?id=" + id
        });
        window.open(routeData.href, "_blank");
      }
    }
  }
};
</script>

<style scoped lang="less">
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.cursor {
  cursor: pointer;
}

.border-bottom {
  border-bottom: 3px solid #3eb3f1;
}

.table {
  margin-top: 40px;
  //padding-bottom: 100px;
  position: relative;

  /deep/ .el-table td.el-table__cell,
  /deep/ .el-table th.el-table__cell.is-leaf {
    border: 2px solid #ffffff;
  }

  /deep/ .el-table thead {
    font-size: 16px;
    color: #4d5d75;
    font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
    font-weight: bold;
    line-height: 21px;
  }

  /deep/ .el-table .el-table__cell {
    height: 50px;
    font-size: 14px;
    color: #4d5d75;
    line-height: 21px;
  }
  /deep/.tab-cell .table[data-v-d3377eda] {
    margin-top: 40px;
    margin-bottom: 130px;
    position: relative;
  }

  /deep/
    .el-table--striped
    .el-table__body
    tr.el-table__row--striped
    td.el-table__cell {
    //background:none ;
  }

  /deep/ .el-table .odd-row {
    background-color: #ffffff;
    //background-color: red;
  }

  /deep/ .el-table .even-row {
    background-color: #f7faff;
    // background-color: rgba(62, 179, 241, 0.05);
  }

  .arrow {
    position: absolute;
    width: 60px;
    height: 20px;
    background: #3eb3f1;
    border-radius: 0px 0px 10px 10px;
    bottom: -20px;
    left: 50%;
    margin-left: -30px;
    cursor: pointer;

    &:after {
      position: absolute;
      content: "";
      border-right: 8px solid transparent;
      border-left: 8px solid transparent;
      border-top: 9px solid #ffffff;
      top: 6px;
      left: 50%;
      margin-left: -8px;
    }

    &.transform {
      &:after {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
