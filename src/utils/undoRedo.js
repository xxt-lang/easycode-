export default class undoRedo {
  constructor (max) {
    this.historyStore = []
    this.historyIndex = -1
    this.redoMethods = {}
    this.undoMethods = {}
    this.max = max || 100 // 最大记录数目
    this.length = 0
  }
  setMethods (that) {
    // 后退
    this.redoMethods = {
      addModel: function (item) {
        that.addModal(item.params.modalJson)
      },
      deleteModel: function (item) {
        that.deleteModel('ID', { id: item.params.modalJson.id })
      },
      moveModel: function (item) {
        that.setNodeParam(item.params.id, item.params.newPosition, true)
      },
      deleteLine: function (item) {
        let index = that.getModelByNode('ID', { type: item.params.modelLine.type, id: item.params.modelLine.id })
        that.deleteLine(index, item)
      },
      drawLine: function (item) {
        that.undoDrawLine(item.params.modelLine)
      }
    }

    // 撤销
    this.undoMethods = {
      addModel: function (item) {
        that.deleteModel('ID', { id: item.params.modalJson.id })
      },
      deleteModel: function (item) {
        that.addModal(item.params.modalJson)
      },
      moveModel: function (item) {
        that.setNodeParam(item.params.id, item.params.oldPosition, true)
      },
      deleteLine: function (item) {
        that.undoDrawLine(item.params.modelLine)
      },
      drawLine: function (item) {
        let index = that.getModelByNode('ID', { type: item.params.modelLine.type, id: item.params.modelLine.id })
        that.deleteLine(index, item)
      }
    }
  }

  additem (item) {
    // 撤销后重新添加记录 删除撤销的记录
    if (this.historyIndex !== this.historyStore.length - 1) {
      let dif = this.historyStore.length - this.historyIndex - 1
      this.historyStore.splice(this.historyIndex === -1 ? 0 : this.historyIndex + 1, dif)
    }

    // 新增记录
    this.historyStore.push(item)
    this.historyIndex++

    // 超出
    if (this.historyIndex + 1 > this.max) {
      this.historyStore.shift()
      this.historyIndex--
    }

    this.length = this.historyStore.length
  }

  // 后退
  undo () {
    if (this.historyStore.length === 0 || this.historyIndex < 0) return undefined
    let index = JSON.parse(JSON.stringify(this.historyIndex))
    this.historyIndex--
    return this.historyStore[index]
  }
  // 前进
  redo () {
    if (this.historyStore.length === 0 || this.historyIndex + 1 >= this.historyStore.length) return undefined
    this.historyIndex++
    let index = JSON.parse(JSON.stringify(this.historyIndex))
    return this.historyStore[index]
  }
  // 清空历史记录
  deleteHistory () {
    this.historyStore = []
    this.historyIndex = -1
    this.length = 0
  }

  showHistory () {
    return this.historyStore
  }
}
