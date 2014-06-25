---
layout: post
title: "Cleaning up oversized github repositories for R and beyond"
category: R
tags:
 - software
 - tutorials
---

The version control system [Git](http://git-scm.com/)
is an amazing piece of software for tracking every change that
you make to a project and saving its entire history.
It is incredibly useful, for users of R and other
programming languages, leading it shoot from 0 market share
in 2005 ([when it was first released](http://en.wikipedia.org/wiki/Git_%28software%29))
to market domination in one short decade.

However, Git can cause confusion. Even (or at times especially)
when used in conjunction with a nice graphical user interface
such as that provided by [GitHub](https://github.com),
the main online repository of
Git projects worldwide and home to over
[10 million projects](http://en.wikipedia.org/wiki/Github),
Git can cause chaos.
Like Linux (the operating system was
incidentally created by the same prolific
[person](http://en.wikipedia.org/wiki/Linus_Torvalds)),
Git
[assumes you know what you're doing](http://www.howtogeek.com/125157/8-deadly-commands-you-should-never-run-on-linux/).
If you do not,
[watch out](http://stackoverflow.com/questions/2125710/how-to-revert-a-git-rm-r)!

Partly knowing what I was doing (but not fully) I set up a
repository to host a tutorial on
[making maps in R](https://github.com/Robinlovelace/Creating-maps-in-R/).
I was pretty relaxed about what went in there and soon, the
repository grew to an unwieldy 60 Mb in size and over 20 Mb
just to download the automatically created
[zip file](https://github.com/Robinlovelace/Creating-maps-in-R/archive/master.zip).
(It is now a sprightly
[2.6 Mb Zipped, wahey!](https://github.com/Robinlovelace/Creating-maps-in-R/archive/master.zip))
Needless to say this did not help my aim of making
R accessible to everyone, a tool for empowerment
(as this
[inspiring article about R for blind people shows it can be](http://journal.r-project.org/archive/2013-1/godfrey.pdf)).

So I decided to act to clean things up. In the hope it'll be useful
to others, what follows is a description of the main steps I took to
sort things out.

![cleaning-in-action](/figure/baobab-bfg.png)

<!--more-->

## Step 1: delete files in the current project

The first stage was simply to identify and delete excessively sized files
in the current version of the project. For this there is no better program
than [Baobab](http://www.marzocca.net/linux/baobab/), which shows you where
bloat exists on your system.

That was only part of the problem though: as shown in the image of
disk usage from Baobab below, most (80%, almost 50 Mb)
of the space was taken up by the .Git
folder itself. This meant files I'd changed in the past were taking up
the most space and. Git is not designed to allow you change the past but to save it...

![b4-clean](/figure/baobab-b4-bfg.png)


## Step 2: use the BGF

Next up is the [BFG 'repo cleaner'](http://rtyley.github.io/bfg-repo-cleaner/).
This is just a small `java` program that cleans up unwieldy commits
using a command line interface.

In order for it to work, you need to *mirror* your repository,
using the `--mirror` flag when you clone. The first step was thus:

        $ git clone --mirror git@github.com:Robinlovelace/Creating-maps-in-R.git

Next, you run this (in a Linux terminal,
as illustrated by the `$` sign), changing the size depending on what you want
to keep:

       $ java -jar ~/programs/bfg-1.11.7.jar  --strip-blobs-bigger-than 1M  .git

This successful cut the size of the project in half,
making it far more accessible, as shown in the figure below.
Note, the changes
made by the BFG only translate into disk space savings
*after* running the following commands
([suggested in the BFG usage section](http://rtyley.github.io/bfg-repo-cleaner/#usage)):

        $ cd Creating-maps-in-R.git/
        $ git reflog expire --expire=now --all
        $ git gc --prune=now --aggressive
        
![after-clean](/figure/baobab-after-bfg.png)

## One issue

The only issue I encountered was this message:

        ! [remote rejected] refs/pull/1/head -> refs/pull/1/head (deny updating a hidden ref)
        
Although this was repeated several times, it didn't seem to influence the success
of the operation: I've halved the size of my GitHub repo and roughly 1/8thed the 
size of the zip file people need
[download to run the tutorial code](https://github.com/Robinlovelace/Creating-maps-in-R/archive/master.zip). So the issue seems to be a non-issue in the grand scheme of things.
        
## Conclusion

Ideally we'd all be like Linus Torvalds and make
[no mistakes](http://www.youtube.com/watch?v=4XpnKHJAok8).
But unfortunately we are human and prone to mistakes, which are
actually one of the best ways of learning. Thanks to software
like BFG and many helping hands through the open source community,
99 times out of 100 these mistakes are no big deal. I hope this
post will help others to
shrink unwieldy git repositories and
[uncrustify](https://github.com/neovim/neovim/issues/311) their lives.
More importantly I hope this leads to better design from the outset:
the experience has certainly made me think about project design carefully
including saving giant .RData files externally and keeping new objects
in a project to a minimum. According to [Joseph Tainter](http://www.resilience.org/stories/2012-03-29/collapse-complex-societies-review),
the marginal costs of added complexity now outweigh the benefits for
industrial civilization. Lets hope R users and other
programmers, at the very least, can simplify
our lives sufficiently to avoid collapse. Hopefully then the rest of society will
follow!






