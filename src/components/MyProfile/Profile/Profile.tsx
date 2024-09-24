"use client";
import React from "react";
import styles from "./Profile.module.scss";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { useAuthenticate, useCustomerDetails } from "@/hooks";
import { PersonalCenter } from "../PersonalCenter";
import { AddressBook } from "../AddressBook";
import { OrderHistory } from "../OrderHistory";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { SpinnerProps } from "@/components/common/Spinner";

const Spinner = dynamic<SpinnerProps>(
  () => import("@/components/common/Spinner").then((mod) => mod.Spinner),
  {
    ssr: false,
  }
);

export interface ProfileFormValue {
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;
  gender: number;
}

export const Profile = ({ eventKey }: { eventKey: string }) => {
  const { customerData, getCustomerLoading, refetchCustomer } =
    useCustomerDetails();
  const router = useRouter();
  const { handleLogout } = useAuthenticate();

  const handleTabSelect = (eventKey: string | null) => {};

  return (
    <section id="profile_section">
      <div className={`${styles.profile_main} common-padding-t`}>
        <div className="container">
          <div className={`${styles.profile_wrapper}`}>
            <Tab.Container
              defaultActiveKey="personalCenter"
              onSelect={handleTabSelect}
              activeKey={eventKey}
            >
              <Row className="profile-tabbing-row">
                <Col lg={3}>
                  <div className="profile_tabs d-lg-block d-none">
                    <Nav
                      variant="pills"
                      className={`${styles.profile_left} common-profile-shadow flex-column`}
                    >
                      <Nav.Item className={`${styles.profile_nav_item}`}>
                        <Nav.Link
                          className={`${styles.profile_nav_link} font-18 font_smb`}
                          eventKey="personalCenter"
                          onClick={() => router.push("/account-information")}
                        >
                          Personal Center
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item className={`${styles.profile_nav_item}`}>
                        <Nav.Link
                          className={`${styles.profile_nav_link} font-18 font_smb`}
                          eventKey="addressBook"
                          onClick={() => router.push("/address-book")}
                        >
                          Address Book
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item className={`${styles.profile_nav_item}`}>
                        <Nav.Link
                          className={`${styles.profile_nav_link} font-18 font_smb`}
                          eventKey="orderHistory"
                          onClick={() => router.push("/order-history")}
                        >
                          Orders History
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item className={`${styles.profile_nav_item}`}>
                        <div className="d-flex justify-content-center mt-2">
                          <button
                            className={`btn-gradient btn rounded-pill`}
                            onClick={() => {
                              handleLogout();
                              // router.push("/");
                            }}
                          >
                            Log Out
                          </button>
                        </div>
                      </Nav.Item>
                    </Nav>
                  </div>
                </Col>
                <Col lg={9}>
                  <Tab.Content className={`${styles.profile_tab_content}`}>
                    {getCustomerLoading ? (
                      <div className="d-flex justify-content-center">
                        <Spinner size="sm" />
                      </div>
                    ) : (
                      customerData &&
                      (eventKey === "personalCenter" ? (
                        <PersonalCenter
                          customerData={customerData.customer}
                          refetchCustomer={refetchCustomer}
                        />
                      ) : eventKey === "addressBook" ? (
                        <AddressBook
                          customerData={customerData.customer}
                          refetchCustomer={refetchCustomer}
                        />
                      ) : (
                        <OrderHistory />
                      ))
                    )}
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </div>
      </div>
    </section>
  );
};
