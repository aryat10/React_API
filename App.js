import { useState , useEffect} from 'react';
import { getPosts, getRandomUser } from  './api';
import PostCard from './components/postcard';
import UserCard from './components/usercard';
import Count from './components/count';
import './App.css';


function App() {
  const [data,setData] = useState(null)
  const [userdata,setuserData] = useState(null)
                                                                         

  useEffect(()=>{
    getPosts().then(posts=>setData(posts));
  } ,[]);


  useEffect(()=>{
    getRandomUser().then((user)=> setuserData(user.results[0]))          
  },[])
  console.log(userdata);

  const refresh = () => {
    getRandomUser().then((user)=> setuserData(user.results[0]))          
  }

  return (
    <div className="App">
       <button onClick={refresh}>Refresh Data</button>
      {userdata && <UserCard data={userdata} />}                           
      { 
       data ? (data.map((e)=> <PostCard title={e.title} body = {e.body}/>)) : ( <p>No data</p> )           
      } 
     
      // <h1>Count is 0</h1>
      // <Count/>
      // <Count/>
      // <Count/>
      // <Count/>                    
    </div>
  );
}

export default App;
