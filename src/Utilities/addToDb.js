import { toast } from "react-toastify";

const getStoredReadList = ()=>{
  const storedListStr = localStorage.getItem("read-list");
  if(storedListStr){
   const storedList = JSON.parse(storedListStr);
//    toast("Books has been Successfully added")
   return storedList;
  }else{
    // toast.error("already exist")
    return [];
  }
}

const addToStoredReadList = (id)=>{
    const storedList = getStoredReadList();
    if(storedList.includes(id)){
        toast.error("already exist, do not add")
    }else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem("read-list",storedListStr);
        toast.success("successfully added")
    }
}
export  {getStoredReadList,addToStoredReadList};
// export default getStoredReadList;