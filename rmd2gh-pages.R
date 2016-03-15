# Aim: cleanup rmarkdown generated markdown for publication on gh-pages

f <- "~/repos/robinlovelace.github.io/_posts/2016-01-18-stplanr-0.1.1.md"
b_url <- "http://robinlovelace.net/figure/"
md_old <- readLines(f)

md_new <- gsub("``` r", "```", md_old)
md_new <- gsub("!\\[\\]\\(20", "!\\[\\]\\(http://robinlovelace.net/figure/20", md_new)

writeLines(md_new, f)
