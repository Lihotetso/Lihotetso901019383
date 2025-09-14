import React from "react";

function Report({ products }) {
  const totalProducts = products.length;
  const totalQuantity = products.reduce((sum, p) => sum + Number(p.quantity || 0), 0);
  const totalValue = products.reduce((sum, p) => sum + (Number(p.price || 0) * Number(p.quantity || 0)), 0);

  return (
    <div style={{ maxWidth: 400, margin: "0 auto", background: "#fff", borderRadius: 8, boxShadow: "0 2px 8px #eee", padding: 24 }}>
      <h3>Inventory Report</h3>
      <ul style={{ listStyle: "none", padding: 0, fontSize: 18 }}>
        <li><strong>Total Products:</strong> {totalProducts}</li>
        <li><strong>Total Quantity:</strong> {totalQuantity}</li>
        <li><strong>Total Inventory Value:</strong> R{totalValue}</li>
      </ul>
    </div>
  );
}

export default Report;