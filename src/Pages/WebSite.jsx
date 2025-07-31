import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const WebSite = () => {
  const { id } = useParams();
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [contentSections, setContentSections] = useState({});

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const res = await fetch(`https://jobportaladsbackend-production.up.railway.app/api/pages/${id}`);
        if (!res.ok) throw new Error('Page not found');
        const data = await res.json();
        setPageData(data);

        // Parse content into sections
        const raw = data.content.replace(/\\n/g, '\n').split('\n');
        const keys = [
          'About the Company',
          'Job Description',
          'Key Responsibilities',
          'What Will You Learn'
        ];

        const parsed = {};
        let current = '', lines = [];
        for (let line of raw) {
          const match = keys.find(k => line.includes(k));
          if (match) {
            if (current) parsed[current] = lines.join('\n').trim();
            current = match;
            lines = [];
          } else if (line.trim()) {
            lines.push(line);
          }
        }
        if (current) parsed[current] = lines.join('\n').trim();
        setContentSections(parsed);

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPageData();
  }, [id]);

  const renderContent = (text) =>
    text.split('\n').map((line, i) =>
      line.startsWith('- ') ? (
        <li key={i} className="mb-1">{line.slice(2)}</li>
      ) : (
        <p key={i} className="mb-3">{line}</p>
      )
    );

  if (loading) return <div className="h-screen flex justify-center items-center text-blue-500">Loading...</div>;
  if (error) return <div className="h-screen flex justify-center items-center text-red-500">{error}</div>;
  if (!pageData) return null;

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow px-4 py-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">{pageData.title}</h1>
          <a
            href={pageData.redirect_url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Apply Now
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-10 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-6">
          {pageData.image_url && (
            <img
              src={pageData.image_url}
              alt="Banner"
              className="w-48 h-48 object-cover rounded-lg border"
              onError={(e) => (e.target.src = 'https://via.placeholder.com/150')}
            />
          )}
          <div>
            <h2 className="text-3xl font-bold mb-3 text-gray-800">Join Our Team</h2>
            <p className="text-gray-600">Discover opportunities that help you grow professionally and personally.</p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="flex flex-col lg:flex-row">
        {/* Left Ad Sidebar (Desktop only) */}
        <div className="hidden lg:block lg:w-[15%] p-4">
          {pageData.ad_config?.google_adsense && (
            <div className="sticky top-4 bg-white p-4 border border-dashed border-gray-300 rounded-lg text-center text-gray-500">
              <p className="text-xs mb-1">ADVERTISEMENT</p>
              Google AdSense
              <div className="h-64 w-full bg-gray-100 mt-2 flex items-center justify-center">
                Ad Content
              </div>
            </div>
          )}
        </div>

        {/* Center Content (70%) */}
        <main className="w-full lg:w-[70%] px-4 py-10 space-y-10">
          {/* About the Company */}
          {contentSections['About the Company'] && (
            <section className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">About the Company</h3>
              <div className="text-gray-700 space-y-2">{renderContent(contentSections['About the Company'])}</div>
            </section>
          )}

           {/* Google Ad (Top) */}
        {pageData.ad_config?.google_adsense && (
          <div className="bg-white p-6 border border-dashed border-gray-300 text-center text-gray-500 rounded-lg">
            <p className="text-xs mb-1">ADVERTISEMENT</p>
            Google AdSense - {pageData.ad_config.google_adsense}
          </div>
        )}


          {/* Job Description */}
          {contentSections['Job Description'] && (
            <section className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Job Description</h3>
              <div className="text-gray-700 space-y-2">{renderContent(contentSections['Job Description'])}</div>
            </section>
          )}

          {/* Key Responsibilities */}
          {contentSections['Key Responsibilities'] && (
            <section className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Key Responsibilities</h3>
              <ul className="list-disc pl-5 text-gray-700">{renderContent(contentSections['Key Responsibilities'])}</ul>
            </section>
          )}

             {pageData.ad_config?.meta_adsense && (
          <div className="bg-white p-6 border border-dashed border-gray-300 text-center text-gray-500 rounded-lg">
            <p className="text-xs mb-1">ADVERTISEMENT</p>
            Meta AdSense - {pageData.ad_config.meta_adsense}
          </div>
        )}


           {/* Apply CTA */}
          <div className="text-center pt-6">
            <a
              href={pageData.redirect_url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold shadow-md transition"
            >
              Apply Now
            </a>
          </div>

          {/* What Will You Learn */}
          {contentSections['What Will You Learn'] && (
            <section className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">What Will You Learn</h3>
              <ul className="list-disc pl-5 text-gray-700">{renderContent(contentSections['What Will You Learn'])}</ul>
            </section>
          )}

       
          {/* Apply CTA */}
          <div className="text-center pt-6">
            <a
              href={pageData.redirect_url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold shadow-md transition"
            >
              Apply Now
            </a>
          </div>
        </main>

        {/* Right Ad Sidebar (Desktop only) */}
        <div className="hidden lg:block lg:w-[15%] p-4">
          {pageData.ad_config?.meta_adsense && (
            <div className="sticky top-4 bg-white p-4 border border-dashed border-gray-300 rounded-lg text-center text-gray-500">
              <p className="text-xs mb-1">ADVERTISEMENT</p>
              Meta AdSense
              <div className="h-64 w-full bg-gray-100 mt-2 flex items-center justify-center">
                Ad Content
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Ads (Full width) */}
      <div className="lg:hidden space-y-4 px-4 pb-10">
        {pageData.ad_config?.google_adsense && (
          <div className="bg-white p-4 border border-dashed border-gray-300 rounded-lg text-center text-gray-500">
            <p className="text-xs mb-1">ADVERTISEMENT</p>
            Google AdSense
          </div>
        )}
        {pageData.ad_config?.meta_adsense && (
          <div className="bg-white p-4 border border-dashed border-gray-300 rounded-lg text-center text-gray-500">
            <p className="text-xs mb-1">ADVERTISEMENT</p>
            Meta AdSense
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-white border-t mt-10 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} {pageData.title} — All rights reserved.
      </footer>
    </div>
  );
};

export default WebSite;