//Immediately Invoked Function Expression (IIFE)
//To avoid global scope pollution , to remove the global scope pollutin use iife
//use semicolon after end

(function chai(){
    console.log("Db is connected")
})();

(()=>{
    console.log('db is connected')
})();

((name)=>{
    console.log(`DB is connected ${name}`)
})("reva")