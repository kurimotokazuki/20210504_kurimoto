<template>
 <div id="app">
   <div class="container">
     <div class="card">
       <p class="title mb-15">Todo List</p> 
       <div class="todo">
             <div class="flex between mb-15">
             <input type="text" class="input-add" v-model="childText" />
             <button class="button-add" @click="sendParent">追加</button>
             </div>
              <div class="flex between mb-5">
           <input type="text" class="input-update">
           <div class="none">
             <button class="button-update">
               更新
             </button>
             <button class="button-delete">
               削除
             </button>
             </div>
           </div>
         </div>
         </div>
       </div>
     </div>
</template>

<script>
export default {
  data() {
    return {
      childText: ""
    };
  },
  methods: {
    sendParent() {
      this.$emit("getChildText", this.childText);
      this.childText = "";
    }
  }
};
</script>


<style scoped>
.container {
  background-color: #2d197c;
  height: 100vh;
  width: 100vw;
  position: relative;
}

p {
    
    color: #000;
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

.title {
  font-weight: bold;
  font-size: 24px;
}

.mb-15 {
  margin-bottom: 15px;
}

.between {
    justify-content: space-between;
}

.flex {
    display: flex;
}

.input-add{
    width: 80%;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    font-size: 14px;
    outline: none;
}

button {
    appearance: auto;
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: -internal-light-dark(black, white);
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: center;
    align-items: flex-start;
    cursor: default;
    background-color: -internal-light-dark(rgb(239, 239, 239), rgb(59, 59, 59));
    box-sizing: border-box;
    margin: 0em;
    font: 400 13.3333px Arial;
    padding: 1px 6px;
    border-width: 2px;
    border-style: outset;
    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
    border-image: initial;
}

input {
  width: 80%;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid black;
  color: black;
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

.input-update{
    width: 30%;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    font-size: 14px;
    outline: none;
}

.button-update {
    text-align: left;
    border: 2px solid #fa9770;
    font-size: 12px;
    color: #fa9770;
    background-color: #fff;
    font-weight: bold;
    padding: 8px 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.4s;
    outline: none;
}

.button-delete{
    text-align: left;
    border: 2px solid #71fadc;
    font-size: 12px;
    color: #71fadc;
    background-color: #fff;
    font-weight: bold;
    padding: 8px 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.4s;
    outline: none;
}
</style>