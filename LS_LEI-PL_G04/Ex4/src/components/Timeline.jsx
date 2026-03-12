function Timeline() {
  const schedule = [
    { time: "09:00", d1: "Reception, introductions",    d2: "Reception, introductions",    d3: "Reception, introductions" },
    { time: "11:00", d1: "Workshop life and work",      d2: "Workshop life and other things", d3: "Workshop no life" },
    { time: "13:00", d1: "Lunch",                       d2: "Lunch",                       d3: "Lunch" },
    { time: "15:00", d1: "Speaker from edp",            d2: "Speaker from nos",            d3: "Speaker from meo" },
    { time: "17:00", d1: "Goodbyes and next steps",     d2: "Goodbyes and next steps",     d3: "Goodbyes and next steps" },
  ]

  return (
    <section className="table-section">
      <h3>Timeline:</h3>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>01/01/2025</th>
            <th>01/01/2026</th>
            <th>01/01/2027</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((row) => (
            <tr key={row.time}>
              <td>{row.time}</td>
              <td>{row.d1}</td>
              <td>{row.d2}</td>
              <td>{row.d3}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default Timeline