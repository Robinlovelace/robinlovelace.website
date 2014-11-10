



<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>robinlovelace.github.io/2014-10-24-systematic-performance-testing-spatial-microsimulation.md at master · Robinlovelace/robinlovelace.github.io</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="Robinlovelace/robinlovelace.github.io" name="twitter:title" /><meta content="robinlovelace.github.io - Experimentation with jekyll for my personal website" name="twitter:description" /><meta content="https://avatars1.githubusercontent.com/u/1825120?v=3&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars1.githubusercontent.com/u/1825120?v=3&amp;s=400" property="og:image" /><meta content="Robinlovelace/robinlovelace.github.io" property="og:title" /><meta content="https://github.com/Robinlovelace/robinlovelace.github.io" property="og:url" /><meta content="robinlovelace.github.io - Experimentation with jekyll for my personal website" property="og:description" />

      <meta name="browser-stats-url" content="/_stats">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    <link rel="xhr-socket" href="/_sockets">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="52112113:706E:A390136:54602411" name="octolytics-dimension-request_id" /><meta content="1825120" name="octolytics-actor-id" /><meta content="Robinlovelace" name="octolytics-actor-login" /><meta content="699a120e944472384385089f5a339709d51f01415c95d1ee6f71322f1f084919" name="octolytics-actor-hash" />
    
    <meta content="Rails, view, blob#show" name="analytics-event" />

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="uowYVoccqbfj0QO2PlBzmv9yT+AT9t+Ms7sGvr17kehvehIAo41lkHWQrmBvzjD8tdjru+SD18RMtyTjKSyRUQ==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-2fb9b25b51546977e75d8ae9e070af4aadc0746368d44698ea83ec6e76cb392b.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-f8ef54ae981c5e5e13aebd7edf271dfa75ad26076545cdfbf53f206b256d944a.css" media="all" rel="stylesheet" type="text/css" />
    
    


    <meta http-equiv="x-pjax-version" content="f1bf8b6c4433c64f418b520942f0c02a">

      
  <meta name="description" content="robinlovelace.github.io - Experimentation with jekyll for my personal website">
  <meta name="go-import" content="github.com/Robinlovelace/robinlovelace.github.io git https://github.com/Robinlovelace/robinlovelace.github.io.git">

  <meta content="1825120" name="octolytics-dimension-user_id" /><meta content="Robinlovelace" name="octolytics-dimension-user_login" /><meta content="11977390" name="octolytics-dimension-repository_id" /><meta content="Robinlovelace/robinlovelace.github.io" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="true" name="octolytics-dimension-repository_is_fork" /><meta content="91833" name="octolytics-dimension-repository_parent_id" /><meta content="schacon/schacon.github.com" name="octolytics-dimension-repository_parent_nwo" /><meta content="91833" name="octolytics-dimension-repository_network_root_id" /><meta content="schacon/schacon.github.com" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/Robinlovelace/robinlovelace.github.io/commits/master.atom" rel="alternate" title="Recent Commits to robinlovelace.github.io:master" type="application/atom+xml">

  </head>


  <body class="logged_in  env-production linux vis-public fork page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" ga-data-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <form accept-charset="UTF-8" action="/Robinlovelace/robinlovelace.github.io/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/Robinlovelace/robinlovelace.github.io/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <input type="text"
    class="js-site-search-field is-clearable"
    data-hotkey="s"
    name="q"
    placeholder="Search"
    data-global-scope-placeholder="Search GitHub"
    data-repo-scope-placeholder="Search"
    tabindex="1"
    autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
      </div>
      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item explore">
          <a class="header-nav-link" href="/explore" data-ga-click="Header, go to explore, text:explore">Explore</a>
        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/blog" data-ga-click="Header, go to blog, text:blog">Blog</a>
          </li>
        <li class="header-nav-item">
          <a class="header-nav-link" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
        </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name" href="/Robinlovelace" data-ga-click="Header, go to profile, text:username">
      <img alt="Robin" class="avatar" data-user="1825120" height="20" src="https://avatars1.githubusercontent.com/u/1825120?v=3&amp;s=40" width="20" />
      <span class="css-truncate">
        <span class="css-truncate-target">Robinlovelace</span>
      </span>
    </a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link js-menu-target tooltipped tooltipped-s" href="#" aria-label="Create new..." data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      
<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="dropdown-divider"></li>
    <li class="dropdown-header">
      <span title="Robinlovelace/robinlovelace.github.io">This repository</span>
    </li>
      <li>
        <a href="/Robinlovelace/robinlovelace.github.io/settings/collaboration"><span class="octicon octicon-person"></span> New collaborator</a>
      </li>
</ul>

    </div>
  </li>

  <li class="header-nav-item">
        <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
        <span class="mail-status all-read"></span>
        <span class="octicon octicon-inbox"></span>
</a>
  </li>

  <li class="header-nav-item">
    <a class="header-nav-link tooltipped tooltipped-s" href="/settings/profile" id="account_settings" aria-label="Settings" data-ga-click="Header, go to settings, icon:settings">
      <span class="octicon octicon-gear"></span>
    </a>
  </li>

  <li class="header-nav-item">
    <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="g2cll0ay7k5q0V+Fo8W/3DqunfFsVrQ/4UwUCT8s+VoEP1W23x1MwyLxXRb5NMYWvrbliJpPkyQffI1jlwkYcQ==" /></div>
      <button class="header-nav-link sign-out-button tooltipped tooltipped-s" aria-label="Sign out" data-ga-click="Header, sign out, icon:logout">
        <span class="octicon octicon-sign-out"></span>
      </button>
</form>  </li>

</ul>


    
  </div>
</div>

      

        


      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="zP836uKgAG77kpxZWqeRBJtgf52BxF6xNpkEAH6X6OjsQob71X30Nq/DrZGAJ5sluUl2rJqDP+mPJ6pvP3OfDg==" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="11977390" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/Robinlovelace/robinlovelace.github.io/watchers">
        2
      </a>
      <a href="/Robinlovelace/robinlovelace.github.io/subscription"
        class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye"></span>
          Unwatch
        </span>
      </a>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notifications</span>
            <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">Be notified when participating or @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">Be notified of all conversations.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">Never be notified.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/Robinlovelace/robinlovelace.github.io/unstar" class="js-toggler-form starred js-unstar-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="zK7xmlKc0vp4gJCA95OffSOcbHFVXoRWw5908w+B6hbkeUd/8alq8PWODwQJFYifiMyxjKY9dIPkJbYOS0sMtA==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Unstar this repository" title="Unstar Robinlovelace/robinlovelace.github.io">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/Robinlovelace/robinlovelace.github.io/stargazers">
          1
        </a>
</form>
    <form accept-charset="UTF-8" action="/Robinlovelace/robinlovelace.github.io/star" class="js-toggler-form unstarred js-star-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="s5TgDuieXqUWiCqMdCnKvuVd29NDtonbYZGzKDdtxIlIAFweRFFvGbRO+iZ8xlzhbCnEKNADy9Z/5uD+Lflhew==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Star this repository" title="Star Robinlovelace/robinlovelace.github.io">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/Robinlovelace/robinlovelace.github.io/stargazers">
          1
        </a>
</form>  </div>

  </li>


        <li>
          <a href="/Robinlovelace/robinlovelace.github.io/fork" class="minibutton with-count js-toggler-target fork-button tooltipped-n" title="Fork your own copy of Robinlovelace/robinlovelace.github.io to your account" aria-label="Fork your own copy of Robinlovelace/robinlovelace.github.io to your account" rel="facebox nofollow">
            <span class="octicon octicon-repo-forked"></span>
            Fork
          </a>
          <a href="/Robinlovelace/robinlovelace.github.io/network" class="social-count">21</a>
        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo-forked"></span>
          <span class="author"><a href="/Robinlovelace" class="url fn" itemprop="url" rel="author"><span itemprop="title">Robinlovelace</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/Robinlovelace/robinlovelace.github.io" class="js-current-repository js-repo-home-link" data-pjax-container-selector="#js-repo-pjax-container">robinlovelace.github.io</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

            <span class="fork-flag">
              <span class="text">forked from <a href="/schacon/schacon.github.com">schacon/schacon.github.com</a></span>
            </span>
        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders" role="navigation" data-issue-count-url="/Robinlovelace/robinlovelace.github.io/issues/counts" data-pjax-container-selector="#js-repo-pjax-container">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/Robinlovelace/robinlovelace.github.io" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /Robinlovelace/robinlovelace.github.io">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>


    <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
      <a href="/Robinlovelace/robinlovelace.github.io/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /Robinlovelace/robinlovelace.github.io/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>


      <li class="tooltipped tooltipped-w" aria-label="Wiki">
        <a href="/Robinlovelace/robinlovelace.github.io/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g w" data-selected-links="repo_wiki /Robinlovelace/robinlovelace.github.io/wiki">
          <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/Robinlovelace/robinlovelace.github.io/pulse/weekly" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /Robinlovelace/robinlovelace.github.io/pulse/weekly">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/Robinlovelace/robinlovelace.github.io/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /Robinlovelace/robinlovelace.github.io/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>
  </ul>


    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Settings">
        <a href="/Robinlovelace/robinlovelace.github.io/settings" aria-label="Settings" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_settings /Robinlovelace/robinlovelace.github.io/settings">
          <span class="octicon octicon-tools"></span> <span class="full-word">Settings</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>
</nav>

              <div class="only-with-full-nav">
                
  
<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=push">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/Robinlovelace/robinlovelace.github.io.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/Robinlovelace/robinlovelace.github.io.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=push">
  <h3><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="git@github.com:Robinlovelace/robinlovelace.github.io.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="git@github.com:Robinlovelace/robinlovelace.github.io.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=push">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/Robinlovelace/robinlovelace.github.io" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/Robinlovelace/robinlovelace.github.io" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>



                <a href="/Robinlovelace/robinlovelace.github.io/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download the contents of Robinlovelace/robinlovelace.github.io as a zip file"
                   title="Download the contents of Robinlovelace/robinlovelace.github.io as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<a href="/Robinlovelace/robinlovelace.github.io/blob/3a1f93bc0f3777f8a827156d61427a3c2c008750/_posts/2014-10-24-systematic-performance-testing-spatial-microsimulation.md" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:80cb25ca3747ec74b8ee0d0af9e46b9a -->

<div class="file-navigation">
  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Find or create a branch…" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Find or create a branch…">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Robinlovelace/robinlovelace.github.io/blob/gh-pages/_posts/2014-10-24-systematic-performance-testing-spatial-microsimulation.md"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Robinlovelace/robinlovelace.github.io/blob/master/_posts/2014-10-24-systematic-performance-testing-spatial-microsimulation.md"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <form accept-charset="UTF-8" action="/Robinlovelace/robinlovelace.github.io/branches" class="js-create-branch select-menu-item select-menu-new-item-form js-navigation-item js-new-item-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="R3HL3651zkr0bx25OdD2IvNnBcyWnnnZ1JhIIT+2CD4P6g+1+VUZxmiQo8XfHsvphwqs1uhdW3beR2wSsGWwsw==" /></div>
            <span class="octicon octicon-git-branch select-menu-item-icon"></span>
            <div class="select-menu-item-text">
              <h4>Create branch: <span class="js-new-item-name"></span></h4>
              <span class="description">from ‘master’</span>
            </div>
            <input type="hidden" name="name" id="name" class="js-new-item-value">
            <input type="hidden" name="branch" id="branch" value="master">
            <input type="hidden" name="path" id="path" value="_posts/2014-10-24-systematic-performance-testing-spatial-microsimulation.md">
          </form> <!-- /.select-menu-item -->

      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="button-group right">
    <a href="/Robinlovelace/robinlovelace.github.io/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="_posts/2014-10-24-systematic-performance-testing-spatial-microsimulation.md" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/Robinlovelace/robinlovelace.github.io" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">robinlovelace.github.io</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/Robinlovelace/robinlovelace.github.io/tree/master/_posts" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">_posts</span></a></span><span class="separator"> / </span><strong class="final-path">2014-10-24-systematic-performance-testing-spatial-microsimulation.md</strong>
  </div>
</div>

<include-fragment class="commit commit-loader file-history-tease" src="/Robinlovelace/robinlovelace.github.io/contributors/master/_posts/2014-10-24-systematic-performance-testing-spatial-microsimulation.md">
  <div class="file-history-tease-header">
    Fetching contributors&hellip;
  </div>

  <div class="participation">
    <p class="loader-loading"><img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" /></p>
    <p class="loader-error">Cannot retrieve contributors at this time</p>
  </div>
</include-fragment>
<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
          <span>37 lines (23 sloc)</span>
          <span class="meta-divider"></span>
        <span>6.168 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
          <a href="/Robinlovelace/robinlovelace.github.io/raw/master/_posts/2014-10-24-systematic-performance-testing-spatial-microsimulation.md" class="minibutton " id="raw-url">Raw</a>
            <a href="/Robinlovelace/robinlovelace.github.io/blame/master/_posts/2014-10-24-systematic-performance-testing-spatial-microsimulation.md" class="minibutton js-update-url-with-hash">Blame</a>
          <a href="/Robinlovelace/robinlovelace.github.io/commits/master/_posts/2014-10-24-systematic-performance-testing-spatial-microsimulation.md" class="minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->


              <a class="octicon-button js-update-url-with-hash"
                 href="/Robinlovelace/robinlovelace.github.io/edit/master/_posts/2014-10-24-systematic-performance-testing-spatial-microsimulation.md"
                 aria-label="Edit this file"
                 data-method="post" rel="nofollow" data-hotkey="e"><span class="octicon octicon-pencil"></span></a>

            <a class="octicon-button danger"
               href="/Robinlovelace/robinlovelace.github.io/delete/master/_posts/2014-10-24-systematic-performance-testing-spatial-microsimulation.md"
               aria-label="Delete this file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">
          <span class="octicon octicon-trashcan"></span>
        </a>
      </div><!-- /.actions -->
    </div>
    
  <div id="readme" class="blob instapaper_body">
    <article class="markdown-body entry-content" itemprop="mainContentOfPage"><table data-table-type="yaml-metadata">
  <thead>
  <tr>
  <th>layout</th>

  <th>title</th>

  <th>categories</th>

  <th>tags</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><div>post</div></td>

  <td><div>'Open sourcing' microsimulation with R</div></td>

  <td><div><table>
  <tbody>
  <tr>
  <td><div>R</div></td>
  </tr>
  </tbody>
</table></div></td>

  <td><div><table>
  <tbody>
  <tr>
  <td><div>open source</div></td>

  <td><div>microsimulation</div></td>
  </tr>
  </tbody>
</table></div></td>
  </tr>
  </tbody>
</table><p>These are the slides from a presentation today at the European conference of the <a href="http://www.microsimulation.org/conferences-and-workshops/call-for-papers-european-meeting-of-the-international-micros/">IMA</a>, held in Maastricht, 23rd to 24th October, 2014.</p>



<p>Microsimulation, as its name suggests, is about modelling things at the individual-level. In practice, this usually means estimating the characteristics of people using statistical or econometric techniques. Microsimulation, as represented by the <a href="http://microsimulation.org/home/">International Microsimulation Association</a> is a niche area at the interface between public policy evaluation and academia. Clearly, this is a subject area that depends on performant software, a common language to communicate complex ideas and transparency. <a href="http://www.stats.bris.ac.uk/R/">R</a> excels in each of these areas, yet seems to be relatively little used in field, despite seeming ideal for the job. Below the fold I reflect on why this may be, its impacts and a call to 'open source' spatial microsimulation.</p>



<p>The conference began with a keynote speech from Holly Sutherland from EUROMOD, apparently the largest publicly funded individual-level people modelling initiative in the world. The findings from this research area are impressive, including estimates of the distributional impacts of government policies. Are they <em>progressive</em> (meaning they benefit the poor) or <em>regressive</em> (meaning they benefit the rich, often at the expense of the poor)?</p>

<p>This is a hugely important question which simply cannot be answered by the <a href="http://www.newstatesman.com/blogs/olly-grender/2011/02/david-cameron-politics-pmqs">punch and judy politics</a> that seem to define western democracies. Graphs such as the below, if based on sound analysis and interpretation, can provide relatively objective evidence on the groups who benefit from changes in government, and those who loose.</p>

<p><a href="https://camo.githubusercontent.com/23fa9d8736e73434ee6f1630ff660d07478fcec2/687474703a2f2f6e696573722e61632e756b2f73697465732f64656661756c742f66696c65732f696d616765732f636961253230323031342532306275646765742e6a7067" target="_blank"><img src="https://camo.githubusercontent.com/23fa9d8736e73434ee6f1630ff660d07478fcec2/687474703a2f2f6e696573722e61632e756b2f73697465732f64656661756c742f66696c65732f696d616765732f636961253230323031342532306275646765742e6a7067" alt="dist-curve" data-canonical-src="http://niesr.ac.uk/sites/default/files/images/cia%202014%20budget.jpg" style="max-width:100%;"></a></p>

<p>Along the x axis are <a href="http://www.abs.gov.au/ausstats/abs@.nsf/Lookup/4363.0.55.001Appendix502011-13">income deciles</a>, from the poorest (far left) to the richest (far right) 10% in the population. On the y axis is some measure of 'impact', in this case percentage shift in equivalised income. The graph illustrates that the UK government's policies have, in this instance, benefited the upper middle classes, with an upward bulge in income deciles 5 to 8. The left-hand downward edge of the graph show that the poorest have been <a href="http://www.theguardian.com/uk/2010/sep/10/coalition-cuts-poor-tuc">hard hit</a> by the coalition's tax and welfare reforms. The dip to the right suggests that wealthy families have also lost-out.</p>

<p>In order to generate such analyses, an individual-level approach is needed. Using real individual-level data as the starting point allows the impact of different policies to be simulated across society at large. Microsimulation is thus a powerful tool in the policy analysts war cabinet, allowing 'what if' scenarios of the future, assessment of the impact of change on other variables such as <a href="http://www.microsimulation.org/IJM/V7_1/6_IJM_7_1_Munoz_Peters.pdf">energy consumption in houses</a> and the relative merits of taxing assets rather than income, to pick just a few of the topics presented at the IMA conference.</p>

<p>As Holly pointed out during her keynote speech, all this is highly politically relevant. Transparency is needed to stop vested interests skewing the results of their models to favour their political narrative. What was not mentioned was the importance of open source software to enable transparency: if the code used for analysis is made available, this provides an opportunity for the public to see exactly how a certain result has been generated. Proprietary software is comparatively opaque: even if code is made available, only a select few individuals, presumably with access to expensive licences, will be able to run the code.</p>

<p>Despite these clear advantages for accountability (not to mention economic savings of using free software), most people I spoke to at the conference seemed to be using expensive software products for their analyses. Analysis conducted for the Swedish parliament, for example, is conducted using <a href="http://www.sas.com/offices/europe/sweden/training/certifiering/">SAS</a>. Having helped review software decisions for the UK's <a href="http://www.sas.com/en_gb/customers/dwp.html">Department of Work and Pensions</a>, I know our government also spends thousands of pounds on software. Someone from the <a href="http://www.ifs.org.uk/">IFS</a> told me that <a href="http://www.stata.com/">STATA</a> is the langua franca in their organisation.</p>

<p>In each case, there is a strong argument to be made for the use of open source software. The government now insists that all software should be <a href="https://joinup.ec.europa.eu/community/osor/news/uk-government-makes-open-document-format-default">open by default</a>. But what about situations where legacy software is entrenched an much energy must be expended to make the change? I suggest new funding and energies are needed to deal with this issue, to transfer systems for closed to open source. The switch some companies have made from <a href="https://wiki.postgresql.org/wiki/Oracle_to_Postgres_Conversion">Oracle to Postgres</a> database systems shows the returns on initial outlay can be high. Yet in most cases it is easier to continue with the closed-source option, particularly when software companies lobby hard to maintain a monopoly.</p>

<p>My small contribution to this debate is code for undertaking microsimulation in R. I am in the process of writing a book on the subject and, in line with the 'open by default' approach of the UK government, have made a working copy of the book <a href="http://robinlovelace.net/spatial-microsim-book/">available for free online</a>.
More on this soon.</p>
</article>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="https://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.06001s from github-fe132-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents js-suggester-field" placeholder=""></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-fe1dc1d9b25d6a0cda010576a3c4be01906c9fd2ac07462042e5fceda326d50c.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-aba45b8411f81a17de91f1837c70a8cb5d105fa6d6db2134e5b19f082a8049ce.js" type="text/javascript"></script>
      
      
  </body>
</html>

