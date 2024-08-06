import React, { useState, useEffect } from "react";
import "./index.css";
import axios from "axios";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);
  const [loading, setLoading] = useState(true);

  //   // const fetchUsers = async () => {
  //   //   try {
  //   //     const url = "https://dummyjson.com/users";
  //   //     const response = await fetch(url);
  //   //     console.log("RESPONSE", response);
  //   //     if (!response.ok) {
  //   //       throw new Error("Network response was not ok.");
  //   //     }
  //   //     const data = await response.json();
  //   //     setUsers(data);
  //   //     setFilteredUsers(data); // Initialize filteredUsers with fetched data
  //   //     setLoading(false); // Data loading completed
  //   //   } catch (error) {
  //   //     console.error("Error fetching users:", error);
  //   //   }
  //   // };

  const fetchUsers = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/users");
      setUsers(response.data.users);
      setFilteredUsers(response.data.users);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    filterUsers(searchTerm);
  };

  const filterUsers = (searchTerm) => {
    const filteredData = users.filter((user) =>
      `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchTerm)
    );
    setFilteredUsers(filteredData);
    setCurrentPage(1); // Reset to first page when filtering
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <div className='loader'>Loading...</div>;
  }

  return (
    <div className='container'>
      <div className='search-container'>
        <input
          type='text'
          placeholder='Search by Name'
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <table className='user-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Company</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr key={user.id}>
              <td>{`${user.firstName} ${user.lastName}`}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{`${user.address.address}, ${user.address.city}, ${user.address.state}, ${user.address.country}`}</td>
              <td>{user.company.name}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination */}
      <div className='pagination-container'>
        <Pagination
          usersPerPage={usersPerPage}
          totalUsers={filteredUsers.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

const Pagination = ({ usersPerPage, totalUsers, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className='pagination'>
      {pageNumbers.map((number) => (
        <li key={number}>
          <button
            className={`pagination-button ${
              currentPage === number ? "active" : ""
            }`}
            onClick={() => paginate(number)}
          >
            {number}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default UserTable;
