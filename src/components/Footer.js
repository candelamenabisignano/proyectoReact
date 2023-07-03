import React from 'react'
import Facebook from "../assets/Facebook.png";
import Instagram from "../assets/Instagram.png";
import Whatsapp from "../assets/Whatsapp.png";

const Footer = () => {
  return (
    <div>
      <footer className='flex bg-pink-100 justify-end pt-4 pb-4'>
        <div className='flex gap-5 pr-4'>
            <a href='https://www.bing.com/ck/a?!&&p=da7ceac865bfcfb1JmltdHM9MTY4ODI1NjAwMCZpZ3VpZD0zMzNhMWM1Ni0zZThmLTYzYTItMWE5My0xMzZkM2Y1MjYyMGUmaW5zaWQ9NTE4Nw&ptn=3&hsh=3&fclid=333a1c56-3e8f-63a2-1a93-136d3f52620e&psq=instagram&u=a1aHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS8_aGw9ZXM&ntb=1'><img src={Instagram} alt='instagram-logo' className='h-[30px] hover:scale-125 hover:ease-out duration-300'/></a>
            <a href='https://www.bing.com/ck/a?!&&p=9ad6c2ac4b8f19b5JmltdHM9MTY4ODI1NjAwMCZpZ3VpZD0zMzNhMWM1Ni0zZThmLTYzYTItMWE5My0xMzZkM2Y1MjYyMGUmaW5zaWQ9NTIyNw&ptn=3&hsh=3&fclid=333a1c56-3e8f-63a2-1a93-136d3f52620e&psq=whatsapp&u=a1aHR0cHM6Ly93ZWIud2hhdHNhcHAuY29tLw&ntb=1'><img src={Whatsapp} alt='whatsapp-logo' className='h-[30px] hover:scale-125 hover:ease-out duration-300'/></a>
            <a href='https://www.bing.com/ck/a?!&&p=38b4a5f17db04cdcJmltdHM9MTY4ODI1NjAwMCZpZ3VpZD0zMzNhMWM1Ni0zZThmLTYzYTItMWE5My0xMzZkM2Y1MjYyMGUmaW5zaWQ9NTE4Ng&ptn=3&hsh=3&fclid=333a1c56-3e8f-63a2-1a93-136d3f52620e&psq=facebook&u=a1aHR0cHM6Ly9lcy1sYS5mYWNlYm9vay5jb20v&ntb=1'><img src={Facebook} alt='facebook-logo' className='h-[30px] hover:scale-125 hover:ease-out duration-300'/></a>
        </div>
      </footer>
    </div>
  )
}

export default Footer
