<template>
  <div style="height:100%;width:100%">
    <el-row :gutter="10" type="flex" class="row-bg el-row-two" justify="space-between">
      <el-col :span="20">
        <div class="grid-content">
          <div style="height:100%;width:100%">
            <div class="grid-content">
              <el-col :span="8">
                <div class="grid-content">
                  <windrose1 :testdata="testdata"></windrose1>
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
                  <windrose3></windrose3>
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
                  <windrose4></windrose4>
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
                <el-button size="small" class="button" v-on:click="updateWarning(1)">不再提醒</el-button>
              </el-form-item>
              <el-form-item>
                <el-button size="small" class="button" @click="updateWarning(2)">两小时后提醒</el-button>
              </el-form-item>
              <el-form-item>
                <el-button size="small" class="button" @click="updateWarning(3)">四小时后提醒</el-button>
              </el-form-item>
            </el-form>
          </el-col>

          <!--列表-->
          <el-table
            :data="warning"
            height="700"
            highlight-current-row
            v-loading="listLoading"
            style="width: 100% height: 90%;"
            :row-class-name="tableRowClassName"
          >
            <!--            stripe-->
            <el-table-column type="selection" width="55"></el-table-column>
            <!--            <el-table-column type="index" width="60"></el-table-column>-->
            <el-table-column prop="time" label="时间" width min-width="40%"></el-table-column>
            <el-table-column prop="priority" label="告警类别" min-width="10%" width="120"></el-table-column>
            <el-table-column prop="message" label="告警内容" min-width="50%"></el-table-column>
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
import { getUserListPage } from '../../api/api';
import { getAWOS1 } from '../../api/api';
import { getAWOSWarning } from '../../api/api';
import moment from 'moment';
import windrose1 from '../../components/windrose1';
import windrose3 from '../../components/windrose3';
import windrose4 from '../../components/windrose4';
import windrose from '../../components/windrose';
import lodash from 'lodash';

export default {
  data() {
    return {
      testdata: [{ id: 1, name: Infinity }, { id: 2, name: 9000 }, { id: 3, name: 7000 }, { id: 4, name: 8000 }],
      label_position: 'left',
      filters: {
        name: ''
      },
      warning: [],
      total: 0,
      page: 1,
      listLoading: false,
      sels: [], //列表选中列
      awos1: {
        windSpeed1: '',
        windSpeed2: '',
        windDirection1: '',
        windDirection2: '',
        rvr: '',
        temp: '',
        cloud: '',
        zdz: ''
      },
      awos3: {
        windSpeed1: '',
        windSpeed2: '',
        windDirection1: '',
        windDirection2: '',
        rvr: '',
        temp: '',
        cloud: '',
        zdz: ''
      },
      awos2: {
        windSpeed1: '',
        windSpeed2: '',
        windDirection1: '',
        windDirection2: '',
        rvr: '',
        temp: '',
        cloud: '',
        zdz: ''
      },
      form: {
        windSpeed1: 1,
        windDirection1: 2,
        windSpeed2: 1,
        windDirection2: 2,
        windSpeed3: 1,
        windDirection3: 2
      },
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
    getFromData() {
      let para = {
        page: this.page,
        name: this.filters.name
      };
      getAWOS1(para).then(res => {
        res.data.rows[0].forEach((awos, index) => {
          switch (index) {
            case 15:
              this.awos1.windSpeed1 = awos;
              break;
            case 16:
              this.awos1.windSpeed2 = awos;
              break;
            case 17:
              this.awos1.windDirection1 = Math.round(awos / 10) * 10;
              break;
            case 18:
              this.awos1.windDirection2 = this.awos1.windDirection1 = Math.round(awos / 10) * 10;
              break;
            case 12:
              this.awos1.rvr = awos;
              break;
            case 18:
              this.awos1.zdz = awos;
              break;
            case 27:
              this.awos1.cloud = awos;
              break;
            case 23:
              this.awos1.temp = awos;
              break;
            //////
            case 33:
              this.awos2.windSpeed1 = awos;
              break;
            case 35:
              this.awos2.windSpeed2 = awos;
              break;
            case 34:
              this.awos2.windDirection1 = this.awos1.windDirection1 = Math.round(awos / 10) * 10;
              break;
            case 37:
              this.awos2.windDirection2 = this.awos1.windDirection1 = Math.round(awos / 10) * 10;
              break;
            case 29:
              this.awos2.rvr = awos;
              break;
            case 18:
              this.awos2.zdz = awos;
              break;
            case 43:
              this.awos2.cloud = awos;
              break;
            case 40:
              this.awos2.temp = awos;
              break;
            //////
            case 49:
              this.awos1.windSpeed1 = awos;
              break;
            case 51:
              this.awos3.windSpeed2 = awos;
              break;
            case 50:
              this.awos3.windDirection1 = this.awos1.windDirection1 = Math.round(awos / 10) * 10;
              break;
            case 52:
              this.awos3.windDirection2 = this.awos1.windDirection1 = Math.round(awos / 10) * 10;
              break;
            case 45:
              this.awos3.rvr = awos;
              break;
            case 18:
              this.awos3.zdz = awos;
              break;
            case 59:
              this.awos3.cloud = awos;
              break;
            case 56:
              this.awos3.temp = awos;
              break;
            default:
              break;
          }
        });
      });
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
          that.warning = lodash.unionBy(that.warning, data, 'time');

          data.forEach(data => {
            if (
              data.priority == '风向趋势告警' ||
              data.priority == '风速趋势告警' ||
              data.priority == '阵风告警' ||
              data.priority == '大风告警'
            ) {
              this.onCheckWarning();
            }
          });
        }
      });

      this.listLoading = false;
    },
    updateWarning(para) {
      switch (para) {
        case 1:
          break;
        case 2:
          break;
        case 3:
          break;
        default:
          break;
      }
    },
    handleCurrentChange(val) {
      this.page = val;
      this.getFromData();
    },
    onCheckWarning() {
      const audio = document.getElementById('audio');
      audio.play();
    },
    tableRowClassName(row, rowIndex) {
      if (row.priority == '风向趋势告警') {
        return 'error-row';
      }
      if (row.priority == '橙色告警') {
        return 'warning-row';
      }
      if (row.priority == '黄色告警') {
        return 'normal-row';
      }
      return '';
    }
  },
  mounted() {
    this.getFrom();
    this.getTableList();
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
</style>