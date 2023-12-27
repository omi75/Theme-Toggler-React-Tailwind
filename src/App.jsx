import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [theme,setTheme]=useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "Light" );

  function switchTheme()
  {
    theme === 'Light' ? setTheme("dark") : setTheme("Light");
  }

  useEffect(()=>{
    localStorage.setItem("theme",theme);},[theme])

  return (
    <div className={theme}>
      <div className='bg-[#ffffff] text-[#000] h-[100vh] flex flex-col justify-center items-center text-[.8rem] transition-all duration-300 ease-linear dark:bg-[#000]'>
        <h1 className="text-center text-[40px] m-5 font-bold dark:text-[#fff]">Login</h1>
        <div className='flex flex-col items-center justify-center p-[1.5rem] mb-8 sm:max-w-[95%] md:w-[350px] mx-auto shadow-[0_0px_10px] shadow-[#333] rounded-md bg-[#fff] dark:bg-[#191919] dark:shadow-[#808080]'>
          <section className='flex justify-between w-[100%] text-[1rem] dark:text-[#fff]'>
             <i className="fa-brands fa-google"></i>
             <i className="fa-brands fa-facebook-square"></i>
             <i className="fa-brands fa-linkedin"></i>
             <i className="fa-brands fa-twitter-square"></i>
             <i className="fa-brands fa-apple"></i>
          </section>
          <p className='w-[100%] text-center border-b border-[#333] leading-[.1rem] my-[2rem]  dark:border-[#fff] text-[#fff]'>
            <span className="bg-[#fff] px-[10px] text-[#000] dark:bg-[#191919] dark:text-[#ffff]">Or</span></p>
          
          <form className="w-[100%] flex flex-col mt-[-10px]">
            
            <label htmlFor="email" className="my-[8px] font-bold ml-2 dark:text-[#fff]">Email </label>
            <input type="email" className="p-[8px] m-[8px] rounded-md border border-[#333] bg-[ffffff] text-[#000] dark:border-[#808080] dark:bg-[#000] dark:text-[#fff]"
            placeholder='Enter your Email' id='email' />

            <label className="my-[8px] font-bold ml-2 dark:text-[#fff]" htmlFor="password">Password </label>
            <input type="password" id="password" className="p-[8px] m-[8px] rounded-md border border-[#808080] bg-[ffffff] text-[#000] dark:border-[#808080] dark:bg-[#000] dark:text-[#fff]"
            placeholder='Enter Your Password'/>

            <div  className='flex items-center w-[100%] ml-2'>
              <input type="checkbox" className=" checked:p-0 m-0" defaultChecked={true}
              name='remember'/>
              <span className="pl-[8px] dark:text-[#fff]">Remember Me</span>
            </div>
            
            <button className="bg-[#8e05c2] border border-[#8e05c2] text-white my-[16px] p-[10px] rounded-md font-bold cursor-pointer"
            >Log In</button>
          </form>
        
          <div className='flex justify-between w-[100%] text-[.8rem]'>
            <span className="dark:text-[#fff]">Forgot Your Password ?</span>
            <a href="/" className="text-[#8e05c2]">Forgot Password</a>
          </div>
          
          <p className='text-center mt-[1rem] text-[1rem] cursor-pointer dark:text-[#fff]'>Create Account</p>
          
          <section className='flex justify-center items-center gap-x-3 w-[100%] text-[1rem] mt-4' onClick={switchTheme}>
          
            <h2 className="text-lg dark:text-[#fff] capitalize">{theme}</h2>
            {
              theme === "dark" ? (<i className="fas fa-toggle-on text-[35px] dark:text-[#fff]"></i>) :  (<i className="fa-solid fa-toggle-off text-[35px] dark:text-[#fff] "></i>)
            }

          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
