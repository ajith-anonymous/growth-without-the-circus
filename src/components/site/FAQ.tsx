import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { faqs } from "@/data/faq";
import { Reveal, RevealLines } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function FAQ() {
  return (
    <section aria-labelledby="faq-title" className="bg-ink py-24 text-paper sm:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionLabel index="10" tone="light">FAQ</SectionLabel>
            <RevealLines
              id="faq-title"
              className="mt-8 type-display text-huge"
              lines={["Good questions.", <span key="s" className="text-signal">Straight answers.</span>]}
            />
          </div>
        </div>
        <Reveal className="lg:col-span-7">
          <AccordionPrimitive.Root type="single" collapsible defaultValue="item-0" className="border-t border-paper/15">
            {faqs.map((f, i) => (
              <AccordionPrimitive.Item key={f.q} value={`item-${i}`} className="group border-b border-paper/15">
                <AccordionPrimitive.Header>
                  <AccordionPrimitive.Trigger className="flex w-full cursor-pointer items-center gap-5 py-6 text-left sm:gap-8 sm:py-7">
                    <span className="font-grotesk text-xs font-bold text-signal">{String(i + 1).padStart(2, "0")}</span>
                    <span className="flex-1 font-grotesk text-lg font-semibold leading-snug transition-colors group-hover:text-signal sm:text-2xl">
                      {f.q}
                    </span>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-paper/20 transition-all duration-500 ease-expo group-data-[state=open]:rotate-45 group-data-[state=open]:border-signal group-data-[state=open]:bg-signal group-data-[state=open]:text-ink">
                      <Plus className="h-4 w-4" />
                    </span>
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <p className="max-w-2xl pb-8 pl-10 pr-14 text-base leading-relaxed text-paper/65 sm:pl-14 sm:text-lg">
                    {f.a}
                  </p>
                </AccordionPrimitive.Content>
              </AccordionPrimitive.Item>
            ))}
          </AccordionPrimitive.Root>
        </Reveal>
      </div>
    </section>
  );
}
