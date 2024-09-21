let btn = document.getElementById('btn');
let content = document.getElementById('content');
let voice = document.getElementById('voice');

function speak(text){
    let text_speech = new SpeechSynthesisUtterance(text);
    text_speech.rate = 1
    text_speech.pitch = 1
    text_speech.volume = 1
    text_speech.lang = 'hi-GB';
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
    else if(message.includes("ashish") || message.includes("buckland")){
        speak("Ha, Ham jante hai Ashish Sharma ko wo betichod hai, o hamesha vimal khata hai isliye uska nike name vimal hai");
    }
    else if(message.includes("pavandeep") || message.includes("pawandeep")){
        speak("Ha, Ham Pavandeep ko jante hae wo abhi b tech computer course kar rha hai or abhi o company me as a developer kam kar rha hai, uske pass ek girl friend bhi hai. ager or kuchh janana hai to please contact for 9798949232 ");
    }
    else if(message.includes("open youtube") || message.includes("youtube")){
        window.open('https://www.youtube.com/')
    }
    // else if(message.includes("open facebook") || message.includes("facebook")){
    //     window.open('https://www.facebook.com/')
    // }
    // else if(message.includes("open instagram") || message.includes("instagram")){
    //     window.open('https://www.instagram.com/')
    // }
    // else if(message.includes("open linkedin") || message.includes("linkedin")){
    //     window.open('https://linkedin.com/')
    // }
    // else if(message.includes("open calculator") || message.includes("calculator")){
    //     window.open('calculator://')
    // }
    // else if(message.includes("open whatsapp") || message.includes("whatsapp")){
    //     window.open('whatsapp://')
    // }

    if (message.includes("open facebook") || message.includes("facebook")) {
        // Try to open the Facebook app
        window.location.href = 'fb://';
        setTimeout(() => {
            window.open('https://www.facebook.com/', '_blank'); // Fallback to Facebook website if the app is not installed
        }, 1000);
    }
    else if (message.includes("open instagram") || message.includes("instagram")) {
        // Try to open the Instagram app
        window.location.href = 'instagram://';
        setTimeout(() => {
            window.open('https://www.instagram.com/', '_blank'); // Fallback to Instagram website if the app is not installed
        }, 1000);
    }
    else if (message.includes("open whatsapp") || message.includes("whatsapp")) {
        // Try to open the WhatsApp app
        window.location.href = 'whatsapp://send';
        setTimeout(() => {
            window.open('https://web.whatsapp.com/', '_blank'); // Fallback to WhatsApp web if the app is not installed
        }, 1000);
    }
    else if (message.includes("open linkedin") || message.includes("linkedin")) {
        // Try to open the LinkedIn app
        window.location.href = 'linkedin://';
        setTimeout(() => {
            window.open('https://www.linkedin.com/', '_blank'); // Fallback to LinkedIn website if the app is not installed
        }, 1000);
    }
    
    else if(message.includes("time")){
        let time=new Date().toLocaleString(undefined, {hour:'numeric',minute:'numeric'})
        speak(time);
    }
    else if(message.includes("date")){
        let time=new Date().toLocaleString(undefined, {day:'numeric',month:'numeric',year:'numeric'})
        speak(time);
    }
    else{
        window.open(`https://www.google.com/search?q=${message}` )

    }
}