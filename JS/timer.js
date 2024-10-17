class Timer {
    constructor(durationInput,startButton,pauseButton,callbacks){
        this.durationInput=durationInput;
        this.startButton=startButton;
        this.pauseButton=pauseButton;
        this.startButton.addEventListener('click',this.start);
        this.pauseButton.addEventListener('click',this.pause);
        if(callbacks){
            this.onStart = callbacks.onStart;
            this.onComplete = callbacks.onComplete;
            this.onTick =   callbacks.onTick;
        }
    }
    start =()=>{
        if(this.onStart){
            this.onStart(this.timeRemaining);
        }
            this.tick();
            this.TimerId =   setInterval(this.tick,50)
        
    }
    pause =()=>{
            clearInterval(this.TimerId)
    }
    tick =()=>{
            if(this.timeRemaining <= 0){
                this.pause();
                if(this.onComplete)
                    this.onComplete();
            }
            else{
                this.timeRemaining -= (50/1000);
                if(this.onTick)
                    this.onTick(this.timeRemaining)
            }
    }
    get timeRemaining(){
        return parseFloat(this.durationInput.value);
    }
    set timeRemaining(time){
        this.durationInput.value = time.toFixed(2) ;
    }

}