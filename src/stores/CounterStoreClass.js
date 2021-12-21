import {
  action,
  makeObservable,
  observable,
  computed,
  autorun,
  when,
  reaction,
} from 'mobx';

export class CounterStoreClass {
  count = 0;

  get color() {
    return this.count > 0 ? 'green' : this.count < 0 ? 'red' : 'black';
  }

  constructor() {
    makeObservable(this, {
      count: observable,
      color: computed,
      dec: action,
      inc: action.bound,
    });

    // autorun(() => console.log(`count: ${this.count}`)); //вызывается если одна из зависимостей изменяется

    // when(
    //   //вызывается 1 раз по достижении результата, затем удаляется
    //   () => this.count > 5, //predicate
    //   () => console.log(`count>5: ${this.count}`) //effect
    // );

    const disposer = reaction(
      () => this.count,
      (count, prevCount) => {
        //выражение - эффект - опции
        console.log(`prevCount: ${prevCount}, count: ${count}`);

        if (count > 5) {
          disposer();
        }
      }
    );
  }

  dec = () => this.count--;

  inc() {
    this.count++;
  }
}
