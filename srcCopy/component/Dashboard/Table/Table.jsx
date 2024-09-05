import React from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

const Table = () => {
    return (
        <div className="overflow-x-auto mt-12">
  <table className="table table-xs">
    <thead>
      <tr className='bg-blue text-base font-semibold text-center' >
        <th>Name</th>
        <th>User ID</th>
        <th>User Status</th>
        <th>Date</th>
        <th>Email</th>
        <th>Membership</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody className='text-center bg-white'>
      <tr className='text-navy-blue'>
        <td className='p-5 flex justify-center items-center font-semibold'>Victoria Perez</td>
        <td>LA-0234</td>
        <td>Lorem Ipsum</td>
        <td>30 Apr, 2017 to 24 Oct 2020</td>
        <td>Lorem Ipsum</td>
        <td>Lorem Ipsum</td>
        <td className='flex gap-3 text-base justify-center text-gray'>
            <IoMdCheckmarkCircleOutline className=''/> <FiTrash2/> 
        </td>
      </tr>
      <tr className='text-navy-blue'>
        <td className='p-5 flex justify-center items-center font-semibold'>Lena Page</td>
        <td>LA-0234</td>
        <td>Lorem Ipsum</td>
        <td>21 Aug, 2019 to 24 Oct 2020</td>
        <td>Lorem Ipsum</td>
        <td>Lorem Ipsum</td>
        <td className='flex gap-3 text-base justify-center text-gray'>
            <IoMdCheckmarkCircleOutline/> <FiTrash2/> 
        </td>
      </tr>
      <tr className='text-navy-blue'>
        <td className='p-5 flex justify-center items-center font-semibold'>Devin Harmor</td>
        <td>LA-0234</td>
        <td>Lorem Ipsum</td>
        <td>21 July, 2019 to 24 Oct 2020</td>
        <td>Lorem Ipsum</td>
        <td>Lorem Ipsum</td>
        <td className='flex gap-3 text-base justify-center text-gray'>
            <IoMdCheckmarkCircleOutline/> <FiTrash2/> 
        </td>
      </tr>
      <tr className='text-navy-blue'> 
        <td className='p-5 flex justify-center items-center font-semibold'>Rena Paul</td>
        <td>LA-0234</td>
        <td>Lorem Ipsum</td>
        <td>30 Apr, 2017 to 24 Oct 2020</td>
        <td>Lorem Ipsum</td>
        <td>Lorem Ipsum</td>
        <td className='flex gap-3 text-base justify-center text-gray'>
            <IoMdCheckmarkCircleOutline/> <FiTrash2/> 
        </td>
      </tr>
      
     
    </tbody>
  </table>
</div>
    );
};

export default Table;