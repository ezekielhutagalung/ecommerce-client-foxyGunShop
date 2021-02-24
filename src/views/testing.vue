<template>
<div class>
  <input type="radio" id="chk1" name="a1" style="display: none">
  <input type="radio" id="chk2" name="a1" style="display: none">
  <div class="box">
    <div class="a">
      <label for="chk1">Login</label>
      <label for="chk2" id="sup">Sign Up</label>
    </div>
    <div class="b">
      <form action="" class="frm">
        <h6 class="title">Sign-Up Form</h6>
        <input type="text" placeholder="enter your name">
        <input type="text" placeholder="enter your email">
        <input type="text" placeholder="enter your password">
        <input type="button" value="Sign-Up" id="btn">
        <label for="chk1" id="btm">Login Here</label>
      </form>
    </div>
    <div class="c">
      <form action="" class="frm">
        <br> <br> <br> <br> <br> <br>
        <h6 class="title">Login</h6>
        <input type="text" placeholder="enter your email">
        <input type="text" placeholder="enter your password">
        <input type="button" value="Login" id="btn">
        <label for="chk2" id="btm">Sign Up Here</label>
      </form>
    </div>
    <div class="d"></div>
    <div class="e"></div>
  </div>

</div>
</template>

<script>
export default {

}
</script>

<style>
*{
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  font-family: sans-serif;
  transition: is ease;
}

body{
  background-image: linear-gradient(45deg, #8000ff, #ff00c4);
  background-attachment: fixed;
  background-size: cover;
  perspective: 1000px;
}

.box{
  position: absolute;
  height: 500px;
  width: 350px;
  left: calc(44% - 100px);
  top:calc(250% - 100px);
  transform-style: preserve-3d;
  transform: rotateY(-130deg);
}

.box div{
  width: 350px;
  height: 500px;
  position: absolute;
  background-image: radial-gradient(#fff, #ffbef8);
  box-shadow: 0px 0px 5px #ff44f8, 0px 0px 30px #ff44f8,
    inset 0px 0px 5px #ff44f8, 0px 0px 30px #ff44f8;
  border: 3px solid #ff7dfa
}

.box div:nth-child(5) {
  height: 350px;
  box-shadow: 0px 0px 10px #81007c, 0px 0px 30px #81007c;
}

.a{transform: rotateY(0deg) translateZ(200px);}
.b{transform: rotateY(90deg) translateZ(200px);}
.c{transform: rotateY(180deg) translateZ(200px);}
.d{transform: rotateY(270deg) translateZ(200px);}
.e{transform: rotateX(-90deg) translateZ(325px);}

.a label{
  position:relative;
  width: 200px;
  left: 55px;
  top:100px;
  color: white;
  font-size: 20px;
  height: 50px;
  line-height: 50px;
  margin: 20px;
  text-align: center;
  display: block;
  background-image: linear-gradient(45deg, #8000ff, #ff00c4);
  border-radius: 25px;
  box-shadow: 0px 0px 10px #81007c, 0px 0px 30px #81007c;
  cursor: grab;
}

#btn:focus{
  width: calc(100% - 80px);
  left: 40px;
}
.title{
  width: 100%;
  text-align: center;
  line-height: 30px;
  font-size: 25px;
  font-weight: bold;
  text-shadow: 0px 0px 20px #ff00c4;
  position: absolute;
}
.frm input{
  position: relative;
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
  box-shadow:  0px 0px 10px #81007c, 0px 0px 30px #81007c;
  margin: 20px 0px;
  font-size: 16px;
}

.frm input:focus{
  width: calc(100% - 40px);
  left: 20px;
  background:#ffcbf9 ;
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
}

#chk1:checked ~ .box{transform: rotateY(-180deg);}
#chk2:checked ~ .box{transform: rotateY(-90deg);}
</style>
