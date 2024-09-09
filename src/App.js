import './App.css';
import {apiUrl,filterData} from "./data"
import Navbar from "./components/Navbar";
import Filter from "./components/Filter"
import {useState, useEffect} from "react";
import Cards from './components/Cards'
import Spinner from "./components/Spinner"
import React from "react"
import {ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [loading,setLoading]=useState(true);
  const [courses,setCourses]=useState(null);
  const [category,setCategory]=useState('All');
  async function getCourseData(){
    setLoading(true);
    try{
      const response = await fetch(apiUrl);
      const courseData=await response.json();
      setCourses(courseData.data);
    }
    catch(err){
      setCourses(null);
      throw err;
    }
    setLoading(false);
  }
  useEffect(()=>{
    getCourseData();
  },[]);
  // console.log(courses);
  return (
    <div className='min-h-screen flex flex-col bg-slate-900'>
        <Navbar className=''></Navbar>
        <Filter filterData={filterData} category={category}  setCategory={setCategory}></Filter>
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {/* <Cards courses={courses}></Cards> */}
         {loading?(<Spinner></Spinner>):(<Cards courses={courses} category={category}></Cards>)}
        </div>
        <ToastContainer/>
    </div>
  );
}

export default App;