import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { redirect } from "next/navigation";

// components
import DeleteIcon from "./DeleteIcon";

export const dynamicParams = true;
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const supabase = createServerComponentClient({ cookies });

  const { data: ticket } = await supabase
    .from("tickets")
    .select()
    .eq("id", params.id)
    .single();

  return {
    title: `Dojo Helpdesk | ${ticket?.title || "Ticket not Found"}`,
  };
}

async function getTicket(id) {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  if (!data.session) {
    redirect("/noAccess");
  }
  const { data: ticket } = await supabase
    .from("Tickets")
    .select()
    .eq("id", id)
    .single();

  if (!ticket) {
    notFound();
  }

  return ticket;
}

export default async function TicketDetails({ params: { id } }) {
  const ticket = await getTicket(id);

  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  return (
    <div className="container">
      <nav>
        <h2>تیکت #{id}</h2>
        <Link href={"/tickets"}>back</Link>
        <div className="mr-auto">
          {data.session.user.email === ticket.user_email && (
            <DeleteIcon id={ticket.id} />
          )}
        </div>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>توسط : {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </div>
  );
}
