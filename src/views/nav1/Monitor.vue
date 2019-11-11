<template>
  <div style="height:100%;width:100%">
    <el-row :gutter="10" type="flex" class="row-bg el-row-two" justify="space-between">
      <el-col :span="20">
        <div class="grid-content">
          <div style="height:100%;width:100%">
            <div class="grid-content">
              <el-col :span="8">
                <div class="grid-content">
                  <windrose1 :speed="speed1" :dire="direction1" :title="title1"></windrose1>
                  <el-form :label-position="label_position" label-width="80px" :model="form">
                    <el-form-item label="风速2A">
                      <el-input v-model="awos1.windSpeed1"></el-input>
                    </el-form-item>
                    <el-form-item label="风向2A">
                      <el-input v-model="awos1.windDirection1" autosize></el-input>
                    </el-form-item>
                    <el-form-item label="风速10A">
                      <el-input v-model="awos1.windSpeed2"></el-input>
                    </el-form-item>
                    <el-form-item label="风向10A">
                      <el-input v-model="awos1.windDirection2" autosize></el-input>
                    </el-form-item>
                    <el-form-item label="RVR">
                      <el-input v-model="awos1.rvr" autosize></el-input>
                    </el-form-item>
                    <el-form-item label="温度">
                      <el-input v-model="awos1.temp" autosize></el-input>
                    </el-form-item>
                    <el-form-item label="云高">
                      <el-input v-model="awos1.cloud" autosize></el-input>
                    </el-form-item>
                  </el-form>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content">
                  <windrose1 :speed="speed2" :dire="direction2" :title="title2"></windrose1>
                  <el-form :label-position="label_position" label-width="80px" :model="form">
                    <el-form-item label="风速2A">
                      <el-input v-model="awos2.windSpeed1"></el-input>
                    </el-form-item>
                    <el-form-item label="风向2A">
                      <el-input v-model="awos2.windDirection1" autosize></el-input>
                    </el-form-item>
                    <el-form-item label="风速10A">
                      <el-input v-model="awos2.windSpeed2"></el-input>
                    </el-form-item>
                    <el-form-item label="风向10A">
                      <el-input v-model="awos2.windDirection2" autosize></el-input>
                    </el-form-item>
                    <el-form-item label="RVR">
                      <el-input v-model="awos2.rvr" autosize></el-input>
                    </el-form-item>
                    <el-form-item label="温度">
                      <el-input v-model="awos2.temp" autosize></el-input>
                    </el-form-item>
                    <el-form-item label="云高">
                      <el-input v-model="awos2.cloud" autosize></el-input>
                    </el-form-item>
                  </el-form>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content">
                  <windrose1 :speed="speed3" :dire="direction3" :title="title3"></windrose1>
                  <el-form :label-position="label_position" label-width="80px" :model="form">
                    <el-form-item label="风速2A">
                      <el-input v-model="awos3.windSpeed1"></el-input>
                    </el-form-item>
                    <el-form-item label="风向2A">
                      <el-input v-model="awos3.windDirection1" autosize></el-input>
                    </el-form-item>
                    <el-form-item label="风速10A">
                      <el-input v-model="awos3.windSpeed2"></el-input>
                    </el-form-item>
                    <el-form-item label="风向10A">
                      <el-input v-model="awos3.windDirection2" autosize></el-input>
                    </el-form-item>
                    <el-form-item label="RVR">
                      <el-input v-model="awos3.rvr" autosize></el-input>
                    </el-form-item>
                    <el-form-item label="温度">
                      <el-input v-model="awos3.temp" autosize></el-input>
                    </el-form-item>
                    <el-form-item label="云高">
                      <el-input v-model="awos3.cloud" autosize></el-input>
                    </el-form-item>
                  </el-form>
                </div>
              </el-col>
            </div>
            <div class="grid-content"></div>
            <div class="grid-content"></div>
            <div class="grid-content"></div>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content">
          <!--工具条-->
          <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
            <el-form :inline="true" :model="filters">
              <!-- <el-form-item :span="20">
                <el-input v-model="filters.name" placeholder="搜索"></el-input>
              </el-form-item>-->
              <el-form-item>
                <el-button size="small" class="button" v-on:click="updateRemind(1)">24小时后提醒</el-button>
              </el-form-item>
              <el-form-item>
                <el-button size="small" class="button" @click="updateRemind(2)">2小时后提醒</el-button>
              </el-form-item>
              <el-form-item>
                <el-button size="small" class="button" @click="updateRemind(3)">4小时后提醒</el-button>
              </el-form-item>
              <el-form-item>
                <el-button size="small" class="button" @click="updateRemind(4)">回复提醒</el-button>
              </el-form-item>
            </el-form>
          </el-col>

          <!--列表-->
          <el-table
            :data="warning"
            height="700"
            v-loading="listLoading"
            style="width: 100% height: 90%;"
            :row-class-name="tableRowClassName"
            @selection-change="selsChange"
          >
            <!--            stripe-->
            <el-table-column type="selection" width="55"></el-table-column>
            <!--            <el-table-column type="index" width="60"></el-table-column>-->
            <el-table-column prop="createOn" label="时间"></el-table-column>
            <el-table-column prop="categortype" label="告警类别"></el-table-column>
            <el-table-column prop="content" label="告警内容"></el-table-column>
            <el-table-column prop="changeOn" label="再次提醒时间"></el-table-column>
          </el-table>
          <el-col :span="24" class="toolbar">
            <el-pagination
              layout="prev, pager, next"
              @current-change="handleCurrentChange"
              :page-size="20"
              :total="total"
              style="float:right;"
            ></el-pagination>
          </el-col>
        </div>
      </el-col>
    </el-row>
    <audio id="audio" src="./static/error.mp3"></audio>
    <label for="audio">测试警报声：</label>
    <p></p>
    <audio controls>
      <source src="./static/error.mp3" type="audio/mp3" />
    </audio>
  </div>
</template>

<script>
import { updateRemind } from "../../api/api";
import { deleteRemind } from "../../api/api";
import { getAWOS1 } from "../../api/api";
import { getAWOSWarning } from "../../api/api";
import moment from "moment";
import windrose1 from "../../components/windrose1";
import windrose3 from "../../components/windrose3";
import windrose4 from "../../components/windrose4";
import windrose from "../../components/windrose";
import lodash from "lodash";

export default {
  data() {
    return {
      testdata: [],
      label_position: "left",
      filters: {
        name: ""
      },
      title1: "18R",
      title2: "MID",
      title3: "36L",
      warning: [],
      total: 0,
      page: 1,
      listLoading: false,
      sels: [], //列表选中列
      awos1: {
        windSpeed1: "",
        windSpeed2: 0,
        windDirection1: "",
        windDirection2: 0,
        rvr: "",
        temp: "",
        cloud: "",
        zdz: ""
      },
      awos3: {
        windSpeed1: "",
        windSpeed2: "",
        windDirection1: "",
        windDirection2: "",
        rvr: "",
        temp: "",
        cloud: "",
        zdz: ""
      },
      awos2: {
        windSpeed1: "",
        windSpeed2: "",
        windDirection1: "",
        windDirection2: "",
        rvr: "",
        temp: "",
        cloud: "",
        zdz: ""
      },
      form: {
        windSpeed1: 1,
        windDirection1: 2,
        windSpeed2: 1,
        windDirection2: 2,
        windSpeed3: 1,
        windDirection3: 2
      },
      speed1: 0,
      direction1: 0,
      speed2: 0,
      direction2: 0,
      speed3: 0,
      direction3: 0,
      editFormVisible: false, //编辑界面是否显示
      editLoading: false
    };
  },
  components: {
    windrose1,
    windrose,
    windrose3,
    windrose4
  },
  methods: {
    //获取数据列表
    async getFormData() {
      let para = {
        page: this.page,
        name: this.filters.name
      };
      var res = await getAWOS1(para);
      console.log(res);
      // getAWOS1(para).then(res => {
      res.data.AWOS1[0].forEach((awos, index) => {
        switch (index) {
          case 15:
            this.awos1.windSpeed1 = awos;
            break;
          case 17:
            this.awos1.windSpeed2 = awos;
            this.speed1 = this.awos1.windSpeed2 == null ? 0 : awos;
            break;
          case 16:
            this.awos1.windDirection1 = Math.round(awos / 10) * 10;
            break;
          case 18:
            this.awos1.windDirection2 = this.awos1.windDirection1 =
              Math.round(awos / 10) * 10;
            this.direction1 =
              this.awos1.windDirection2 == null ? 0 : this.awos1.windDirection2;
            break;
          case 11:
            this.awos1.rvr = awos;
            break;
          case 0:
            // this.awos1.zdz = awos;
            break;
          case 27:
            if (awos == null || awos == 0) {
              this.awos1.cloud = "/";
            } else {
              this.awos1.cloud = awos;
            }
            break;
          case 23:
            if (awos == "" || awos == 0) {
              this.awos1.temp = "/";
            } else {
              this.awos1.temp = awos;
            }
            break;
          //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          case 33:
            if (awos == null || awos == 0) {
              this.awos2.windSpeed1 = "/";
            } else {
              this.awos2.windSpeed1 = awos;
            }
            break;
          case 35:
            if (awos == null || awos == 0) {
              this.awos2.windSpeed2 = "/";
              this.speed2 = 0;
            } else {
              this.awos2.windSpeed2 = awos;
              this.speed2 = awos;
            }
            break;
          case 34:
            if (awos == null || awos == 0) {
              this.awos2.windDirection1 = "/";
              this.direction2 = 0;
            } else {
              this.awos2.windDirection1 = this.awos1.windDirection1 =
                Math.round(awos / 10) * 10;
              this.direction2 = this.awos2.windDirection1;
            }
            break;
          case 36:
            if (awos == null || awos == 0) {
              this.awos2.windDirection2 = "/";
            } else {
              this.awos2.windDirection2 = this.awos1.windDirection1 =
                Math.round(awos / 10) * 10;
            }
            break;
          case 29:
            if (awos == null || awos == 0) {
              this.awos2.rvr = "/";
            } else {
              this.awos2.rvr = awos;
            }
            break;
          case 18:
          // this.awos2.zdz = awos;
          // break;
          case 43:
            if (awos == null || awos == 0) {
              this.awos2.cloud = "/";
            } else {
              this.awos2.cloud = awos;
            }
            break;
          case 40:
            if (awos == null || awos == 0) {
              this.awos2.temp = "/";
            } else {
              this.awos2.temp = awos;
            }
            break;
          ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          case 49:
            if (awos == null || awos == 0) {
              this.awos3.windSpeed1 = "/";
            } else {
              this.awos3.windSpeed1 = awos;
            }
            break;
          case 51:
            if (awos == null || awos == 0) {
              this.awos3.windSpeed2 = "/";
              this.speed3 = 0;
            } else {
              this.awos3.windSpeed2 = awos;
              this.speed3 = this.awos3.windSpeed2;
            }
            break;
          case 50:
            if (awos == null || awos == 0) {
              this.awos3.windDirection1 = "/";
              this.direction3 = 0;
            } else {
              this.awos3.windDirection1 = this.awos1.windDirection1 =
                Math.round(awos / 10) * 10;
              this.direction3 = this.awos3.windDirection1;
            }
            break;
          case 52:
            if (awos == null || awos == 0) {
              this.awos3.windDirection2 = "/";
            } else {
              this.awos3.windDirection2 = this.awos1.windDirection1 =
                Math.round(awos / 10) * 10;
            }
            break;
          case 45:
            if (awos == null || awos == 0) {
              this.awos3.rvr = "/";
            } else {
              this.awos3.rvr = awos;
            }
            break;
          case 18:
          // this.awos3.zdz = awos;
          // break;
          case 59:
            if (awos == null || awos == 0) {
              this.awos3.cloud = "/";
            } else {
              this.awos3.cloud = awos;
            }
            break;
          case 56:
            if (awos == null || awos == 0) {
              this.awos3.temp = "/";
            } else {
              this.awos3.temp = awos;
            }
            break;
          default:
            break;
        }
      });
    },
    getForm() {
      this.getFormData();

      window.setInterval(() => {
        setTimeout(this.getFormData(), 0);
      }, 120000);
    },
    getTableList() {
      this.getMessage();
      window.setInterval(() => {
        setTimeout(this.getMessage(), 0);
      }, 120000);
    },
    getMessage() {
      let para = {
        page: this.page,
        name: this.filters.name
      };
      this.listLoading = true;
      const that = this;
      getAWOSWarning(para).then(res => {
        if (res.data) {
          const data = res.data;
          const AWOSwarnings = [];
          that.warning = data;

          data.forEach(data => {
            if ((data.color == "red")) {
              this.onCheckWarning();
            }
          });
        }
      });

      this.listLoading = false;
    },
    async updateRemind(para) {
      var ids = this.sels.map(item => item.category);
      let hours = 0;
      switch (para) {
        case 1:
          hours = 24;
          break;
        case 2:
          hours = 2;
          break;
        case 3:
          hours = 4;
          break;
        case 4:
          break;
        default:
          break;
      }
      let postpone2hours = moment()
        .add(hours, "hours")
        .format("YYYY-MM-DD HH:mm"); //当前时间的前24小时
      ids = _.uniq(ids);
      for (let index = 0; index < ids.length; index++) {
        const id = ids[index];
        if (para == 4) {
          const callback1 = await deleteRemind(id);
          this.getMessage();
        } else {
          await updateRemind(id, { updatetime: postpone2hours, type: hours });
          this.getMessage();
        }
      }
    },
    handleCurrentChange(val) {
      this.page = val;
      this.getFormData();
    },
    onCheckWarning() {
      const audio = document.getElementById("audio");
      audio.play();
    },
    tableRowClassName(row, rowIndex) {
      if (row.color == "red") {
        return "error-row";
      } else if (row.color == "yellow") {
        return "warning-row";
      }
    },
    selsChange: function(sels) {
      this.sels = sels;
    }
  },
  async created() {
    this.$nextTick(async () => {
      this.getForm();
    });
    await this.getTableList();
  },
  watch: {
    "awos1.windSpeed2": {
      handler(newValue, oldValue) {
        this.$nextTick(() => {
          this.awos1.windSpeed2 = newValue;
        });
      }
    },
    "awos2.windSpeed2": {
      handler(newValue, oldValue) {
        this.$nextTick(() => {
          this.awos2.windSpeed2 = newValue;
        });
      }
    },
    "awos3.windSpeed2": {
      handler(newValue, oldValue) {
        this.$nextTick(() => {
          this.awos3.windSpeed2 = newValue;
        });
      }
    }
  }
};
</script>
<style>
.el-table .error-row {
  background: #fdafbc;
}
.el-table .warning-row {
  background: #fddf87;
}
.el-table .normal-row {
  background: #faf5af;
}
.button {
  background: #d5dfe9;
}
.el-table .cell {
  white-space: pre-line;
}
</style>