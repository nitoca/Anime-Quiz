let score = 0;

function showScore(){
  const totalScore = document.getElementById('score-message');
    
  if(score === 3) {
    totalScore.innerHTML = score + "点" + "！" + "全問正解です！";
  } else if(score === 2) {
    totalScore.innerHTML = score + "点" + "！" + "2問正解です！";
  } else if(score === 1) {
    totalScore.innerHTML = score + "点" + "！" + "1問正解です！";
  } else {
    totalScore.innerHTML = score + "点" + "！" + "全問不正解です！";
  }   
}







const correct = '正解!';
const incorrect = '不正解!';

function answerQuiz1() {
  const quiz_1 = document.getElementById('quiz-1');
  const select = '1問目：' + quiz_1.answer.value + 'を選択しました';

  if (quiz_1.answer.value == 'a') {
    alert(incorrect);
  // 正解はB
  } else if (quiz_1.answer.value == 'b') {
    score++;
    alert(correct);
  } else if (quiz_1.answer.value == 'c') {
    alert(incorrect);
  } else {
    alert('1問目の答えを入力してください');
  }
  console.log('現在の点数：' + score); 
}

function answerQuiz2(){
  const quiz_2 = document.getElementById('quiz-2');
  const select = '2問目：' + quiz_2.answer.value + 'を選択しました';

  // 正解はA
  if (quiz_2.answer.value == 'a') {
    score++;
    alert(correct);
  } else if (quiz_2.answer.value == 'b') {    
    alert(incorrect);
  } else if (quiz_2.answer.value == 'c') {
    alert(incorrect);
  } else {
    alert('2問目の答えを入力してください');
  }
  console.log('現在の点数：' + score); 
}

function answerQuiz3(){
  const quiz_3 = document.getElementById('quiz-3');
  const select = '3問目：' + quiz_3.answer.value + 'を選択しました';

  if (quiz_3.answer.value == 'a') {
    alert(incorrect);
  } else if (quiz_3.answer.value == 'b') {        
    alert(incorrect);
  // 正解はC
  } else if (quiz_3.answer.value == 'c') {
    score++;
    alert(correct);
  } else {
    alert('3問目の答えを入力してください');
  }
  console.log('現在の点数：' + score); 
}