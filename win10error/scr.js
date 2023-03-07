window.onload=function(){
    loading();
}
var emjioInfo="";
var urlInfo="";
var errorCodeInfo="";
var failedOperationInfo="";
var qrCodeUrl="";
var intId;
/**
 * 加载进度
 */
function loading() {
    if(intId!=null) clearInterval(intId);//关闭定时器
    let loading=document.getElementById("loadingSchedule");
    let num=0;
    intId=sleepFor(1000,num,99,1,function() {
        loading.innerHTML=num;
        num++;
    },function() {
        console.log("加载结束");
        intId=null;//清除定时器
    });
}

function display() {
    console.log("显示设置");
    let div = document.getElementById("settings");
    div.style.display=div.style.display=="inline"?"none":"inline";
}

/**
 * 设置页面属性
 */
function setInfo() {
    loading();
    emjioInfo=document.getElementById("emjioInfo").value;
    urlInfo=document.getElementById("urlInfo").value;
    errorCodeInfo=document.getElementById("errorCodeInfo").value;
    failedOperationInfo=document.getElementById("failedOperationInfo").value;
    qrCodeUrl=document.getElementById("qrCodeInfo").value;

    console.log(emjioInfo+"  ::  "+urlInfo+"  ::  "+errorCodeInfo+"  ::  "+failedOperationInfo+"  ::  "+qrCodeUrl);
    if(emjioInfo!="") document.getElementById("emjio").innerText=emjioInfo;
    if(urlInfo!="") document.getElementById("url").innerText=urlInfo;
    if(errorCodeInfo!="") document.getElementById("errorCode").innerText=errorCodeInfo;
    if(failedOperationInfo!="") document.getElementById("failedOperation").innerText=failedOperationInfo;
    if(qrCodeUrl!="") document.getElementById("qrCode").style.backgroundImage='url("'+qrCodeUrl+'"),linear-gradient(#0084FF, #0084FF)';
}

/**
 * 循环 每delay时间后执行fun函数，循环完毕执行startFun函数
 * @param {Int} delay       每次循环等待时间
 * @param {Int} startNum    起始数值
 * @param {Int} endNum      结束数值
 * @param {Int} addNum      步长，每次增加，每次循环起始数值要增加的数
 * @param {Function} fun    循环函数，每次循环要执行的函数
 * @param {Function} startFun 后续函数，当循环函数执行完毕之后执行该函数
 * @return {int} 返回定时器的id
 */
function sleepFor(delay,startNum,endNum,addNum,fun,startFun) {
    //定时运行
    let intId=window.setInterval(function(){
        if (startNum<endNum) {//判断是否运行
            fun();//执行函数
            startNum+=addNum;//步长增加
        } else {
            startFun();//执行后续函数
            clearInterval(intId);//关闭定时器
        }
    },delay);
    return intId;
}