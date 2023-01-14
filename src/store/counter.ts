import {makeAutoObservable} from "mobx";

class Counter {
    count=0
    timer=60
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
    get total(){
        return `Counter+timer=${this.count + this.timer}`
    }
}
export default new Counter()