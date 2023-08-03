// 深度克隆
import {isReadonly} from "vue";

export function deepClone(target) {
  return clone(target)
}

function isObject(target) {
  return (typeof target === 'object' && target) || typeof target === 'function'
}

function clone(data) {
  const map = new WeakMap()
  if (!isObject(data)) {
    return data
  }
  if ([Date, RegExp].includes(data.constructor)) {
    return new data.constructor(data)
  }
  if (typeof data === 'function') {
    return new Function('return ' + data.toString())()
  }
  const exist = map.get(data)
  if (exist) {
    return exist
  }
  if (data instanceof Map) {
    const result = new Map()
    map.set(data, result)
    data.forEach((val, key) => {

      if (isObject(val)) {
        result.set(key, clone(val))
      } else {
        result.set(key, val)
      }
    })
    return result
  }
  if (data instanceof Set) {
    const result = new Set()
    map.set(data, result)
    data.forEach(val => {
      if (isObject(val)) {
        result.add(clone(val))
      } else {
        result.add(val)
      }
    })
    return result
  }
  const keys = Reflect.ownKeys(data)

  const allDesc = Object.getOwnPropertyDescriptors(data)
  // 删除elementui tree中不可变的东西
  if(allDesc["$treeNodeId"]){
    allDesc["$treeNodeId"].configurable = true
    allDesc["$treeNodeId"].writable = true
    allDesc["$treeNodeId"].enumerable = true
  }
  const result = Object.create(Object.getPrototypeOf(data), allDesc)
  map.set(data, result)
  keys.forEach(key => {
    const val = data[key]
    if(key!="defaultAttributes"){
      if (isObject(val)) {
        result[key] = clone(val)
      } else {
        result[key] = val
      }
    }
    if(key === "$treeNodeId"){
      delete result["$treeNodeId"]
    }
  })
  return result
}

export function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
      v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
