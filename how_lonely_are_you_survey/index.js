const threepoint = ['three', 'three', 'three', 'three', 'three'];
const twopoint = ['two', 'two', 'two', 'two', 'two'];
const onepoint = ['one', 'one', 'one', 'one', 'one'];

const result = document.querySelector('.result');
const form =document.querySelector('.survey-form');



form.addEventListener('submit', e => {
    e.preventDefault();
    let score = 0;

    const userAnswer = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];

    userAnswer.forEach((answer, index) => {
        if(answer === threepoint[index]){
            score += 3;
        }   
        if(answer === twopoint[index]){
            score += 2;
        }
        if(answer === onepoint[index]){
            score += 1;
        }
    }
    );
    result.classList.remove('d-none');//remove d-none class from result div
    
    if(score<=5){
        result.querySelector('span').textContent = `You are very lonely and you have psychological disorders : ${score} points`;
        alert('You are a guts');
        i++;
    }
    if(score>5 && score<=10){
        result.querySelector('span').textContent = ` You try you have a good personality :${score} points`;
        alert('You are a normal people');
        i++;
    }
    if(score>10 && score<=15){
        result.querySelector('span').textContent = `You're a social person get the fuck out of my survey :${score} points`;
        alert('You are a good boy');
        i++;
    }
}
);




   


