<template>
  <div id="app" >
    <div class="title">Tasks 
        <span class="grey" v-if="processNum">
            {{`(${processNum})`}}
        </span> 
    </div>
    <div class="input-todo">
        <input v-model="newTask" 
        @keyup.enter="addTask"
        placeholder="input your new task~~~"/>
        <div class="add-btn" @click="addTask"> +Add </div>
    </div>
    <div class="clear">
        <div class="clear-completed" @click="clearCompleted"> clear completed </div>
        <div class="clear-all" @click="clearAll"> clear all </div>
    </div>
    <div class="task-list">
        <TodoItem v-for="(item, index) in list" 
        @clear="clearTask(index)"
        @complete="completeTask"
        :item="item"
        :index="index"
        :key="item.task"
        />
    </div>
  </div>
</template>

<script>
import TodoItem from './components/TodoItem.vue';

export default {
  name: 'App',
  components: {
    TodoItem,
  },
  // data(){
  //   return {

  //   }
  // },
  // props: {
  //   list: {
	// 		type: Array,
	// 		default: () => [{
  //       task: "eating and drinking",
  //       done: true
  //     },{
  //       task: "work hard",
  //       done: false
  //     }]
	// 	}
  // },
  // why can't write as this
  data(){
    return {
        list: [{
            task: "eating and drinking",
            done: true
        }, {
            task: "work hard",
            done: false
        }],
        newTask: ''
    }
  },
  computed:{
    processNum: function(){
      return this.list.filter((item) => !item.done).length
    }
  },
  methods: {
    addTask(){
      if(this.newTask){
        this.list.push({task: this.newTask, done: false})
        this.newTask = ''
      }
    },
    clearCompleted(){
      this.list = this.list.filter((item) => !item.done)
    },
    clearAll(){
      this.list = []
    },
    clearTask(index){
      this.list = this.list.filter((item, i) => i != index)
    },
    completeTask(props){
      // console.log('line 89',props)
      let index = props
      this.list[index].done = !this.list[index].done
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto 0;
  width: fit-content;

}
.input-todo{
  display: flex;
  margin: 10px 0;
}
.add-btn{
  margin-left: 50px;
}
.clear{
  margin: 20px 0;
  display: flex;
}
.clear-completed{
  margin-right: 50px;
}
</style>
