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
      <h1>{username}</h1>
      <h3>{name} {date}</h3>
      <p>{message}</p>
    </div>
  );
}