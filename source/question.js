function displayAnswer()
{
    
    const answer = document.querySelectorAll('input[name="answer1"]:checked').item(0);
    if(answer.value=="a")
    {
        answer.parentNode.classList.add("correct-answer");
    }
    else
    {
        answer.parentNode.classList.add("error-answer");
    }
}