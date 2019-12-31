<template>
  <el-form :size="size" inline :label-width="labelWidth" ref="form" :model="searchData">
    <el-form-item v-for='item in searchForm' :label="item.label" :key='item.prop' :prop='item.prop'>
      <!-- 输入框 -->
      <el-input clearable v-if="item.type==='Input'" v-model="searchData[item.prop]" :placeholder="item.placeholder" :style="{width: item.width}"></el-input>
      <!-- 下拉框 -->
      <el-select clearable v-if="item.type==='Select'" :placeholder="item.placeholder" v-model="searchData[item.prop]" :style="{width: item.width}" :size="size" @change="item.change(searchData[item.prop])">
          <el-option v-for="op in item.options" :label="item.props ? op[item.props.label] : op.label" :value="item.props ? op[item.props.value] : op.value" :key="item.props ? op[item.props.value] : op.value"></el-option>
      </el-select>
      <!-- 日期 -->
      <el-date-picker v-if="item.type==='Date'" :placeholder="item.placeholder" v-model="searchData[item.prop]"></el-date-picker>
      <!-- 时间 -->
      <el-time-select v-if="item.type==='Time'" v-model="searchData[item.prop]" type=''></el-time-select>
      <!-- 日期时间 -->
      <el-date-picker v-if="item.type==='DateTime'" type='datetime' v-model="searchData[item.prop]" :disabled="item.disable && item.disable(searchData[item.prop])"></el-date-picker>
    </el-form-item>
    <!-- <div style="display: inline-block" v-if='isHandle'>
      <el-form-item v-for='item in searchHandle' :key="item.label">
          <el-button :type="item.type" :size="size" @click='item.handle()'>{{item.label}}</el-button>
      </el-form-item> 
    </div> -->
    <el-form-item>
      <el-button type="primary" @click='searchHandleForm'>查询</el-button>
      <el-button @click='resetForm'>重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  props:{
    // isHandle:{
    //   type:Boolean,
    //   default:true
    // },
    labelWidth:{
      type:String,
      default:'100px'
    },
    size:{
      type:String,
      default:'small'
    },
    searchForm:{
      type:Array,
      default:[]
    },
    // searchHandle:{
    //   type:Array,
    //   default:()=>[]
    // },
    searchData:{
      type:Object,
      default:{}
    }
  },
  data () {
    return {
    };
  },
  methods:{
    searchHandleForm(){
      this.$emit("onsearch", this.searchData)
    },
    resetForm () {
      this.$refs.form.resetFields()
    }
  }
}

</script>