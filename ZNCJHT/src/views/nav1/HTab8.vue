<template>
	<div class="detail-box hj-box">
		<p class="name">提交数据结果</p>
		<table class="tab-msg"  :model="data" >
			<tbody>
				<tr class="tab-tr">
					<td>序号</td>
					<td>项目类型</td>
					<td>项目模块</td>
					<td>项目名称</td>
					<td>结果状态</td>
					<td>操作</td>
				</tr>
				<tr class="tab-tr">
					<td>1</td>
					<td>数据</td>
					<td></td>
					<td>车辆检测登记数据</td>
					<td><el-button type="danger">未上传</el-button></td>
					<td><el-button type="primary">上传</el-button></td>
				</tr>
				<tr class="tab-tr">
					<td>2</td>
					<td>数据</td>
					<td></td>
					<td>车辆检测外检数据</td>
					<td><el-button type="danger">未上传</el-button></td>
					<td><el-button type="primary">上传</el-button></td>
				</tr>
				<tr class="tab-tr">
					<td>3</td>
					<td>数据</td>
					<td></td>
					<td>车辆检测过程数据</td>
					<td><el-button type="danger">未上传</el-button></td>
					<td><el-button type="primary">上传</el-button></td>
				</tr>
				<tr class="tab-tr">
					<td>4</td>
					<td>数据</td>
					<td></td>
					<td>车辆检测结果数据</td>
					<td><el-button type="danger">未上传</el-button></td>
					<td><el-button type="primary">上传</el-button></td>
				</tr>
				<tr class="tab-tr">
					<td>5</td>
					<td rowspan="16">照片</td>
					<td rowspan="8">登记</td>
					<td>行驶证</td>
					<td><el-button type="danger">未上传</el-button></td>
					<td>
						<el-button type="primary">重传</el-button>
						<el-upload class="upload-demo"
						  action="https://jsonplaceholder.typicode.com/posts/"
						  :on-preview="handlePreview"
						  :on-remove="handleRemove" 
						  list-type="picture">
						  <el-button type="primary">选择照片上传</el-button>
						</el-upload>
					</td>
				</tr>
				<tr class="tab-tr">
					<td>6</td>
					<td>送检人身份证</td>
					<td><el-button type="danger">未上传</el-button></td>
					<td>
						<el-button type="primary">重传</el-button>
						<el-upload class="upload-demo"
						  action="https://jsonplaceholder.typicode.com/posts/"
						  :on-preview="handlePreview"
						  :on-remove="handleRemove" 
						  list-type="picture">
						  <el-button type="primary">选择照片上传</el-button>
						</el-upload>
					</td>
				</tr>
				<tr class="tab-tr">
					<td>7</td>
					<td>车主委托证明</td>
					<td><el-button type="danger">未上传</el-button></td>
					<td>
						<el-button type="primary">重传</el-button>
						<el-upload class="upload-demo"
						  action="https://jsonplaceholder.typicode.com/posts/"
						  :on-preview="handlePreview"
						  :on-remove="handleRemove" 
						  list-type="picture">
						  <el-button type="primary">选择照片上传</el-button>
						</el-upload>
					</td>
				</tr>
				<tr class="tab-tr">
					<td>8</td>
					<td>变更检测方法证明</td>
					<td><el-button type="danger">未上传</el-button></td>
					<td>
						<el-button type="primary">重传</el-button>
						<el-upload class="upload-demo"
						  action="https://jsonplaceholder.typicode.com/posts/"
						  :on-preview="handlePreview"
						  :on-remove="handleRemove" 
						  list-type="picture">
						  <el-button type="primary">选择照片上传</el-button>
						</el-upload>
					</td>
				</tr>
				<tr class="tab-tr">
					<td>9</td>
					<td>跨站检测证明</td>
					<td><el-button type="danger">未上传</el-button></td>
					<td>
						<el-button type="primary">重传</el-button>
						<el-upload class="upload-demo"
						  action="https://jsonplaceholder.typicode.com/posts/"
						  :on-preview="handlePreview"
						  :on-remove="handleRemove" 
						  list-type="picture">
						  <el-button type="primary">选择照片上传</el-button>
						</el-upload>
					</td>
				</tr>
				<tr class="tab-tr">
					<td>10</td>
					<td>维修证明</td>
					<td><el-button type="danger">未上传</el-button></td>
					<td>
						<el-button type="primary">重传</el-button>
						<el-upload class="upload-demo"
						  action="https://jsonplaceholder.typicode.com/posts/"
						  :on-preview="handlePreview"
						  :on-remove="handleRemove" 
						  list-type="picture">
						  <el-button type="primary">选择照片上传</el-button>
						</el-upload>
					</td>
				</tr>
				<tr class="tab-tr">
					<td>11</td>
					<td>委托站委托证明</td>
					<td><el-button type="danger">未上传</el-button></td>
					<td>
						<el-button type="primary">重传</el-button>
						<el-upload class="upload-demo"
						  action="https://jsonplaceholder.typicode.com/posts/"
						  :on-preview="handlePreview"
						  :on-remove="handleRemove" 
						  list-type="picture">
						  <el-button type="primary">选择照片上传</el-button>
						</el-upload>
					</td>
				</tr>
				<tr class="tab-tr">
					<td>12</td>
					<td>检验委托合同</td>
					<td><el-button type="danger">未上传</el-button></td>
					<td>
						<el-button type="primary">重传</el-button>
						<el-upload class="upload-demo"
						  action="https://jsonplaceholder.typicode.com/posts/"
						  :on-preview="handlePreview"
						  :on-remove="handleRemove" 
						  list-type="picture">
						  <el-button type="primary">选择照片上传</el-button>
						</el-upload>
					</td>
				</tr>
				<tr class="tab-tr">
					<td>13</td>
					<td rowspan="6">外检照片</td>
					<td>前45度</td>
					<td><el-button type="danger">未上传</el-button></td>
					<td>
						<el-button type="primary">重传</el-button>
						<el-upload class="upload-demo"
						  action="https://jsonplaceholder.typicode.com/posts/"
						  :on-preview="handlePreview"
						  :on-remove="handleRemove" 
						  list-type="picture">
						  <el-button type="primary">选择照片上传</el-button>
						</el-upload>
					</td>
				</tr>
				<tr class="tab-tr">
					<td>14</td>
					<td>后45度</td>
					<td><el-button type="danger">未上传</el-button></td>
					<td>
						<el-button type="primary">重传</el-button>
						<el-upload class="upload-demo"
						  action="https://jsonplaceholder.typicode.com/posts/"
						  :on-preview="handlePreview"
						  :on-remove="handleRemove" 
						  list-type="picture">
						  <el-button type="primary">选择照片上传</el-button>
						</el-upload>
					</td>
				</tr>
				<tr class="tab-tr">
					<td>15</td>
					<td>车架号</td>
					<td><el-button type="danger">未上传</el-button></td>
					<td>
						<el-button type="primary">重传</el-button>
						<el-upload class="upload-demo"
						  action="https://jsonplaceholder.typicode.com/posts/"
						  :on-preview="handlePreview"
						  :on-remove="handleRemove" 
						  list-type="picture">
						  <el-button type="primary">选择照片上传</el-button>
						</el-upload>
					</td>
				</tr>
				<tr class="tab-tr">
					<td>16</td>
					<td>发动机号</td>
					<td><el-button type="danger">未上传</el-button></td>
					<td>
						<el-button type="primary">重传</el-button>
						<el-upload class="upload-demo"
						  action="https://jsonplaceholder.typicode.com/posts/"
						  :on-preview="handlePreview"
						  :on-remove="handleRemove" 
						  list-type="picture">
						  <el-button type="primary">选择照片上传</el-button>
						</el-upload>
					</td>
				</tr>
				<tr class="tab-tr">
					<td>17</td>
					<td>仪表盘里程</td>
					<td><el-button type="danger">未上传</el-button></td>
					<td>
						<el-button type="primary">重传</el-button>
						<el-upload class="upload-demo"
						  action="https://jsonplaceholder.typicode.com/posts/"
						  :on-preview="handlePreview"
						  :on-remove="handleRemove" 
						  list-type="picture">
						  <el-button type="primary">选择照片上传</el-button>
						</el-upload>
					</td>
				</tr>
				<tr class="tab-tr">
					<td>18</td>
					<td>地盘照片</td>
					<td><el-button type="danger">未上传</el-button></td>
					<td>
						<el-button type="primary">重传</el-button>
						<el-upload class="upload-demo"
						  action="https://jsonplaceholder.typicode.com/posts/"
						  :on-preview="handlePreview"
						  :on-remove="handleRemove" 
						  list-type="picture">
						  <el-button type="primary">选择照片上传</el-button>
						</el-upload>
					</td>
				</tr>
				<tr class="tab-tr">
					<td>19</td>
					<td rowspan="2">上线检</td>
					<td>上线检测全景照（前）</td>
					<td><el-button type="danger">未上传</el-button></td>
					<td>
						<el-button type="primary">重传</el-button>
						<el-upload class="upload-demo"
						  action="https://jsonplaceholder.typicode.com/posts/"
						  :on-preview="handlePreview"
						  :on-remove="handleRemove" 
						  list-type="picture">
						  <el-button type="primary">选择照片上传</el-button>
						</el-upload>
					</td>
				</tr>
				<tr class="tab-tr">
					<td>20</td>
					<td>地盘照片</td>
					<td><el-button type="danger">未上传</el-button></td>
					<td>
						<el-button type="primary">重传</el-button>
						<el-upload class="upload-demo"
						  action="https://jsonplaceholder.typicode.com/posts/"
						  :on-preview="handlePreview"
						  :on-remove="handleRemove" 
						  list-type="picture">
						  <el-button type="primary">选择照片上传</el-button>
						</el-upload>
					</td>
				</tr>
				<tr class="tab-tr">
					<td>21</td>
					<td rowspan="6">检测视频</td>
					<td rowspan="3">外检</td>
					<td>外检视频（前）</td>
					<td><el-button type="danger">未上传</el-button></td>
					<td rowspan="3">
						<el-form  ref="form" label-width="140px">
							<el-form-item label="活动性质：">
							    <el-checkbox-group v-model="data.type">
							      <el-checkbox label="外检视频（前）" name="type"></el-checkbox>
							      <el-checkbox label="外检视频（后）" name="type"></el-checkbox>
							      <el-checkbox label="外检地盘检测视频" name="type"></el-checkbox>
							    </el-checkbox-group>
							</el-form-item>
							<el-form-item label="检测视频开始时间：">
							    <el-date-picker type="date" placeholder="选择日期" v-model="data.value" ></el-date-picker>
							</el-form-item>
							<el-form-item label="检测视频结束时间：">
							    <el-date-picker type="date" placeholder="选择日期" v-model="data.value" ></el-date-picker>
							</el-form-item>
							<el-form-item label="压缩比：">
							    <el-select v-model="data.type" placeholder="请选择活动区域">
							      <el-option label="区域一" value="shanghai"></el-option>
							      <el-option label="区域二" value="beijing"></el-option>
							    </el-select>
							</el-form-item>
							<el-form-item label="检测线：">
							    <el-select v-model="data.type" placeholder="请选择活动区域">
							      <el-option label="区域一" value="shanghai"></el-option>
							      <el-option label="区域二" value="beijing"></el-option>
							    </el-select>
							</el-form-item>
							<el-form-item>
							    <el-button type="primary" @click="onSubmit">重传</el-button>
							    <!-- <el-button>取消</el-button> -->
							</el-form-item>
						</el-form>		
					</td>
				</tr>
				<tr class="tab-tr">
					<td>22</td>
					<td>外检视频（后）</td>
					<td><el-button type="danger">未上传</el-button></td>
				</tr>
				<tr class="tab-tr">
					<td>23</td>
					<td>外检地盘检测视频</td>
					<td><el-button type="danger">未上传</el-button></td>
				</tr>
				<tr class="tab-tr">
					<td>24</td>
					<td rowspan="3">上线检</td>
					<td>上线检测前部摄录视频</td>
					<td><el-button type="danger">未上传</el-button></td>
					<td rowspan="3">
						<el-form  ref="form" label-width="140px">
							<el-form-item label="活动性质：">
							    <el-checkbox-group v-model="data.type">
							      <el-checkbox label="上线检测前部摄录视频" name="type"></el-checkbox>
							      <el-checkbox label="上线检测后部摄录视频" name="type"></el-checkbox>
							      <el-checkbox label="上线检测移动式视频" name="type"></el-checkbox>
							    </el-checkbox-group>
							</el-form-item>
							<el-form-item label="检测视频开始时间：">
							    <el-date-picker type="date" placeholder="选择日期" v-model="data.value" ></el-date-picker>
							</el-form-item>
							<el-form-item label="检测视频结束时间：">
							    <el-date-picker type="date" placeholder="选择日期" v-model="data.value" ></el-date-picker>
							</el-form-item>
							<el-form-item label="压缩比：">
							    <el-select v-model="data.type" placeholder="请选择活动区域">
							      <el-option label="区域一" value="shanghai"></el-option>
							      <el-option label="区域二" value="beijing"></el-option>
							    </el-select>
							</el-form-item>
							<el-form-item label="检测线：">
							    <el-select v-model="data.type" placeholder="请选择活动区域">
							      <el-option label="区域一" value="shanghai"></el-option>
							      <el-option label="区域二" value="beijing"></el-option>
							    </el-select>
							</el-form-item>
							<el-form-item>
							    <el-button type="primary" @click="onSubmit">重传</el-button>
							    <!-- <el-button>取消</el-button> -->
							</el-form-item>
						</el-form>		
					</td>
				</tr>
				<tr class="tab-tr">
					<td>25</td>
					<td>上线检测后部摄录视频</td>
					<td><el-button type="danger">未上传</el-button></td>
				</tr>
				<tr class="tab-tr">
					<td>26</td>
					<td>上线检测移动式视频</td>
					<td><el-button type="danger">未上传</el-button></td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				data:{

				},
				value:'',

			}
		},
		methods:{
			handleRemove(file, fileList) {
		        console.log(file, fileList);
		    },
		    handlePreview(file) {
		        console.log(file);
		    },
		    onSubmit(){
		    	console.log('111')
		    }
		},
		
	    mounted(){
	    	var  trmsg = sessionStorage.getItem('trmsg')
	    	this.data = JSON.parse(trmsg)
	    	console.log(this.data,'1232')
	    },
	}
</script>
<style scope>
	.tab-msg .tab-tr .el-button{
		padding: 3px 8px;
	}
	.tab-msg .tab-tr .upload-demo{
		width: auto;
		margin-left: 20px;
		display: inline-block;
	}
</style>