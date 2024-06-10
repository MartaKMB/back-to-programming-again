async function getTicket(id) {
  const res = await fetch(`http://numbersapi.com/${id}/year?json`, {
    next: {
      revalidate: 60,
    },
  });
  return res.json();
}

export default async function TicketDetails({ params }) {
  const ticket = await getTicket(params.id);

  return (
    <main>
      <nav>
        <h2>Ticket Deatials</h2>
      </nav>
      <div className='card'>
        <h3>{ticket.number}</h3>
        <small>Date: {ticket.date}</small>
        <p>{ticket.text}</p>
        <div className={`pill ${ticket.type}`}>{ticket.type} type</div>
      </div>
    </main>
  );
}
