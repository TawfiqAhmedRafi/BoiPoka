
const getStoredBook =()=>{

 const storedBookSTR=localStorage.getItem("readlist");
 if(storedBookSTR){
    const storedBookData=JSON.parse(storedBookSTR);
    return storedBookData;
 }
 else{
    return [];
 }

}

const addToStoreDB=(id)=>{
 const storedBookData= getStoredBook();
 if(storedBookData.includes(id)){
    //toast("Vai id already exists in readlist")
    return false;
 }
 else{
    
    storedBookData.push(id)
    const data= JSON.stringify(storedBookData)
    localStorage.setItem("readlist",data)
    return true
 }
}
export {addToStoreDB,getStoredBook};