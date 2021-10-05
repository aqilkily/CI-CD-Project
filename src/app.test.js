window.addEventListener('DOMContentLoaded', yourFunction, false);

yourFunction() ;{
  var element = document.getElementById("test");
   if(typeof(element) != 'undefined' && element != null){
        console.log('Element exists!');
    } else{
        console.log('Element does not exist!');
    }
}