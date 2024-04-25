export default function Blogs({ handleBookMarks, blogs, handleMarkAsRead }) {
  return (
    <>
      {blogs?.map((blog) => (
        <div key={blog.id} className="mt-8">
          <img src={blog?.cover} alt="" className="w-full rounded-xl" />
          <div className="flex items-center justify-between my-4">
            <div className="flex items-center gap-x-2">
              <div>
                <img
                  src={blog?.authorImg}
                  alt=""
                  className="rounded-full w-12 h-12"
                />
              </div>
              <div>
                <h4>{blog?.author}</h4>
                <p>{blog?.publishDate}</p>
              </div>
            </div>
            <div>
              {blog?.readingTime} read{" "}
              <i
                onClick={() => handleBookMarks(blog)}
                className="fa-solid fa-bookmark cursor-pointer ml-2"
              ></i>
            </div>
          </div>
          <h1 className="text-3xl">{blog?.blogTitle}</h1>
          <div className="flex space-x-5 mt-3">
            {blog?.hashtag?.map((tag) => (
              <p key={tag}>#{tag}</p>
            ))}
          </div>
          <button onClick={() => handleMarkAsRead(blog?.id, blog?.readingTime)}>
            Mark as Read
          </button>
        </div>
      ))}
    </>
  );
}
