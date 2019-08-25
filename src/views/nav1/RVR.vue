<template>
  <div style="height:100%;width:100%">
    <el-row :gutter="10" type="flex" class="row-bg el-row-two" justify="space-between">
      <el-col :span="12">
        <div class="grid-content">
          <div style="height:100%;width:100%">
            <div class="grid-content">
              <el-input placeholder></el-input>
            </div>
            <div class="grid-content">
              <el-input placeholder></el-input>
            </div>
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
              <el-form-item>
                <el-input v-model="filters.name" placeholder="姓名"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" v-on:click="getUsers">查询</el-button>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="handleAdd">新增</el-button>
              </el-form-item>
            </el-form>
          </el-col>

          <!--列表-->
          <el-table
            :data="users"
            highlight-current-row
            v-loading="listLoading"
            @selection-change="selsChange"
            style="width: 100% height: 100%;"
			
          >
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column type="index" width="60"></el-table-column>
            <el-table-column prop="name" label="姓名" width="120" ></el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
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
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>