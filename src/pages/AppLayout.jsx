import { Link } from 'react-router-dom';

function AppLayout() {
  const emails_list = Array(20)
    .fill(null)
    .map((u, i) => (
      <li key={i + 1} className="mt-8">
        <div className="bg-gray-500 p-10 text-gray-100 h-24">Email {i + 1}</div>
      </li>
    ));

  return (
    <div className="font-xl grid grid-cols-[80px_400px_1fr_250px] grid-rows-[80px_1fr] h-screen">
      <nav className="bg-gray-700 text-gray-100 row-span-full pt-6">Nav</nav>
      <menu className="bg-indigo-600 text-gray-200 col-span-3 px-10 flex justify-between items-center gap-3">
        <button className="bg-indigo-800 font-bold">New</button>
        <button className="bg-indigo-800 font-bold">Reply</button>
        <button className="bg-indigo-800 font-bold">Forward</button>
        <button className="bg-indigo-800 font-bold">Mark unread</button>
        <button className="bg-fuchsia-700 font-bold ml-auto">
          <Link to="/home" className="text-gray-100">
            Back to home page
          </Link>
        </button>
      </menu>
      <section className="bg-gray-200 pt-6 px-10 overflow-scroll">
        <ul>{emails_list}</ul>
      </section>
      <main className="pt-6">Email view</main>
      <aside className="bg-gray-400 pt-6">Additional elements</aside>
    </div>
  );
}

export default AppLayout;
