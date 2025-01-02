import { useEffect, useRef, useState } from "react";
import "./index.css";

import Pill from "./pill";

function MultiSelectSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [activeSuggestion, setActiveSuggestion] = useState("");
  const [selectedUserSet, setSelectedUserSet] = useState(new Set());

  const inputRef = useRef(null);

  useEffect(() => {
    const fetchUsers = () => {
      setActiveSuggestion(0);
      if (searchTerm.trim() === "") {
        setSuggestions([]);
        return;
      }

      fetch(`https://dummyjson.com/users/search?q=${searchTerm}`)
        .then((res) => res.json())
        .then((data) => setSuggestions(data))
        .catch((err) => {
          console.error(err);
        });
    };

    fetchUsers();
  }, [searchTerm]);

  const handleSelect = (user) => {
    console.log("USER", user);
    setSelectedUsers([...selectedUsers, user]);
    setSelectedUserSet(new Set([...selectedUserSet, user.email]));
    setSearchTerm("");
    setSuggestions([]);
    inputRef.current.focus();
  };

  const handleRemoveUser = (user) => {
    const updatedUsers = selectedUsers.filter(
      (selectedUser) => selectedUser.id !== user.id
    );
    setSelectedUsers(updatedUsers);

    const updatedEmails = new Set(selectedUserSet);
    updatedEmails.delete(user.email);
    setSelectedUserSet(updatedEmails);
  };

  const handleKeyDown = (e) => {
    if (
      e.key === "Backspace" &&
      e.target.value === "" &&
      selectedUsers.lenght > 0
    ) {
      const lastUser = selectedUsers[selectedUsers.length - 1];
      handleRemoveUser(lastUser);
      setSuggestions([]);
    }
  };
  return (
    <div className='user_serach_container'>
      <div className='user_search_input'>
        {selectedUsers.map((user) => {
          return (
            <Pill
              key={user.email}
              image={user.image}
              text={`${user.firstName} ${user.lastName}`}
              onClick={() => handleRemoveUser(user)}
            />
          );
        })}
        <div>
          <input
            ref={inputRef}
            type='text'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder='serach for user'
            onKeyDown={handleKeyDown}
          />
          {/* Suggesions */}
          <ul className='suggestions_list'>
            {suggestions?.users?.map((user, index) => (
              <>
                {!selectedUserSet.has(user?.email) && (
                  <li key={user?.email} onClick={() => handleSelect(user)}>
                    <img src={user.image} alt={user.firstName} />
                    <span>
                      {user.firstName} {user.lastName}
                    </span>
                  </li>
                )}
              </>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MultiSelectSearch;
