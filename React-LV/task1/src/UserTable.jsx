import React, { useState } from 'react';
import Pagination from './Pagination';
import UserList from './UserList';

const UserTable = ({ users }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const usersPerPage = 3;
  const totalPages = Math.ceil(users.length / usersPerPage);
  const startIndex = (currentPage - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const usersToDisplay = users.slice(startIndex, endIndex);

  const goPrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <Pagination
        pageNumber={currentPage}
        goPrev={goPrev}
        goNext={goNext}
        totalPages={totalPages}
      />
      <UserList usersToDisplay={usersToDisplay} />
    </div>
  );
};

export default UserTable;
