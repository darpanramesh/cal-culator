function insert(num){
    document.form.textview.value = document.form.textview.value + num 
}
function equal() {
    var exp = document.form.textview.value;
    if(exp){
    document.form.textview.value = eval(exp)
    }
}
function floor(){
    var floor = document.form.textview.value;
    document.form.textview.value = Math.floor(floor);
}
function ceil(){
    var ceil = document.form.textview.value;
    document.form.textview.value = Math.ceil(ceil);
}
function round(){
    var round = document.form.textview.value;
    document.form.textview.value = Math.round(round);
}
function clean(){
    document.form.textview.value = ""
}
function back(){
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length-1);
}
function screen(key){
    return (key >= '0' && key <= '9') || key == '+' || key == ')' || key == '(' ||
    key == '-' || key == 'arrowleft' ||key == 'arrowright' || key == 'Delete' || key == 'Backspace' ||
    key == 'enter' 
}