<template>
	<el-col :span="24" class="maincontent" >
		<el-col :span="15">
			<div class="mainTitle">到期时间列表</div>
			<el-table :data="users" highlight-current-row v-loading="listLoading"  style="width: 100%">
				<el-table-column prop="clsbdh"   label="名称" >
				</el-table-column>
				<el-table-column prop="jylx" width="100" label="类型" >
				</el-table-column>
				<el-table-column prop="gxsj"   label="到期时间">
					<template slot-scope="scope">
						<span>{{scope.row.gxsj | formDate }}</span>
					</template>
				</el-table-column>
				<el-table-column prop="hpzlmc" width="100" label="校验类型">
				</el-table-column>
				<el-table-column prop="hphm"  width="140" label="剩余天数"  fixed="right">
				</el-table-column>
			</el-table>
		</el-col>
		<el-col :span="9" style="padding-left: 20px">
			<div class="mainTitle mainTitle2">用户基本信息</div>
			<el-form  :model="filters" ref="filters" id="filterss" class="mainform" label-width="160px">
				<el-form-item label="用户名:" class="mainuserBox">
					<el-input v-model="filters.yhbh" placeholder="" :disabled="true"  ></el-input>
				</el-form-item>
				<el-form-item label="用户姓名:" class="mainuserBox">
					<el-input v-model="filters.yhxm" placeholder="" :disabled="true"  ></el-input>
				</el-form-item>
				<el-form-item label="用户角色:" class="mainuserBox">
					<el-input v-model="filters.jsmc" placeholder=""  :disabled="true" ></el-input>
				</el-form-item>
				<el-form-item label="用户部门:" class="mainuserBox">
					<el-input v-model="filters.bmmc" placeholder=""  :disabled="true" ></el-input>
				</el-form-item>
				<!--<el-form-item label="上次登录时间:" class="mainuserBox">-->
					<!--<el-input v-model="filters.scdlsj" placeholder=""  :disabled="true" ></el-input>-->
				<!--</el-form-item>-->
				<el-form-item label="本次登录IP:" class="mainuserBox">
					<el-input v-model="filters.scdlip" placeholder=""  :disabled="true" ></el-input>
				</el-form-item>
				<el-form-item label="本次登录时间:" class="mainuserBox">
					<el-input v-model="filters.dlsj" placeholder=""  :disabled="true" ></el-input>
				</el-form-item>
				<!--<el-form-item label="本次登录IP:" class="mainuserBox">-->
					<!--<el-input v-model="filters.dlipdz1" placeholder=""  :disabled="true" ></el-input>-->
				<!--</el-form-item>-->


			</el-form>
		</el-col>
	</el-col>
</template>
<script>
	export default{
		data(){
			return{
                filters:{

                },
                users: [],
                listLoading: false,
			}
		},
        methods:{

		},
        mounted(){
            var user = sessionStorage.getItem('user');
			console.log(user,'9999999999')
			if (user) {
                user = JSON.parse(user);
				this.filters = user || '';
			};
		}
	}
</script>


