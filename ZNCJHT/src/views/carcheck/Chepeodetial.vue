<template>
  <div class="cont-box">
    <div class="third-box" :model="filters">
      <div class="third-ct">
        <p class="name">{{ filters.name }}</p>
        <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
              <el-form :inline="true"  label-width="170px" class="fil-box">
                <el-form-item label="使用管理部门:">
                  <el-input v-model="filters.no" placeholder="请输入使用管理部门"></el-input>
                </el-form-item>
                 <el-form-item label="身份证号码:">
                  <el-input v-model="filters.name" placeholder="请输入身份证号码"></el-input>
                </el-form-item>
                 <el-form-item label="姓名:">
                  <el-input v-model="filters.bookno" placeholder="请输入姓名"></el-input>
                </el-form-item>
                 <el-form-item label="人员类别:">
                  <el-input v-model="filters.no" placeholder="请输入人员类别"></el-input>
                </el-form-item>
                 <el-form-item label="安检机构编号:">
                  <el-input v-model="filters.no" placeholder="请输入安检机构编号"></el-input>
                </el-form-item>
                 <el-form-item label="发证机关:">
                  <el-input v-model="filters.no" placeholder="请输入发证机关"></el-input>
                </el-form-item>
                 <el-form-item label="上岗证发放单位:">
                  <el-input v-model="filters.no" placeholder="请输入上岗证发放单位"></el-input>
                </el-form-item>
                 <el-form-item label="管理部门:">
                  <el-input v-model="filters.no" placeholder="请输入管理部门"></el-input>
                </el-form-item>
                 <el-form-item label="上岗证编号:">
                  <el-input v-model="filters.no" placeholder="请输入上岗证编号"></el-input>
                </el-form-item>
                 <el-form-item label="上岗证有效期止:">
                  <el-input v-model="filters.no" placeholder="请输入上岗证有效期止"></el-input>
                </el-form-item>
                 <el-form-item label="状态:">
                  <el-input v-model="filters.no" placeholder="请输入状态"></el-input>
                </el-form-item>
                 <el-form-item label="审核标记:">
                  <el-input v-model="filters.no" placeholder="请输入审核标记"></el-input>
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