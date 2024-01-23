import { useEffect } from "react";

function isItEdreansBirthday(month: number, day: number) {
  const today = new Date();

  // Get the local time zone offset in minutes
  const timezoneOffset = today.getTimezoneOffset();

  // Adjust the date to local time
  today.setMinutes(today.getMinutes() - timezoneOffset);
  const dayInUTC = today.getUTCDate();

  const x = today.getMonth() === month && dayInUTC === day;

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
