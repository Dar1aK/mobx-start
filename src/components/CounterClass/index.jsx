import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { runInAction } from 'mobx';

import { CounterStoreClass } from '../../stores';

const store = new CounterStoreClass();

export const CounterClass = observer(
  class extends Component {
    componentDidMount() {
      runInAction(() => (store.count = this.props.initialCount ?? 0));
    }

    render() {
      return (
        <div>
          <button onClick={store.dec}>-</button>
          <span style={{ color: store.color }}>{store.count}</span>
          <button onClick={store.inc}>+</button>
        </div>
      );
    }
  }
);
