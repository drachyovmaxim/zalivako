import React, { FunctionComponent, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

import styles from "@styles/modal.module.scss";

interface Props {
  opened: boolean;
  onClose: () => void;
  type?: string;
}

const Modal: FunctionComponent<Props> = ({
  opened,
  children,
  onClose,
  type,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(
        <div
          className={
            opened ? [styles.modal, styles.visible].join(" ") : styles.modal
          }
        >
          <div className={styles.overlay} onClick={onClose}></div>
          <div className={styles.body}>
            <div className={styles.close} onClick={onClose}>
              <Image
                src="/close.svg"
                layout="responsive"
                width={32}
                height={32}
                alt="Close icon"
              />
            </div>
            {type == "contacts" ? (
              <div className={styles.contacts}>
                <div className={styles.item}>
                  <a
                    className={styles.link}
                    href="tel:31640035757"
                    rel="noreferrer"
                    target="_blank"
                  >
                    +31640035757
                  </a>
                </div>
                <div className={styles.item}>
                  <a
                    className={styles.link}
                    href="mailto:zalivako.fail@gmail.com"
                    rel="noreferrer"
                    target="_blank"
                  >
                    zalivako.fail@gmail.com
                  </a>
                </div>
              </div>
            ) : (
              children
            )}
          </div>
        </div>,
        document.body as HTMLElement
      )
    : null;
};

export default Modal;
