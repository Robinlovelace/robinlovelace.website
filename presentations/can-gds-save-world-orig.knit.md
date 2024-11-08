---
title: "Can Geographic Data Save the World?"
author: "Robin Lovelace"
date: "2017-05-02"
subtitle: "University of Liverpool's Laboratory for Geographic Data Science"
bibliography: /home/robin/allrefs.bib
output:
  ioslides_presentation:
    widescreen: true
    transition: slower
    logo: ../../static/images/its-logo-square.png
---




## Contents

- Introductory comments
- An example: the propensity to cycle tool
- **dplyr** and tibbles (if time allows)
- Discussion: can GDS save the world?



# Introduction

## What is saving the world?

Many ways of saying the same thing:

> - 'Policy-led research'
> - 'Impact'
> - 'Socially beneficial research'
> - Don't be evil (Google)

My definition: **building an evidence-base for sustainable systems**.

- In the context of climate change that means:

> - Building an evidence-base to transition away from fossil fuels

- But could also be interpretted in terms of other (quantifiable) social/economic/environmental indicators

## Why bother?

- If we're doomed anyway?

> - <blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">I urge everyone to read this  series of tweets: it is clear that the govt is incompetent, the prime minister is deluded, &amp; we are damned. <a href="https://t.co/aaNYvSpxK9">https://t.co/aaNYvSpxK9</a></p>&mdash; Michael Cashman (mcashmanCBE) <a href="https://twitter.com/mcashmanCBE/status/858821602611474432">April 30, 2017</a></blockquote>
<script async src="http://platform.twitter.com/widgets.js" charset="utf-8"></script>

> - <blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Rapid Ice Melt In East Antarctica Could Lead to 11-Foot Rise In Global Sea Level, Scientists Say <a href="https://t.co/3jYOQhyeUL">https://t.co/3jYOQhyeUL</a> <a href="https://t.co/QdTOQNC6m7">pic.twitter.com/QdTOQNC6m7</a></p>&mdash; Weather Underground (@wunderground) <a href="https://twitter.com/wunderground/status/811307713128865792">December 20, 2016</a></blockquote>

## Aren't the machines 'on it' anyway?

- Agency is no longer exclusively human domain 
- Machine learning is "is finding commercial applications that range from self-driving cars to websites that recommend products on the basis of a user's browsing history" [@castelvecchi_can_2016].

- Where does the (data) scientist come in in this context?

> - More important than ever to set high level aims/goals

> - Autonomous vehicle analogy: robots are good at getting from A to B but not deciding where and when to travel

 <blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Before scientists can trust AI, they first need to understand how machines learn: <a href="https://t.co/DekQuyP8YE">https://t.co/DekQuyP8YE</a> <a href="https://t.co/Phqtj3mRc1">pic.twitter.com/Phqtj3mRc1</a></p>&mdash; Nature News&amp;Comment (NatureNews) <a href="https://twitter.com/NatureNews/status/859112847930007552">May 1, 2017</a></blockquote>
<script async src="http://platform.twitter.com/widgets.js" charset="utf-8"></script>

## What is Geographic Data Science?

> - You tell me!

- How does it differ from good old 'GIS'?
- What does the science in the title mean?
- Why the focus on data rather than information

Code example:


```r
d = frame_data(
  ~Attribute, ~GIS, ~GDS,
  "Home disciplines", "Geography", "Geography, Computing, Statistics",
  "Software focus", "Graphic User Interface", "Code",
  "Reproduciblility", "Minimal", "Maximal"
)
```

## Comparing GDS with GIS


```r
knitr::kable(d)
```

## Geographic data science CAN 'save the world' | But only if it's open and scientific

Reasoning:

- Evidence inevitably gets skewed by political aims

> - If the people doing the research are influenced by dominant political forces, findings will be biases for political gain (solved by independent well-funded public research).

- People doing policy relevant research watch out (regarding politicians):

> “Their very spirit undergoes a pervasive
transformation,” and they finally end up as “experts at exchanging smiles,
handshakes, and favors.” [@reclus_anarchy_2013, original: 1898]

## Importance of open data and methods

> - If the data underlying policy is hidden, it can be represented to push certain aims (solved by open data)

> - If the data is 'open' but the tools are closed, results open to political influence

> - Which brings us onto our next topic...

# Where will cycling uptake happen?

<!-- ## Context: from concept to implementation -->

<!-- A life-course of my involvement with the PCT -->

<!-- ``` -->
<!-- Concept of algorithms for cycling uptake (PhD 2009 - 2013) -->
<!--  Discovery of programming (R) and shiny (2013) -->
<!--   'Propensity to Cycle' bid by DfT via SDG (2014) -->
<!--     Start work w. Cambridge University and colleagues (2015) -->
<!--      Implementation on national OD dataset, 700k routes (2016) -->
<!--        Addition of school and near-market prototypes (late 2016) -->
<!--          LSOA phase (Malcolm Morgan) (early 2017) -->
<!--            ... -->
<!-- ``` -->

<!--  > - 2018: (Global PCT?)  -->

<!--  - Academic write-up [@lovelace_propensity_2017] -->
 
## Prior work (source: Lovelace et al. 2017)



## The PCT team | "If you want to go far, go as a team"

Robin Lovelace (Lead Developer, University of Leeds)

- James Woodcock (Principal Investigator, Cambridge University)
- Anna Goodman (Lead Data Analyst, LSHTM)
- Rachel Aldred (Lead Policy and Practice, Westminster University)
- Ali Abbas (User Interface, University of Cambridge)
- Alvaro Ullrich (Data Management, University of Cambridge)
- Nikolai Berkoff (System Architecture, Independent Developer)
- Malcolm Morgan (GIS and infrastructure expert, UoL)
 
<!-- ## Policy feedback -->

<!-- "The PCT is a brilliant example of using Big Data to better plan infrastructure investment. It will allow us to have more confidence that new schemes are built in places and along travel corridors where there is high latent demand." -->

<!-- - Shane Snow: Head of Seamless Travel Team, Sustainable and Acessible Travel Division -->

<!-- "The PCT shows the country’s great potential to get on their bikes, highlights the areas of highest possible growth and will be a useful innovation for local authorities to get the greatest bang for their buck from cycling investments  and realise cycling potential." -->

<!-- - Andrew Jones, Parliamentary Under Secretary of State for Transport -->

## The PCT in CWIS and LCWIP

Included in Cycling and Walking Infrastructure Strategy (CWIS) and the Local Cycling and Walking Infrastructure Plan (LCWIP)



## How the PCT works

Shows on the map where there is high cycling potential,
for 4 scenarios of change

- Government Target
- Gender Equality
- Go Dutch
- Ebikes

## Scenario shift in desire lines | Source: @lovelace_propensity_2017



- Origin-destination data shows 'desire lines'
- How will these shift with cycling uptake

## Scenario shift in network load



## A live demo for Liverpool | "Actions speak louder than words"

- Test version of [p](http://npct0.vs.mythic-beasts.com/m/?r=liverpool-city-region)[www.pct.bike](http://pct.bike/)



# tibbles and dplyr: A detour for programmers

## Why data carpentry?

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Data analysts and &#39;scientists&#39;: don&#39;t wrangle, munge or &#39;hack&#39; your valuable datasets. Use <a href="https://twitter.com/hashtag/datacarpentry?src=hash">#datacarpentry</a>: <a href="https://t.co/gXrlIJH91R">https://t.co/gXrlIJH91R</a> <a href="https://t.co/GSWS7O7zBz">pic.twitter.com/GSWS7O7zBz</a></p>&mdash; Robin Lovelace (robinlovelace) <a href="https://twitter.com/robinlovelace/status/833622374037721089">February 20, 2017</a></blockquote>

- If you 'hack' or 'munge' data, it won't scale
- So ultimately it's about being able to handle Big Data
- We'll cover the basics of data frames and tibbles
- And the basics of **dplyr**, an excellent package for data carpentry
    - **dplyr** is also compatible with the **sf** package

## The data frame

The humble data frame is at the heart of most analysis projects:


```r
d = data.frame(x = 1:3, y = c("A", "B", "C"))
d
```

In reality this is a list, making function work on each column:


```r
summary(d)
plot(d)
```

## Subsetting

In base R, there are many ways to subset:


```r
d[1,] # the first line
d[,1] # the first column
d$x # the first column
d [1] # the first column, as a data frame
```

## The tibble

Recently the data frame has been extended:


```r
library("tibble")
dt = tibble(x = 1:3, y = c("A", "B", "C"))
dt
```

## Advantages of the tibble

It comes down to efficiency and usability

 - When printed, the tibble diff reports class
 - Character vectors are not coerced into factors
 - When printing a tibble diff to screen, only the first ten rows are displayed
 
## dplyr

Like tibbles, has advantages over historic ways of doing things

- Type stability (data frame in, data frame out)
- Consistent functions - functions not `[` do everything
- Piping make complex operations easy


```r
ghg_ems %>%
  filter(!grepl("World|Europe", Country)) %>% 
  group_by(Country) %>% 
  summarise(Mean = mean(Transportation),
            Growth = diff(range(Transportation))) %>%
  top_n(3, Growth) %>%
  arrange(desc(Growth))
```


```r
# dplyr must be loaded with
library(dplyr)
```

## Why pipes?


```r
wb_ineq %>% 
  filter(grepl("g", Country)) %>%
  group_by(Year) %>%
  summarise(gini = mean(gini, na.rm  = TRUE)) %>%
  arrange(desc(gini)) %>%
  top_n(n = 5)
```

vs


```r
top_n(
  arrange(
    summarise(
      group_by(
        filter(wb_ineq, grepl("g", Country)),
        Year),
      gini = mean(gini, na.rm  = TRUE)),
    desc(gini)),
  n = 5)
```

## Subsetting with dplyr

Only 1 way to do it, making life simpler:


```r
select(dt, x) # select columns
slice(dt, 2) # 'slice' rows
```

# How we've used this in the PCT

## Worked example: pct data in West Yorksire

- We'll download and visualise some transport data


```r
u_pct = "https://github.com/npct/pct-data/raw/master/west-yorkshire/l.Rds"
if(!file.exists("l.Rds"))
  download.file(u_pct, "l.Rds")
library(stplanr)
l = readRDS("l.Rds")
plot(l)
```

## Analysing where people walk


```r
sel_walk = l$foot > 9
l_walk = l[sel_walk,]
plot(l)
plot(l_walk, add = T, col = "red")

library(dplyr) # for next slide...
```

## Doing it with sf (!)


```r
l_walk1 = l %>% filter(All > 10) # fails
```


```r
library(sf)
l_sf = st_as_sf(l)
plot(l_sf[6])
```

## Subsetting with sf | much easier


```r
l_walk2 = l_sf %>% 
  filter(foot > 9)
plot(l_sf[6])
plot(l_walk2, add = T)
```

## Subsetting with sf | results



## A more advanced example


```r
l_sf$distsf = as.numeric(st_length(l_sf))
l_drive_short2 = l_sf %>% 
  filter(distsf < 1000) %>% 
  filter(car_driver > foot)
```

## Result: where people drive short distances rather than drive


```r
library(tmap)
tmap_mode("view")
qtm(l_drive_short2)
```

<!-- ## Overall results: the [PCT](http://pct.bike/) -->

<!-- ```{r, echo=FALSE} -->
<!-- knitr::include_graphics("https://previews.magnoliabox.com/corbis/flat/42-32403684/MUS-FAPC2020_500.jpg") -->
<!-- ``` -->

# Discussion: ensuring research is used for the greater good

## Points of discussion

It is clear that geographical research can have large policy impacts.

- That researchers can act to maximise the social benefit of the research
- That involves getting the evidence out to as many people as possible
- And using open source, accessible tools - the 'science' in GDS?

But many questions remain:

> - Where to draw the line between impartial research and campaigning?
> - To what extent should researchers open-sourcing their work defend against commercial exploitation?

## Final question

- What can you do to maximise the social benefits arising from your work?

> - Thanks for listening - get in touch via `r.lovelace@leeds.ac.uk` or `@robinlovelace`

## References

