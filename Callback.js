function getdata(callback){
    setTimeout(() =>{
        let data = "got data"
     callback(data)
    } , 1000)
}

function data(data){
    console.log(data)
}

getdata(data)

// ---- CALLBACK HELL -----

function getdata(callback){
    setTimeout(() =>{
        let data = "call back hell"
     callback(data)
    } , 1000)
}

function data(data){
    data2(data)
}

function data2(data){
    console.log(data)
}

getdata(data2)


