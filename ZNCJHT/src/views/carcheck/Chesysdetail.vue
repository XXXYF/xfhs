<template>
  <div class="cont-box">
    <div class="third-box" >
      <div class="third-ct">
        <p class="name">天山机动车检测有限公司</p>
        <el-col :span="24" :model="filters" class="toolbar" style="padding-bottom: 0px;">
              <el-form :inline="true"  label-width="170px" class="fil-box">
                <el-form-item label="备案编号:">
                  <el-input v-model="filters.no" placeholder="请输入备案编号"></el-input>
                </el-form-item>
                 <el-form-item label="检验系统名称:">
                  <el-input v-model="filters.name" placeholder="请输入检验系统名称"></el-input>
                </el-form-item>
                 <el-form-item label="版本编号:">
                  <el-input v-model="filters.bookno" placeholder="请输入版本编号"></el-input>
                </el-form-item>
                 <el-form-item label="检测系统说明:">
                  <el-input v-model="filters.no" placeholder="请输入检测系统说明"></el-input>
                </el-form-item>
                 <el-form-item label="开发单位:">
                  <el-input v-model="filters.no" placeholder="请输入开发单位"></el-input>
                </el-form-item>
                 <el-form-item label="数据库版本:">
                  <el-input v-model="filters.no" placeholder="请输入数据库版本"></el-input>
                </el-form-item>
                 <el-form-item label="系统架构描述:">
                  <el-input v-model="filters.no" placeholder="请输入系统架构描述"></el-input>
                </el-form-item>
                 <el-form-item label="检验机构编号:">
                  <el-input v-model="filters.no" placeholder="请输入检验机构编号"></el-input>
                </el-form-item>
                 <el-form-item label="检测线代号:">
                  <el-input v-model="filters.no" placeholder="请输入检测线代号"></el-input>
                </el-form-item>
                 <el-form-item label="检测时间:">
                  <el-input v-model="filters.no" placeholder="请输入检测时间"></el-input>
                </el-form-item>
                 <el-form-item label="验收时间:">
                  <el-input v-model="filters.no" placeholder="请输入验收时间"></el-input>
                </el-form-item>
                 <el-form-item label="使用状态:">
                  <el-input v-model="filters.no" placeholder="请输入使用状态"></el-input>
                </el-form-item>
                <el-form-item label="暂停原因:">
                  <el-input v-model="filters.no" placeholder="请输入暂停原因"></el-input>
                </el-form-item>
                 <el-form-item label="经办人:">
                  <el-input v-model="filters.no" placeholder="请输入经办人"></el-input>
                </el-form-item>
                 <el-form-item label="审核标记:">
                  <el-input v-model="filters.no" placeholder="请输入审核标记"></el-input>
                </el-form-item>
                <el-form-item label="审核意见:">
                  <el-input v-model="filters.no" placeholder="请输入审核意见"></el-input>
                </el-form-item>
                 <el-form-item label="审核人:">
                  <el-input v-model="filters.no" placeholder="请输入审核人"></el-input>
                </el-form-item>
                 <el-form-item label="发证机关:">
                  <el-input v-model="filters.no" placeholder="请输入发证机关"></el-input>
                </el-form-item>
                <el-form-item label="审核时间:">
                  <el-input v-model="filters.no" placeholder="请输入审核时间"></el-input>
                </el-form-item>
                <el-form-item label="管理部门:">
                  <el-input v-model="filters.no" placeholder="请输入管理部门"></el-input>
                </el-form-item>
                 <el-form-item label="更新日期:">
                  <el-input v-model="filters.no" placeholder="请输入更新日期"></el-input>
                </el-form-item>
                 <el-form-item label="使用管理部门:">
                  <el-input v-model="filters.no" placeholder="请输入使用管理部门"></el-input>
                </el-form-item>
              </el-form>
        </el-col>
      </div>
    </div>
    <p class="btn">
      <el-button type="warning" @click="back">返回</el-button>
    </p>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        filters:{},
      }
    },
    methods:{
      // formatRole :function(row,colume) {
      //  return row.role == 1 ? '检验机构业务员' :row.role == 0 ? '警员':'非警员'
      // },
      back: function(){
        window.history.go(-1)
        var box = document.getElementsByClassName("router-link-active");
        box[0].classList.add("aa")
        // console.log(box[0].value);
      },
    },
    mounted() {
       var trmsg = sessionStorage.getItem('trmsg')
         // this.data = JSON.parse(trmsg)
         this.filters = JSON.parse(trmsg)
         console.log(this.filters,'45454')
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  
</style>