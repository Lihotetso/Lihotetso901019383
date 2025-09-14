import React, { useState } from "react";
import "./ProductForm.css";

function ProductForm({ addProduct }) {
	const [form, setForm] = useState({
		name: "",
		category: "",
		price: "",
		quantity: ""
	});

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!form.name || !form.category || !form.price || !form.quantity) return;
		addProduct({ ...form, price: Number(form.price), quantity: Number(form.quantity) });
		setForm({ name: "", category: "", price: "", quantity: "" });
	};

	return (
		<form className="product-form" onSubmit={handleSubmit}>
			<input
				name="name"
				value={form.name}
				onChange={handleChange}
				placeholder="Name"
				required
			/>
			<input
				name="category"
				value={form.category}
				onChange={handleChange}
				placeholder="Category"
				required
			/>
			<input
				name="price"
				type="number"
				value={form.price}
				onChange={handleChange}
				placeholder="Price"
				required
				min="0"
				step="0.01"
			/>
			<input
				name="quantity"
				type="number"
				value={form.quantity}
				onChange={handleChange}
				placeholder="Quantity"
				required
				min="0"
				step="1"
			/>
			<button type="submit">Add Product</button>
		</form>
	);
}

export default ProductForm;
