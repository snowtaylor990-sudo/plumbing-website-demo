"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent } from
"@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ThumbsUp, ThumbsDown, Sparkles, Search } from "lucide-react";

const FAQS = [
{
  question: "What areas in Miami do you service?",
  answer:
  "We provide plumbing services throughout Miami-Dade County, including Miami, Miami Beach, Coral Gables, Aventura, and surrounding areas. Our team is available 24/7 for emergency calls."
},
{
  question: "Do you offer emergency plumbing services?",
  answer: "Yes! We offer 24/7 emergency plumbing services. Whether it's a burst pipe, severe leak, or drainage issue, our expert plumbers are ready to respond quickly to minimize damage to your property."
},
{
  question: "How quickly can you respond to an emergency?",
  answer:
  "We typically respond to emergency calls within 1-2 hours. Our team understands that plumbing emergencies can't wait, and we prioritize urgent situations to protect your home from water damage."
},
{
  question: "What types of plumbing services do you offer?",
  answer: "We offer comprehensive plumbing services including leak detection and repair, drain cleaning, water heater installation and repair, pipe repair and replacement, toilet and faucet repair, sewer line services, and preventive maintenance."
},
{
  question: "Are your plumbers licensed and insured?",
  answer:
  "Absolutely! All our plumbers are fully licensed, insured, and certified. We maintain the highest standards of professionalism and expertise to ensure quality workmanship on every job."
},
{
  question: "Do you provide free estimates?",
  answer: "Yes, we provide free, no-obligation estimates for all non-emergency plumbing work. For emergency services, we'll provide a transparent quote before beginning any work."
},
{
  question: "What payment methods do you accept?",
  answer: "We accept cash, all major credit cards (Visa, MasterCard, American Express, Discover), checks, and offer financing options for larger projects."
},
{
  question: "How can I prevent plumbing emergencies?",
  answer: "Regular maintenance is key! Schedule annual inspections, avoid flushing non-flushable items, be mindful of what goes down your drains, and address small leaks immediately before they become major problems."
}];


function getPersonalizedFaqs() {
  const shuffled = [...FAQS].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 2);
}

const FAQBlock = () => {
  const [search, setSearch] = useState("");
  const [feedback, setFeedback] = useState<{
    [q: string]: "up" | "down" | undefined;
  }>({});
  const [showFeedbackInput, setShowFeedbackInput] = useState<{
    [q: string]: boolean;
  }>({});
  const [feedbackText, setFeedbackText] = useState<{[q: string]: string;}>({});
  const [aiInput, setAiInput] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [aiLoading, setAiLoading] = useState(false);

  const filteredFaqs = FAQS.filter(
    (faq) =>
    faq.question.toLowerCase().includes(search.toLowerCase()) ||
    faq.answer.toLowerCase().includes(search.toLowerCase())
  );

  const handleFeedback = (q: string, type: "up" | "down") => {
    setFeedback((fb) => ({ ...fb, [q]: type }));
    if (type === "down") setShowFeedbackInput((fb) => ({ ...fb, [q]: true }));
  };

  const handleAiAsk = () => {
    setAiLoading(true);
    setTimeout(() => {
      setAiResponse(
        aiInput.trim() ?
        `Thank you for your question about "${aiInput}". For specific plumbing concerns, please contact our team directly at the number above or use our contact form. We're here to help 24/7!` :
        ""
      );
      setAiLoading(false);
    }, 1200);
  };

  const personalizedFaqs = getPersonalizedFaqs();

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="flex flex-col gap-6 pt-6">
        <Input
          size="lg"
          leftIcon={<Search />}
          placeholder="Search FAQs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)} className="!w-[91%] !h-full" />

        <Accordion type="single" collapsible className="w-full">
          {filteredFaqs.length === 0 ?
          <div className="text-muted-foreground text-center flex flex-col items-center gap-8 p-3">
              <div>No FAQs found.</div>
              <div className="flex flex-col gap-2 w-full max-w-sm">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <Sparkles className="h-4 w-4 text-primary" />
                  Ask our AI Assistant
                </div>
                <Textarea
                placeholder="Type your question..."
                value={aiInput}
                onChange={(e) => {
                  setAiInput(e.target.value);
                  setAiResponse("");
                }}
                rows={2} />

                <Button
                onClick={handleAiAsk}
                disabled={aiLoading || !aiInput.trim()}
                className="self-end"
                loading={aiLoading}
                size="sm">

                  {aiLoading ? "" : "Ask AI"}
                </Button>
                {aiResponse &&
              <div className="bg-accent rounded-md p-3 text-sm">
                    {aiResponse}
                  </div>
              }
              </div>
            </div> :

          filteredFaqs.map((faq, idx) =>
          <AccordionItem key={idx} value={faq.question}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-2">
                    <div className="text-sm">{faq.answer}</div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">
                        Was this helpful?
                      </span>
                      <Button
                    size="icon"
                    variant={
                    feedback[faq.question] === "up" ?
                    "secondary" :
                    "ghost"
                    }
                    onClick={() => handleFeedback(faq.question, "up")}
                    aria-label="Helpful">

                        <ThumbsUp className="h-4 w-4" />
                      </Button>
                      <Button
                    size="icon"
                    variant={
                    feedback[faq.question] === "down" ?
                    "secondary" :
                    "ghost"
                    }
                    onClick={() => handleFeedback(faq.question, "down")}
                    aria-label="Not helpful">

                        <ThumbsDown className="h-4 w-4" />
                      </Button>
                      {feedback[faq.question] === "up" &&
                  <span className="text-green-600 text-xs">
                          Thank you for your feedback!
                        </span>
                  }
                    </div>
                    {showFeedbackInput[faq.question] &&
                <div className="flex flex-col gap-2">
                        <Textarea
                    placeholder="How can we improve this answer?"
                    value={feedbackText[faq.question] || ""}
                    onChange={(e) =>
                    setFeedbackText((fb) => ({
                      ...fb,
                      [faq.question]: e.target.value
                    }))
                    }
                    rows={2} />

                        <Button
                    size="sm"
                    className="self-end"
                    onClick={() =>
                    setShowFeedbackInput((fb) => ({
                      ...fb,
                      [faq.question]: false
                    }))
                    }>

                          Submit Feedback
                        </Button>
                      </div>
                }
                  </div>
                </AccordionContent>
              </AccordionItem>
          )
          }
        </Accordion>
        <div className="flex flex-col gap-1">
          <div className="font-semibold text-sm text-muted-foreground">
            You might also be interested in:
          </div>
          <ul className="list-disc pl-5 flex flex-col gap-1">
            {personalizedFaqs.map((faq, i) =>
            <li key={i} className="text-sm text-muted-foreground">
                {faq.question}
              </li>
            )}
          </ul>
        </div>
      </CardContent>
    </Card>);

};

export default FAQBlock;