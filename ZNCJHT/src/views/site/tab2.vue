<template>
	<div class="form-box">
		<el-form :model="filters" :inline="true" ref="filters" label-width="120px" id="filters">
			<el-form-item label="工作时间：">
				<el-checkbox-group v-model="filters.yyxm">
					<el-checkbox label="星期一" name="1"></el-checkbox>
					<el-checkbox label="星期二" name="2"></el-checkbox>
					<el-checkbox label="星期三" name="3"></el-checkbox>
					<el-checkbox label="星期四" name="4"></el-checkbox>
					<el-checkbox label="星期五" name="5"></el-checkbox>
					<el-checkbox label="星期六" name="6"></el-checkbox>
					<el-checkbox label="星期七" name="7"></el-checkbox>
				</el-checkbox-group>
			</el-form-item>
		</el-form>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				filters:{
					yyxm:[],
				}
			}
		}
	}
</script>