<template>
  <div style="height:100%;width:100%">
    <el-row :gutter="10" type="flex" class="row-bg el-row-two" justify="space-between">
      <el-col :span="20">
        <div class="grid-content">
          <div style="height:100%;width:100%">
            <div class="grid-content">
              <el-col :span="8">
                <div class="grid-content">
                  <windrose1></windrose1>
                  <el-form :label-position="label_position" label-width="80px" :model="form">
                    <el-form-item label="2avg风速">
                      <el-input v-model="form.windSpeed1" ></el-input>
                    </el-form-item>
                    <el-form-item label="10avg风速">
                      <el-input v-model="form.windDirection1" ></el-input>
                    </el-form-item>
                    <el-form-item label="风向">
                      <el-input v-model="form.windDirection3" autosize></el-input>
                    </el-form-item>
                    <el-form-item label="rvr">
                      <el-input v-model="form.windDirection3" autosize></el-input>
                    </el-form-item>
                    <el-form-item label="温度">
                      <el-input v-model="form.windDirection3" autosize></el-input>
                    </el-form-item>
                    <el-form-item label="云高">
                      <el-input v-model="form.windDirection3" autosize></el-input>
                    </el-form-item>
                    <el-form-item label="自动站">
                      <el-input v-model="form.windDirection3" autosize></el-input>
                    </el-form-item>
                  </el-form>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content">
                  <windrose3></windrose3>
                  <el-form :label-position="label_position" label-width="80px" :model="form">
                    <el-form-item label="2avg风速">
                      <el-input v-model="form.windSpeed1" ></el-input>
                    </el-form-item>
                    <el-form-item label="10avg风速">
                      <el-input v-model="form.windDirection1" ></el-input>
                    </el-form-item>
                    <el-form-item label="风向">
                      <el-input v-model="form.windDirection3" autosize></el-input>
                    </el-form-item>
                    <el-form-item label="rvr">
                      <el-input v-model="form.windDirection3" autosize></el-input>
                    </el-form-item>
                    <el-form-item label="温度">
                      <el-input v-model="form.windDirection3" autosize></el-input>
                    </el-form-item>
                    <el-form-item label="云高">
                      <el-input v-model="form.windDirection3" autosize></el-input>
                    </el-form-item>
                    <el-form-item label="自动站">
                      <el-input v-model="form.windDirection3" autosize></el-input>
                    </el-form-item>
                  </el-form>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content">
                  <windrose4></windrose4>
                  <el-form :label-position="label_position" label-width="80px" :model="form">
                    <el-form-item label="2avg风速">
                      <el-input v-model="form.windSpeed1" ></el-input>
                    </el-form-item>
                    <el-form-item label="10avg风速">
                      <el-input v-model="form.windDirection1" ></el-input>
                    </el-form-item>
                    <el-form-item label="风向">
                      <el-input v-model="form.windDirection3" autosize></el-input>
                    </el-form-item>
                    <el-form-item label="rvr">
                    <el-input v-model="form.windDirection3" autosize></el-input>
                  </el-form-item>
                    <el-form-item label="温度">
                      <el-input v-model="form.windDirection3" autosize></el-input>
                    </el-form-item>
                    <el-form-item label="云高">
                      <el-input v-model="form.windDirection3" autosize></el-input>
                    </el-form-item>
                    <el-form-item label="自动站">
                      <el-input v-model="form.windDirection3" autosize></el-input>
                    </el-form-item>
                  </el-form>
                </div>
              </el-col>
            </div>
            <div class="grid-content"></div>
            <div class="grid-content">
            </div>
            <div class="grid-content">
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content">
          <!--工具条-->
          <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
            <el-form :inline="true" :model="filters">
              <el-form-item :span="20">
                <el-input v-model="filters.name" placeholder="搜索"></el-input>
              </el-form-item>
              <!-- <el-form-item>
                <el-button type="primary" v-on:click="getUsers">查询</el-button>
              </el-form-item>-->
              <!-- <el-form-item>
                <el-button type="primary" @click="handleAdd">新增</el-button>
              </el-form-item>-->
            </el-form>
          </el-col>

          <!--列表-->
          <el-table
            :data="users"
            height="700"
            highlight-current-row
            v-loading="listLoading"
            style="width: 100% height: 90%;"
            :row-class-name="tableRowClassName"
          >
            <!--            stripe-->
<!--            <el-table-column type="selection" width="55"></el-table-column>-->
<!--            <el-table-column type="index" width="60"></el-table-column>-->
            <el-table-column prop="time" label="时间" width="" min-width="40%"></el-table-column>
            <el-table-column prop="priority" label="告警等级" min-width="10%" width="120"></el-table-column>
            <el-table-column prop="message" label="告警内容" min-width="50%" ></el-table-column>
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
    <audio id="audio" src="./static/error.mp3" ></audio>
    <label for="audio">测试警报声：</label><p></p>
    <audio controls>
      <source src="./static/error.mp3" type="audio/mp3">
    </audio>
  </div>
</template>

<script>
import { getUserListPage } from "../../api/api";
import { getdata } from "../../api/api";
import windrose1 from "../../components/windrose1";
import windrose2 from "../../components/windrose2";
import windrose3 from "../../components/windrose3";
import windrose4 from "../../components/windrose4";
import windrose from "../../components/windrose";

export default {
  data() {
    return {
      label_position:"left",
      filters: {
        name: ""
      },
      users: [],
      total: 0,
      page: 1,
      listLoading: false,
      sels: [], //列表选中列
      form:{windSpeed1:1,windDirection1:2,
            windSpeed2:1,windDirection2:2,
            windSpeed3:1,windDirection3:2},
      editFormVisible: false, //编辑界面是否显示
      editLoading: false,

    };
  },
  components: {
    windrose1,
    windrose,
    windrose2,
    windrose3,
    windrose4
  },
  methods: {
    //获取用户列表
    getUsers() {
      let para = {
        page: this.page,
        name: this.filters.name
      };
      this.listLoading = true;
      this.getPKG()
      //NProgress.start();
      
      // const data = this.getdata();
      // this.getdata().then(res => {
      // //   this.total = res.data.total;
      // //   this.users = res.data.users;
      // //   this.users.forEach((data) => {
      // //     if (data.priority === 1){
      // //       this.onCheckWarning();
      // //     }
      // //   });
      // //   this.listLoading = false;
      // //   //NProgress.done();
      // console.log(res)
      //  });
      // console.log(data)
      // getUserListPage(para).then(res => {
      //   this.total = res.data.total;
      //   this.users = res.data.users;
      //   this.users.forEach((data) => {
      //     if (data.priority === 1){
      //       this.onCheckWarning();
      //     }
      //   });
      //   this.listLoading = false;
      //   //NProgress.done();
      // });
    },
    async getPKG() {
      let that = this
      const response = await this.$axios
        .get('http://localhost:3000/api/AWOS')
        .then(function(response) {
          // handle success
          // response.data.array.forEach(element => {

          // });
          that.items = response.data
          alert('Add Successfully!!!!!!!!')
          return response.data
        })
        .catch(function(error) {
          // handle error
          console.log(error)
        })
        .then(function() {
          // always executed
        })
    },
    getscopeitem: function() {
      let that = this
      // Make a request for a user with a given ID
      this.$axios

        .get('http://localhost:3000/api/AWOS')
        .then(function(response) {
          // handle success

          that.options = response.data
        })
        .catch(function(error) {
          // handle error
          console.log(error)
        })
        .then(function() {
          // always executed
        })
    },
    handleCurrentChange(val) {
      this.page = val;
      this.getUsers();
    },
    onCheckWarning(){
      const audio = document.getElementById('audio');
      audio.play()
    },
    tableRowClassName(row, rowIndex) {
      if (row.priority == 1) {
        return 'error-row';
      }
      if (row.priority == 2) {
        return 'warning-row';
      }
      return '';
    }
  },
  mounted() {
    this.getUsers(),this.getscopeitem();
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
</style>