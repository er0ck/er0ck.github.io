---
layout: post
title:  "Hiring is Hard. Hiring a QA/SDET/DevTest is Harder"
---

I wrote this post for Puppet’s internal blog towards the end of 2017. _This film has been modified from its original version. It has been formatted to fit this screen and edited for content._

Yes, _DevTest_. Like DevOps but, you know, testier. You heard it here first.

People are always asking me, “Hey you! How do we hire for a quality-focused software engineer?. A test evangelist. A Quality Maven.” My over-answer, you can find herein.

Hiring is hard. It always has been.

Modern tools can make it easier. Jobscore, Greenhouse. Whatever we use requires the burden of setting it up and using it correctly to track jobs, applicants, and connect them together easily for both us and the applicants. Whatever we do requires the discipline to know what to ask, how to ask it, and how to prevent biases from affecting our pool and eventual hiring choices. This has been covered at length elsewhere. Most of the rest of this won’t matter if you haven’t compensated for bias and good interview practice.

Most of the below assumes a high level of automation in your testing and organization generally. It strikes me that if you don’t have automation, that might be fine, but you must be willing to pay more, in time and money, to deliver the same value to customers. It typically also comes at the cost of less agility. Again, this might be okay, if you are in a highly regulated industry. Banking and Medicine come to mind.

How do we hire for quality focus? Should we simply hire another QA/SDET engineer? Someone that only tests, or does all the testing? This, of course depends upon the team needs.

Who we want
-----------

Let’s assume we all agree that everyone owns quality. We need enthusiastic and experienced software engineers who already possess a “focus on quality” and willingness to iterate and learn. “Focus-on-quality” can mean anything from ‘has heard of unit tests’ to ‘tests everything, all the way, every time’. Neither of these are realistic, the latter is probably impossible.

How important quality-focus is for a given team, depends. It depends upon their acceptable risk level, and the current team make-up. I know this is not a great, “easy” answer. Sorry, you are going to have to ask your team <gasp>. ![Statue of child gasping](https://c.pxhere.com/photos/93/8e/child_statue_bronze_outside_outdoors_summer_children_shock-1334495.jpg!d)

team autonomy?

In general, teams i’ve worked on probably have too much testing <gasp again>. Better stated, we probably have had too much investment in testing in the wrong places, and an overly-developed aversion to risk. This manifests as long-feedback cycles, flaky tests, engineer frustration and quality issues (how ironic); aka: cost. Teams need to determine their acceptable risk, for now, then adjust. Teams need to invest in burning down tech-debt, then do it again. Some of this tech-debt is testing and other feedback cycle costs (builds, promotions, deployments). Not addressing tech-debt manifests in attrition (how ironic) and other issues.

-   less focus on hard requirements
-   a dedicated focus on inclusion, diversity and getting more applicants to reply
-   a short description, just specific enough
-   based upon feedback: some hard requirements. but not many! and some nice-to-haves.

### **Our Job Description**

> **Summary of Role**

> At Puppet we create some of the most loved automation software for enterprises of all size. We need you to be part of the team. We are searching for experienced software engineers to develop and maintain test frameworks, infrastructure automation. We develop against in-house platforms and the cloud, and instrument our production software for debugging, quality and performance assurance. This is an opportunity to love your job, your colleagues and your life due to our excellent benefits, flexible working environment and career building initiatives. Come work with us!

> **Responsibilities**

> Develop, implement and improve testing automation frameworks in a fast-paced team setting. Measure and assure that the performance of our products is awesome. Clearly and regularly communicate with the team and others on requirements, bugs and performance issues. Regularly improve existing software, processes and yourself.

> **Qualifications and skills**

> The engineers we are looking for have a broad combination of skills and experience. When in doubt, apply!

> Eager, fast to learn, interest to teach others

> Enjoy playing with and investigating software quirks, features, or performance

> Understand modern cloud infrastructure offerings as well as installed server and command line tools

> Like the challenges of a multi-platform environment including linux, windows and network switches

> Can readily (re-)prioritize work, including what to test first, in an agile environment

> Have built or worked with existing software using object-oriented, or functional programming paradigms

> Able to identify the strengths and weakness of proposed solutions, and pragmatically talk through tradeoffs with your peers.

> Excellent communication skills via in-person or virtual interaction, as you may be working with people sitting next to you, across the country, or across the world.

> Love helping teammates and is someone who sees and encourages the best in those around you

> Bonus:

> Experience with popular distributed version control systems (like Git or Mercurial).

> No stranger to Docker or other containerization tools

> Experienced with Continuous Integration systems, such as Jenkins, Travis, etc

> Experienced with Gatling, JMeter

> Versed in configuration management or even have Puppet Certification

### **Who you might want**

less perf, more dev? i dunno, ask your team. seriously.

Do your devs test? Do they do all the testing? Who is responsible for QA good practice? Do they test their own changes? All of this and more in a future post on the QA mindset. This has also been covered elsewhere.

### **Interview plan**

This worked for us, yours can and should be different based upon your constraints and hiring successes.

TL;DR:

-   resume screen by hiring manager
-   phone screen by recruiter; H1B1 and salary requirements
-   tech challenge evaluation by two interview team members; TL;DR: questions about configuration management, systems administration, debugging, a simple programming exercise
-   phone screen/interview with two interview team members
-   ~4 hour in-house interview, 3 groups of 2; sprinkle around evenly: Dev, QA, Perf, Cross-Group Collaboration, Integrity & Trustworthiness, Initiative, Drive For Results, Diversity & Inclusion, Technical Passion and Drive

### **To Remote or not to remote**

![](https://media.licdn.com/dms/image/C5612AQEvrZAvF_U--g/article-inline_image-shrink_1500_2232/0?e=1560384000&v=beta&t=HVemnEs_eeGe71MySU2SdwWFCj9c53Ebl1WjHcWL1RE)

This is about as in-control remote people feel ->

Some are inclined to say whether or not to remote depends on the team also, but does it? In our experience, the only way to do this right is if all team members have the same level of access, communication, geo and time-diversity restrictions. i.e.: they are all remote or each in a different office.

We struggled with this one for a recent job opening. We got a lot of applicants which would have been remote. I think out team would prefer a local team member at this point. This certainly restricts the talent pool. Does this make us the big fish in a small pond? is this good? (seriously, let me know what you think in the comments).
