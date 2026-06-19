import Link from "next/link";

export default function Navbar() {

  const inPageLinks = [
    { label: 'Features', targetId: '/#features' },
    { label: 'Pricing', targetId: '/#pricing' },
    { label: 'Integrations', targetId: '/#integrations' },
    { label: 'Enterprise', targetId: '/#enterprise' },
  ];

  return (
    <nav className="flex items-center justify-between bg-white px-12 py-4 shadow-sm;">
      {/* Brand Name */}
      <div className="text-xl font-bold text-gray-800">
        <Link href="/">OmniLeads</Link>
      </div>

      {/* In Page Links */}
      <ul className="flex items-center gap-16 list-none m-0 p-0">
        {inPageLinks.map((link) => (
          <li
            key={link.targetId}
            className="text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-blue-600"
          >
            <Link href={link.targetId}>{link.label}</Link>
          </li>
        ))}
      </ul>

      {/* Auth links */}
      <div className="flex items-center gap-4">
        <Link
          href="/auth/sign-in"
          className="rounded-md px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
        >
          Sign In
        </Link>
        <Link
          href="/auth/sign-up"
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}