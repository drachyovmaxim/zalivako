import React, { FunctionComponent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import Modal from "./modal";
import styles from "@styles/header.module.scss";

const Header: FunctionComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const router = useRouter();
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <a className={styles.logo}>SASHA ZALIVAKO</a>
        </Link>
        <div className={styles.right}>
          <Link href="/cv">
            <a className={styles.cv}>CV</a>
          </Link>
          <div
            className={styles.contacts}
            onClick={() => setModalVisible(true)}
          >
            <Image
              src="/phone.svg"
              layout="responsive"
              width={31}
              height={31}
              alt="Contacts icon"
            />
          </div>
        </div>
      </header>
      <Modal
        opened={modalVisible}
        onClose={() => setModalVisible(!modalVisible)}
        type={"contacts"}
      >
        <div></div>
      </Modal>
    </>
  );
};

export default Header;
