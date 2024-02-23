//closure
function func(){
    const a = () => {  //innerfunction
        let x = "Hello";
        console.log(x);
        const b = function(){
            console.log(y);
        }
        let y = 3
        b(); //it has access to the outside variables
    }
    a(); 
}

func();

function func2(){
    var name = "Aditya";
    const a = () => { //inner function
        console.log(name);
    }
    name = "Aditya Sharma"
    a();
}

func2();

//code belongs to Aditya sharma... don't try to copy it 😼