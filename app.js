const btn =document.querySelector('.talk');
const content = document.querySelector('.content');
const content2 = document.querySelector('.content2');
const selamlama= [
    'Im good you handsome guy',
    'doing well at home',
    'hello im ok',
    'its not your business'
  
]
const hayatinAnlami= [
    'life is beautiful',
    'life is empty',
    'I have no idea',
    'Hayatin heycani meycani yok'
  
]
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = ()=> {
    console.log( 'ses kaydi aktive');
}

recognition.onresult = (e)=>{
 console.log(e);
 const anlikKayit = e.resultIndex;
 const transcript =e.results[anlikKayit][0].transcript;
 content.textContent =`HB Dev Media:  ${transcript} ?`;
 konusBenimle(transcript);
}

btn.addEventListener('click', ()=>{
    recognition.start()
})

function konusBenimle(msj) {
    const konus = new SpeechSynthesisUtterance();
    konus.volume = 1;
    konus.rate = 1;
    konus.text = 'I dont knoww what you said';
    if (msj.includes('how are you')) {
        const finalText=selamlama[Math.floor(Math.random()*selamlama.length)];
        konus.text=finalText
        content2.textContent=`Sila: ${finalText} `
    } else if (msj.includes('what is')) {
        const finalText=hayatinAnlami[Math.floor(Math.random()*hayatinAnlami.length)];
        konus.text=finalText
        content2.textContent=`Sila: ${finalText} `
    }
    window.speechSynthesis.speak(konus);
}