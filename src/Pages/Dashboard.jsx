import React, { useEffect, useState } from "react";
import axios from "axios";
import { FileText, ExternalLink, Pencil, Trash2, Save } from "lucide-react";

const Dashboard = () => {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    title: "",
    content: "",
    redirect_url: "",
    image_url: "",
    ad_config: { google_adsense: "", meta_adsense: "" },
  });
  const [isEditing, setIsEditing] = useState(null);

  const fetchPages = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/pages");
      setPages(Array.isArray(res.data) ? res.data : res.data.pages || []);
    } catch (error) {
      console.error("Failed to fetch pages:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPages();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("ad_config.")) {
      const key = name.split(".")[1];
      setForm((prev) => ({
        ...prev,
        ad_config: { ...prev.ad_config, [key]: value },
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await axios.put(`http://localhost:3000/api/pages/${isEditing}`, form);
      } else {
        await axios.post("http://localhost:3000/api/pages", form);
      }
      setForm({
        title: "",
        content: "",
        redirect_url: "",
        image_url: "",
        ad_config: { google_adsense: "", meta_adsense: "" },
      });
      setIsEditing(null);
      fetchPages();
    } catch (err) {
      console.error("Submit error:", err);
    }
  };

  const handleEdit = (page) => {
    setForm({
      title: page.title,
      content: page.content,
      redirect_url: page.redirect_url,
      image_url: page.image_url,
      ad_config: page.ad_config || { google_adsense: "", meta_adsense: "" },
    });
    setIsEditing(page._id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this page?")) return;
    try {
      await axios.delete(`http://localhost:3000/api/pages/${id}`);
      fetchPages();
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6 flex items-center gap-2">
        <FileText /> Pages Dashboard
      </h1>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-6 mb-6 space-y-4">
        <h2 className="text-xl font-semibold text-indigo-600">{isEditing ? "Edit Page" : "Add New Page"}</h2>
        <input name="title" value={form.title} onChange={handleChange} placeholder="Title" className="input w-full p-2 border rounded" required />
        <textarea name="content" value={form.content} onChange={handleChange} placeholder="Content" className="input w-full p-2 border rounded" required />
        <input name="redirect_url" value={form.redirect_url} onChange={handleChange} placeholder="Redirect URL" className="input w-full p-2 border rounded" />
        <input name="image_url" value={form.image_url} onChange={handleChange} placeholder="Image URL" className="input w-full p-2 border rounded" />
        <input name="ad_config.google_adsense" value={form.ad_config.google_adsense} onChange={handleChange} placeholder="Google Adsense" className="input w-full p-2 border rounded" />
        <input name="ad_config.meta_adsense" value={form.ad_config.meta_adsense} onChange={handleChange} placeholder="Meta Adsense" className="input w-full p-2 border rounded" />
        <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
          <Save className="inline mr-1" size={18} /> {isEditing ? "Update" : "Create"}
        </button>
      </form>

      {loading ? (
        <p className="text-gray-500">Loading pages...</p>
      ) : pages.length === 0 ? (
        <p className="text-gray-500">No pages available.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {pages.map((page) => (
            <div key={page._id} className="bg-white rounded-xl shadow p-5 hover:shadow-md transition relative">
              <h2 className="text-xl font-semibold text-indigo-600">{page.title}</h2>
              <p className="text-gray-600 mt-2 text-sm">{page.content.slice(0, 100)}...</p>

              {page.image_url && (
                <div className="mt-3">
                  <img src={page.image_url} alt="Page" className="w-full h-40 object-cover rounded-md" />
                </div>
              )}

              <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
                {page.redirect_url && (
                  <a href={page.redirect_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center gap-1">
                    <ExternalLink size={16} /> Visit
                  </a>
                )}
                {page.ad_config?.google_adsense && (
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded">Google Ads: ✓</span>
                )}
              </div>

              <div className="absolute top-3 right-3 flex gap-2">
                <button onClick={() => handleEdit(page)} className="text-blue-600 hover:text-blue-800">
                  <Pencil size={18} />
                </button>
                <button onClick={() => handleDelete(page._id)} className="text-red-600 hover:text-red-800">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
