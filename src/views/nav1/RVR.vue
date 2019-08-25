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
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content">
                  <windrose3></windrose3>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content">
                  <windrose4></windrose4>
                </div>
              </el-col>
            </div>
            <div class="grid-content"></div>
            <div class="grid-content">
              <el-input placeholder></el-input>
            </div>
            <div class="grid-content">
              <el-input placeholder></el-input>
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
            stripe
            highlight-current-row
            v-loading="listLoading"
            style="width: 100% height: 90%;"
          >
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column type="index" width="60"></el-table-column>
            <el-table-column prop="name" label="时间" width="120"></el-table-column>
            <el-table-column prop="addr" label="地址" min-width="180" sortable></el-table-column>
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
  </div>
</template>

<script>
import { getUserListPage } from "../../api/api";
import windrose1 from "../../components/windrose1";
import windrose2 from "../../components/windrose2";
import windrose3 from "../../components/windrose3";
import windrose4 from "../../components/windrose4";
import windrose from "../../components/windrose";
export default {
  data() {
    return {
      filters: {
        name: ""
      },
      users: [],
      total: 0,
      page: 1,
      listLoading: false,
      sels: [], //列表选中列

      editFormVisible: false, //编辑界面是否显示
      editLoading: false,
      editFormRules: {
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }]
      }
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
    onSubmit() {
      console.log("submit!");
    },
    //获取用户列表
    getUsers() {
      let para = {
        page: this.page,
        name: this.filters.name
      };
      this.listLoading = true;
      //NProgress.start();
      getUserListPage(para).then(res => {
        this.total = res.data.total;
        this.users = res.data.users;
        this.listLoading = false;
        //NProgress.done();
      });
    },
    handleCurrentChange(val) {
      this.page = val;
      this.getUsers();
    }
  },
  mounted() {
    this.getUsers();
  }
};
</script>