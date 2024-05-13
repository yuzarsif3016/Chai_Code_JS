const buttons = document.querySelectorAll('.btn')
const body = document.querySelector("body")

buttons.forEach((button)=>{
    console.log(button);
    button.addEventListener('click',(e)=>{

        // console.log(e.target);
        if(e.target.id === 'grey')
            {
                body.style.backgroundColor = "grey" //e.target.id;
            }
            if(e.target.id === 'white')
                {
                    body.style.backgroundColor = "white" //e.target.id;
                }
                if(e.target.id === 'blue')
                    {
                        body.style.backgroundColor = "blue" //e.target.id;
                    }
                    if(e.target.id === 'yellow')
                        {
                            body.style.backgroundColor = "yellow" //e.target.id;
                        }
    });
});