import React from "react";

import Accordion from "react-bootstrap/Accordion";

const faqsData = [
  {
    id: "01",
    eventKey: '0',
    faqHeader: "What materials are the cake toppers made from?",
    faqBody:
      "Our cake toppers are made from high-quality materials such as acrylic, wood, and food-safe plastic.",
  },
  {
    id: "02",
    eventKey: '1',
    faqHeader: "Are your cake toppers food-safe?",
    faqBody:
      "Our cake toppers are made from high-quality materials such as acrylic, wood, and food-safe plastic.",
  },
  {
    id: "03",
    eventKey: '2',
    faqHeader: "How do I request a return or exchange?",
    faqBody:
      "Our cake toppers are made from high-quality materials such as acrylic, wood, and food-safe plastic.",
  },
  {
    id: "04",
    eventKey: '3',
    faqHeader: "What are your shipping options?",
    faqBody:
      "Our cake toppers are made from high-quality materials such as acrylic, wood, and food-safe plastic.",
  },
  {
    id: "05",
    eventKey: '4',
    faqHeader: "How long does it take to process a custom order?",
    faqBody:
      "Our cake toppers are made from high-quality materials such as acrylic, wood, and food-safe plastic.",
  },
  {
    id: "06",
    eventKey: '5',
    faqHeader: "How long does it take to process a custom order?",
    faqBody:
      "Our cake toppers are made from high-quality materials such as acrylic, wood, and food-safe plastic.",
  },
  {
    id: "07",
    eventKey: '6',
    faqHeader: "How long does it take to process a custom order?",
    faqBody:
      "Our cake toppers are made from high-quality materials such as acrylic, wood, and food-safe plastic.",
  },
  {
    id: "08",
    eventKey: '7',
    faqHeader: "How long does it take to process a custom order?",
    faqBody:
      "Our cake toppers are made from high-quality materials such as acrylic, wood, and food-safe plastic.",
  },
];

export const AccordionList = () => {
  return (
    <Accordion className="faq_accordian" defaultActiveKey="0" flush>
      {faqsData.map((faqs) => (
        <Accordion.Item className="faq_accordian_item" eventKey={faqs.eventKey} key={faqs.id}>
          <Accordion.Header>
            <span className="faq_accordian_number h4 font_bl">{faqs.id}</span>
            {faqs.faqHeader}  
          </Accordion.Header>
          <Accordion.Body className="faq_accordian-body h5 font_rg black_shade5_text">
            {faqs.faqBody}
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

// export default AccordionList;
