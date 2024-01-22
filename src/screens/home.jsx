import { useEffect, useState } from "react";
import { users } from "../data/user";
import Card from "../components/card";
import Toast from "../components/toast";
import Button from "../components/button";

const Home = () => {
  const [usersData, setUsersData] = useState([])
  const [deletedUser, setDeletedUser] = useState(null)
  const [showToast, setShowToast] = useState(false)

  const onDelete = (userId) => {
    const newUsersData = usersData.filter((user) => {
      return userId !== user.id
    })
    setDeletedUser(userId)
    setUsersData(newUsersData)
  }

  const sortUsers = () => {
    const sortedUsers = [...usersData].sort((user1, user2) => { // no puedo actuar sobre el estado ddirectamente por que sort MODIFICA el array, y por ello hago una deep copy del estado
      return user1.name.localeCompare(user2.name)
    })

    setUsersData(sortedUsers)
  }

  useEffect(() => {
    setTimeout(() => {
      setUsersData(users)
    }, 1000)
  }, [])

  useEffect(() => {
    if (usersData.length && usersData.length < 10) {
      setShowToast(true)

      setTimeout(() => {
        setShowToast(false)
      }, 2000)
    }
  }, [usersData])

  return (
    <div>
      <h1>Users</h1>
      <Button text="Sort" type="secondary" onClick={sortUsers} />

      {showToast && <Toast text={deletedUser} />}

      {usersData.length === 0 && 'Fetching users...'}

      {!!usersData.length && usersData.map((user) => {
        return <Card key={user.id} user={user} onDelete={showToast ? () => { } : onDelete} />
      })}
    </div>
  );
};

export default Home;
