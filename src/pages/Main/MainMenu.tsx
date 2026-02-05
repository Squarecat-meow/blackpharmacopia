import { Link } from 'react-router';

interface IMenuItem {
  name: string;
  to: string;
}

function MainMenu() {
  const menus: IMenuItem[] = [
    {
      name: 'About',
      to: '/main/about',
    },
    {
      name: 'Board',
      to: '/main/board',
    },
    {
      name: 'Gallery',
      to: '/main/gallery',
    },
    {
      name: 'Guestbook',
      to: '/main/guestbook',
    },
  ];
  return (
    <nav className="w-48">
      <ul className="flex flex-col items-center gap-4">
        {menus.map(({ name, to }) => (
          <li key={name}>
            <Link to={to}>
              <button className="btn btn-ghost font-playfair-display text-2xl">
                {name}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MainMenu;
