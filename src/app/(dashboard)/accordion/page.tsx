import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    id: "1",
    question: "Is it accesible?",
    answer: "Yes. It adheres to the WAI-ARIA design patterns",
  },
  {
    id: "2",
    question: "How do I get started?",
    answer: "You can start by reading the documentacion",
  },
  {
    id: "3",
    question: "Can I use it on multiple projects?",
    answer: "Yes. It's licensed under the MIT license",
  },
];

export default function AccordionPage() {
  return (
    <Accordion type="single" className="w-full">
      {items.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
