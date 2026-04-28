---
layout: post
title: Don't Lose Your Shirt
tags:
  - AI
  - Engineering
  - Software
---
"Our entire production database is gone, and so are all the backups." - after an agent wiped 2.5 years of records and snapshots during a routine AWS migration. ([Tom's Hardware](https://www.tomshardware.com/tech-industry/artificial-intelligence/claude-code-deletes-developers-production-setup-including-its-database-and-snapshots-2-5-years-of-records-were-nuked-in-an-instant))

"It took 9 seconds." - after an agent deleted his entire production DB and all backups in a single API call. ([The Register](https://www.theregister.com/2026/04/27/cursoropus_agent_snuffs_out_pocketos/))

![](assets/images/sebastian-herrmann-Ili1gmB9Jes-unsplash.jpg)
(Photo by [Sebastian Herrmann](https://unsplash.com/@officestock?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/photos/a-man-sitting-in-front-of-a-laptop-computer-Ili1gmB9Jes?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText))

I've lost a lot of work before, not to this level. But, this has been a problem with automation before and is less about the tools and more about governance. Some things to think about if you haven't:

**Scope agent permissions.** If an agent can read, write, execute, and commit without constraints, surprises are inevitable. CLAUDE.md and AGENTS.md exist for a reason.

A small one that almost got me recently: 
**Don't edit your working directory while agents are live.** Especially during git operations. An agent mid-commit doesn't know you just changed a file. This seems obvious, but it could be even worse with untracked files. 

**Teach your agents to stash.** add `git stash` instructions to your skills, even ADRs, so that it saves untracked work before pulls, checkouts, or branch switches. It seems like Agents are all too happy to `--force`. This one catches people off guard more than almost anything else. Or just do the git stuff yourself. This saves tokens anyway.

---