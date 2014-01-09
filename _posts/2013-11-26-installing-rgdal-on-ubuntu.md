---
layout: post
title: Installing rgdal in Ubuntu 13.04 
categories:
- R
tags:
- open source
- GIS
- R
---
The Geospatial Data Abstraction Library (GDAL) is a workhorse of digital mapping.
Written in c++, it underpins many online and desktop geoprocessing programs including
[QGIS](http://www.qgis.org/en/site/) and [GeoServer](http://geoserver.org/display/GEOS/Welcome).
Through its [OGR](http://www.gdal.org/ogr/) library, 
GDAL enables the import and export of most 
common spatial data formats, including the trusty ESRI Shapefile. 
These features and more make access to GDAL capabilities critical for 
anyone using R for serious spatial analysis. It's almost a match made heaven:
R is the premier free and open source program for statistical analysis; GDAL 
is one of the top geoprocessing libraries and is also free and open source. 
This has led to the creation of [rgdal](http://cran.r-project.org/web/packages/rgdal/index.html), 
a 'wrapper' that allows R to access all of GDAL's wonderful tools. 
Importantly for free software advocates, both work in Linux. The only problem 
is that installing GDAL in a way that is accessible to R in Linux is tricky, to put it mildly. 
Having installed rgdal on several computers, I still find it tricky to set-up correctly 
on new machines. The aim of this post is to make it less painful to others.

R provides a cryptic response to the install command `install.packages("rgdal")` first time around:

```
downloaded 1.5 Mb

* installing *source* package ‘rgdal’ ...
** package ‘rgdal’ successfully unpacked and MD5 sums checked
configure: CC: gcc -std=gnu99
configure: CXX: g++
configure: rgdal: 0.8-10
checking for /usr/bin/svnversion... no
configure: svn revision: 494
configure: gdal-config: gdal-config
checking gdal-config usability... 
./configure: line 1397: gdal-config: command not found
no
Error: gdal-config not found
The gdal-config script distributed with GDAL could not be found.
If you have not installed the GDAL libraries, you can
download the source from  http://www.gdal.org/
If you have installed the GDAL libraries, then make sure that
gdal-config is in your path. Try typing gdal-config at a
shell prompt and see if it runs. If not, use:
 --configure-args='--with-gdal-config=/usr/local/bin/gdal-config'
with appropriate values for your installation. 
```

Essentially what this is telling you is that GDAL is not 
visibly installed on your system. Typing `gdal-config` in 
a terminal instructs you to install GDAL with the following command:
`sudo apt-get install libgdal-dev`. Unfortunately, this 
often causes problems due to unmet dependencies - many times
I've seen Ubuntu's Synaptic Package Manager program and its 
command line cousin `apt-get` claim that packages are 'broken'.
Once this happens things become difficult to resolve using usual 
Ubuntu logic and tools. You cannot remove the broken packages or install 
new ones so things can seem stuck. 
Even building the [GDAL binaries](http://trac.osgeo.org/gdal/wiki/BuildingOnUnix) from 
scratch did not work. 

This is never truly the case with open source software, however, and
there is a strong community providing solution to these kinds of issues. 
To cut to the chase, the solution lies not in how to install this particular
package, but how to deal with broken packages in general.
As the top response to [this issue](http://askubuntu.com/questions/223237/unable-to-correct-problems-you-have-held-broken-packages) shows, the package manager `aptitude`, not installed as default on Ubuntu systems
can work wonders for faulty package dependencies. Just typing the following solved the problem:

``` 
sudo apt-get install aptitude # install aptitude as an alternative to apt-get
sudo aptitude install libgdal-dev # install the package (you may have to respond to queries here)
sudo aptitude install libproj-dev # install the proj.4 projection library
```

Once these packages were installed on the system, rgdal installed without a glitch on Lubuntu
13.04. The key is to ensure that the gdal and [proj.4](http://trac.osgeo.org/proj/)
 packages install correctly, and 
debian's [aptitude](https://wiki.debian.org/Aptitude) seems to help with this. 
Why is Debian's default package manager [better than apt-get](http://askubuntu.com/questions/1743/is-aptitude-still-considered-superior-to-apt-get) 
in many ways when the latter is paid for by a large company? Who knows, but its great to 
have the aptitude alternative in times of need.

Another issue that can occur from the R side of things is that the 
[g++ compiler is not installed](http://stackoverflow.com/questions/15569720/install-rgdal-library-in-rstudio-gdalallregister-not-found-in-libgdal).  

Incidentally, installing gdal on Mac systems has also been problematic in the past, 
although there are [solutions](http://spatial.ly/2010/11/installing-rgdal-on-mac-os-x/), 
including pre-build gdal packages for Macs. 

Hopefully this experience will help myself and others spend less time 
installing spatial R packages and more time actually using them!

