<template>
	<div :model="data">
		<div class="hj-box">
			<p class="name">基本信息</p>
			<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
		      	<el-form :inline="true" :model="filters" label-width="150px" class="">
			        <el-form-item label="初次登记日期:">
			          <el-input v-model="filters.no" placeholder="请输入安检机构编号"></el-input>
			        </el-form-item>
			         <el-form-item label="车辆品牌:">
			          <el-input v-model="filters.name" placeholder="请输入安检机构名称"></el-input>
			        </el-form-item>
			         <el-form-item label="号牌种类:">
			          <el-input v-model="filters.bookno" placeholder="请输入资格许可证书编号"></el-input>
			        </el-form-item>
			        <el-form-item label="燃料种类:">
			          <el-select v-model="filters.orgname" placeholder="全部" style="width:190px;" >
							<el-option label="安检1" value="1"></el-option>
							<el-option label="综检2" value="2"></el-option>
							<el-option label="环检3" value="3"></el-option>
						</el-select>
			        </el-form-item>
			        <el-form-item label="变速箱型式:">
			          <el-select v-model="filters.orgname" placeholder="全部" style="width:190px;" >
							<el-option label="安检1" value="1"></el-option>
							<el-option label="综检2" value="2"></el-option>
							<el-option label="环检3" value="3"></el-option>
						</el-select>
			        </el-form-item>
			         <el-form-item label="车辆识别代号:">
			          <el-input v-model="filters.no" placeholder="请输入资格许可有效期始"></el-input>
			        </el-form-item>
			         <el-form-item label="发动机型号:">
			          <el-input v-model="filters.no" placeholder="请输入资格许可有效期止"></el-input>
			        </el-form-item>
			         <el-form-item label="车辆类型:">
			          <el-input v-model="filters.no" placeholder="请输入外检工位人数"></el-input>
			        </el-form-item>
			        <el-form-item label="总质量:">
			          <el-input v-model="filters.no" placeholder="请输入检测人员总数"></el-input>
			        </el-form-item>
			        <el-form-item label="档位数:">
			          <el-input v-model="filters.no" placeholder="请输入地盘工位人数"></el-input>
			        </el-form-item>
			        <el-form-item label="出厂日期:">
			          <el-input v-model="filters.no" placeholder="请输入总检工位人数"></el-input>
			        </el-form-item>
			        <el-form-item label="发动机号:">
			          <el-input v-model="filters.no" placeholder="请输入引车员人数"></el-input>
			        </el-form-item>
			        <el-form-item label="所有人:">
			          <el-input v-model="filters.no" placeholder="请输入通过省级质检考核人数"></el-input>
			        </el-form-item>
			        <el-form-item label="核定载客:">
			          <el-input v-model="filters.no" placeholder="请输入未通过省级质检考核人数"></el-input>
			        </el-form-item>
			        <el-form-item label="进气方式:">
			          	<el-select v-model="filters.orgname" placeholder="全部" style="width:190px;" >
							<el-option label="安检1" value="1"></el-option>
							<el-option label="综检2" value="2"></el-option>
							<el-option label="环检3" value="3"></el-option>
						</el-select>
			        </el-form-item>
			        <el-form-item label="检验报告编码:">
			          <el-input v-model="filters.no" placeholder="请输入安检机构编号"></el-input>
			        </el-form-item>
			         <el-form-item label="行政区划:">
			          <el-input v-model="filters.name" placeholder="请输入安检机构名称"></el-input>
			        </el-form-item>
			        <el-form-item label="车身颜色:">
			          <el-input v-model="filters.no" placeholder="请输入公安网联网状态"></el-input>
			        </el-form-item>
			         <el-form-item label="整备质量:">
			          <el-input v-model="filters.no" placeholder="请输入状态标记"></el-input>
			        </el-form-item>
			         <el-form-item label="发动机汽缸数:">
			          <el-input v-model="filters.no" placeholder="请输入资格许可有效期始"></el-input>
			        </el-form-item>
			         <el-form-item label="行政机构编码:">
			          <el-input v-model="filters.no" placeholder="请输入资格许可有效期止"></el-input>
			        </el-form-item>
			         <el-form-item label="号牌号码:">
			          <el-input v-model="filters.no" placeholder="请输入外检工位人数"></el-input>
			        </el-form-item>
			         <el-form-item label="使用性质:">
			          <el-input v-model="filters.no" placeholder="请输入录入工位人数"></el-input>
			        </el-form-item>
			        <el-form-item label="发动机排量:">
			          <el-input v-model="filters.no" placeholder="请输入地盘工位人数"></el-input>
			        </el-form-item>
			        <el-form-item label="行驶里程数:">
			          <el-input v-model="filters.no" placeholder="请输入地盘工位人数"></el-input>
			        </el-form-item>
			        <el-form-item label="外检开始时间:">
			          <el-input v-model="filters.no" placeholder="请输入地盘工位人数"></el-input>
			        </el-form-item>
			        <el-form-item label="号牌颜色:">
			          <el-input v-model="filters.no" placeholder="请输入地盘工位人数"></el-input>
			        </el-form-item>
			        <el-form-item label="发动机额定转速:">
			          <el-input v-model="filters.no" placeholder="请输入地盘工位人数"></el-input>
			        </el-form-item>
			        <el-form-item label="行驶员:">
			          <el-input v-model="filters.no" placeholder="请输入地盘工位人数"></el-input>
			        </el-form-item>
			        <el-form-item label="驱动方式:">
				        <el-select v-model="filters.orgname" placeholder="全部" style="width:190px;" >
							<el-option label="安检1" value="1"></el-option>
							<el-option label="综检2" value="2"></el-option>
							<el-option label="环检3" value="3"></el-option>
						</el-select>
			        </el-form-item>
			        <el-form-item label="外检结束时间:">
			          <el-input v-model="filters.no" placeholder="请输入地盘工位人数"></el-input>
			        </el-form-item>
			        <el-form-item label="发动机功率:">
			          <el-input v-model="filters.no" placeholder="请输入地盘工位人数"></el-input>
			        </el-form-item>
			        <el-form-item label="外检员:">
			          <el-input v-model="filters.no" placeholder="请输入地盘工位人数"></el-input>
			        </el-form-item>
			        <el-form-item label="操作员:">
			          <el-input v-model="filters.no" placeholder="请输入地盘工位人数"></el-input>
			        </el-form-item>
			        <el-form-item label="后处理种类:">
			          	<el-select v-model="filters.orgname" placeholder="全部" style="width:190px;" >
							<el-option label="安检1" value="1"></el-option>
							<el-option label="综检2" value="2"></el-option>
							<el-option label="环检3" value="3"></el-option>
						</el-select>
			        </el-form-item>
			        <el-form-item label="车辆型号:">
			          <el-input v-model="filters.no" placeholder="请输入总检工位人数"></el-input>
			        </el-form-item>
		      	</el-form>
		    </el-col>
		    <i class="f-hr20"></i>
		    <p class="name">外检参数</p>
		    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
		      	<el-form :inline="true" :model="filters" label-width="180px" class="">
			        <el-col :span="8">
				        <el-form-item label="车辆识别代号判定:">
				          	<el-radio-group>
							    <el-radio :label="3">一致</el-radio>
							    <el-radio :label="6">不一致</el-radio>
							</el-radio-group>
				        </el-form-item>
				    </el-col>
				    <el-col :span="8">
				        <el-form-item label="能否有燃油蒸发控制装置:">
				          	<el-radio-group>
							    <el-radio :label="3">是</el-radio>
							    <el-radio :label="6">否</el-radio>
							</el-radio-group>
				        </el-form-item>
				    </el-col>
				    <el-col :span="8">
				        <el-form-item label="发动机废气再循环管:">
				          	<el-radio-group>
							    <el-radio :label="3">合格</el-radio>
							    <el-radio :label="6">不合格</el-radio>
							</el-radio-group>
				        </el-form-item>
				    </el-col>
			        <el-col :span="8">
				        <el-form-item label="进排气不漏气:">
				          	<el-radio-group>
							    <el-radio :label="3">合格</el-radio>
							    <el-radio :label="6">不合格</el-radio>
							</el-radio-group>
				        </el-form-item>
				    </el-col>
			        <el-col :span="8">
				        <el-form-item label="车牌是否一致:">
							<el-radio-group>
							    <el-radio :label="3">是</el-radio>
							    <el-radio :label="6">否</el-radio>
							</el-radio-group>
				        </el-form-item>
				    </el-col>
			        <el-col :span="8">
				        <el-form-item label="发动机分缸点火线:">
				          	<el-radio-group>
							    <el-radio :label="3">一致</el-radio>
							    <el-radio :label="6">不一致</el-radio>
							</el-radio-group>
				        </el-form-item>
				    </el-col>
			        <el-col :span="8">
				        <el-form-item label="车辆工作水温:">
				          	<el-radio-group>
							    <el-radio :label="3">合格</el-radio>
							    <el-radio :label="6">不合格</el-radio>
							</el-radio-group>
				        </el-form-item>
				    </el-col>
			        <el-col :span="8">
				        <el-form-item label="进排气不漏油:">
				          	<el-radio-group>
							    <el-radio :label="3">合格</el-radio>
							    <el-radio :label="6">不合格</el-radio>
							</el-radio-group>
				        </el-form-item>
				    </el-col>
				    <el-col :span="8">
				        <el-form-item label="发动机是否一致:">
							<el-radio-group>
							    <el-radio :label="3">是</el-radio>
							    <el-radio :label="6">否</el-radio>
							</el-radio-group>
				        </el-form-item>
				    </el-col>
			        <el-col :span="8">
				        <el-form-item label="发动机喷油嘴:">
				          	<el-radio-group>
							    <el-radio :label="3">一致</el-radio>
							    <el-radio :label="6">不一致</el-radio>
							</el-radio-group>
				        </el-form-item>
				    </el-col>
			        <el-col :span="8">
				        <el-form-item label="不冒黑烟:">
				          	<el-radio-group>
							    <el-radio :label="3">合格</el-radio>
							    <el-radio :label="6">不合格</el-radio>
							</el-radio-group>
				        </el-form-item>
				    </el-col>
			        <el-col :span="8">
				        <el-form-item label="进排气不漏水:">
				          	<el-radio-group>
							    <el-radio :label="3">合格</el-radio>
							    <el-radio :label="6">不合格</el-radio>
							</el-radio-group>
				        </el-form-item>
				    </el-col>
			        <el-col :span="8">
				        <el-form-item label="车辆类型是否一致:">
				          	<el-radio-group>
							    <el-radio :label="3">是</el-radio>
							    <el-radio :label="6">否</el-radio>
							</el-radio-group>
				        </el-form-item>
				    </el-col>
			        <el-col :span="8">
				        <el-form-item label="外检员结果判定:">
				          	<el-radio-group>
							    <el-radio :label="3">合格</el-radio>
							    <el-radio :label="6">不合格</el-radio>
							</el-radio-group>
				        </el-form-item>
				    </el-col>
			        <el-col :span="8">
				        <el-form-item label="发动机不烧机油:">
				          	<el-radio-group>
							    <el-radio :label="3">合格</el-radio>
							    <el-radio :label="6">不合格</el-radio>
							</el-radio-group>
				        </el-form-item>
				    </el-col>
			        <el-col :span="8">
				        <el-form-item label="是否有OBD:">
				          	<el-radio-group>
							    <el-radio :label="3">是</el-radio>
							    <el-radio :label="6">否</el-radio>
							</el-radio-group>
				        </el-form-item>
				    </el-col>
			        <el-col :span="8">
				        <el-form-item label="轮胎未潮湿存水判定:">
				          	<el-radio-group>
							    <el-radio :label="3">合格</el-radio>
							    <el-radio :label="6">不合格</el-radio>
							</el-radio-group>
				        </el-form-item>
				    </el-col>
			        <el-col :span="8">
				        <el-form-item label="轮胎未夹硬物判定:">
				          	<el-radio-group>
							    <el-radio :label="3">合格</el-radio>
							    <el-radio :label="6">不合格</el-radio>
							</el-radio-group>
				        </el-form-item>
				    </el-col>
			        <el-col :span="8">
				        <el-form-item label="轮胎压力:">
				          	<el-radio-group>
							    <el-radio :label="3">合格</el-radio>
							    <el-radio :label="6">不合格</el-radio>
							</el-radio-group>
				        </el-form-item>
				    </el-col>
			        <el-col :span="8">
				        <el-form-item label="OBD检验是否有故障:">
				          	<el-radio-group>
							    <el-radio :label="3">是</el-radio>
							    <el-radio :label="6">否</el-radio>
							</el-radio-group>
				        </el-form-item>
				    </el-col>
				    <el-col :span="8">
				        <el-form-item label="发动机机外净化器:">
				          	<el-radio-group>
							    <el-radio :label="3">是</el-radio>
							    <el-radio :label="6">否</el-radio>
							</el-radio-group>
				        </el-form-item>
				    </el-col>
				    <el-col :span="8">
				        <el-form-item label="发动机空气滤芯:">
				          	<el-radio-group>
							    <el-radio :label="3">合格</el-radio>
							    <el-radio :label="6">不合格</el-radio>
							</el-radio-group>
				        </el-form-item>
				    </el-col>
			        <el-col :span="8">
				        <el-form-item label="轮胎未严重磨损判定:">
				          	<el-radio-group>
							    <el-radio :label="3">合格</el-radio>
							    <el-radio :label="6">不合格</el-radio>
							</el-radio-group>
				        </el-form-item>
				    </el-col>
			        <el-col :span="8">
				        <el-form-item label="是否有增压器:">
				          	<el-radio-group>
							    <el-radio :label="3">是</el-radio>
							    <el-radio :label="6">否</el-radio>
							</el-radio-group>
				        </el-form-item>
				    </el-col>
				    <el-col :span="8">
				        <el-form-item label="检验关闭暖风/ABS/ASR/ESP等特殊装置:" label-width="200px">
				          	<el-radio-group>
							    <el-radio :label="3">是</el-radio>
							    <el-radio :label="6">否</el-radio>
							</el-radio-group>
				        </el-form-item>
				    </el-col>
		      	</el-form>
		    </el-col>
		    <i class="f-hr20"></i>
		    <p class="name">备注</p>
		    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
		      	<el-form :inline="true" :model="filters" label-width="150px" class="">
			        <el-form-item label="不能上线检测原因:" style="width:100%">
			          <el-input v-model="filters.no" placeholder="请输入安检机构编号" style="width:800px"></el-input>
			        </el-form-item>
			         <el-form-item label="外检员结果判定描述:" style="width:100%">
			          <el-input v-model="filters.name" placeholder="请输入安检机构名称" style="width:800px"></el-input>
			        </el-form-item>
		      	</el-form>
		    </el-col>
		</div>
	</div>
</template>


<script>
	export default{
		data() {
			return {
				data:{},
				filters:{},
			}
		},
		mounted(){
	    	
	    	 var trmsg = sessionStorage.getItem('trmsg')
	    	 this.data = JSON.parse(trmsg)
	    	 this.filters = this.data

	    	console.log(this.data,'454545555555555555')
	    }
	}
</script>
