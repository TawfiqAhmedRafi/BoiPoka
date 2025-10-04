

const getWishedBook=()=>{
    const storedBookSTR=localStorage.getItem("wishlist");
 if(storedBookSTR){
    const storedBookData=JSON.parse(storedBookSTR);
    return storedBookData;
 }
 else{
    return [];
 }
}

const addToWish=(id)=>{
     const storedBookData= getWishedBook();
 if(storedBookData.includes(id)){
    return ;
 }
 else{
    storedBookData.push(id)
    const data= JSON.stringify(storedBookData)
    localStorage.setItem("wishlist",data)
 }
}
export {addToWish,getWishedBook};