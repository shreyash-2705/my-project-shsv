function touch(ob1,ob2){
    if(ob1.x-ob2.x<(ob1.width+ob2.width)/2 &&
    ob2.x-ob1.x<(ob1.width+ob2.width)/2&&
    ob1.y-ob2.y<(ob1.height+ob2.height)/2&&
    ob2.y-ob1.y<(ob1.height+ob2.height)/2 ){
      ob1.shapeColor='blue'
      ob2.shapeColor='blue'
    }else{
      ob1.shapeColor='red'
      ob2.shapeColor='black'
    }
  }
  function bounceOff(ob1,ob2){
    if(ob1.y-ob2.y<(ob1.height+ob2.height)/2&&
    ob2.y-ob1.y<(ob1.height+ob2.height)/2 ){
  ob1.velocityY=ob1.velocityY*(-1);
  ob2.velocityY=ob2.velocityY*(-1);
    }
  if(ob1.x-ob2.x<(ob1.width+ob2.width)/2 &&
  ob2.x-ob1.x<(ob1.width+ob2.width)/2){
    ob1.velocityX=ob1.velocityX*(-1);
  ob2.velocityX=ob2.velocityX*(-1);
  }
  }  