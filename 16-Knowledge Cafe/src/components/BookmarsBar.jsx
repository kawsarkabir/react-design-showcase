export default function BookmarsBar({ bookmarks, readingTime }) {
  return (
    <>
      <h1 className="text-3xl mt-2">BookMarks Added: {bookmarks.length}</h1>
      <h2 className="border border-blue-700 rounded-lg p-4 mt-6">
        blog reading time: {readingTime} min read
      </h2>
      <div className=" mt-4">
        {bookmarks?.map((bookmark, idx) => (
          <h2 className="border bg-slate-100 border-blue-700 rounded-lg p-4 mt-6" key={idx}>
            {bookmark?.blogTitle}
          </h2>
        ))}
      </div>
    </>
  );
}
