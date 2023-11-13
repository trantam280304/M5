import Link from "next/link";
import styles from "../styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">
           <button>Home</button> 
          </Link>
        </li>
        <li>
          <Link href="/about">
           <button>About Us</button> 
          </Link>
        </li>
        <li>
          <Link href="/blog">
            
           <button>Blog</button> 

          </Link>
        </li>
        <li>
          <Link href="/login">

           <button>Logout</button> 

            
          </Link>
        </li>
      </ul>
      <div className={styles.container}>{children}</div>
    </div>
  );
}