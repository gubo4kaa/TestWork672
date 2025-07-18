"use client";

import React from "react";
import { useAuth } from "@/entities/user/model";
import styles from "./footer.module.scss";

export const Footer = () => {
  const { user } = useAuth();

  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>
        {year}
        {user?.email ? ` — Logged as ${user.firstName}` : ""}
      </p>
    </footer>
  );
};
