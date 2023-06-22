export default class Stack {
        // 初始化栈
        constructor(max) {
            this.max = max || 100
            this.point = -1 // 指向当前元素位置
            this.stack = []
        }
        // 向栈中推入元素
        push(element){
            // 当栈到达最大值时 删除栈底元素并
            if (this.max === this.size()) {
                this.stack.splice(0,1)
            }else{
                this.point++
            }
            this.stack.push(element)
        }
        // 删除栈顶元素并返回
        pop(){
            return this.stack.pop()
        }
        // 返回栈顶元素
        peek(){
            return this.stack[this.stack.length - 1]
        }
        // 判断栈是否为空
        isEmpty(){
            return this.stack.length === 0
        }
        // 清空栈
        clear(){
            this.stack = []
        }
        // 返回栈的大小
        size(){
            return this.stack.length
        }
        peekByIndex(index){
            if(index<0){
                index = 0
            }
            if(index>=this.size()){
                index = this.size()-1
            }
            return this.stack[index]
        }
        undo(){
            if(this.isEmpty()){
                return null
            }
            return this.stack[this.point <= 0 ? 0:this.point--]
        }
        redo(){
            if(this.isEmpty()){
                return null
            }
            return this.stack[this.point+1 >= this.size() ? this.size()-1 : ++this.point]
        }

}
