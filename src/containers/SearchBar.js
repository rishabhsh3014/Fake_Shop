import { useEffect,useState } from "react";
import axios from "axios";
import { Box, Input } from "@chakra-ui/react";
function SearchBar(){
  const [users, setUsers] = useState([]);
  const [text1,setText]=useState([]);
  useEffect(()=>{
    const loadUsers=async()=>{
      const response=await axios.get('https://fakestoreapi.com/products');
      setUsers(response.data);
    }
    loadUsers();
  },[]);
  console.log(users);

  const searchProducts=(text)=>{
    if(!text){
      setText([]);
    }else{
    let matches=users.filter((product)=>{
      const regex=new RegExp(`${text}`,"gi");
      return product.title.match(regex) || product.category.match(regex);
    })
    setText(matches);
  }
  };
  // console.log()
  
  return(
    <Box>
      <Input 
       placeholder="Enter product name:"
       onChange={(e)=>searchProducts(e.target.value)}
       />
       {text1&&text1.map((item,index)=>(
         <Box key={index} style={{marginLeft:"35%", marginTop:"5px"}}>
           <Box style={{width:"50%"}} title={`Product:${item.title}`}>
             Product:{item.title}
           </Box>
         </Box>
       ))}
    </Box>
  )
}

export default SearchBar;