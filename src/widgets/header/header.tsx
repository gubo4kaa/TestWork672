"use client";

import Link from "next/link";

import { useLogout } from "@/features/auth/lib/useLogout";
import styles from "./header.module.scss";
import { useAuth } from "@/entities/user/model";
import { useEffect } from "react";

export const Header = () => {
  const { logout } = useLogout();
  const loadFromStorage = useAuth((state) => state.loadFromStorage);
  const auth = useAuth();

  useEffect(() => {
    loadFromStorage();
  }, [loadFromStorage]);

  return (
    <header className={styles.header}>
      <nav>
        <Link href={"/"} className={styles.logo}>
          Logo
        </Link>
        <div>
          {!auth.user ? (
            <Link href="/login" className={styles.link}>
              Login
            </Link>
          ) : (
            <div className={styles.userInfo}>
              <span>
                {auth.user?.firstName} {auth.user?.lastName}
              </span>
              <button onClick={logout} className={styles.logoutBtn}>
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
