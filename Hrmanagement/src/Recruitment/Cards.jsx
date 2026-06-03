import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient"; // Make sure this path correctly points to your supabaseClient.js file

const Cards = () => {
  // 1. Initialize your state with your existing array structure as the default fallback
  const [cardState, setCardState] = useState([
    {
      label: "Active openings",
      value: 4,
      sub: "currently hiring",
      color: "#22c55e",
    },
    {
      label: "Total application",
      value: 8,
      sub: "Across all roles",
      color: "#f97316",
    },
    {
      label: "In Interview",
      value: 2,
      sub: "Scheduled this week",
      color: "#f97316",
    },
    {
      label: "Hired this month",
      value: 1,
      sub: "Offer accepted",
      color: "#3b82f6",
    },
  ]);

  // 2. Fetch the real database counts when the component renders
  useEffect(() => {
    async function fetchLiveCounts() {
      try {
        // Count active job openings
        const { count: jobCount } = await supabase
          .from('jobs')
          .select('*', { count: 'exact', head: true })
          .eq('status', 'Active');

        // Count total candidate applications
        const { count: appCount } = await supabase
          .from('candidates')
          .select('*', { count: 'exact', head: true });

        // Count candidates in 'Interview' status
        const { count: interviewCount } = await supabase
          .from('candidates')
          .select('*', { count: 'exact', head: true })
          .eq('sub_status', 'Interview');

        // Count candidates successfully 'Hired'
        const { count: hiredCount } = await supabase
          .from('candidates')
          .select('*', { count: 'exact', head: true })
          .eq('sub_status', 'Hired');

        // 3. Update the array state values cleanly while keeping your keys, subs, and colors exactly the same
        setCardState([
          { label: "Active openings", value: jobCount || 0, sub: "currently hiring", color: "#22c55e" },
          { label: "Total application", value: appCount || 0, sub: "Across all roles", color: "#f97316" },
          { label: "In Interview", value: interviewCount || 0, sub: "Scheduled this week", color: "#f97316" },
          { label: "Hired this month", value: hiredCount || 0, sub: "Offer accepted", color: "#3b82f6" },
        ]);
      } catch (error) {
        console.error("Error pulling live stats from Supabase:", error);
      }
    }

    fetchLiveCounts();
  }, []);

  // 4. Your layout rendering blocks stay 100% identical to what you wrote!
  return (
    <div className="cards-row">
      {cardState.map((card) => (
        <div className="stat-card" key={card.label}>
          <p className="stat-label">{card.label}</p>
          <h2 className="stat-value" style={{ color: card.color }}>
            {card.value}
          </h2>
          <p className="stat-sub">{card.sub}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;