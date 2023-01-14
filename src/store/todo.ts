import {action, makeAutoObservable, makeObservable, observable} from "mobx";
type todoType={
    id:number,
    title: { value:number,text:string },
    completed:boolean
}
 class Todo{
    todos:todoType[]=[
        {id:1,title: {value:1,text:'hi'},completed:false},
        {id:2,title:{value:3,text:'yo'},completed:false},
        {id:3,title:{value:2,text:'there'},completed:false}
    ]
    constructor() {
        // makeObservable(this,{todos:observable, updateTitle:action}, {deep:true}) слежение в глубину
        // makeObservable(this,{todos:observable, addTodo:action}) слежение за конкретным полем
    makeAutoObservable(this)
    }
    addTodo(title:string){

        const todo:todoType={id:this.todos.length+1,title:{value:1,text:title},completed:false}
        this.todos.push(todo)
    }
    removeTodo(id:number){
        this.todos=this.todos.filter(t=>t.id!==id)
    }
    toggleCheckedTodo(id:number){
        this.todos=this.todos.map(t=>t.id===id?{...t,completed:true}:t)
    }
    updateTitle(id:number,title:string){
        this.todos=this.todos.map(t=>t.id===id?{...t,title:{...t.title,text:title}}:t)
    }

}
export default new Todo()