<template>
    <div>
        <h1>login组件，使用网页中的形式创建出来</h1>
        <h1>{{ msg }}</h1>
        <router-link to="/account">Account</router-link>
			<router-link to="/goodlist">GoodList</router-link>
			<router-view></router-view>
    </div>

</template>

<script>
export default {
    data(){
        return {
            msg:'123'
        }
    },
    methods:{
        show(){
            console.log('调用了login组件内的show方法')
        }
    }
}
</script>