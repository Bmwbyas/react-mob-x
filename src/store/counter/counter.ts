import {makeAutoObservable} from "mobx";
import {RootStore} from "../store";

export class Counter {
    count=0
    timer=60
    rootStore: RootStore;
    constructor(rootStore:any) {
        this.rootStore = rootStore;
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
