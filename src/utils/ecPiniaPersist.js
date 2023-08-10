export const updateStorage = (strategy, store) => {
    // 默认使用 sessionStorage
    const storage = strategy.storage || sessionStorage

    // 默认存储 key 为 store.$id
    const storeKey = strategy.key || store.$id

    if (strategy.paths) {
        // 遍历 paths 将对应的属性收集到 finalObj 中
        const partialState = strategy.paths.reduce((finalObj, key) => {
            finalObj[key] = store.$state[key]
            return finalObj
        }, {})

        // 执行存储
        storage.setItem(storeKey, JSON.stringify(partialState,re))
    } else {
        // 如果没有 paths，则按整个 store.$state 存储
        storage.setItem(storeKey, JSON.stringify(store.$state,re))
    }
}

export default ({ options, store }) => {
    // 判断插件功能是否开启
    if (options.persist?.enabled) {
        // 默认策略实例
        const defaultStrat = [
            {
                key: store.$id,
                storage: sessionStorage
            }
        ]

        const strategies = options.persist?.strategies?.length
            ? options.persist?.strategies
            : defaultStrat

        strategies.forEach(strategy => {
            const storage = strategy.storage || sessionStorage
            const storeKey = strategy.key || store.$id
            const storageResult = storage.getItem(storeKey)

            if (storageResult) {
                // 如果 storage 中存在同步数据
                store.$patch(JSON.parse(storageResult,re))
                updateStorage(strategy, store)
            }
        })

        store.$subscribe(() => {
            // 监听 state 变化，同步更新 storage
            strategies.forEach(strategy => {
                updateStorage(strategy, store)
            })
        })
    }
}
function re(key, value) {
    if (value instanceof Array) {
        return Array.from(value)
    }
    return value
}
