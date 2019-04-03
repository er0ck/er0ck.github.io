---
layout: post
title:  "Do You Even PR?"
---
We in the software industry are super familiar with the github/gitlab/bitbucket Pull Request (PR) workflow. Much of this PR muscle comes from slinging open-source software, and for good reason.

When working on a close-knit team, why do we push PRs and then move on to something else?

If your team sits nearby, and the team is responsible for getting stuff done, _try a pair-review_.

Pair reviews can help get stuff merged faster.  You can schedule time to work-through the changes with a reviewer, and iterate on updates in-person. Rather than the often over-used submit-changes, wait, review, wait, clarify changes, wait, updates, wait, merge workflow.  The github diff-tool is valuable here, and there are many like it, as well as collaborative, remote pairing tools. But that doesn't mean we have to accept a long-winded asynchronous PR process if it is gating our flow and progress.

If the PR is for another team and they sit far away, _try a pair-review_.

Some teams have success in pair or mob programming, which might include the observer merging the changes at the end.  No PR at all.

If the PR is for another team and is not time sensitive, or is for a team outside of the company, sure, throw a PR over the wall.

This isn’t to say we don’t review code (changes).

As we know, reviews are not only to [catch defects](https://blog.codinghorror.com/code-reviews-just-do-it/) (bugs), but for [training](https://hackernoon.com/code-review-review-is-the-managers-job-d412827a66c9). That training article focuses on team culture of constructive feedback. In addition to that, reviews can be used to expose more of the team to unknown portions of the codebase.  This can reduce [silo-ing](https://confluence.puppetlabs.com/display/~erict/2018/01/02/Team+Silos+are+bad%2C+yo) and the impacts of [haunted forests](https://john-millikin.com/sre-school/no-haunted-forests). Expose more people, get a better review and level-up the team.

One positive side of asynchronous PR reviews and comments is the paper trail.  The series of comments and change requests leading to eventual consensus on a technical decision is super valuable.  If the reader can some how un-leaf whatever the recent github PR setup threading does. But should that really live only in the PR/diff system?  I'd hope all the relevant bits of info would be recorded in commit messages anyway. Commit messages are where futuredev™ will look for why a thing was done a certain way, or why a thing broke another thing, or why a thing exists at all, or why futuredev shouldn't break or remove that thing.  Is futuredev going to look in the PR history?  Only if we do a [bad job with our commit messages now](https://www.atlassian.com/blog/git/written-unwritten-guide-pull-requests).

Synchronous review, pairing, etc requires another developer to stop what they are doing and context switch to another item. Sometimes this is fine. Sometimes this developer might be on another team. It can help to schedule pair reviews, or pairing generally to sometime during the day, just like we do with standups.

Each team should decide what works best for them and often it depends on the changes in question. What has worked for your team?  What hasn't? Comment below!

thoughts? rage? meh? comment below!
