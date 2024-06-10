import Link from 'next/link';

async function getTickets() {
  const res = await fetch('http://numbersapi.com/random/year?json', {
    next: {
      revalidate: 0,
    },
  });
  return res.json();
}

export default async function TicketsList() {
  const tickets = await getTickets();
  return (
    <>
      <div key={tickets.number} className='card my-5'>
        <Link href={`/tickets/${tickets.number}`}>
          <h3>{tickets.number}</h3>
          <p>{tickets.text.slice(0, 200)}...</p>
          <div className={`pill ${tickets.type}`}>{tickets.type} type</div>
        </Link>
      </div>
      {tickets.length === 0 && (
        <p className='text-center'>There are no open Tickets, yay!</p>
      )}
    </>
  );
}
