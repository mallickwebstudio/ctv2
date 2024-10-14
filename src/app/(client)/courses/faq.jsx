"use client"
import Section from "@/components/ui/section";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const faqsDemo = [
  {
    question: "What is Python",
    answer: "Python is a general-purpose, object-oriented, high-level programming language. Whether you work in artificial intelligence or finance or are pursuing a career in web development or data science, Python is one of the most important skills you can learn. Python's simple syntax is especially suited for desktop, web, and business applications. Python's design philosophy emphasizes readability and usability. Python was developed on the premise that there should be only one way (and preferably, one obvious way) to do things, a philosophy that resulted in a strict level of code standardization. The core programming language is quite small and the standard library is also large. In fact, Python's large library is one of its greatest benefits, providing different tools for programmers suited for a variety of tasks.",
    linkLabel: "Learn more about Python",
    linkHref: "/",
  },
  {
    question: "Python vs. R: what is the difference?",
    answer: "Python and R are two of today's most popular programming tools. When deciding between Python and R, you need to think about your specific needs. On one hand, Python is relatively easy for beginners to learn, is applicable across many disciplines, has a strict syntax that will help you become a better coder, and is fast to process large datasets. On the other hand, R has over 10,000 packages for data manipulation, is capable of easily making publication-quality graphics, boasts superior capability for statistical modeling, and is more widely used in academia, healthcare, and finance.",
    linkLabel: "Learn more about R vs. Python",
    linkHref: "/",
  },
  {
    question: "What does it mean that python is object-oriented?",
    answer: "Python is a multi-paradigm language, which means that it supports many programming approaches. Along with procedural and functional programming styles, Python also supports the object-oriented style of programming. In object-oriented programming, a developer completes a programming project by creating Python objects in code that represent objects in the actual world. These objects can contain both the data and functionality of the real-world object. To generate an object in Python you need a class. You can think of a class as a template. You create the template once, and then use the template to create as many objects as you need. Python classes have attributes to represent data and methods that add functionality. A class representing a car may have attributes like color, speed, and seats and methods like driving, steering, and stopping. The concept of combining data with functionality in an object is called encapsulation, a core concept in the object-oriented programming paradigm.",
    linkLabel: "Learn more about object-oriented programming",
    linkHref: "/",
  },
  {
    question: "What are the limitations of Python?",
    answer: "Python is a widely used, general-purpose programming language, but it has some limitations. Because Python is an interpreted, dynamically typed language, it is slow compared to a compiled, statically typed language like C. Therefore, Python is useful when speed is not that important. Python's dynamic type system also makes it use more memory than some other programming languages, so it is not suited to memory-intensive applications. The Python virtual engine that runs Python code runs single-threaded, making concurrency another limitation of the programming language. Though Python is popular for some types of game development, its higher memory and CPU usage limits its usage for high-quality 3D game development. That being said, computer hardware is getting better and better, and the speed and memory limitations of Python are getting less and less relevant making Python even more popular.",
    linkLabel: "Take a look at some Python projects",
    linkHref: "/",
  },
  {
    question: "How is Python used?",
    answer: "Python is a general programming language used widely across many industries and platforms. One common use of Python is scripting, which means automating tasks in the background. Many of the scripts that ship with Linux operating systems are Python scripts. Python is also a popular language for machine learning, data analytics, data visualization, and data science because its simple syntax makes it easy to quickly build real applications. You can use Python to create desktop applications. Many developers use it to write Linux desktop applications, and it is also an excellent choice for web and game development. Python web frameworks like Flask and Django are a popular choice for developing web applications. Recently, Python is also being used as a language for mobile development via the Kivy third-party library, although there are currently some drawbacks Python needs to overcome when it comes to mobile development.",
    linkLabel: "Learn about Flask and Django",
    linkHref: "/",
  },
  {
    question: "What skills or experience should I have before learning Python?",
    answer: `Python is often taught in college-level classes because it is well-suited to being someone's first programming language. So, while it can be easier to learn Python if you already know Java, JavaScript, or other common languages, it isn't necessary. Before you learn Python, it might be helpful to understand the basics of programming logic, such as "if/then" gates, "while/for" loops and procedural vs. objective programming. You might also want to understand how applications get built, the difference between frontend and backend programming, and how computers utilize given applications. Udemy has a lot of beginner courses that can help you pick up Python quickly.`,
  },
  {
    question: "What jobs use Python?",
    answer: "Python is a popular language that is used across many industries and in many programming disciplines. DevOps engineers use Python to script website and server deployments. Web developers use Python to build web applications, usually with one of Python's popular web frameworks like Flask or Django. Data scientists and data analysts use Python to build machine learning models, generate data visualizations, and analyze big data. Financial advisors and quants (quantitative analysts) use Python to predict the market and manage money. Data journalists use Python to sort through information and create stories. Machine learning engineers use Python to develop neural networks and artificial intelligent systems.",
    linkLabel: "Find out how to become a Machine Learning Engineer",
    linkHref: "/",
  },
  {
    question: "How do I learn Python on my own?",
    answer: "Python has a simple syntax that makes it an excellent programming language for a beginner to learn. To learn Python on your own, you first must become familiar with the syntax. But you only need to know a little bit about Python syntax to get started writing real code; you will pick up the rest as you go. Depending on the purpose of using it, you can then find a good Python tutorial, book, or course that will teach you the programming language by building a complete application that fits your goals. If you want to develop games, then learn Python game development. If you're going to build web applications, you can find many courses that can teach you that, too. Udemy’s online courses are a great place to start if you want to learn Python on your own.",
    linkLabel: "Here is a 6-week plan to learn Python",
    linkHref: "/",
  },
]

export default function FAQ({ sectionClassName, className, data = {} }) {
  const [showMore, setShowMore] = useState(false);

  const { faqs = faqsDemo } = data;

  return (
    <Section sectionClassName={sectionClassName} className={cn(className, "border-t border-foreground/30")}>
      <div className="mx-auto max-w-[45rem]">
        <h2>Learn more about Python</h2>
        <p className="sub-heading">
          Take one of Udemy&apos;s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You&apos;ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to both beginners and advanced developers alike.
        </p>

        <h2 className="mt-block">Frequently asked questions</h2>
        
        <Accordion className="border-foreground/30 border-t" type="multiple" defaultValue={faqs[0].question}>
          {faqs.slice(0, (showMore ? faqs.length : 3)).map((item, i) => (
            <AccordionItem value={item.question} key={item.question + "CourseFaq"+i}>
              <AccordionTrigger className="font-bold">{item.question}</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm">
                  {item.answer}
                </p>
                {item.linkLabel && (
                  <Link className="block mt-base text-base font-bold text-link" href={item.linkHref}>{item.linkLabel}</Link>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-block flex-center">
          <Button className="w-full" variant="outlineSecondary" onClick={() => setShowMore(!showMore)}>
            View {showMore ? "Less" : "More"}
          </Button>
        </div>

      </div>
    </Section>
  )
}
