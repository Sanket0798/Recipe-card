import Link from "next/link";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import styles from "@/styles/Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div className={styles.container}>
      <nav className={styles.navbar_wrapper}>
        <div className={styles.navbar_left}>
          <ul className={styles.menuItems}>
            <li>
              <Link href="/" className={styles.menuItem}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/recipes" className={styles.menuItem}>
               Recipes
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.navbar_right}>
          <ul className={styles.profileMenu}>
            <li className={styles.profileItem}>
              <Image
                src={session?.user?.image || ""}
                alt="User's Profile Image"
                className={styles.profileImg}
                width={100}
                height={100}
              />
            </li>
            <li className={styles.profileItem}>{session?.user?.name}</li>
          </ul>
          <div className={styles.button_div}>
            <span className={styles.signOut_button} onClick={() => signOut()}>
              Sign Out
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
