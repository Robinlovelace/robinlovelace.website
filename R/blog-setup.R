devtools::install_github("brendan-R/brocks")

# installing jekyll:
# 87  sudo apt-get install ruby ruby-dev make gcc nodejs
# 88  sudo gem install jekyll --no-rdoc --no-ri
# 89  jekyll -v
# 90  sudo gem install github-pages --no-rdoc --no-ri


# To test how the website will look:
brocks::blog_serve()
