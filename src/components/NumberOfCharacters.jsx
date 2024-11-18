export function NumberOfCharacters({ characters =[]}) {
  const count = characters.length;
  if (count === 0) {
    return <p>There is no character</p>;
  }
  if (count === 1) {
    return <p>There is one character</p>;
  }
  return <p>There are {count} characters</p>;
}
