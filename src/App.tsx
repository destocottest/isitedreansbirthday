import { useEffect } from "react";

function isItEdreansBirthday(month: number, day: number) {
  const today = new Date();
  const localTimeZoneOffset = new Date().getTimezoneOffset();
  const localDate = new Date(today.getTime() - localTimeZoneOffset * 60 * 1000);
  const x = localDate.getMonth() === month && localDate.getDate() === day;

  if (x) {
    document.body.classList.add("birthday");
  }

  return x;
}

export default function App() {
  const x = isItEdreansBirthday(0, 23);

  useEffect(() => {
    if (x) {
      document.body.classList.add("birthday");
    } else {
      document.body.classList.remove("birthday");
    }
  }, [x]);

  return (
    <main className="main">
      <div className="container">
        <h1 className="h1">{x ? "YES" : "NO"}</h1>
      </div>
    </main>
  );
}
