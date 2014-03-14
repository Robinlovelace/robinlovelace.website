---
layout: post
title: Finding and replacing character strings in multiple files with the Linux command line
categories:
- computing
tags:
 - software
 - computing
 - Linux
 - regex
 - sed
---

According to William Shotts ([2013](http://linuxcommand.org/tlcl.php)), "the only way to really get anything done on a computer
is by typing on a keyboard!" This is quite a controversial statement now that much of human-computer
interaction is done by pointing and clicking around a screen with a mouse or thumbs on increasingly
ubiquitous touchscreen devices. What the author of this statement is getting at is that if you want to 
harness the full *power* of computers, meaning automating tasks in an intelligent way to process
information in a way that you want, nothing beats a keyboard input. 

The reasoning behind this is simple: on a keyboard dozens of different characters are only ever a 
few millimetres away from one of your 10 fingers and thumbs, meaning a huge amount of information 
can be sent to the computer in a very short amount of time. Pointing and clicking your way around 
the screen, by contrast, takes longer. 

A good example of this is when you want to find all files containing certain words in a certain place 
and replace the matching words with something else. This may sound abstract and that's because it is.
The awesome thing about the Linux command line is that you can do all of these things, making hundreds 
of changes to a project, with just a single line of compact code, as we will see below.

<!--more-->

To be more specific, the problem I was facing was needing to replace most instances 
of `x = y`, where x and y can be any text, with `x <- y` across many files in my project. 
The reason was that I'd been making a consistent mistake, and wanted to correct it in a 
consistent way, in a minimum of time. Now, how would you go about doing this in Windows?
You would probably search on the internet and download some fairly clunky piece of software 
like [powergrep](http://www.powergrep.com/), a search and replace tool for "Windows 2000, XP, Vista, 7, 8, and 8.1"
users for **"Only 119 euro"** (emphasis mine).

To most Linux users this product is simply hilarious, as all of the tools needed to do this 
"powergrepping" are available from the most basic of Linux terminals, accessible by pressing 
`ctl-t` or just searching for the terminal. How? Well let me show you how I performed the 
task and explain it after. The single line to solve the problem described above was as follows:

```{bash}
find . -name "*.R" -exec sed -i "s/ = / <- /g" '{}' \;
``` 

Most likely the above line of letters and symbols looks like a foreign language
unless you are used to typing at the command line. That's because it is!
Learning a programming language is probably best seen in the same way as learning 
French, Spanish, or (more appropriately due to its limited similarity to English)
Chinese. So lets go through it line by line to see what has just happened. 

- First we use the command line tool `find` to only process the files we are 
interested in. The little `.` symbol means "anything within working directory" 
and could have been set to any folder on your computer (e.g. `~/Desktop/`).
- The second part of the `find` command is `"*.R"`, which specifies the rest of 
the line to only deal with files ending in `.R`: in other words R scripts.
- The `-exec` tag is where the magic happens. Used [in combination with `find`](http://www.softpanorama.org/Tools/Find/using_exec_option_and_xargs_in_find.shtml),
`-exec` sends executes the subsequent command for each file that is found.
- `sed` is a powerhouse of regular expressions, and stands for "stream editor", processing 
the flow of text as it is passed through the [computer](http://www.grymoire.com/Unix/Sed.html). All the remaining text specifies how `sed` acts on the files.
- `-i` is short for "in place" and means simply that for each file found, make the changes to the file and overwrite the existing one.
- `"s/ = / <- /g" is the actual search and replace bit. It means, in English, "take all instances of " = " and replace it with " <- "". 
- Finally we wrap up the code, telling the Linux terminal "we've finished now" or something similar with the 'words' `'{}' \;`. It is 
probably best not to dwell too much on the precise meanings of the syntax. As with French, simply chatting the language informally can 
be a much better way to learn the lingo than fretting over grammar.

Most people will never bother to learn the intricacies of commands such as that presented above. 
This is a pity, as there is a huge amount of power, fun and useful application waiting behind the 
intimidating cursor of the command line. But I'd urge you to give such tasks a go as it can be 
extrememly rewarding to get such a huge amount of work done with such little code.
If nothing else, the process of learning should be fun and rewarding in itself, in a way that 
the developers of Angry Birds can only dream of.




