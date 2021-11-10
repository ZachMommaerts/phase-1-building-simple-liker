// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const heart = document.querySelector('.like-glyph');

const invokeMimicServerCall = () => {

  //GET response function - adds Heart to the DOM
  const addHeart = () => {
    if(heart.textContent === EMPTY_HEART) {
      heart.textContent = FULL_HEART;
      heart.className = 'activated-heart';
    } else {
      heart.textContent = EMPTY_HEART;
      heart.className = '';
    }
  };

  //GET response function - returns server error
  const returnError = (error) => {
    const errorDiv = document.querySelector('#modal');
    const errorMessage = document.querySelector('#modal-message');
    
    errorDiv.className = '';
    errorMessage.textContent = error;

    setTimeout(() => errorDiv.className = 'hidden', 3000);
  };

  mimicServerCall()
  .then(() => addHeart())
  .catch(error => returnError(error));

};

heart.addEventListener('click', invokeMimicServerCall);



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
