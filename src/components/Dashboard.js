import React from "react";
import "./Dashboard.css";

function Dashboard({ onNavigate }) {
	return (
		<div className="dashboard-center-wrap">
			<div className="dashboard-cards-row">
				<button className="dashboard-card big-card inventory" onClick={() => onNavigate('Inventory')}>
					<div className="card-title">Inventory</div>
					<div className="card-desc">Manage products, stock levels, and alerts</div>
				</button>
				<button className="dashboard-card big-card sales" onClick={() => onNavigate('Sales')}>
					<div className="card-title">Sales</div>
					<div className="card-desc">Record transactions and update inventory</div>
				</button>
				<button className="dashboard-card big-card customers" onClick={() => onNavigate('Customers')}>
					<div className="card-title">Customers</div>
					<div className="card-desc">Add and manage customer accounts</div>
				</button>
				<button className="dashboard-card big-card reports" onClick={() => onNavigate('Reports')}>
					<div className="card-title">Reports</div>
					<div className="card-desc">View inventory stats and sales summaries</div>
				</button>
			</div>
		</div>
	);
}

export default Dashboard;
