const getWishList = ()=>{
 const storedWishStr = localStorage.getItem('wish-list');
 if(storedWishStr){
     const storedList = JSON.parse(storedWishStr);
     return storedList;
 }else{
    return [];
 }
}
const addToWishList = (id)=>{
    const storedWishList = getWishList();
    if(storedWishList.includes(id)){
        console.log(id,"already exist");
    }else{
        storedWishList.push(id);
        const storedWishStr = JSON.stringify(storedWishList);
        localStorage.setItem("wish-list",storedWishStr);
    }
}
export default addToWishList;