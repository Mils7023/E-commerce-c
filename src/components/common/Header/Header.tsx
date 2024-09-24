"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

import Link from "next/link";

import styles from "./Header.module.scss";
import { useAppContext, useCartContext } from "@/context";
import { usePathname, useRouter } from "next/navigation";
import { UserDrawer } from "../UserDrawer";
import { Avatar, CartIcon, HeartIcon } from "@/assets/icons";
import { MiniCart } from "@/components/cart";
import { MobileHeader } from "../MobileHeader";
import { useWidthMediaQuery } from "@/hooks";
import { MenuItem } from "@/types";
import { SearchDrawer } from "../SearchDrawer";
import { getImageUrl } from "@/utils/imageHelper";
import { UserAccountDrawer } from "@/components/account";
import { Drawer } from "../Drawer";

export const Header = ({ menuItems }: { menuItems: MenuItem[] }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMobile] = useWidthMediaQuery();
  const {
    authToken,
    setIsAccountDrawerOpen,
    isAccountDrawerOpen,
    isMiniCartOpen,
    setIsMiniCartOpen,
  } = useAppContext();
  const { cartDetails } = useCartContext();
  const [searchTerm, setSearchTerm] = useState("");

  const [showSearch, setShowSearch] = useState(false);

  // const [show, setShow] = useState(false);
  // const [lastScrollY, setLastScrollY] = useState(0);

  // const controlNavbar = () => {
  //   if (window.scrollY > lastScrollY) {
  //     setShow(true);
  //   } else {
  //     setShow(false);
  //   }
  //   setLastScrollY(window.scrollY);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", controlNavbar);
  //   return () => {
  //     window.removeEventListener("scroll", controlNavbar);
  //   };
  // }, [lastScrollY]);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    // Ensure DOM is available before accessing it
    if (typeof window !== "undefined") {
      const header = document.querySelector("#header-main") as HTMLElement;

      // Check if the header element exists and then set its height
      if (header) {
        setNavHeight(header.offsetHeight);
      }

      const handleScroll = () => {
        const currentScrollPosition = window.pageYOffset;

        // Add 'active' class when scrolled past the header height
        if (currentScrollPosition > navHeight) {
          setIsActive(true);
        } else {
          setIsActive(false);
        }

        // Toggle 'sticky' class based on scroll direction
        if (currentScrollPosition > scrollPosition) {
          setIsSticky(false);
        } else {
          setIsSticky(true);
        }

        setScrollPosition(currentScrollPosition);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [scrollPosition, navHeight]);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      // Pass search term as a query parameter
      setShowSearch(false);
      router.push(`/search-product?search=${searchTerm}`);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    setShowSearch(true);
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  // {`${
  //   styles.main_header
  // } d-md-block d-none position-absolute start-0 end-0  ${
  //   isSticky
  //     ? `${styles.main_header_hidden}`
  //     : `${styles.main_header_show} position-fixed `
  // }`}

  return (
    <>
      {isMobile ? (
        <MobileHeader menuItems={menuItems} />
      ) : (
        <div className="position-relative">
          <header
            id="header-main"
            className={`${styles.main_header} d-md-block d-none ${
              isSticky ? `${styles.main_header_show} position-fixed` : ""
            } ${isActive ? `${styles.main_header_hidden}` : ""}`}
          >
            <div className={`${styles.header_top}`}>
              <div className="container">
                <div
                  className={`d-flex align-items-end justify-content-between`}
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
                  {pathname !== "/checkout" && (
                    <div className={`${styles.header_search} pb-2`}>
                      <div
                        className={`${styles.header_search_wrapper} position-relative`}
                      >
                        <input
                          type="text"
                          placeholder="Search here Toppers, Occasion, Theme, Shape etc..."
                          className="form-control"
                          onChange={(e) => setSearchTerm(e.target.value)}
                          value={searchTerm}
                          onFocus={() => setShowSearch(true)}
                          // onBlur={() => setShowSearch(false)}
                          onKeyDown={handleKeyDown}
                        ></input>
                        <button
                          className={`${styles.search_btn} btn  position-absolute top-0 bottom-0 end-0`}
                          onClick={() => handleSearch()}
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
                    </div>
                  )}
                  <div
                    className={`${styles.header_icons} d-flex align-items-center pb-2`}
                  >
                    {pathname !== "/checkout" && (
                      <>
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
                            width={48}
                            height={48}
                            stroke="black"
                            strokeWidth="1.5"
                          />
                        </button>
                        {/* <MiniCart width="48" height="48" strokeWidth="1.5" /> */}
                        <button
                          title="Cannellio Cake Toppers - Viewcart"
                          className="position-relative btn-transparent"
                          onClick={() => setIsMiniCartOpen((prev) => !prev)}
                        >
                          {!cartDetails ? (
                            <CartIcon
                              stroke="black"
                              width="48"
                              height="48"
                              strokeWidth="1.5"
                            />
                          ) : (
                            <>
                              <span
                                className={`${styles.cart_count} position-absolute end-0 d-flex align-items-center justify-content-center white_text font-12 font_smb primary_bg`}
                              >
                                {cartDetails?.total_quantity}
                              </span>

                              <CartIcon
                                stroke="black"
                                width="48"
                                height="48"
                                strokeWidth="1.5"
                              />
                            </>
                          )}
                        </button>
                        {/* <UserDrawer strokeWidth="1.5" width="48" height="48" /> */}
                        <button
                          className={`${styles.toggleButton} btn-transparent`}
                          onClick={() =>
                            setIsAccountDrawerOpen((prev) => !prev)
                          }
                        >
                          <div
                            tabIndex={0}
                            role="button"
                            className={styles.avatarContainer}
                          >
                            <Avatar strokeWidth="1.5" width="48" height="48" />
                          </div>
                        </button>
                      </>
                    )}

                    {/* THI DIV DISPLAY IN CHECKOUT PAGE */}
                    {pathname === "/checkout" && (
                      <div
                        className={`${styles.secure_Acccount} d-flex align-items-center gap-2`}
                      >
                        <Image
                          src={getImageUrl("secure-ac-icon.png")}
                          alt="Secure Icon"
                          title="Cannellio Cake Toppers - Secure Icon"
                          height={20}
                          width={18}
                        />
                        <span className="h6 black_text font_rg">
                          Secure payment
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* {SEARCH SECTION} */}
            {pathname !== "/checkout" && (
              <>
                {showSearch && (
                  <SearchDrawer
                    searchTerm={searchTerm}
                    setIsOpen={setShowSearch}
                    isOpen={showSearch}
                    isMobile={false}
                  />
                )}
                <div className={`${styles.header_bottom}`}>
                  <div className="container">
                    <div className={`${styles.header_bottom_wrapper}`}>
                      <div className={`${styles.header_menu}`}>
                        {menuItems.map((menu: MenuItem, index: number) => (
                          // <>
                          <div
                            className={`${styles.header_menu_list}`}
                            key={menu.id}
                          >
                            <Link
                              className={`${styles.header_menu_link}`}
                              href={
                                !menu.children && menu.page_link
                                  ? `/${menu.page_link}`
                                  : ""
                              }
                              title={menu.name}
                            >
                              {menu.icon && (
                                <Image
                                  alt={`${menu.name} Icon`}
                                  width={20}
                                  height={20}
                                  src={menu.icon}
                                  title={`Cannellio Cake Toppers - ${menu.name} Icon`}
                                />
                              )}
                              {menu.name}
                              {menu.children && (
                                <Image
                                  alt="Arrow Down Icon"
                                  width={15}
                                  height={15}
                                  src={getImageUrl("menu-down-arrow.png")}
                                  title="Cannellio Cake Toppers - Arrow Down Icon"
                                />
                              )}
                            </Link>
                            {/* Toppers By Shape */}
                            {menu.menu_type === "toppers by shape" &&
                              menu.children && (
                                <div
                                  className={`${styles.header_submenu} ${styles.toppers_shape_submenu}`}
                                >
                                  <div
                                    className={`${styles.toppers_shape_submenu_wrapper} row g-3`}
                                  >
                                    {menu.children.map((submenu) => (
                                      <div
                                        key={submenu.id}
                                        className="col-xxl-2 col-4"
                                      >
                                        <div
                                          className={`${styles.toppers_shape_box} position-relative`}
                                        >
                                          <div
                                            className={`${styles.toppers_shape_image}`}
                                          >
                                            <Image
                                              alt={`${submenu.name}`}
                                              width={260}
                                              height={260}
                                              src={submenu.header_image || ""}
                                              title={`Cannellio Cake Toppers - ${submenu.name} Image`}
                                            />
                                          </div>
                                          <div
                                            className={`${styles.toppers_shape_title}`}
                                          >
                                            <span>{submenu.name}</span>
                                          </div>
                                          <Link
                                            href={
                                              submenu.page_link
                                                ? `/${submenu.page_link}`
                                                : "/"
                                            }
                                            className="position-absolute start-0 top-0 end-0 bottom-0"
                                          ></Link>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            {/* Cake Toppers */}
                            {menu.menu_type === "cake toppers" &&
                              menu.children && (
                                <div
                                  className={`${styles.header_submenu} ${styles.cake_toppers_submenu}`}
                                >
                                  <div
                                    className={`${styles.cake_toppers_submenu_wrapper} row g-xl-4 g-5`}
                                  >
                                    {/* Left Column: General Toppers section */}
                                    <div
                                      className={`col-xl-4 col-12 ${styles.cake_toppers_left}`}
                                    >
                                      <div className={`row g-xxl-3 g-2`}>
                                        {menu.children.map(
                                          (submenu) =>
                                            submenu.menu_type ===
                                              "general toppers" &&
                                            submenu.children &&
                                            submenu.children?.map(
                                              (generalToppersChild) => (
                                                <div
                                                  key={generalToppersChild.id}
                                                  className="col-xl-4 col-2 d-flex align-items-center flex-column"
                                                >
                                                  <Link
                                                    href={
                                                      generalToppersChild.page_link
                                                        ? `/${generalToppersChild.page_link}`
                                                        : "/"
                                                    }
                                                    className={`${styles.cake_toppers_left_img}`}
                                                  >
                                                    <Image
                                                      alt={
                                                        generalToppersChild.name
                                                      }
                                                      width={80}
                                                      height={80}
                                                      src={
                                                        generalToppersChild.header_image ||
                                                        ""
                                                      }
                                                      className="hover-image-animation"
                                                      title={`Cannellio Cake Toppers - ${generalToppersChild.name}`}
                                                    />
                                                  </Link>
                                                  <Link
                                                    href={
                                                      generalToppersChild.page_link
                                                        ? `/${generalToppersChild.page_link}`
                                                        : "/"
                                                    }
                                                  >
                                                    <span className="font-14 text-center black_text font_md mt-2 d-inline-block">
                                                      {generalToppersChild.name}
                                                    </span>
                                                  </Link>
                                                </div>
                                              )
                                            )
                                        )}
                                      </div>
                                    </div>

                                    {/* Right Column: Custom Toppers section */}
                                    <div
                                      className={`col-xl-8 col-12 ${styles.cake_toppers_right}`}
                                    >
                                      <div className="row g-xxl-4 g-xl-3 g-4">
                                        {menu.children
                                          .filter(
                                            (submenu) =>
                                              submenu.menu_type ===
                                              "custom toppers"
                                          )
                                          .flatMap((submenu) =>
                                            submenu.children?.map((child) => (
                                              <div
                                                key={child.id}
                                                className="col-xl-4 col"
                                              >
                                                <div
                                                  className={`${styles.cake_toppers_list}`}
                                                >
                                                  <Link
                                                    href={
                                                      child.page_link
                                                        ? `/${child.page_link}`
                                                        : "/"
                                                    }
                                                    className={`${styles.cake_toppers_url} font-16 black_text font_md mb-xxl-3 mb-2 d-inline-block cursor-default`}
                                                  >
                                                    {child.name}
                                                  </Link>
                                                  {child.children && (
                                                    <ul
                                                      className={`${styles.cake_toppers_ul} d-flex flex-column gap-2`}
                                                    >
                                                      {child.children.map(
                                                        (grandchild) => (
                                                          <li
                                                            key={grandchild.id}
                                                            className={`${styles.cake_toppers_li}`}
                                                          >
                                                            <Link
                                                              href={
                                                                grandchild.page_link
                                                                  ? `/${grandchild.page_link}`
                                                                  : "/"
                                                              }
                                                              className={`${styles.cake_toppers_item} fw-normal`}
                                                            >
                                                              {grandchild.name}
                                                            </Link>
                                                          </li>
                                                        )
                                                      )}
                                                    </ul>
                                                  )}
                                                </div>
                                              </div>
                                            ))
                                          )}
                                      </div>

                                      {/* Special Events Section */}
                                      <div
                                        className={`${styles.cake_toppers_special} pt-xxl-5 pt-4`}
                                      >
                                        {menu.children?.map(
                                          (submenu) =>
                                            submenu.menu_type ===
                                              "special events" && (
                                              <Link
                                                href={
                                                  submenu.page_link
                                                    ? `/${submenu.page_link}`
                                                    : "/"
                                                }
                                                key={submenu.id}
                                                className={`font-16 black_text font_md pb-1 ${styles.cake_toppers_special_title} d-inline-block mb-xxl-4 mb-3`}
                                              >
                                                {submenu.name}
                                              </Link>
                                            )
                                        )}
                                        <div className="d-flex gap-2 flex-wrap">
                                          {menu.children
                                            .filter(
                                              (submenu) =>
                                                submenu.menu_type ===
                                                "special events"
                                            )[0]
                                            ?.children?.map((superSubmenu) => (
                                              <Link
                                                key={superSubmenu.id}
                                                href={
                                                  superSubmenu.page_link
                                                    ? `/${superSubmenu.page_link}`
                                                    : "/"
                                                }
                                                className={`${styles.cake_special_toppers_box} d-flex align-items-center overflow-hidden position-relative`}
                                              >
                                                {superSubmenu.header_image && (
                                                  <Image
                                                    alt={superSubmenu.name}
                                                    width={140}
                                                    height={140}
                                                    src={
                                                      superSubmenu.header_image
                                                    }
                                                    className="hover-image-animation"
                                                    title={`Cannellio Cake Toppers - ${superSubmenu.name}`}
                                                  />
                                                )}
                                                <div
                                                  className={`${styles.cake_special_toppers_name} position-absolute start-0 end-0 d-flex align-items-center justify-content-center`}
                                                >
                                                  <span className="black_text">
                                                    {superSubmenu.name}
                                                  </span>
                                                </div>
                                              </Link>
                                            ))}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                            {/* Our World Menu */}
                            {menu.menu_type === "other" && menu.children && (
                              <div
                                className={`${styles.header_submenu} ${styles.our_world_submenu}`}
                              >
                                <ul
                                  className={`${styles.our_world_submenu_list}`}
                                >
                                  {menu.children.map((child) => (
                                    <li key={child.id}>
                                      <Link
                                        href={
                                          child.page_link
                                            ? `/${child.page_link}`
                                            : "/"
                                        }
                                      >
                                        {child.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                          // </>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </header>

          <Drawer
            isOpen={isAccountDrawerOpen}
            setIsOpen={() => setIsAccountDrawerOpen((prev) => !prev)}
          >
            <UserDrawer strokeWidth="1.5" width="48" height="48" />
          </Drawer>

          <Drawer
            isOpen={isMiniCartOpen}
            setIsOpen={() => setIsMiniCartOpen((prev) => !prev)}
          >
            <MiniCart width="48" height="48" strokeWidth="1.5" />
          </Drawer>
        </div>
      )}
    </>
  );
};
