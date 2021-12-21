import React from 'react'
import { observer, useLocalObservable } from 'mobx-react'

const CounterFC = observer(({initialCount}) => {
    const store = useLocalObservable(() => {
        return {
            count: initialCount ?? 0,
            dec() {
                this.count--
            },
            inc() {
                this.count++
            }
        }
    })
    return <div>
        <button onClick={store.dec}>-</button>
        <span>{store.count}</span>
        <button onClick={store.inc}>+</button>
    </div>
})

export default CounterFC;