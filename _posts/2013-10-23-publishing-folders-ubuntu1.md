---
layout: post
title: Sharing folders with Ubuntu One
categories:
 - computing 
tags:
- open source
- linux
- software 
---
[Ubuntu One](https://one.ubuntu.com/) - U1 for short -  is an alternative to other internet storage spaces such as Dropbox. 
It's useful because it gives you 5Gb of storage for free, works on any common operating system and 
allows music streaming and other features. Even better, you can get 25Gb of storage for only 99p if you buy any music from their store.
Downsides of U1 are that it does not back-up your work, and does not have a 'public' folder like [dropbox used to](https://www.dropbox.com/help/16/en).
For these reasons, I use U1 for sharing big files that I could live without if I lost them, like films I want to share with friends. 
Below I show how a little Python script can be used to share entire folders, 
like [this one](http://ubuntuone.com/03U1iH0VJGDbK3qa7iXzqp) of documentaries to share.
![U1-image](https://dl.dropboxusercontent.com/u/15008199/Images-2-share/U1-share.png)

As with many things in Linux, the solution is not provided on a plate. 
A tiny program called `u1-publish-folder` is used. No actual coding is reqired:
all you need to do is type the following into a terminal, and the program should be accessible:

{% highlight bash %}
# download the program script from the internet
wget http://bazaar.launchpad.net/~sil/+junk/utility-programs/download/head:/u1publishfolder-20120417145707-dzynnctfx0qgro9a-1/u1-publish-folder
sudo mv u1-publish-folder /bin/ # place the binary into the right directory
{% endhighlight %}

This is a good start, but it will still not work: try typing `u1-publish-folder`
into a terminal: you should get an error saying `command not found`.
The reason why this has happened is probably because the *permissions* in the
binary script are not set-up correctly.

We can check this from the command line with the following code:

{% highlight bash lineos %}
ls -l /bin/ # list the binary files available to your system
{% endhighlight %}


This will generate a list of files and tell you about what permissions
different users have. It's not worth worrying about this if all you
want to do is to get folders published on U1 quickly - search for "chmod"
and "ls Linux" if interested to learn the details. From the image below,
we can see that the `u1-publish-folder` file has a different permission
status than the others:

![not-executable-image](https://dl.dropboxusercontent.com/u/15008199/Images-2-share/u1-not-executable.png)

All we really need to know is how to change the permissions so that the
`u1-publish-folder` program can run on your system. This will most
likely work on your system using the following command:

```bash
sudo chmod -g+rwx /bin/u1-publish-folder # add read, write and execute permissions to all users in the group
```

Finally, we are ready to use the program. It's as simple as typing
`u1-publish-folder` followed directly by a space and the name of
the folder you wish to make available to the world.
In my case I created a folder called `worldwide` in my `Ubuntu One`
directory for files I want to share.
So the full command is as follows:

```bash
u1-publish-folder /home/robin/Ubuntu One/Worldwide # publish folder to the internet
```

The output you should see is as follows:

```bash
Examining folder /home/robin/Ubuntu One/Worldwide
Publishing 3 files...
  published /home/robin/Ubuntu One/Worldwide/eg.pdf
  published /home/robin/Ubuntu One/Worldwide/R-class.zip
  published /home/robin/Ubuntu One/Worldwide/osm-challenge.zip
Constructing the folder index...
Waiting for Ubuntu One to upload index...
Done.
Publishing the folder index...
Folder index now available at http://ubuntuone.com/3Wk6wDn2urH0Y2mnhZdiZy
```

When I clicked on [http://ubuntuone.com/3Wk6wDn2urH0Y2mnhZdiZy](http://ubuntuone.com/3Wk6wDn2urH0Y2mnhZdiZy)
I found that, indeed, all the files were now available, but not sub-folders,
which is good in some ways, offering you more control over what's public and what is not.


The details of the program are
 [explained well here](http://kryogenix.org/days/2012/04/18/publishing-a-folder-with-ubuntu-one).
Hope this tutorial helps someone - please let me know if so!
