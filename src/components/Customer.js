import React, { useState } from "react";
import "./Customer.css";

function Customer() {
  const [customers, setCustomers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", phone: "", picture: null });
  const [preview, setPreview] = useState(null);

  const handleChange = e => {
    const { name, value, files } = e.target;
    if (name === "picture" && files && files[0]) {
      const file = files[0];
      setForm(f => ({ ...f, picture: file }));
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setForm(f => ({ ...f, [name]: value }));
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.email) return alert("Name and Email required!");
    let pictureUrl = preview;
    setCustomers([...customers, { ...form, id: Date.now(), picture: pictureUrl }]);
    setForm({ name: "", email: "", phone: "", picture: null });
    setPreview(null);
  };

  return (
    <div className="customer-card">
      <h2>👤 Customers</h2>
      <form onSubmit={handleSubmit} className="customer-form">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" type="email" />
        <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone (optional)" />
        <input name="picture" type="file" accept="image/*" onChange={handleChange} />
        {preview && <img src={preview} alt="Preview" className="customer-preview" />}
        <button type="submit">Add Customer</button>
      </form>
      <ul className="customer-list">
        {customers.length === 0 ? (
          <li className="empty">No customers yet.</li>
        ) : (
          customers.map(c => (
            <li key={c.id} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              {c.picture && <img src={c.picture} alt="" className="customer-thumb" />}
              <strong>{c.name}</strong> <span>({c.email})</span> {c.phone && <span>- {c.phone}</span>}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
export default Customer;