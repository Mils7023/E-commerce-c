"use client";
import Image from "next/image";
import React from "react";
import styles from "./ContactUsForm.module.scss";
import { Input, TextArea } from "@/components/core";
import { Form } from "@/components/common";
import { contactFormSchema } from "@/utils";
import { getImageUrl } from "@/utils/imageHelper";
import { useContactUs } from "@/hooks";

export interface ContactFormValue {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  issue: string;
}

export const ContactUsForm = () => {
  const { handleContactUs } = useContactUs();

  const handleSubmit = (data: ContactFormValue) => {
    if (data.phone_number) {
      data.phone_number = `+44 ${data.phone_number.replace(/^\+44\s*/, "")}`;
    }
    handleContactUs(data);
  };

  return (
    <section id="contactus_section">
      <div
        className={`${styles.contactus_main} common-padding-t common-padding-b`}
      >
        <div className="container">
          <div className={`${styles.contactus_wrapper} mb-5`}>
            <div className={`${styles.contact_us}`}>
              <div
                className={`${styles.contact_us_form} row align-items-end flex-column-reverse flex-lg-row g-4 g-lg-5`}
              >
                <div className="col-12 col-lg-6">
                  <div className="main-title pb-0">
                    <h2 className="h2 primary_text jua-font">Get in touch!</h2>
                    <p className="h5 font_smb black_text">
                      Reach out and we will get in touch within 24 hours.
                    </p>
                  </div>
                  <Form<ContactFormValue>
                    className=""
                    onSubmit={handleSubmit}
                    schema={contactFormSchema}
                    resetData={{
                      first_name: "",
                      last_name: "",
                      email: "",
                      phone_number: "",
                      issue: "",
                    }}
                  >
                    <Input
                      label="First Name *"
                      placeholder="Enter Your Name"
                      name="first_name"
                      formGroupClass="pb-sm-4 pb-lg-3 pb-xl-4 pb-3 mb-xxl-1 mb-0"
                    />
                    <Input
                      label="Last Name *"
                      placeholder="Enter Your Surname"
                      name="last_name"
                      formGroupClass="pb-sm-4 pb-lg-3 pb-xl-4 pb-3 mb-xxl-1 mb-0"
                    />
                    <Input
                      label="Email *"
                      placeholder="Enter Your Email"
                      name="email"
                      type="email"
                      formGroupClass="pb-sm-4 pb-lg-3 pb-xl-4 pb-3 mb-xxl-1 mb-0"
                    />
                    <Input
                      label="Mobile Number *"
                      placeholder="Enter Your Mobile Number"
                      name="phone_number"
                      type="phone"
                      inputMode="numeric"
                      formGroupClass="pb-sm-4 pb-3 pb-lg-3 pb-xl-4 mb-xxl-1 mb-0"
                    />
                    <TextArea
                      name="issue"
                      placeholder="Leave Us A Message..."
                      label="Issue *"
                      formGroupClass="mb-md-4 mb-3"
                    />
                    <button
                      className={`${styles.contact_us_btn} btn w-100 h6 font_smb mt-xl-3`}
                      type="submit"
                    >
                      Send Message
                    </button>
                  </Form>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="d-flex justify-content-end">
                    <Image
                      src={getImageUrl("contact-us-page/contact-us-image.png")}
                      alt="Contact-Us-Image"
                      title="Cannellio Cake Toppers - Contact-Us"
                      width={574}
                      height={947}
                      className={`${styles.contactus_image} d-lg-block d-none`}
                    />
                    <Image
                      src={getImageUrl(
                        "contact-us-page/contact-us-mobile-image.png"
                      )}
                      alt="Contact-Us-Image"
                      title="Cannellio Cake Toppers - Contact-Us"
                      width={574}
                      height={583}
                      className={`${styles.contactus_mobile_image} d-block d-lg-none`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
