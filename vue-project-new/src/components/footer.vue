<template>
  <div class="footer">
    <div class="readType" v-if="readType.count">{{readType.count}}</div>
        <ul class="main-nav">
            <li>
                <router-link to="/home">
                    <i class="icon-nav icon-nav1"></i><span>首页</span>
                </router-link>
            </li>
            <li>
                <router-link to="/quan" v-bind:class="{rrouter:activ}">
                    <i class="icon-nav icon-nav2"></i><span>学友圈</span>
                </router-link>
            </li>
            <li>
                <router-link to="/friend">
                    <i class="icon-nav icon-nav3"></i><span>学友</span>
                </router-link>
            </li>
            <li>
                <router-link to="/find">  
                    <i class="icon-nav icon-nav4"></i><span>发现</span>
                </router-link>
            </li>
            <li>
                <router-link to="/mine">
                    <i class="icon-nav icon-nav5"></i><span>我的</span>
                </router-link>
            </li>
        </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
