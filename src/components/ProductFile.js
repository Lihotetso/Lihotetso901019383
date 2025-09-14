import React, { useState } from "react";
import "./ProductFile.css";

function ProductList({ products, updateProduct, deleteProduct, sellProduct, showSellButton }) {
	const [editId, setEditId] = useState(null);
	const [editData, setEditData] = useState({ name: "", category: "", price: "", quantity: "" });

	const startEdit = (product) => {
		setEditId(product.id);
		setEditData({ name: product.name, category: product.category, price: product.price, quantity: product.quantity });
	};

	const handleEditChange = (e) => {
		setEditData({ ...editData, [e.target.name]: e.target.value });
	};

	const saveEdit = (id) => {
		updateProduct(id, { ...editData, id });
		setEditId(null);
	};

		return (
			<table className="product-table">
				<thead>
					<tr>
						<th>Name</th>
						<th>Category</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Action</th>
						{showSellButton && <th>Sell</th>}
					</tr>
				</thead>
				<tbody>
					{products.length === 0 && (
						<tr><td colSpan={showSellButton ? 6 : 5} style={{ textAlign: "center" }}>No products found.</td></tr>
					)}
					{products.map(product => (
						<tr key={product.id}>
							{editId === product.id ? (
								<>
									<td><input name="name" value={editData.name} onChange={handleEditChange} /></td>
									<td><input name="category" value={editData.category} onChange={handleEditChange} /></td>
									<td><input name="price" value={editData.price} onChange={handleEditChange} /></td>
									<td><input name="quantity" value={editData.quantity} onChange={handleEditChange} /></td>
									<td>
										<button onClick={() => saveEdit(product.id)}>Save</button>
										<button onClick={() => setEditId(null)}>Cancel</button>
									</td>
									{showSellButton && <td></td>}
								</>
							) : (
								<>
									<td>{product.name}</td>
									<td>{product.category}</td>
									<td>{product.price}</td>
									<td>{product.quantity}</td>
									<td>
										<button onClick={() => startEdit(product)}>Edit</button>
										<button onClick={() => deleteProduct(product.id)}>Delete</button>
									</td>
									{showSellButton && (
										<td>
											<button onClick={() => sellProduct(product.id, product.quantity)} disabled={Number(product.quantity) <= 0}>
												Sell
											</button>
										</td>
									)}
								</>
							)}
						</tr>
					))}
				</tbody>
			</table>
		);
}

export default ProductList;
