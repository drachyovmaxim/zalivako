import React, { FunctionComponent, useState, useEffect } from "react";
import { createPortal } from "react-dom";

import styles from "@styles/modal.module.scss";

interface Props {
  opened: boolean;
  onClose: () => void;
}

const Modal: FunctionComponent<Props> = ({ opened, children, onClose }) => {
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
          <div className={styles.overlay} onClick={onClose}>
            x
          </div>
          {children}
        </div>,
        document.body as HTMLElement
      )
    : null;
};

export default Modal;
