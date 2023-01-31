/** Tweet: a single tweet
 *
 * props:
 *  - username
 *  - Name
 *  - Date
 *  - Message
 *
 */

function Tweet({ username, name, date, message }) {
  return (
    <div>
      <span>{name}</span>
      <span className="username">{username}</span>
      <span className="date">{date}</span>
      <p>{message}</p>
    </div>
  );
}