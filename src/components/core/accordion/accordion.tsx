// components/CustomAccordion.tsx
import Accordion from "react-bootstrap/Accordion";
import '@/components/core/accordion/accordion.scss'

interface AccordionItem {
  eventKey: string;
  header: string;
  body: string;
}

interface CustomAccordionProps {
  items: AccordionItem[];
  defaultActiveKey?: string;
}

export default function CustomAccordion({
  items,
  defaultActiveKey = "0",
}: CustomAccordionProps) {
  return (
    <Accordion className="CustomAccordion" defaultActiveKey={defaultActiveKey}>
      {items.map((item) => (
        <Accordion.Item key={item.eventKey} eventKey={item.eventKey}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
