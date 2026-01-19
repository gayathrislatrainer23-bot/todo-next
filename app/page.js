import Link from "next/link";

export default function Home() {
  return (
    <div className="home-header">
      <h1 className="home-title">Todo App</h1>

      <div className="home-actions">
        <Link href="/register">
          <button className="home-btn btn-register">Register</button>
        </Link>

        <Link href="/login">
          <button className="home-btn btn-login">Login</button>
        </Link>
      </div>
    </div>
  );
}
