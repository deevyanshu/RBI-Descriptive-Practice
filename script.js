const questionLabel=document.getElementById('question-label');
const answerLabel=document.getElementById('answer-label');
const questionTextarea = document.getElementById('question');
const answerTextarea = document.getElementById('answer');
const save=document.getElementById('save');
const wordCountSpan = document.getElementById('wordCount');
const timer=document.querySelector('.timer');
const btnTimer=document.getElementById('timer-btn');
var maxWords = 600;
var time=15;
var val="largeMarker";
let interval;

        function essay(){
            maxWords=600;
            time=30*60;
            wordCountSpan.innerText=maxWords;
            timer.innerText="30:00";
            questionTextarea.placeholder="Essay Topic";
            questionLabel.innerText="Essay Topic";
            answerLabel.innerText="Essay";
            answerTextarea.placeholder="Write your essay here...";
        }

        function largeMarker(){
            maxWords=600;
            time=15*60;
            timer.innerText="15:00";
            wordCountSpan.innerText=maxWords;
            questionTextarea.placeholder="Enter your question here...";
            questionLabel.innerText="Question";
            answerLabel.innerText="Answer";
            answerTextarea.placeholder="Start typing your answer...";
        }

        function smallMarker(){
            maxWords=400;
            time=15*60;
            timer.innerText="15:00";
            wordCountSpan.innerText=maxWords;
            questionTextarea.placeholder="Enter your question here...";
            questionLabel.innerText="Question";
            answerLabel.innerText="Answer";
            answerTextarea.placeholder="Start typing your answer...";
        }

        function initialDisplay(){
            if(val==="largeMarker")
            {
                largeMarker();
            }else if(val==="smallMarker")
            {
                smallMarker();
            }else
            {
                essay();
            }
        }

        answerTextarea.addEventListener('input', function() {
            const words = this.value.trim().split(/\s+/).filter(word => word !== '').length;
            const wordsLeft = maxWords - words;
            wordCountSpan.textContent = wordsLeft;

            if (words > maxWords) {
                // this.value = this.value.split(/\s+/).slice(0, maxWords).join(' ');
                // wordCountSpan.textContent = 0;
                this.addEventListener('keydown',(e)=>{
                    if(e.key === " ")
                    {
                        e.preventDefault();
                        alert("Maximum word limit reached");
                    }
                })
            }
        });

        function resetTime(){

            if(val==="largeMarker" || val==="smallMarker")
            {
                time=15*60;
                let minutes=Math.floor(time/60);
                    let seconds=time%60;
                    minutes=(minutes<10)?"0"+minutes:minutes;
                    seconds=(seconds<10)?"0"+seconds:seconds;
                    timer.innerText=`${minutes}:${seconds}`;
            }else
            {
                time=30*60;
                let minutes=Math.floor(time/60);
                    let seconds=time%60;
                    minutes=(minutes<10)?"0"+minutes:minutes;
                    seconds=(seconds<10)?"0"+seconds:seconds;
                    timer.innerText=`${minutes}:${seconds}`;
            }
        }
        
        function startTimer(){
            
            
            if(btnTimer.innerText==="Start")
            {
                btnTimer.innerText="Stop";
                 interval=setInterval(()=>{
                    let minutes=Math.floor(time/60);
                    let seconds=time%60;
                    minutes=(minutes<10)?"0"+minutes:minutes;
                    seconds=(seconds<10)?"0"+seconds:seconds;
                    timer.innerText=`${minutes}:${seconds}`;
                    time--;
                    if(time<0)
                    {
                        clearInterval(interval);
                        btnTimer.innerText="Start";
                        alert("Time's up!");
                        resetTime();
                    }
                },1000);
                
            }else
            {
                clearInterval(interval);
                btnTimer.innerText="Start";
            }
            
        }

        initialDisplay();