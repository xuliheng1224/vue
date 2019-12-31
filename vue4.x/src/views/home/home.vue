<template>
  <div class="bigbox">
    <el-card class="box-card">
      <search-form 
        labelWidth = '60px' 
        :searchData = "searchData"
        :searchForm = "searchForm"
        @onsearch="onsearch"
        >
        </search-form>
    </el-card>
    <el-card class="box-card">
      <el-table :data="tableData">
        <el-table-column
          prop="date"
          label="日期"
          width="140"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
        >
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import SearchForm from "@/components/searchform";
import {searchForm} from "./container.js";
import moment from "moment";

export default {
  components: {
    SearchForm,
  },
  data() {
    return {
      tableData:[],
      searchData:{},
      searchForm,
      // searchHandle:[
      //   {label:'查询',type:'primary',handle:()=>this.searchHandle()},
      //   {label:'重置',type:'primary',handle:()=>''}
      // ]
    }
  },
  methods: {
    // searchHandle() {
    //   console.log('searchData',this.searchData)
    // },
    onsearch(data){
      if(data){
        data.date = moment(data.date).format('YYYY-MM-DD');
      }
      console.log("data",data)
    }
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
.bigbox {
  width: 100%;
  .box-card {
    margin-bottom: 20px;
    width: 100%
  }
}


.el-aside {
  color: #333;
}
</style>