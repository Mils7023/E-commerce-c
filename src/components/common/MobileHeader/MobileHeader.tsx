"use client";
import React, { Fragment, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./MobileHeader.module.scss";
import { useAppContext } from "@/context";
import { usePathname, useRouter } from "next/navigation";
import { UserDrawer } from "../UserDrawer";
import { HeartIcon } from "@/assets/icons";
import { MiniCart } from "@/components/cart";
import { CancelIcon } from "@/assets/icons";
import { MenuItem } from "@/types";
import { Input } from "@/components/core";
import { SearchDrawer } from "../SearchDrawer";
import { getImageUrl } from "@/utils/imageHelper";

export const MobileHeader = ({ menuItems }: { menuItems: MenuItem[] }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { authToken, setIsAccountDrawerOpen } = useAppContext();

  const [isActive, setActive] = useState(false);
  const [activeMenu, setActiveMenu] = useState("main");
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [activeSupersubmenu, setActiveSupersubmenu] = useState<string | null>(
    null
  );

  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const processMenuItems = (menuItems: MenuItem[]): MenuItem[] => {
    return menuItems.flatMap((submenu: MenuItem) => {
      const processedChildren = submenu.children
        ? submenu.children.flatMap((item: MenuItem) => {
            if (
              item.menu_type === "general toppers" ||
              item.menu_type === "custom toppers"
            ) {
              return item.children || [];
            }
            if (item.menu_type === "special events") {
              return [item];
            }
            return [item];
          })
        : [];

      return [
        {
          ...submenu,
          children: processedChildren,
        },
      ];
    });
  };

  const processedMenuItems = processMenuItems(menuItems);

  const toggleClass = () => {
    setActive(!isActive);
    setActiveMenu("main");
  };

  const handleMenuClick = (menuType: string) => {
    setActiveMenu("submenu");
    setActiveSubmenu(menuType);
  };

  const handleSubmenuClick = (submenuType: string) => {
    setActiveMenu("supersubmenu");
    setActiveSupersubmenu(submenuType);
  };

  const handleBackClick = () => {
    if (activeMenu === "supersubmenu") {
      setActiveMenu("submenu");
      setActiveSupersubmenu(null);
    } else if (activeMenu === "submenu") {
      setActiveMenu("main");
      setActiveSubmenu(null);
    }
  };

  const searchToggleClass = () => {
    setShowSearch(!showSearch);
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      setShowSearch(false);
      router.push(`/search-product?search=${searchTerm}`);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Fragment>
      {pathname !== "/checkout" ? (
        <header
          className={`${styles.main_header} ${styles.mobile_header} d-md-none d-block position-fixed start-0 end-0 top-0`}
        >
          <div className="container">
            <div
              className={`${styles.mobile_header_wrapper} row g-0 align-items-center`}
            >
              <div
                className={`col-4 ${styles.mobile_header_left} d-flex align-items-center `}
              >
                <button
                  onClick={toggleClass}
                  className={`${styles.burgerMenu} ${
                    isActive ? `${styles.burgerMenuOpen}` : ""
                  } btn-transparent`}
                >
                  <span className={`${styles.burgerIcon}`}></span>
                </button>

                <button className="btn-transparent" onClick={searchToggleClass}>
                  {" "}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.625 15.75C12.56 15.75 15.75 12.56 15.75 8.625C15.75 4.68997 12.56 1.5 8.625 1.5C4.68997 1.5 1.5 4.68997 1.5 8.625C1.5 12.56 4.68997 15.75 8.625 15.75Z"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.5 16.5L15 15"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div
                className={`col-4 text-center ${styles.mobile_header_center}`}
              >
                <Link href="/" className={`${styles.header_logo} `}>
                  <Image
                    alt="Site Logo"
                    width={225}
                    height={105}
                    src={getImageUrl("logo.png")}
                    title="Cannellio Cake Toppers - Logo"
                  />
                </Link>
              </div>
              <div
                className={`col-4 ${styles.mobile_header_right} justify-content-end d-flex align-items-center `}
              >
                <button
                  className="btn-transparent"
                  title="Cannellio Cake Toppers - Wishlist"
                  onClick={() => {
                    if (authToken) {
                      router.push("/wishlist");
                    } else {
                      setIsAccountDrawerOpen(true);
                    }
                  }}
                >
                  <HeartIcon
                    width={30}
                    height={30}
                    stroke="black"
                    strokeWidth="2.5"
                  />
                </button>
                <MiniCart width="30" height="30" strokeWidth="2.5" />
                <UserDrawer width="30" height="30" strokeWidth="2.5" />
              </div>
            </div>

            <div
              className={
                isActive
                  ? `${styles.showMobileMenu} ${styles.mobileMenu}`
                  : styles.mobileMenu
              }
            >
              {/* Main Menu */}
              {activeMenu === "main" && (
                <ul className={styles.headerMenu}>
                  {processedMenuItems.map((menu, index) => (
                    <React.Fragment key={menu.id}>
                      {![
                        "general toppers",
                        "custom toppers",
                        "special events",
                      ].includes(menu.menu_type || "") && (
                        <li
                          className={`${styles.headerMenu_item} d-flex align-items-center justify-content-between`}
                          onClick={() => {
                            if (menu.children && menu.children.length > 0) {
                              handleMenuClick(menu.menu_type || "");
                            } else {
                              setActive(false); // Close the menu
                              // handleMenuClick(menu.menu_type || "");
                              router.push(
                                menu.page_link ? `/${menu.page_link}` : "/"
                              );
                            }
                          }}
                        >
                          {menu.children && menu.children.length > 0 ? (
                            <>
                              <Link
                                href={""}
                                className={styles.headerMenu_link}
                              >
                                {menu.icon && (
                                  <Image
                                    src={menu.icon}
                                    alt={menu.name}
                                    width={20}
                                    height={20}
                                  />
                                )}
                                {"  "}
                                {menu.name}
                              </Link>
                              <Image
                                src={getImageUrl("menu-down-arrow.png")}
                                alt="Expand"
                                width={15}
                                height={13}
                                className={`${styles.mobile_menu_dropdown}`}
                              />
                            </>
                          ) : (
                            <>
                              <Link
                                href={
                                  menu.page_link ? `/${menu.page_link}` : "/"
                                }
                                onClick={() => setActive(false)}
                                className={styles.headerMenu_link_active}
                              >
                                {menu.icon && (
                                  <Image
                                    src={menu.icon}
                                    alt={menu.name}
                                    width={20}
                                    height={20}
                                  />
                                )}
                                {"  "}
                                {menu.name}
                              </Link>
                            </>
                          )}
                        </li>
                      )}
                    </React.Fragment>
                  ))}
                </ul>
              )}

              {/* Submenu */}
              {activeMenu === "submenu" && (
                <>
                  <span
                    onClick={handleBackClick}
                    className={`${styles.mobilemenu_back} d-flex align-items-center gap-2 primary_text font_md p-3`}
                  >
                    <svg
                      width="11"
                      height="14"
                      viewBox="0 0 14 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.9996 1.99952L1.99963 11.4995L11.9996 20.9995"
                        stroke="#F08BB3"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Back
                  </span>
                  <ul className={styles.headerMenu}>
                    {processedMenuItems
                      .find((menu) => menu.menu_type === activeSubmenu)
                      ?.children?.map((submenu, index) => (
                        <li
                          key={submenu.id}
                          className={`${styles.headerMenu_item} d-flex align-items-center justify-content-between`}
                          onClick={() => {
                            if (
                              submenu.children &&
                              submenu.children.length > 0
                            ) {
                              handleSubmenuClick(submenu.menu_type || "");
                            } else {
                              // handleMenuClick(submenu.menu_type || "");
                              setActive(false); // Close the menu
                              router.push(
                                submenu.page_link
                                  ? `/${submenu.page_link}`
                                  : "/"
                              );
                            }
                          }}
                        >
                          {submenu.children && submenu.children.length > 0 ? (
                            <>
                              <Link
                                href={""}
                                className={styles.headerMenu_link}
                              >
                                {submenu.name}
                              </Link>
                              <Image
                                src={getImageUrl("menu-down-arrow.png")}
                                alt="Expand"
                                width={15}
                                height={13}
                                className={`${styles.mobile_menu_dropdown}`}
                              />
                            </>
                          ) : (
                            <Link
                              href={
                                submenu.page_link
                                  ? `/${submenu.page_link}`
                                  : "/"
                              }
                              className={styles.headerMenu_link_active}
                              onClick={() => setActive(false)}
                            >
                              {submenu.name}
                            </Link>
                          )}
                        </li>
                      ))}
                  </ul>
                </>
              )}

              {/* Super Submenu */}
              {activeMenu === "supersubmenu" && (
                <>
                  <span
                    onClick={handleBackClick}
                    className={`${styles.mobilemenu_back} d-flex align-items-center gap-2 primary_text font_md p-3`}
                  >
                    <svg
                      width="11"
                      height="14"
                      viewBox="0 0 14 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.9996 1.99952L1.99963 11.4995L11.9996 20.9995"
                        stroke="#F08BB3"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Back
                  </span>
                  <ul className={styles.headerMenu}>
                    {processedMenuItems
                      .find((menu) => menu.menu_type === activeSubmenu)
                      ?.children?.find(
                        (submenu) => submenu.menu_type === activeSupersubmenu
                      )
                      ?.children?.map((supersubmenu, index) => (
                        <li
                          key={supersubmenu.id}
                          className={styles.headerMenu_item}
                        >
                          <Link
                            href={
                              supersubmenu.page_link
                                ? `/${supersubmenu.page_link}`
                                : "/"
                            }
                            className={styles.headerMenu_link_active}
                            onClick={() => setActive(false)}
                          >
                            {supersubmenu.name}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </>
              )}
            </div>

            <div
              className={
                showSearch
                  ? `${styles.showSearchBarMain} ${styles.searchBarMain}`
                  : styles.searchBarMain
              }
            >
              <div className={`${styles.header_search}`}>
                <div className="d-flex gap-3 align-items-center">
                  <div
                    className={`${styles.header_search_wrapper} position-relative`}
                  >
                    <Input
                      name="Search"
                      type="text"
                      placeholder="Search here..."
                      className="form-control"
                      onChange={(e) => setSearchTerm(e.currentTarget.value)}
                      value={searchTerm}
                      onFocus={() => {
                        if (!showSearch) setShowSearch(true);
                      }}
                      // onBlur={() => setShowSearch(false)}
                      onKeyDown={handleKeyDown}
                    />
                    <button
                      className={`${styles.search_btn} btn  position-absolute top-0 bottom-0 end-0`}
                    >
                      <Image
                        alt="Search Icon"
                        width={24}
                        height={24}
                        src={getImageUrl("search-normal.png")}
                        title="Cannellio Cake Toppers - Search Icon"
                      />
                    </button>
                  </div>
                  <button
                    className={styles.closeButton}
                    onClick={() => setShowSearch(false)}
                  >
                    <CancelIcon className="black_text" />
                  </button>
                </div>
                <SearchDrawer
                  isOpen={showSearch}
                  setIsOpen={setShowSearch}
                  searchTerm={searchTerm}
                  isMobile={true}
                />
              </div>
            </div>
          </div>
        </header>
      ) : (
        <header
          className={`${styles.main_header} ${styles.mobile_header} d-md-none d-block position-fixed start-0 end-0 top-0`}
        >
          <div className="container">
            <div
              className={`${styles.mobile_header_wrapper} row g-0 align-items-center justify-content-between`}
            >
              <div
                className={`col-4 ${styles.mobile_header_left} d-flex align-items-center `}
              >
                <Link href="/" className={`${styles.header_logo} `}>
                  <Image
                    alt="Site Logo"
                    width={225}
                    height={105}
                    src={getImageUrl("logo.png")}
                    title="Cannellio Cake Toppers - Logo"
                  />
                </Link>
              </div>
              <div
                className={`col-6 ${styles.mobile_header_right} justify-content-end d-flex align-items-center `}
              >
                <div
                  className={`${styles.secure_Acccount} d-flex align-items-center gap-2`}
                >
                  <Image
                    src={getImageUrl("secure-ac-icon.png")}
                    alt="Secure Icon"
                    width={18}
                    height={20}
                    title="Cannellio Cake Toppers - Secure Icon"
                  />
                  <span className="h6 black_text font_rg">Secure payment</span>
                </div>
              </div>
            </div>
          </div>
        </header>
      )}
    </Fragment>
  );
};
