/**
 * 地图选中管段观察者类
 */
define([
    'dojo/_base/declare'
], function (declare) {
    var instance = null, clazz;
    clazz = declare(null, {

        _messages: {},

        //注册信息接口
        regist: function (type,fn,thisRef) {
            /*//如果此消息不存在则创建一个该消息类型
            if(typeof this._messages[type] === 'undefined'){
                //将该消息推入到该消息对应的动作执行队列中
                this._messages[type] = [fn];
            //如果此消息存在
            }else{
               //将该消息推入到该消息对应的动作执行队列中
                this._messages[type].push(fn);
            }*/
            //如果此消息不存在则创建一个该消息类型
            if(typeof this._messages[type] === 'undefined'){
                //将该消息推入到该消息对应的动作执行队列中
                this._messages[type] = [{fn:fn,thisRef:thisRef}];//存储对应this指针
                //如果此消息存在
            }else{
                //将该消息推入到该消息对应的动作执行队列中
                this._messages[type].push({fn:fn,thisRef:thisRef});
            }
        },

        //发布信息接口
        fire: function (type,args,noExcuteFn) {
            //如果该消息没有被注册，则返回
            if(!this._messages[type])
                return;
            //定义消息信息
            var events = {
                type:type,   //消息类型
                args:args||{} //消息携带数据
            };
            var i=0; //消息动作循环变量
            var len =this._messages[type].length; //消息动作长度
            //遍历消息动作
            for(;i<len;i++){
                //依次执行注册的消息对应的动作序列
                //this._messages[type][i].call(this,events);
                this._messages[type][i]["fn"]!=noExcuteFn&&this._messages[type][i]["fn"].call(this._messages[type][i]["thisRef"],events);
            }
        },

        //移除信息接口
        remove: function (type,fn) {
            //如果消息动作队列存在
            if(this._messages[type] instanceof Array){
                //从最后一个消息动作遍历
                var i=this._messages[type].length-1;
                for(;i>=0;i--){
                    //如果存在该消息动作序列中移除相应动作
                    //this._messages[type][i]===fn&&this._messages[type].splice(i,1);
                    this._messages[type][i]["fn"]===fn&&this._messages[type]["fn"].splice(i,1);
                }
            }
        }

    });
    clazz.getInstance = function () {
        if (instance === null) {
            instance = new clazz();
        }
        return instance;
    };
    return clazz;
});