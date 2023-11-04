class CustomEventEmitter{
    handles={}

    emit(eventName){
        this.handles[eventName].forEach((cb)=>{
            cb()
        }) 
    }

    on(eventName,cb){
        if(!this.handles[eventName]){
            this.handles[eventName]=[]
        }
       this.handles[eventName].push(cb) 
    }
}

eventEmitter=new CustomEventEmitter();

eventEmitter.on('message',()=>{
    console.log('logged')
})

eventEmitter.on('message',()=>{
    console.log('send Notification')
})

eventEmitter.emit('message')

