let btn = document.getElementById('btn');
let content = document.getElementById('content');
let voice = document.getElementById('voice');

function speak(text){
    let text_speech = new SpeechSynthesisUtterance(text);
    text_speech.rate = 1
    text_speech.pitch = 1
    text_speech.volume = 1
    text_speech.lang = 'hi-IN';
    // text_speech.lang = 'hi-GB';
    window.speechSynthesis.speak(text_speech)
}

function wishMe(){
    let day = new Date()
    let hours = day.getHours()
    if(hours >= 0 && hours<12){
        speak("Good Morning Sir");
    }
    else if(hours >= 12 && hours<16){
        speak("Good Morning Sir");
    }
    else{
        speak("Good Evening Sir");
    }
} 

window.addEventListener('load', ()=>{
    wishMe();
})

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult = (e) => {
    let current = e.resultIndex;
    let transcript = e.results[current][0].transcript;
    content.innerText = transcript
    takeCommand(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})

function takeCommand(message){
    btn.style.display="block"
    voice.style.display="none"
    if(message.includes("hello") || message.includes("hey")){
        speak("hello sir, what can i help you?");
    }
    else if(message.includes("who are you") || message.includes("hu r u")){
        speak("i am virtual assistant, created by Rana Jee");
    }
    else if(message.includes("ya good") || message.includes("ya great work") || message.includes("great work")){
        speak("Thank you so much, Have a nice day");
    }
    else if(message.includes("ashish") || message.includes("ashish")){
        speak("Ha, Ham jante hai Ashish Sharma ko wo betichod hai, o hamesha vimal khata hai isliye uska nike name vimal hai");
    }
    else if(message.includes("open youtube") || message.includes("start youtube")){
        window.open('https://www.youtube.com/')
    }
    else if(message.includes("open facebook") || message.includes("start facebook")){
        window.open('https://www.facebook.com/')
    }
    else if(message.includes("open instagram") || message.includes("start instagram")){
        window.open('https://www.instagram.com/')
    }
    else{
        window.open(`https://www.google.com/search?q=${message}` )

    }
}