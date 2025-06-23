// components/CustomAccordionV2.tsx
import Accordion from "react-bootstrap/Accordion";
import "@/components/core/accordion-v-2/accordion-v-2";
import { Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import PDFIcon from "../../../../public/images/pdf.svg";
import '@/components/core/accordion-v-2/accordion-v-2.scss'
interface AccordionItem {
  eventKey: string;
  header: string;
  body: string;
}

interface CustomAccordionV2Props {
  items: AccordionItem[];
  defaultActiveKey?: string;
}

export default function CustomAccordionV2({
  items,
  defaultActiveKey = "0",
}: CustomAccordionV2Props) {
  return (
    <Accordion
      className="CustomAccordionV2"
      defaultActiveKey={defaultActiveKey}
    >
      {items.map((item) => (
        <Accordion.Item key={item.eventKey} eventKey={item.eventKey}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
