---
layout: post
title: Vim for Markdown (md) file editing
categories:
- computing
tags:
- open source
- Linux tips
- software
---

[Vim](http://www.vim.org/) is rapidly becoming my favourite text editor. This may seem strange
because progress is often seen in terms of larger, flashier and - in terms of computing at least -
bulkier and more resource intensive. Vim long ago overtook the grotesquely obese and colourful
Microsoft Word, which does not even work properly on my favourite operating system Linux without
resorting to Wine or booting up an entire virtual machine. Both of these solutions add complexity
and bother. In any case, the 
free [M$ Office clone Kingsoft Office](http://www.noobslab.com/2013/05/microsoft-office-alternative-kingsoft.html)  
Kingsoft's elegant Microsof Word clone, 'Writer', and LibreOffice's open source 'Writer'
are both stable, native on Linux and visually attractive, largely solving the problem.
Much nicer writing in fancy fonts than
boring monospace right? Well not always - sometimes the visual content of these GUI-based text
editors can get in the way and distract from the main task - communication.

<br><a href="http://www.zimagez.com/zimage/screenshot-311013-162900.php">
  <img src="http://www.zimagez.com/miniature/screenshot-311013-162900.php" />
  </a>

<!--more-->

To deal with this issue, some people prefer to write their work in LaTeX, which brings me to the
final and hardest-to-beat competitors for text editing: Kile and Rstudio. At the outset these are
very different, the former being a dedicated LaTeX editor with a strong following, the latter being
an IDE for the R statistical programming language. But both offer excellent support for just
writing, the former in LaTeX (which can easily be converted to Markdown), the latter in RMarkdown
(which provides some additional features) or Markown directly. Both offer excellent facilities for
projects, searching and auto-completion. So I'm still not convinced Vim is better, especially as
Kile can compile to LaTeX with a single mouse click and RStudio provides a rich graphical
environment that is ideal for testing R code and plotting the output. Yet Vim still has some
advantages for editing raw markdown (.md) files that we will see below. Vim has a reputation as
being impenetrable and a 'coders' tool, but in fact many people swear by it for much more. There are
even very strong arguments for using Vim to write prose and novels, as pointed out by [Albin
Olsson](http://alols.github.io/2012/11/07/writing-prose-with-vim/). But that's getting away from the
point. The first stage is to get comfortable with the small but daunting Vim program.

## Vim versions
There are two main flavours of Vim available: 'vanilla' vim that only run's within a Unix terminal
or [GVim](http://gvim.en.softonic.com/download) (short for 'graphical vim'), a version that works 
like and other text editor such as Microsoft's notorious Notepad,
the excellent Notepad++ or Gedit. GVim is a great way to access the world of Vim
 as it's easier and a gentle way into the world of Vim that maintains all the functionallity of
the terminal-based editor.

## Opening files
Once you have Vim installed and are comfortable with its basic operation, the next stage
is opening the files. From a graphical file system, this is as simple as right clicking on the file  
and selecting "open with GVim":

![gvim-open](https://dl.dropboxusercontent.com/u/15008199/Images-2-share/gvim-open.png)

GVim is a pleasure to use, so please check out the help pages contained within the program to get to grips 
with it. For the purposes of this post we'll persevere with the command-line option, which 
works in exactly the same way: the following applies equally to GVim as to Vim. 

## Opening from the command line
If you get used to using Vim from within a Linux terminal (which many system administrators and some
programmers do - it's fun) you can open a file simply by typing `vim filename.md`. That does the job
well, but when we are using files that all begin with a similar string of characters, this can be a
hassle. As it happens, one of the fastest growing uses of Markdown is for blogs using the program
Jekyll. By default, Jekyll names its files in chronological order, with the format yyyy-mm-dd.
Clearly, if you write more than posts in one day, you will have to type in at least 11 characters
(10 to select the correct date, one so that pressing `tab` results in the correct file being
selected) to get the right file loaded in vim. 

This technique works fine. For the lazy, however, it is just too slow and cumbersome. In addition,
if you remember part of the title of the post but not its date (e.g. I wrote about bicycle trailers
a few days ago, but cannot remember the exact date), it can lead to a lot of typing and a lot of
looking at the filenames (e.g. via `ls _posts`, assuming you're in your website's root directory).
What is really needed is a way of telling Vim "open the markdown file that contains `trailer` in its
title". Vim does not understand English though, so we must tell it how to that in code. 

The first thing is to test that we can find files properly using the `find` command at the terminal.
Typing `find . -name *trailer*.md'` in the root of my website, for example, generates a single
respone: `\_posts/2013-09-29-sheffield-to-leeds-bike-trailer-move.md`, which is exactly what I was
looking for. The difficulty is telling Vim to then open that file, without having to retype it
again. Originally I used the command xargs to do this, but like one gentleman on Stackoverflow, I
soon discovered that this [breaks
terminal](http://superuser.com/questions/336016/invoking-vi-through-find-xargs-breaks-my-terminal-why).
The solution to this problem, is contained within the same thread, but only at the bottom: use
`-exec` instead. So the command becomes as follows:

```bash
find . -name \*trailer\*.md -exec vim {} +
```

Observant readers may have registered that the additional `-exec vim {} +` commands add 14
characters, more than would have been necessary had we known the date of the entry. Still, it is
still beneficial when we know the a string contained with the file we want to edit but not its
beginning or its full name. This is especially common when editing Markdown files for personal
websites.

An even quicker way to open the file is as follows:

```{bash}
vim _posts/*trailer*.md
```

## Syntax highlighting 
There are a number of discussion threads on the internet about Vim not formatting Markdown 
files correctly. In fact, Vim is perfectly capable of displaying Markdown files correctly in 
its default configuration form. The issue that most commonly arises is that people label their
Markdown files as \*.md, rather than providing the full 'official' suffix of \*.markdown. Vim
is only set-up to understand the latter, so with its default settings it will display .md files
incorrectly, as illustrated below:

![incorrect syntax highlighting](https://dl.dropboxusercontent.com/u/15008199/Images-2-share/gvim-syntax-fail.png)

There are many solutions to this problem and a few people have created their own custom highlighting 
solutions by writing Vim plugins. A far simpler solution is to simply make Vim see .md files as 
Markdown. [To do this](http://stackoverflow.com/questions/10964681/enabling-markdown-highlighting-in-vim),
 just create a file called .vimrc in your home directory and add the following line:

```vim
au BufRead,BufNewFile *.md set filetype=markdown
```

## Viewing the results
There are a number of options available here. 
- To convert the Markdown files directly to html, 
there is a [plugin available](http://vimcasts.org/episodes/converting-markdown-to-structured-html-with-a-macro/)
- To have real-time updates of the compiled Markdown files in Chrome, there is a Java application which 
has impressive functionality (based on the video loaded on its Github page), although I found it difficult to install.
- The solution favoured by me is also the simplest: just save the latest version of the file you're writing (`:w`) 
and then serve the website locally using `jekyll serve --drafts` to compile the drafts and then view the results on a 
browser of your choice.

## Conclusions
Vim is an excellent all-round IDE and text editor. It can also, with a few tweaks reviewed in this article,
also be a great editor for your Markdown files.
