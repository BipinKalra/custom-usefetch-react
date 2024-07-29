export default function List({ data }) {
  return (
    <ul>
      {data.map((element, index) => {
        if (Array.isArray(element)) {
          //   console.log(element);
          return <List data={element} />;
        } else {
          return <li key={index}>{element}</li>;
        }
      })}
    </ul>
  );
}
