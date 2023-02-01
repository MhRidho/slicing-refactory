import React from 'react'
import { FaAngleDown, FaBell, FaCalendarAlt, FaChartLine, FaRocket, FaRocketchat, FaShopify, FaShoppingBag, FaTasks, FaTrophy, FaUserCircle } from 'react-icons/fa'

const Index = () => {
  return (
    <div className='container bg-[#E4F2FF] h-[68vh] w-[375px] mx-auto'>
      <div className='h-48 w-[375px] rounded-b-3xl border font-semibold mx-auto bg-[#4085F3] text-slate-50 relative px-5 pt-12'>
        <div className='flex justify-between'>
          <div className='flex items-center gap-2'>Refactory<FaAngleDown /></div>
          <FaBell />
        </div>

        <h2 className='text-xl font-bold font-inter mt-4'>Ridho</h2>
        <div className='flex justify-between'>
          <p className='text-xs font-normal'>Engineering</p>
          <div className='bg-[#EDFDF84D] rounded-lg px-2 py-1 flex gap-2 items-center'>
            <div className='bg-[#08875D] w-3 h-3 rounded-full'>

            </div>
            <span className='text-xs'>T43215</span>
          </div>
        </div>
        <div className='mt-2'>
          <div className='bg-white px-2 pt-7 pb-3 rounded-lg text-[#4085F3] flex gap-3 justify-evenly text-sm font-normal'>
            <div className='relative flex flex-col justify-center items-center gap-1 cursor-pointer'>
              <div className='bg-[#E4F2FF] w-7 h-7 rounded-full absolute -top-3 left-5'></div>
              <FaCalendarAlt className='text-2xl z-50' />
              <span>Calender</span>
            </div>
            <div className='relative flex flex-col justify-center items-center gap-1 cursor-pointer'>
              <div className='bg-[#E4F2FF] w-7 h-7 rounded-full absolute -top-3 left-5'></div>
              <FaChartLine className='text-2xl z-50' />
              <span>Excalation</span>
            </div>
            <div className='relative flex flex-col justify-center items-center gap-1 cursor-pointer'>
              <div className='bg-[#E4F2FF] w-7 h-7 rounded-full absolute -top-3 left-5'></div>
              <FaShoppingBag className='text-2xl z-50' />
              <span>Project</span>
            </div>
            <div className='relative flex flex-col justify-center items-center gap-1 cursor-pointer'>
              <div className='bg-[#E4F2FF] w-7 h-7 rounded-full absolute -top-3 left-5'></div>
              <FaShopify className='text-2xl z-50' />
              <span>My Shop</span>
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <div className='bg-white px-4 pt-2 pb-3 rounded-lg text-slate-700'>
            <div className='flex justify-between'>
              <div className='flex items-center gap-2 font-bold'>Personal Goals</div>
              <div className='bg-[#EDFDF84D] rounded-lg px-2 flex gap-2 items-center text-[#F78A00] border border-[#F78A00]'>
                <span className='text-base font-normal'>November</span>
                <FaAngleDown />
              </div>
            </div>
            <div className='flex mt-6 justify-evenly items-center'>
              <div className='flex flex-col justify-center items-center gap-1'>
                <div className='rounded-full border-[#4085F3] border-8 h-20 w-20 text-[#4085F3] font-bold flex'><span className='m-auto'>40/43</span></div>
                <span className='text-xs'>SP Completed</span>
              </div>
              <span className='h-14 border'></span>
              <div className='flex flex-col justify-center items-center gap-1'>
                <div className='rounded-full border-[#08875D] border-8 h-20 w-20 text-[#08875D] font-bold flex'><span className='m-auto'>100</span></div>
                <span className='text-xs'>Presence Rating</span>
              </div>
              <span className='h-14 border'></span>
              <div className='flex flex-col justify-center items-center gap-1'>
                <div className='rounded-full border-[#08875D] border-8 h-20 w-20 text-[#08875D] font-bold flex'><span className='m-auto'>5</span></div>
                <span className='text-xs'>Feedback client</span>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-5 pt-5'>
          <div className='bg-white px-4 pt-2 pb-3 rounded-lg text-slate-700 border'>
            <div className='flex justify-between border-b-2 pb-2'>
              <div className='flex gap-4'>
                <div className='relative flex flex-col justify-center items-center gap-1 cursor-pointer'>
                  <div className='bg-[#E4F2FF] w-7 h-7 rounded-full absolute -top-1 left-2'></div>
                  <FaTasks className='text-2xl z-50 text-[#4085F3]' />
                </div>
                <div className='flex flex-col text-sm font-bold justify-start'>
                  <h1>My Ticket</h1>
                  <span className='text-xs font-normal'>Ticket: 5</span>
                </div>
              </div>
              <div className='bg-[#EDFDF84D] rounded-lg px-2 flex gap-2 items-center text-[#F78A00]'>
                <span className='text-xs font-semibold'>+ Create Ticket</span>
              </div>
            </div>

            <div className='flex justify-between py-2'>
              <h1 className='text-xs font-normal'>Senin, 3 Oktober 2022</h1>
              <div className='bg-[#EDFDF84D] rounded-lg px-2 flex gap-2 items-center'>
                <span className='text-xs font-normal flex gap-1'>Assignee: <h3 className='text-[#4085F3]'>Slamet</h3> <FaAngleDown /></span>
              </div>
            </div>
          </div>
        </div>


      </div>

      <div className='mt-96 pt-5'>
        <div className='bg-white pt-2 pb-3 rounded-lg text-slate-700 flex justify-evenly hover:pb-6'>
          <div className='relative flex flex-col justify-center items-center gap-1 cursor-pointer hover:text-[#FB9600]'>
            <FaRocket className='text-2xl z-50' />
          </div>
          <div className='relative flex flex-col justify-center items-center gap-1 cursor-pointer hover:text-[#FB9600]'>
            <FaRocketchat className='text-2xl z-50' />
          </div>
          <div className='relative flex flex-col justify-center items-center gap-1 cursor-pointer hover:text-[#FB9600]'>
            <FaTasks className='text-2xl z-50' />
          </div>
          <div className='relative flex flex-col justify-center items-center gap-1 cursor-pointer hover:text-[#FB9600]'>
            <FaTrophy className='text-2xl z-50' />
          </div>
          <div className='relative flex flex-col justify-center items-center gap-1 cursor-pointer hover:text-[#FB9600]'>
            <FaUserCircle className='text-2xl z-50' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index