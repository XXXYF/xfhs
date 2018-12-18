<template>
	<div>45464564</div>
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


