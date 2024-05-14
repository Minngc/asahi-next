import classNames from "classnames";
import { MouseEventHandler } from "react";
import styles from "./index.module.scss";

const MenuIconToCloseIcon = (props: {
  className?: string;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
  change: boolean;
  size?: number;
}) => {
  const { onClick, change, size = 24, className } = props;
  return (
    <div
      style={{ "--size": `${size}px` }}
      className={classNames(styles.Iconcontainer, className)}
    >
      <div
        onClick={onClick}
        className={classNames(styles.menuIcon, {
          [styles.closeIcon]: change,
        })}
      >
        <div className={classNames(styles.line)} />
        <div className={classNames(styles.line)} />
        <div className={classNames(styles.line)} />
      </div>
    </div>
  );
};

const SearchIcon = () => {
  return (
    <>
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.0859 9.5C22.0859 13.0899 19.1757 16 15.5859 16C14.1711 16 12.8619 15.548 11.7947 14.7805C11.746 14.9046 11.6714 15.021 11.5711 15.1213L5.20711 21.4853C4.81658 21.8758 4.18342 21.8758 3.79289 21.4853C3.40237 21.0948 3.40237 20.4616 3.79289 20.0711L10.1569 13.7071C10.2472 13.6167 10.3506 13.5472 10.461 13.4987C9.59937 12.3959 9.08588 11.0079 9.08588 9.5C9.08588 5.91015 11.996 3 15.5859 3C19.1757 3 22.0859 5.91015 22.0859 9.5ZM20.0859 9.5C20.0859 11.9853 18.0712 14 15.5859 14C13.1006 14 11.0859 11.9853 11.0859 9.5C11.0859 7.01472 13.1006 5 15.5859 5C18.0712 5 20.0859 7.01472 20.0859 9.5Z"
            fill="black"
            fillOpacity="0.6"
          />
        </g>
      </svg>
    </>
  );
};

const SearchMenuIcon = () => {
  return (
    <>
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.5 13C7.5 14.3807 6.38071 15.5 5 15.5C3.61929 15.5 2.5 14.3807 2.5 13C2.5 11.6193 3.61929 10.5 5 10.5C6.38071 10.5 7.5 11.6193 7.5 13ZM14.5 13C14.5 14.3807 13.3807 15.5 12 15.5C10.6193 15.5 9.5 14.3807 9.5 13C9.5 11.6193 10.6193 10.5 12 10.5C13.3807 10.5 14.5 11.6193 14.5 13ZM19 15.5C20.3807 15.5 21.5 14.3807 21.5 13C21.5 11.6193 20.3807 10.5 19 10.5C17.6193 10.5 16.5 11.6193 16.5 13C16.5 14.3807 17.6193 15.5 19 15.5Z"
            fill="black"
            fillOpacity="0.6"
          />
        </g>
      </svg>
    </>
  );
};

export { MenuIconToCloseIcon, SearchIcon, SearchMenuIcon }