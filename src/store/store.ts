
import {Todo} from "./todo/todo";
import {Counter} from "./counter/counter";
import {makeAutoObservable} from "mobx";

export class RootStore {
   todo:Todo;
   counter:Counter;
   constructor() {
       this.todo=new Todo(this)
       this.counter=new Counter(this)
       makeAutoObservable(this)
   }
}


