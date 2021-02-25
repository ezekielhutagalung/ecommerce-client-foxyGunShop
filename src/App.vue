<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}
.img{
  width:100px;
  height:100px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

@import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap');
body{
  background-image: url('https://wallpaperaccess.com/full/2129027.jpg');
  background-attachment: fixed;
  background-size: cover;
  perspective: 5000px;
  animation: shrink 12s infinite alternate;
}

*{
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  font-family: sans-serif;
  transition: is ease;
}

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: rgb(253, 253, 253);
  text-shadow: 2px 2px #000000;
  font-weight: bolder;
  opacity: 1; /* Firefox */
}

.tai{
  position: relative;
  height: 100vh;
  width: 350px;
  left: calc(44% - 100px);
  top:calc(250% - 100px);
  transform-style: preserve-3d;
  transform: rotateY(-90deg);
  transition: all 1s;
}

.tai div{
  width: 350px;
  height: 500px;
  position: absolute;
  box-shadow: 0px 0px 5px #ff44f8, 0px 0px 30px #ff44f8,
    inset 0px 0px 5px #ff44f8, 0px 0px 30px #ff44f8;
  border: 3px solid #ff7dfa
}

.tai div:nth-child(5) {
  height: 350px;
  box-shadow: 0px 0px 10px #81007c, 0px 0px 30px #81007c;
}

.a{transform: rotateY(0deg) translateZ(175px);}
.b{transform: rotateY(90deg) translateZ(175px);}
.c{transform: rotateY(180deg) translateZ(175px);}
.d{transform: rotateY(270deg) translateZ(175px);}
.e{transform: rotateX(-90deg) translateZ(325px);}

.img{
   position: relative;
}
#sup, #btn{
  background-image:linear-gradient(45deg, #ff00c4, #8000ff);
  color:white;
  cursor:'pointer'
}

#btn1{
  background-image:linear-gradient(45deg, #ff00c4, #8000ff);
  color:white;
  cursor:'pointer'
}

.head{
  font-family: 'Black Ops One', cursive;
  font-weight: bolder;
  background-image:linear-gradient(45deg, #ff00c4, #8000ff);
  color:#f4f9f9;
  border-radius: 25px;
  box-shadow: 0px 0px 10px #81007c, 0px 0px 30px #81007c;
}

.title{
  width: 100%;
  text-align: center;
  line-height: 30px;
  font-size: 25px;
  font-weight: bold;
  color: aliceblue;
  background-image: linear-gradient(45deg, #8000ff, #ff00c4);
  text-shadow: 0px 0px 20px #ff00c4;
  position: absolute;
}
.frm input{
  position: relative;
  background-image: linear-gradient(45deg, #8000ff, #ff00c4);
  width: calc(100% - 80px);
  left: 40px;
  display: block;
  text-align: center;
  line-height: 40px;
  top: 40px;
  background: none;
  outline: none;
  border: none;
  border-radius: 25px;
   font-weight: bold;
  box-shadow:  0px 0px 10px #81007c, 0px 0px 30px #81007c;
  margin: 20px 0px;
  color: rgb(251, 245, 245);
  font-size: 16px;
}

.frm input:focus{
  width: calc(100% - 40px);
  left: 20px;
  background:#e44949 ;
  color: rgb(0, 0, 0);
  box-shadow: 0px 0px 5px #000, 0px 0px 30px #c900b2;
}

#btm {
  position: relative;
  top: 100px;
  font-size: 20px;
  color: #720058;
  text-align: center;
  width: 100%;
  cursor: pointer;
   border-radius: 10px;
  background-image: linear-gradient(45deg, #8000ff, #ff00c4);
  color: #ffffff;
}

@keyframes shrink {
  0% {
    background-size: 110% 110%;
  }

  10% {
    background-size: 109% 109%;
  }

  20% {
    background-size: 108% 108%;
  }

  30% {
    background-size: 107% 107%;
  }

  60% {
    background-size: 105% 105%;
  }

  80% {
    background-size: 103% 103%;
  }

  100% {
    background-size: 100% 100%;
  }
}

#chk1:checked ~ .box{transform: rotateY(-180deg);}
#chk2:checked ~ .box{transform: rotateY(-90deg);}
</style>
