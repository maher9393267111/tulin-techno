import React from 'react'

import  {useRef} from 'react';
import emailjs from '@emailjs/browser';
export default function () {

	const form = useRef();


	const sendEmail = (e) => {
	  e.preventDefault();
  
    //   service_i1jcckw
	  emailjs.sendForm('service_i1jcckw', 'template_vjvp4qq', form.current, 'Wp9cGzuiKbDFuuVXl')
		.then((result) => {
			console.log(result.text);
		}, (error) => {
			console.log( 'error when send message ---->>>',error.text);
		});
	};




  return (


    <div>
    <form  ref={form} onSubmit={sendEmail}>
      
        <div className="mb-4 wow animate__animatedanimated animate__fadeIn" data-wow-delay=".3s">
            <input className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none"
            
            type="text" placeholder="Name" name="from"
            // type="text" placeholder="Subject"
            
            />
        </div>
        <div className="mb-4 wow animate__animatedanimated animate__fadeIn" data-wow-delay=".3s">
            <input className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none" 

type="email" placeholder="Email Address" name="email"
            // type="text" placeholder="Name"
        
            
            />
        </div>
        {/* <div className="mb-4 wow animate__animatedanimated animate__fadeIn" data-wow-delay=".3s">
            <input className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none" type="email" placeholder="name@example.com" />
        </div> */}
        <div className="mb-4 wow animate__animatedanimated animate__fadeIn" data-wow-delay=".3s">
            <textarea className="w-full h-24 p-4 text-xs font-semibold leading-none resize-none bg-blueGray-50 rounded outline-none" 
           
            name="message"
            type="text" placeholder="Subject"
            
            
            ></textarea>
        </div>
        <div className="mb-4 wow animate__animatedanimated animate__fadeIn" data-wow-delay=".3s">
            {/* <label className="flex px-2 bg-blueGray-50 rounded">
                <input className="hidden" type="file" name="Choose file" />
                <span className="my-1 ml-auto px-4 py-3 text-xs text-white font-semibold leading-none bg-blueGray-500 hover:bg-blueGray-600 rounded cursor-pointer"> Browse</span>
            </label> */}
        </div>
        <div className="flex justify-between items-center wow animate__animatedanimated animate__fadeIn" data-wow-delay=".3s">
            <label>
                <input className="mr-1" type="checkbox" name="terms" value="1" />
                <span className="text-sm font-semibold">I agree to terms and conditions.</span>
            </label>
            <button className="py-4 px-8 text-sm text-white font-semibold leading-none bg-blue-500 hover:bg-blue-700 rounded" type="submit">
                Submit
            </button>
        </div>
    </form>
</div>


  )
}
