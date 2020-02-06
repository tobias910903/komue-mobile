let methodFun = {
    debounce: function (method, delay) {
        var timer=null;
        return function(){
            var context=this, args=arguments;
            clearTimeout(timer);
            timer=setTimeout(function(){
                method.apply(context,args);
            },delay);
        }
    },
    throttle: function(method, duration){
        var  begin=new Date();
        return function(){
            var context=this, args=arguments, current=new Date();
            if(current-begin>=duration){
                method.apply(context,args);
                begin=current;
            }
        }
    }
}

export default methodFun;

/*
function resizehandler(){
      console.log(++n);
}
window.onresize = this.$utils.method.debounce(resizehandler, 500);
*/
