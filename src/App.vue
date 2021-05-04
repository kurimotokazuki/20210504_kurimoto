<template>
  <div id="app" class="container">
    <div class="card">
    <h1>
      Todo List
      </h1>
      <div class="flex between mb-15">
      <form @submit.prevent="addItem">
     <input type="text" class="input-add" v-model="newItem">
     <input type="submit" class="button-add" value="追加">
   </form>
      </div>
      <div class="flex between mb-15">
   <ul>
     <li v-for="(todo,index) in todos" :key="index">
     <input type="text" class="input-update" v-model="todo.title">
     <div>
     <span @click="modItem(index)" class="commit">更新</span>
     <span @click="deleteItem(index)" class="command">削除</span>
     </div>
     </li>
   </ul>
      </div>
   </div>
  </div>
</template>

<script>
export default{
  data() {
    return {
      newItem: '', 
      todos: []
    };
  },
  watch: {
    todos: {
      handler: function() {
      localStorage.setItem('todos',JSON.stringify(this.todos));
      },
      deep: true
    }
  },
  mounted: function() {
  this.todos = JSON.parse(localStorage.getItem('todos')) || [];
  },
  methods: {
    addItem: function() {
      var item = {
        title:this.newItem,
        isDone:false
      };
      this.todos.push(item);
      this.newItem='';
    },
    deleteItem: function(index) {
      this.todos.splice(index, 1);
  },
  modItem: function() {
  console.log("modButton click");
this.todos;
  },
  purge: function() {
      if(!confirm('delete finished?')) {
      return;
    }   
    this.todos = this.remaining;
  }
  },
  computed: {
    remaining: function() {
     return this.todos.filter(function(todo){
        return !todo.isDone;
     });
    }
  }
};
</script>

<style>
template {
font-size: 16px;
font-family: Verdana,sans-serif;
}

.container{
   background-color: #2d197c;
  height: 100vh;
  width: 100vw;
  position: relative;
}

.card {
    background-color: #fff;
    width: 50vw;
    padding: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
}

#app h1{
  font-size: 24px;
  margin: 0;
  padding-bottom: 10px;
}

#app li {
  line-height: 1.5;
  
}

#app input [type="text"] {
  padding: 2px;
}

.command {
    border: 2px solid #71fadc;
    font-size: 12px;
    color: #71fadc;
    background-color: #fff;
    font-weight: bold;
    padding: 10px 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.4s;
    outline: none;
}

.commit{
   text-align: left;
    border: 2px solid #fa9770;
    font-size: 12px;
    color: #fa9770;
    background-color: #fff;
    font-weight: bold;
    padding: 10px 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.4s;
    outline: none;
}

#app ul{
  padding: 0;
  list-style: none;
}


#app h1 > button {
  float:right;
}

.info{
  color: #bbb;
  font-size: 12px;
  font-weight: normal;
}

.button-add {
    text-align: left;
    border: 2px solid #dc70fa;
    font-size: 12px;
    color: #dc70fa;
    background-color: #fff;
    font-weight: bold;
    padding: 8px 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.4s;
    outline: none;
}

.input-add{
    width: 80%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    font-size: 14px;
    outline: none;
}

.input-update{
    width: 30%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    font-size: 14px;
    outline: none;
}

.mb-15 li{
  margin-bottom: 5px;
}

.between li,
.between form{
    justify-content: space-between;
}

.flex li,
.flex form {
  display: flex;
}



</style>