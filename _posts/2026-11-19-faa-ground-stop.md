---
layout: post
title: "You shipped the fix. Now the FAA has a ground stop."
image: /assets/images/faa-ground-stop.jpg
tags:
  - Engineering
  - Security
---
Picture yourself on call the day before the FAA ground stop. You approved a dependency update because it fixed a known vulnerability. This morning, customers can’t finish checkout. The fastest way to get orders moving again is to roll back to the version you spent last week trying to get out of production.

I’d roll it back. I’d also want to know exactly what we put back into production, who’s taking responsibility for that exposure, and when we’ll be back with a fix. Those are awkward questions to answer while someone from Support is asking when customers can place orders again, and your CISO sees an out of SLA CVE critical in Vanta.

That checkout incident is hypothetical. [The FAA and Apple outages were real](https://www.latimes.com/business/story/2026-11-18/tech-outages-hit-flights-banks-apple-fueling-public-distrust-and-conspiracy-theories), and the reported failures had different circumstances. I read about them and thought about the folks who approved the changes. They still had to keep services running while changing the systems that run them. That’s the job on a Tuesday afternoon, too, when nobody’s writing about it.

![An on-call engineer holds their head in their hands in front of two monitors.](/assets/images/faa-ground-stop.jpg)

I wrote recently about [what an open source dependency costs over three years](https://www.activestate.com/blog/open-source-dependency-three-year-cost-engineer-weeks/). You pay for it in engineer-weeks, including the weeks you’d already promised to somebody else. The morning after a rollback is when you find out whose weeks they were.

## What would make you try the fix again?

Suppose the update looked like one line in the manifest. The lockfile changed six other packages, and the checkout flow that failed, passed CI. Before I ask someone to approve that change again, I want the exact versions in the failed build and a test that exercises the checkout path we missed. If we can move one dependency at a time and still take the fix, I want to know that before we rerun the whole release.

At ActiveState we ship every day. Sometimes Saturdays and Sundays. Our releases are automated, and sometimes our risk checks tell us to hold. If “checkout” is the thing at risk, I’d like the person looking at the pull request to know what the checkout test did, what it covered, and what we’d roll back to. I’d like them to have that while there’s still time to ask a question.

There are two pieces we can help with at ActiveState. We can [supply a build of a covered dependency](https://docs.activestate.com/curated-catalog/) with the fix and evidence of where it came from. We’re also working on how to make the change easier to review in the pull request, so the team can see which versions move together and which calls in its own code deserve a look. If the upgrade removes an API you still use, someone on your team has to own that change. Finding out whether it’s one call site or thirty can change what you put in the sprint.

Next time I’ll get into the pull request itself. As an industry we’ve had bots opening dependency updates for years, and I still want to know more before I hit merge on the second attempt. If you’ve had to back out a CVE fix, what did you need to see before you’d ship it again?
