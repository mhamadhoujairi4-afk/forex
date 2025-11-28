
const video1 = document.getElementById('video1');
const question1 = document.getElementById('question1');
const feedback1 = document.getElementById('feedback1');
const nextVideo = document.getElementById('nextVideo');

video1.addEventListener('ended', () => {
  question1.classList.remove('hidden');
});

function checkAnswer(videoNumber, answer) {
  if (videoNumber === 1) {
    if (answer === 'b') {
      feedback1.textContent = "إجابة صحيحة! 👍";
      feedback1.style.color = 'lightgreen';
      nextVideo.classList.remove('hidden');
    } else {
      feedback1.textContent = "إجابة خاطئة. حاول مرة أخرى.";
      feedback1.style.color = 'red';
    }
  }
}


