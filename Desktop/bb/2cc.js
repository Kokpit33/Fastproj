let result = document.getElementById('result');
let deleter = document.getElementsByClassName('.deleter-btn');
function appendToDisplay(value){
    result.value += value;
}
function clearDisplay(){
    result.value = '';

}
for(value=0;value<result;value++){
    result[1].deleter.cal(display)

}
function calculate(){
    try{
        result.value=eval(result.value);
    }catch(error){
       result.value = 'error'; 
    }
}
document.getElementsByClassName('AC-btn color-btn').addEventListener('click',function cal(){
 
})
