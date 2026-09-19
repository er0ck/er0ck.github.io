---
layout: post
title: "The night shift is back, and it's called AI API Batching"
date: 2026-09-18
tags: [AI, Engineering, Software]
image: /assets/images/ibm-2401-tape-drives.jpg
---

OpenAI will sell you the same tokens for half price if you agree to wait. Submit a JSONL file, get a 24-hour SLA, get a separate pool of much higher rate limits, pay 50% of list. GPT-4o input drops from $2.50 to $1.25 per million tokens. Most batches actually come back in one to four hours.[1] Anthropic and Google both do the same thing at the same discount, which is usually a sign that nobody invented it, everybody derived it.[2]

They derived it from the same place IBM did. In 1966 there were roughly 800 computer service bureaus in the US doing about $650 million in revenue and growing 40% a year, and the bill you got from them had four line items: rent on the terminal, connect hours, CPU seconds, and kilobyte-months of disk. Tiered pricing charged you more for a faster response. If your job could wait until the machine was quiet, it cost less.[3] What's old is new again, just as always. In fairness, what have I invented recently? ever?

It obviously rhymes. The question is which parts of the old economics come back with it, and which ones don't, because the parts that don't are where people are going to lose money. More interesting for me is where I should "invest" in my time jumping on platforms and tools. 

## The menu maps almost line for line

Run the two price sheets side by side and it's not surprising how well they line up. It's all just compute.

A batch queue with a 24-hour completion guarantee is the batch window. Tokens-per-minute rate limits are MSU capacity caps, and the sub-capacity licensing IBM built on a rolling four-hour average is the same idea as a burst allowance on a TPM ceiling: bill the peak four-hour average of the month and forgive the instantaneous spike.[4] Provisioned throughput is a dedicated LPAR (logical partition; a chunk of a computer). Prompt caching, where cache reads cost a tenth of fresh input, is a resident working set, and the discipline of structuring your prompt so the stable part sits in front is the same discipline as keeping your hot dataset in the buffer pool back in the day.[2] Priority tiers that charge above list for low latency are the premium shift rate. Per-request token accounting handed back to a finance team for chargeback is SMF records, and "FinOps for AI" is data processing chargeback with a new logo.

Even the shape of the industry came back. Expensive centralized compute, thin clients, metered access, a small number of vendors who own the iron. The 1985 to 2010 stretch where the compute sat on your desk and cost nothing per use was the unusual part of the story.

## Three things that are genuinely different

The mainframe bill was deterministic. A job that consumed 42 CPU-seconds yesterday consumed about 42 CPU-seconds today, so you could forecast next quarter's spend from this quarter's workload and be roughly right. Token billing isn't like that. The same request costs a different amount depending on how much the model decides to say, and a reasoning model can spend ten times its usual output budget on a prompt that looks identical to the last one. Agentic traffic overtook human traffic on OpenRouter around February 2026 and burns roughly fifteen times the tokens per request, so the variance is widening.[7] You can't build a capacity plan on a unit of consumption the vendor's sampler chooses at runtime. That's why every AI cost dashboard I've seen is a rear-view mirror, and I haven't found one that works as a budget. If someone has, I'd genuinely like to see it.

Second, the asset clock and the contract clock have hugely diverged. A 1970s mainframe was depreciated over fifteen or twenty years and it was still running twenty-five years later. Hyperscalers book GPUs on five-to-six-year schedules while the useful competitive life of an accelerator generation looks more like two to three years. Michael Burry put a number on the gap in November 2025, arguing industry depreciation is understated by roughly $176 billion across 2026 to 2028, with Oracle and Meta profits overstated by about 27% and 21% by 2028.[10] Amazon already moved its server life down to five years, citing the pace of AI hardware development, which is at least partial agreement.[10] Whether that number holds or not, the structure is real: the price you pay per token today reflects an accounting assumption about asset life, not just the cost of electricity and silicon. If the schedule shortens, the floor under inference pricing moves up.

Third, there is almost no lock-in at the API layer. Moving off a mainframe meant rewriting COBOL against a different ISA, with data gravity holding you in place for a decade. Moving off a model provider means changing a base URL. And these days obviously rewriting that cobol would be a single prompt and a few hundred thousand of those tokens. Pennies. OpenAI's request format became the de facto interface the way POSIX did, and every serious inference provider speaks it. IBM could hold price for thirty years because leaving was a five-year program. Nobody in this market has that.

## What happens when pricing changes

Two things are already happening and they point in opposite directions.

The long trend is brutal deflation per unit of capability. GPT-3 scored 42 on MMLU at $60 per million tokens in 2020. By March 2026 you could buy that score at $0.06 per million or less, a thousandfold drop in six years, and frontier models now sit at $1.25 to $3.00 per million input.[5] The near trend is different: effective token pricing across API services fell only about 6% in the first five months of 2026, after a sharp compression through the second half of 2025.[6] Models kept improving through that same window, so the slowdown is a supply story: capacity got tight.

That's exactly when off-peak pricing matters most, and it's also what eventually kills it. Night shift discounts existed because the machine sat idle at 3am. They went away at companies that ran globally, twenty-four hours a day, because there was no longer such a thing as off-peak. If inference demand keeps growing into a supply-constrained year, the batch discount gets more valuable right up until the trough disappears, and then it quietly narrows. Watch the size of the batch discount as a demand indicator. A 50% spread says the providers have real idle capacity they'd rather fill at half price than leave dark. A 20% spread would say they don't. With folks running AI workloads 24/7 (i sure do) is there going to be off-peak?

Underneath all of it is a floor nobody can price through. Tokens per kilowatt-hour is the physical unit, and once the accounting games and the land-grab subsidies wash out, that's the number the business runs on.[12] Software margins don't apply to a business where the marginal cost is real.

And when the price does fall, usage doesn't hold constant, it expands to eat the savings and then some. Google went from roughly 9.7 trillion tokens a month in May 2024 to 3.2 quadrillion by May 2026, about 7x year over year.[7] Cheaper tokens turned single-shot prompts into agent loops that burn a hundred calls to answer one question. Every efficiency gain so far has been converted into more consumption rather than a lower bill, which is the oldest pattern in this industry.

## Is it a bubble, and where

Yes, and in a specific place: the financing structure sitting between the electricity and the API. Demand for tokens is growing on every measure anyone publishes, and the applications are mostly underfunded relative to the value they deliver. The stretch is in the middle, where the capital is.

The capex numbers are big enough that the estimates disagree with each other. Published figures for calendar 2026 hyperscaler capex run from about $434 billion to $800 billion depending on who gets counted and how commitments are treated, with first-quarter 2026 spend at $129.8 billion, up 80% year over year.[9][8] One estimate has this consuming roughly 94% of hyperscaler operating cash flow through 2026 and 2027.[9] Layer on the interlocking commitments among Nvidia, OpenAI, Oracle: vendor equity stakes, take-or-pay compute contracts, debt-funded GPU purchases. End demand looks larger and more independent than it is when the supplier is also an investor in the customer. Lucent and Nortel ran this exact play into 2001.[9]

The useful comparison is the fiber build of 1999. Between 1996 and 2001 telecom companies laid roughly 80 million miles of fiber and issued more than $500 billion in new bonds to pay for it, less than 5% of that cable was lit between 1999 and 2004, and Global Crossing went bankrupt in 2002 with $12.4 billion in debt. The demand curve the builders projected for 2001 showed up in 2008, and the same dark fiber carried YouTube, Netflix and the cloud.[11] The capital was destroyed, thoroughly, and the fiber was not. I'd expect the same split here. The datacenters everyone is talking about. The GPUs, the substations, the transmission capacity and the trained model weights survive whatever happens to the equity that paid for them. The people holding five-year debt against three-year assets are the ones who take the loss, and the exposure to avoid is owning the depreciation.

## Are tokens commoditizing

What does it mean for us consumers? The low and middle capability bands have already commoditized. A task that needs MMLU 42 has a dozen vendors at six cents per million tokens and no switching cost, which is the textbook definition.[5] The frontier hasn't, because there are four or five labs that can produce it and the capability gap at the top is still worth paying 20x for on the work where it matters.

What that means is the value keeps sliding up the stack, past the model and past the application UI (which gets cloned in a weekend now), to whatever decides which tokens to spend. The context you have that nobody else does, your data, your customers' state, your codebase. The evals that tell you a cheaper model is safe to swap in on Tuesday. The routing layer that sends 90% of traffic to the commodity tier and 10% to the frontier without a human choosing each time. That last one is the sleeper, because it's the piece that converts token deflation into actual margin instead of just watching it go by.

The mainframe era had an answer for this too. When CPU cycles got cheap, the scarce thing became the people who knew which jobs were worth running. I don't think that part changed at all.

Like a processor has a pipeline, if your AI workloads do, can you just batch them for cheap? Probably. For now.

What are you actually seeing on your side? Has the batch discount held at 50% for your workloads, and has anyone found a way to forecast token spend that survives contact with a reasoning model? 

## Sources

- [1] [OpenAI, Batch API guide](https://developers.openai.com/api/docs/guides/batch)
- [2] [Anthropic, prompt caching and Message Batches pricing](https://platform.claude.com/docs/en/build-with-claude/prompt-caching)
- [3] [History of Computer Communications, "Timesharing, Project MAC, 1962-1968."](https://historyofcomputercommunications.info/section/2.23/Timesharing-Project-MAC-1962-1968/)
- [4] [Planet Mainframe, "Explaining Mainframe Pricing to the Cloud Guys," May 2023](https://planetmainframe.com/2023/05/explaining-mainframe-pricing-to-the-cloud-guys/)
- [5] [Epoch AI, "LLM inference prices have fallen rapidly but unequally across tasks."](https://epoch.ai/data-insights/llm-inference-price-trends)
- [6] [YipitData, "What Can Nearly 2 Quadrillion Annualized Tokens Tell Us About LLM Pricing Trends?"](https://www.yipitdata.com/resources/cloud-llm-pricing-trends)
- [7] ["Memory Scarcity, Open Models, and the Restructuring of the AI Industry, 2026-2030," arXiv](https://arxiv.org/pdf/2607.07207)
- [8] [Goldman Sachs, "Tracking Trillions: The Assumptions Shaping the Scale of the AI Build-Out."](https://www.goldmansachs.com/insights/articles/tracking-trillions-the-assumptions-shaping-scale-of-the-ai-build-out)
- [9] [Silicon Analysts, "Hyperscaler AI Capex 2026 and the D&A Lag."](https://siliconanalysts.com/analysis/hyperscaler-ai-capex-depreciation-wall-2026)
- [10] [CNBC, "'Big Short' investor Michael Burry accuses AI hyperscalers of artificially boosting earnings," November 11, 2025](https://www.cnbc.com/2025/11/11/big-short-investor-michael-burry-accuses-ai-hyperscalers-of-artificially-boosting-earnings.html)
- [11] [Wikipedia, "Dark fibre."](https://en.wikipedia.org/wiki/Dark_fibre)
- [12] [Epoch AI, "Total cost of ownership of a one-gigawatt AI data center."](https://epoch.ai/data-insights/ai-datacenter-cost-breakdown)
