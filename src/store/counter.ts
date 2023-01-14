import {makeAutoObservable} from "mobx";

class Counter {
    count=0
    constructor() {
        makeAutoObservable(this);

    }
    increment(){
        this.count=this.count+1
        console.log('increment',this.count)
    }
    decrimente(){
        this.count=this.count-1
        console.log('dec',this.count)
    }
}
export default new Counter()