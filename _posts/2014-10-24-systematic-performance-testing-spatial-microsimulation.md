---
layout: post
title: "'Open sourcing' microsimulation with R"
categories:
 - R
tags:
 - open source
 - microsimulation
---

These are the slides from a presentation today at the European conference of the [IMA](http://www.microsimulation.org/conferences-and-workshops/call-for-papers-european-meeting-of-the-international-micros/), held in Maastricht, 23rd to 24th October, 2014.

<script async class="speakerdeck-embed" data-id="7eb40ae03cf30132e33f46bf73afd760" data-ratio="1.33333333333333" src="http://speakerdeck.com/assets/embed.js"></script>

Microsimulation, as its name suggests, is about modelling things at the individual-level. In practice, this usually means estimating the characteristics of people using statistical or econometric techniques. Microsimulation, as represented by the [International Microsimulation Association](http://microsimulation.org/home/) is a niche area at the interface between public policy evaluation and academia. Clearly, this is a subject area that depends on performant software, a common language to communicate complex ideas and transparency. [R](http://www.stats.bris.ac.uk/R/) excels in each of these areas, yet seems to be relatively little used in field, despite seeming ideal for the job. Below the fold I reflect on why this may be, its impacts and a call to 'open source' spatial microsimulation.

<!--more-->

The conference began with a keynote speech from Holly Sutherland from EUROMOD, apparently the largest publicly funded individual-level people modelling initiative in the world. The findings from this research area are impressive, including estimates of the distributional impacts of government policies. Are they *progressive* (meaning they benefit the poor) or *regressive* (meaning they benefit the rich, often at the expense of the poor)?

This is a hugely important question which simply cannot be answered by the [punch and judy politics](http://www.newstatesman.com/blogs/olly-grender/2011/02/david-cameron-politics-pmqs) that seem to define western democracies. Graphs such as the below, if based on sound analysis and interpretation, can provide relatively objective evidence on the groups who benefit from changes in government, and those who loose.

![dist-curve](http://niesr.ac.uk/sites/default/files/images/cia%202014%20budget.jpg)

Along the x axis are [income deciles](http://www.abs.gov.au/ausstats/abs@.nsf/Lookup/4363.0.55.001Appendix502011-13), from the poorest (far left) to the richest (far right) 10% in the population. On the y axis is some measure of 'impact', in this case percentage shift in equivalised income. The graph illustrates that the UK government's policies have, in this instance, benefited the upper middle classes, with an upward bulge in income deciles 5 to 8. The left-hand downward edge of the graph show that the poorest have been [hard hit](http://www.theguardian.com/uk/2010/sep/10/coalition-cuts-poor-tuc) by the coalition's tax and welfare reforms. The dip to the right suggests that wealthy families have also lost-out.

In order to generate such analyses, an individual-level approach is needed. Using real individual-level data as the starting point allows the impact of different policies to be simulated across society at large. Microsimulation is thus a powerful tool in the policy analysts war cabinet, allowing 'what if' scenarios of the future, assessment of the impact of change on other variables such as [energy consumption in houses](http://www.microsimulation.org/IJM/V7_1/6_IJM_7_1_Munoz_Peters.pdf) and the relative merits of taxing assets rather than income, to pick just a few of the topics presented at the IMA conference.

As Holly pointed out during her keynote speech, all this is highly politically relevant. Transparency is needed to stop vested interests skewing the results of their models to favour their political narrative. What was not mentioned was the importance of open source software to enable transparency: if the code used for analysis is made available, this provides an opportunity for the public to see exactly how a certain result has been generated. Proprietary software is comparatively opaque: even if code is made available, only a select few individuals, presumably with access to expensive licences, will be able to run the code.

Despite these clear advantages for accountability (not to mention economic savings of using free software), most people I spoke to at the conference seemed to be using expensive software products for their analyses. Analysis conducted for the Swedish parliament, for example, is conducted using [SAS](http://www.sas.com/offices/europe/sweden/training/certifiering/). Having helped review software decisions for the UK's [Department of Work and Pensions](http://www.sas.com/en_gb/customers/dwp.html), I know our government also spends thousands of pounds on software. Someone from the [IFS](http://www.ifs.org.uk/) told me that [STATA](http://www.stata.com/) is the langua franca in their organisation.

In each case, there is a strong argument to be made for the use of open source software. The government now insists that all software should be [open by default](https://joinup.ec.europa.eu/community/osor/news/uk-government-makes-open-document-format-default). But what about situations where legacy software is entrenched an much energy must be expended to make the change? I suggest new funding and energies are needed to deal with this issue, to transfer systems for closed to open source. The switch some companies have made from [Oracle to Postgres](https://wiki.postgresql.org/wiki/Oracle_to_Postgres_Conversion) database systems shows the returns on initial outlay can be high. Yet in most cases it is easier to continue with the closed-source option, particularly when software companies lobby hard to maintain a monopoly.

My small contribution to this debate is code for undertaking microsimulation in R. I am in the process of writing a book on the subject and, in line with the 'open by default' approach of the UK government, have made a working copy of the book [available for free online](http://robinlovelace.net/spatial-microsim-book/).
More on this soon.
