<template>
  <div class="tags-view-container">
  <div class='tags-view-wrapper'>
    <!-- <scroll-pane class='tags-view-wrapper' ref='scrollPane'> -->
      <router-link ref='tag' class="tags-view-item" :class="isActive(tag)?'active':''" v-for="tag in Array.from(visitedViews)"
        :to="tag.path" :key="tag.path" @contextmenu.prevent.native="openMenu(tag,$event)">
        {{tag.name}}
        <span class='el-icon-close' @click.prevent.stop='closeSelectedTag(tag)'></span>
      </router-link>
    </div>
    <!-- </scroll-pane> -->
    <!-- <ul class='contextmenu' v-show="visible" :style="{left:left+'px',top:top+'px'}">
      <li @click="closeSelectedTag(selectedTag)">Close</li>
      <li @click="closeOthersTags">Close Others</li>
      <li @click="closeAllTags">Close All</li>
    </ul> -->
  </div>
</template>

<script>
// import ScrollPane from '@/components/ScrollPane'
// import { generateTitle } from '@/utils/i18n'

export default {
  // components: { ScrollPane },
  data() {
    return {
      visible: false,
      top: 0,
      left: 0,
      selectedTag: {}
    }
  },
  computed: {
    // visitedViews() {
    //   //存储所有路由数据
    //   // let para = this.$store.state.tagsView.visitedViews ;
    //   // console.log(para,'12399999')
    //   // sessionStorage.setItem('rotname',JSON.stringify(para))
    //   // var edit = JSON.parse(sessionStorage.getItem('rotname'))
    //   // console.log(edit,'12345')
    //   console.log('1')
    //   return this.$store.state.tagsView.visitedViews 
    //   console.log('2')
    //   //return this.$store.state.tagsView.visitedViews

    // }
    // visitedViews() {
    //   //存储所有路由数据
    //   let para = this.$store.state.tagsView.visitedViews ;
    //   console.log(para,'12399999')
    //   if(para){
    //       sessionStorage.setItem('rotname',JSON.stringify(para))
    //   }
      
    //   // var edit = JSON.parse(sessionStorage.getItem('rotname'))
    //   // console.log(edit,'12345')
    //   console.log('1')
    //   return this.$store.state.tagsView.visitedViews ?  this.$store.state.tagsView.visitedViews : JSON.parse(sessionStorage.getItem(rotname))
    //   console.log('2')
    //   //return this.$store.state.tagsView.visitedViews

    // },
    visitedViews() {
      //存储所有路由数据
      let para = this.$store.state.tagsView.visitedViews ;
      console.log(para,'12399999')
      if(para.length > 1){
        console.log('44')
          localStorage.setItem('rotname',JSON.stringify(para))
      }
      
      // var edit = JSON.parse(sessionStorage.getItem('rotname'))
      // console.log(edit,'12345')
      console.log('1')

       return para.length < 2 ?  this.$store.state.tagsView.visitedViews : JSON.parse(localStorage.getItem('rotname'))

      console.log('2')
      //return this.$store.state.tagsView.visitedViews

    },



  },
  watch: {
    $route() {
      this.addViewTags()
      this.moveToCurrentTag()
    },
    visible(value) {
      if (value) {
        document.body.addEventListener('click', this.closeMenu)
      } else {
        document.body.removeEventListener('click', this.closeMenu)
      }
    }
  },
  mounted() {
    // let para = this.$store.state.tagsView.visitedViews 
    // console.log(para,'12355')
    // sessionStorage.setItem('rotname',JSON.stringify(para))
    // var editMsg = sessionStorage.getItem('rotname')
    // this.addViewTags = JSON.parse(editMsg)

    this.addViewTags()
  },
  methods: {
    // generateTitle, // generateTitle by vue-i18n

    generateRoute() {
      let para = this.$store.state.tagsView.visitedViews 
     // console.log(para,'12355')
      sessionStorage.setItem('rotname',JSON.stringify(para))
      var editMsg = sessionStorage.getItem('rotname')
      this.filters = JSON.parse(editMsg)
      //console.log(this.filters,'1111111111')
      

      //console.log('3')
      if (this.$route.name) {
        return this.$route
      }
      //console.log('4')
      return false
      //console.log('5')
    },
    isActive(route) {
      return route.path === this.$route.path || route.name === this.$route.name
      //console.log(route.path ,'6')
    },
    addViewTags() {
      const route = this.generateRoute()
     // console.log(this.generateRoute(),'000')
     // console.log(route,'222')
      //console.log('7')
      

      if (!route) {
        return false
      }
     // console.log('8')
      //console.log(route,'1111')
      this.$store.dispatch('addVisitedViews', route)
      //console.log('9')
    },
    moveToCurrentTag() {
      const tags = this.$refs.tag
      //console.log('10')
      // this.$nextTick(() => {
      //   for (const tag of tags) {
      //     if (tag.to === this.$route.path) {
      //       this.$refs.scrollPane.moveToTarget(tag.$el)
      //       break
      //     }
      //   }
      // })
    },
    closeSelectedTag(view) {
      this.$store.dispatch('delVisitedViews', view).then((views) => {
        if (this.isActive(view)) {
          const latestView = views.slice(-1)[0]
          if (latestView) {
            this.$router.push(latestView.path)
          } else {
            this.$router.push('/main')   //删除所有小标签页，默认首页出现
          }
        }
      })
    },
    closeOthersTags() {
      this.$router.push(this.selectedTag.path)
      this.$store.dispatch('delOthersViews', this.selectedTag).then(() => {
        this.moveToCurrentTag()
      })
    },
    closeAllTags() {
      this.$store.dispatch('delAllViews')
      this.$router.push('/')
    },
    openMenu(tag, e) {
      this.visible = true
      this.selectedTag = tag
      this.left = e.clientX
      this.top = e.clientY
      //console.log('4444')
    },
    closeMenu() {
      this.visible = false
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.tags-view-container {
  //border-bottom:1px solid #ccc;
  .tags-view-wrapper {
    background: #fff;
    height: 28px;
    padding:20px 10px 0;;
    //border-bottom: 1px solid #d8dce5;
    //box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04);
    .tags-view-item {
      display: inline-block;
      position: relative;
      height: 26px;
      line-height: 26px;
      border: 1px solid #0d6fba;
      color: #fff;
      background: #0d6fba;
      padding: 0 8px;
      font-size: 12px;
      margin-left: 10px;
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
      text-decoration:none;
      &:first-of-type {
        //margin-left: 15px;
      }
      &.active {
        background-color: #e4eeff;
        color: #0d6fba;
        border-color: #e4eeff;
        
      }
    }
  }
  .contextmenu {
    margin: 0;
    background: #fff;
    z-index: 2;
    position: absolute;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .3);
    li {
      margin: 0;
      padding: 7px 16px;
      cursor: pointer;
      &:hover {
        background: #eee;
      }
    }
  }
}
</style>

<style rel="stylesheet/scss" lang="scss">
//reset element css of el-icon-close
.tags-view-wrapper {
  .tags-view-item {
    .el-icon-close {
      width: 16px;
      height: 16px;
      vertical-align: 2px;
      border-radius: 50%;
      text-align: center;
      transition: all .3s cubic-bezier(.645, .045, .355, 1);
      transform-origin: 100% 50%;
      &:before {
        transform: scale(.6);
        display: inline-block;
        vertical-align: -3px;
      }
      &:hover {
        background-color: #b4bccc;
        color: #fff;
      }
    }
  }
}
</style>
