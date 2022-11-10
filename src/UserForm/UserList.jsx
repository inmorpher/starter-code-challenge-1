import Card from "../UI/Card";
import styles from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => {
          return (
            <li key={user.age * 9}>
              {user.name} - {user.age} лет
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UserList;
