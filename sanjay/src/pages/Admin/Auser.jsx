import { Search } from 'lucide-react';
import React, { useState } from 'react';

export const Auser = () => {
  const initialUsers = [
    { name: 'John Doe', location: 'New York', age: 30 },
    { name: 'Jane Smith', location: 'Los Angeles', age: 25 },
    { name: 'Sam Johnson', location: 'Chicago', age: 35 },
    { name: 'John Doe', location: 'New York', age: 30 },
    { name: 'Jane Smith', location: 'Los Angeles', age: 25 },
    { name: 'Sam Johnson', location: 'Chicago', age: 35 },
  ];

  const [users, setUsers] = useState(initialUsers);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({ name: '', location: '', age: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newUser, setNewUser] = useState({ name: '', location: '', age: '' });

  const handleDelete = (index) => {
    const newUsers = [...users];
    newUsers.splice(index, 1);
    setUsers(newUsers);
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setFormData(users[index]);
  };

  const handleSave = () => {
    const newUsers = [...users];
    newUsers[editingIndex] = formData;
    setUsers(newUsers);
    setEditingIndex(null);
    setFormData({ name: '', location: '', age: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddUser = () => {
    setUsers([...users, newUser]);
    setNewUser({ name: '', location: '', age: '' });
    setIsModalOpen(false);
  };

  const handleNewUserChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex mt-[2rem] mb-4">
      <div className="relative w-full max-w-md ml-[8rem] ">
                <input type="text" className="w-[21rem] h-[50px] px-4  border border-blue-500  focus:outline-none" placeholder="Search by Username,Location" />
                <button className="absolute h-full w-[50px] px-4 border border-blue-500 bg-blue-600 text-white  hover:bg-blue-800 focus:outline-none focus:ring-1 focus:ring-black">
                 <i><Search/></i>
                </button>
      </div>
        <button onClick={() => setIsModalOpen(true)} className="bg-blue-500 text-white px-4 py-2 rounded ml-[25rem] ">
          Add User
        </button>
      </div>
      <table className="ml-[8rem] min-w-[60rem] bg-white border border-gray-300">
        <thead>
          <tr className='bg-gray-600 text-white text-lg'>
            <th className="py-4 px-4 border-b border-gray-300 text-center">S.No</th>
            <th className="py-4 px-4 border-b border-gray-300 text-center">Name</th>
            <th className="py-4 px-4 border-b border-gray-300 text-center">Location</th>
            <th className="py-4 px-4 border-b border-gray-300 text-center">Age</th>
            <th className="py-4 px-4 border-b border-gray-300 text-center">Update</th>
            <th className="py-4 px-4 border-b border-gray-300 text-center">Remove</th>
          </tr>
        </thead>
        <tbody >
          {users.map((user, index) => (
            <tr key={index} className="hover:bg-gray-200">
              <td className="py-4 px-4 border-b border-gray-300 text-center">{index + 1}</td>
              <td className="py-4 px-4 border-b border-gray-300 text-center">
                {editingIndex === index ? (
                  <input type="text" name="name" value={formData.name} onChange={handleChange} className="border p-1"/>
                ) : (
                  user.name
                )}
              </td>
              <td className="py-4 px-4 border-b border-gray-300 text-center">
                {editingIndex === index ? (
                  <input type="text" name="location" value={formData.location} onChange={handleChange} className="border p-1" />
                ) : (
                  user.location
                )}
              </td>
              <td className="py-4 px-4 border-b border-gray-300 text-center">
                {editingIndex === index ? (
                  <input type="number" name="age" value={formData.age} onChange={handleChange} className="border p-1"/>
                ) : (
                  user.age
                )}
              </td>
              <td className="py-4 px-4 border-b border-gray-300 text-center">
                {editingIndex === index ? (
                  <button onClick={handleSave} className="w-[5rem] border  border-blue-500 text-black px-4 py-2 mr-2 rounded hover:bg-blue-500 hover:text-white">
                    Save
                  </button>
                ) : (
                  <>
                    <button  onClick={() => handleEdit(index)} className="w-[5rem] border  border-green-500 text-green-700 px-4 py-2 mr-2 rounded hover:bg-green-700 hover:text-white">
                      Edit
                    </button>
                    
                  </>
                )}
              </td>
              <td className="py-4 px-4 border-b border-gray-300 text-center">
                {editingIndex === index ? (
                  <button onClick={handleSave} className="w-[5rem] border  border-blue-500 text-black px-4 py-2 mr-2 rounded hover:bg-blue-500 hover:text-white">
                    Cancel
                  </button>
                ) : (
                  <>
                    <button onClick={() => handleDelete(index)} className=" w-[5rem] border border-red-700 text-red-700 px-4 py-2 rounded hover:bg-red-700 hover:text-white">
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>


      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center ml-[18rem]">
          <div className="bg-white p-4 rounded w-[25rem]">
            <h2 className="text-lg mb-4">Add New User</h2>
            <input type="text" placeholder="Name" name="name" value={newUser.name} onChange={handleNewUserChange} className="border p-2 mr-2 rounded w-full mb-2" />
            <input type="text" placeholder="Location" name="location" value={newUser.location} onChange={handleNewUserChange} className="border p-2 mr-2 rounded w-full mb-2" />
            <input type="number" placeholder="Age" name="age" value={newUser.age} onChange={handleNewUserChange} className="border p-2 mr-2 rounded w-full mb-4" />
            <button onClick={handleAddUser} className="bg-blue-500 text-white px-4 py-2 rounded mr-2" >
              Add User
            </button>
            <button onClick={() => setIsModalOpen(false)} className="bg-red-500 text-white px-4 py-2 rounded">
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Auser;
