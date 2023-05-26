import React, { useRef, useState } from "react";
import Image from "next/image";
import CaretDown from "../../assets/icons/caret-down.svg";
import faqData from "@/page-components/Faq/faqData";
import NavigationBar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface ListItemProps {
  content: string | string[];
  label: string;
  header: string;
}

const ListItem: React.FC<ListItemProps> = ({ content, label, header }) => {
  const [expand, setExpand] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const expansionHandler = () => {
    setExpand(!expand);
  };

  React.useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [content]);

  return (
    <li className="font-normal text-[14px] md:text-[18px] pt-12 flex flex-col gap-4 justify-between w-full text-gray-6 border-b-2  font-Beautiste leading-[21.6px]">
      <button
        type="button"
        onClick={expansionHandler}
        className="w-full flex text-left gap-8 font-Beautiste font-normal text-gray-6 justify-between"
      >
        {label} <Image src={CaretDown} alt="caret-down" />
      </button>
      <div
        ref={contentRef}
        style={
          expand
            ? { maxHeight: `${contentHeight}px`, paddingBottom: "2.75rem" }
            : { maxHeight: "0px" }
        }
        className="transition-all duration-500 overflow-hidden"
      >
        {Array.isArray(content) && (
          <ul className="list-disc">
            <h1 className=" font-Beautiste py-2 pb-4 text-[14px] md:text-[18px]">
              {header} :
            </h1>
            {content.map((item) => (
              <li
                className="py-2 flex items-start gap-4 pb-4 text-[14px] md:text-[18px]"
                key={item}
              >
                <div className="min-h-[8px] min-w-[8px] translate-y-1 bg-primary-11 rounded-full" />
                {item}
              </li>
            ))}
          </ul>
        )}
        {typeof content === "string" && (
          <p className="py-2 pb-4 text-[14px] md:text-[18px]">{content}</p>
        )}
      </div>
    </li>
  );
};

const Questions = () => {
  return (
    <div className="max-w-[1366px] flex flex-col items-center justify-between w-full px-4 md:px-8">
      <h1 className="font-bold text-[32px] mb-[64px] font-Karla text-primary-11 w-full text-center leading-[37.4px] -tracking-[4%]">
        Frequently Asked Questions
      </h1>

      <div className="w-full">
        <ul className="w-full">
          {faqData.map((faq) => (
            <ListItem
              key={faq.question}
              label={faq.question}
              header={faq.header as string}
              content={faq.answers}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

const FAQsPage = () => (
  <main className="w-full flex relative flex-col mt-[100px] items-center justify-center">
    <NavigationBar />

    {/* Divider */}

    {/* Divider */}

    <Questions />

    {/* Divider */}

    {/* Divider */}

    <Footer />
  </main>
);

export default FAQsPage;
