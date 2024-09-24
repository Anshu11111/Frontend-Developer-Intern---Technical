import React from 'react'
import "../Components/Navbar.css"
import {IconSearch,IconBellPlus,IconMessageFilled ,IconMenu2,IconChevronDown} from "@tabler/icons-react";
import profile from "../assets/profile.jpeg"
function Navabar() {
  return (
    <>
      <div className='navbar1'>
        <div className='display'><IconMenu2/>
        </div>
        
        <div className='nev-left'>
        <input type='text' placeholder='search' className='input'/>
        <IconSearch className='search'/>
        </div>

        <div className='nev-right'>
        <IconBellPlus/>
       <IconMessageFilled/>
       <img src={profile} alt='profile'/>
       <p className='name'>Anshu Anand</p>
       <IconChevronDown/>
        </div>

      </div>
    </>
  )
}

export default Navabar

