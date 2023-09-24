import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";

export const dynamic = "force-dynamic";

async function getTickets() {
  const supabase = createServerComponentClient({ cookies });
  const { data, error } = await supabase.from("Tickets").select();
  if (error) {
    console.log(error);
  } else {
    return data;
  }
}
async function TicketsPage() {
  const tickets = await getTickets();

  return (
    <div className="container">
      <h1>Tickets page</h1>
      {tickets.map((ticket) => (
        <div key={ticket.id} className="card">
          <Link href={`/tickets/${ticket.id}`}>
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 200)}...</p>
            <div className={`pill ${ticket.priority}`}>
              {ticket.priority} priority
            </div>
          </Link>
        </div>
      ))}
      {tickets.length === 0 && (
        <p className="text-center">There are no open tickets, yay!</p>
      )}
    </div>
  );
}

export default TicketsPage;
