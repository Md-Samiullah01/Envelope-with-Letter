const envelope = document.querySelector('.envelope-wraper');
const heart = document.querySelector('.heart');
const txt = document.querySelector('.text');

// Showing message to user
function showMsg() {
  txt.innerHTML = '';
  
  if (envelope.classList.contains('flap')) {
    
    for (let i = 0; i < 6; i++) {
      const msg = document.createElement('span');
      
      //Message to show ,You can edit the inner text of Double Quotes.
      msg.innerHTML = "Hello World!🩷";
      msg.style.animation = `appear 6s ease-in-out ${1.5* i}s forwards infinite`;
      txt.appendChild(msg);
    }
    
  }
}

//Taking response from user
heart.addEventListener('click', () => {
  envelope.classList.toggle('flap');
  showMsg();
});