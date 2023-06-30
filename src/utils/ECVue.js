    var noop = function (){}
    var sharedPropertyDefinition = {
        get(){},
        set(){}
    };
    export function ECVue(options){
        if(!this instanceof ECVue){
            console.log('ECVue是一个构造函数，应使用“new”关键字调用');
        }
        this._init(options)
    }
    ECVue.prototype._init = function (options) {
        var sc = this; //Vue实例
        sc.$options = options
        //代码进行了删减
        initState(sc);
    }
    function initState(sc) {
        var opts = sc.$options; //这里是我们在创建实例的时候传的参数
        //如果传了methods 则去调用
        if (opts.methods) { initMethods(sc, opts.methods); }
        if (opts.data) {
            initData(sc);
        }
    }
    function initMethods(sc, methods) {
        //循环methods对象
        for (var key in methods) {
            //给实例增加methods中的方法 这样其实我们就已经可以用vm访问 到methods中的方法了
            sc[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], sc);
        }
    }
    function initData(sc){
        var data = sc.$options.data;
        data = sc._data = typeof data === 'function'
            ? getData(data, sc)
            : data || {};
        var keys = Object.keys(data);
        var methods = sc.$options.methods;
        var i = keys.length;
        while (i--) {
            var key = keys[i];
            //判断key值有没有跟methods中的key重名
            {
                if (methods && hasOwn(methods, key)) {
                    console.log(key+"与methods重名");
                }
            }
            proxy(sc, `_data`, key)


        }
    }

    export function proxy (target, sourceKey, key) {

        sharedPropertyDefinition.get = function proxyGetter () {
            return this[sourceKey][key]
        }
        sharedPropertyDefinition.set = function proxySetter (val) {
            this[sourceKey][key] = val
        }
        Object.defineProperty(target, key, sharedPropertyDefinition)
    }

    function bind(method,sc){
        return method
    }

    function hasOwn(method,key){
        return method[key]?true:false
    }

    function getData(data,sc){
        return sc.$options.data()
    }


