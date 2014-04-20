---
layout: post
title: Installing neovim on Ubuntu
categories:
 - computing
tags:
 - open source
 - development
---

[Neovim](https://github.com/neovim/neovim) is a new version of
the ancient (in computing terms at least!) text editing program Vim,
"for the 21st century". The new edition [promises](https://www.bountysource.com/teams/neovim/fundraiser)
to be lighter weight, faster and have better support for 3rd party programs. This latter point is exciting
because it means that fully featured 'vim mode' could be
added to other programs such as [RStudio](http://www.rstudio.com/),
which currently lacks [key functionalities](https://support.rstudio.com/hc/communities/public/questions/200879313-Better-vim-mode?locale=en-us).

![neovimshot](http://dl.dropboxusercontent.com/u/15008199/Images-2-share/nvim.png)

<!--more-->

Neovim is of great interest to computer programmers and digital technology
enthusiasts. The excitement seems justified based on neovim's rapid evolution
and [new
features](http://www.reddit.com/r/vim/comments/22kemc/cool_progress_on_neovim/).

The development of neovim should also be of interest to
advocates of [technology for poverty alleviation](http://en.wikibooks.org/wiki/Information_and_Communication_Technologies_for_Poverty_Alleviation): it will provide
a world class toolkit for free, where alternatives such as
[Sublime](http://www.sublimetext.com/)
and [TextMate](http://license.macromates.com/) cost
in the region of £50.

Happy to say that neovim is up and running on my computer
and can be called from the terminal with `nvim`.
The installation is described on the website, but can seem a little daunting to
people new to the world of Linux. So here's my brief 'how to':

## 1: Unpack the neovim folder onto your computer

This can be done either by downloading the [.zip
file](https://github.com/neovim/neovim/archive/master.zip) and unzipping it
wherever you like or, if you have git installed, by typing

`git clone https://github.com/neovim/neovim.git`

inside a terminal.

## 2: Build it

At this stage you need to be in a terminal. Navigate into
neovim, e.g. by typing `cd neovim` after the previous command.
Then its a case of issuing the build commands:

`make cmake`

`cmake`

`sudo make install`

These three commands got neovim up and running without issue.
I'm not 100% sure if you need all 3, but it worked for me.

## 3. Using neovim

Neovim only runs in the terminal at present - a graphical user interface
called gnvim can be expected at some point. Just type `nvim` to see it up
and running.

Initially, nvim will perform a bit strange - the backspace won't work, for
example and you will be unable to use the mouse - that's because it's in
[vi compatible
mode](http://superuser.com/questions/543317/what-is-compatible-mode-in-vim).

To make neovim load in a more 'normal' mode, just create a file
called .nvimrc and place it in your home directory. You don't need to add
anything to this file: it's mere existence will prevent nvim booting into the
antiquated mode. From there on, nvim simply works.

