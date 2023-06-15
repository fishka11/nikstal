import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./MenuItem.module.css";

export default function MenuItem({ slug, display, toggle }) {
  if (slug === null) {
    slug = "/";
  }
  const path = usePathname();
  const pathname = path === "/" ? "/" : path.slice(1);
  return (
    <li>
      <Link
        className={`${styles.navLink} ${
          pathname === slug ? styles.active : ""
        } relative block w-auto py-2 pl-3 pr-4 text-right text-base font-[400] text-[#17388a] hover:bg-gray-50 active:text-blue-700 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-900 md:dark:hover:bg-transparent md:dark:hover:text-white`}
        href={slug}
        onClick={() => toggle()}
      >
        {display.toUpperCase()}
      </Link>
    </li>
  );
}
