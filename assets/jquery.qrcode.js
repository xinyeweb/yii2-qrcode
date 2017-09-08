





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://assets-cdn.github.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-bedfc518345498ab3204d330c1727cde7e733526a09cd7df6867f6a231565091.css" integrity="sha256-vt/FGDRUmKsyBNMwwXJ83n5zNSagnNffaGf2ojFWUJE=" media="all" rel="stylesheet" />
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-273b69365501d111af585c6f67146e7bd2674a63f2944c909a6a32bd8405c2d7.css" integrity="sha256-JztpNlUB0RGvWFxvZxRue9JnSmPylEyQmmoyvYQFwtc=" media="all" rel="stylesheet" />
  
  
  
  

  <meta name="viewport" content="width=device-width">
  
  <title>jquery-qrcode/jquery.qrcode.js at master · yingliyu/jquery-qrcode</title>
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta content="https://avatars0.githubusercontent.com/u/22172510?v=4&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="yingliyu/jquery-qrcode" property="og:title" /><meta content="https://github.com/yingliyu/jquery-qrcode" property="og:url" /><meta content="jquery-qrcode - 一个生成二维码插件使用demo，支持在二维码里添加logo及将二维码转成图片" property="og:description" />

  <link rel="assets" href="https://assets-cdn.github.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6MTk2Nzk3OTA1OjE5NTQzNGJkN2NlODc4NTQ5N2UyMDA5OWJiMWNjZmE0YWY2ZjFiNmEzNDUyZGZiNjEwOTFmNDE1MjNhYjVhZDI=--3981fa55643fc64aa2c151678e618fadf86aed05">
  <meta name="pjax-timeout" content="1000">
  <link rel="sudo-modal" href="/sessions/sudo_modal">
  <meta name="request-id" content="4B94:2817D:6E7371A:AAB14ED:59B2964F" data-pjax-transient>
  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

  <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="https://collector.githubapp.com/github-external/browser_event" name="octolytics-event-url" /><meta content="4B94:2817D:6E7371A:AAB14ED:59B2964F" name="octolytics-dimension-request_id" /><meta content="sea" name="octolytics-dimension-region_edge" /><meta content="iad" name="octolytics-dimension-region_render" /><meta content="12481679" name="octolytics-actor-id" /><meta content="hotarzhang" name="octolytics-actor-login" /><meta content="4d1483a3ae127c3f04906d9d402746528695c842fae96a29e8406212306671e4" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />




  <meta class="js-ga-set" name="dimension1" content="Logged In">


  

      <meta name="hostname" content="github.com">
  <meta name="user-login" content="hotarzhang">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="Y2I2OTZkYTU3ZGNjMDc3MjQxMTljMjhmMGM0NmIzMjUxYWI4OWQyMDQxMDJiYjk1ODYzZTRkOWZhMGY2NGRjNXx7InJlbW90ZV9hZGRyZXNzIjoiMTE5LjEzMi4zOS42NCIsInJlcXVlc3RfaWQiOiI0Qjk0OjI4MTdEOjZFNzM3MUE6QUFCMTRFRDo1OUIyOTY0RiIsInRpbWVzdGFtcCI6MTUwNDg3NjExMiwiaG9zdCI6ImdpdGh1Yi5jb20ifQ==">

    <meta name="enabled-features" content="UNIVERSE_BANNER">

  <meta name="html-safe-nonce" content="c37eeec2893936db0b5b4f9cf91d716cba4ce222">

  <meta http-equiv="x-pjax-version" content="429683efe3bb956f2f88f32b2e69f344">
  

      <link href="https://github.com/yingliyu/jquery-qrcode/commits/master.atom" rel="alternate" title="Recent Commits to jquery-qrcode:master" type="application/atom+xml">

  <meta name="description" content="jquery-qrcode - 一个生成二维码插件使用demo，支持在二维码里添加logo及将二维码转成图片">
  <meta name="go-import" content="github.com/yingliyu/jquery-qrcode git https://github.com/yingliyu/jquery-qrcode.git">

  <meta content="22172510" name="octolytics-dimension-user_id" /><meta content="yingliyu" name="octolytics-dimension-user_login" /><meta content="89339911" name="octolytics-dimension-repository_id" /><meta content="yingliyu/jquery-qrcode" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="89339911" name="octolytics-dimension-repository_network_root_id" /><meta content="yingliyu/jquery-qrcode" name="octolytics-dimension-repository_network_root_nwo" /><meta content="false" name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" />


    <link rel="canonical" href="https://github.com/yingliyu/jquery-qrcode/blob/master/QRCode/js/jquery.qrcode.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">


  <meta name="u2f-support" content="true">

  </head>

  <body class="logged-in env-production page-blob">
    

  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="bg-black text-white p-3 show-on-focus js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    



        
<header class="Header  f5" role="banner">
  <div class="d-flex px-3 flex-justify-between container-lg">
    <div class="d-flex flex-justify-between">
      <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>


    </div>

    <div class="HeaderMenu d-flex flex-justify-between flex-auto">
      <div class="d-flex">
            <div class="">
              <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/yingliyu/jquery-qrcode/search" class="js-site-search-form" data-scoped-search-url="/yingliyu/jquery-qrcode/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
        <a href="/yingliyu/jquery-qrcode/blob/master/QRCode/js/jquery.qrcode.js" class="header-search-scope no-underline">This repository</a>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        value=""
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
        <input type="hidden" class="js-site-search-type-field" name="type" >
    </label>
</form></div>

            </div>

          <ul class="d-flex pl-2 flex-items-center text-bold list-style-none" role="navigation">
            <li>
              <a href="/pulls" aria-label="Pull requests you created" class="js-selected-navigation-item HeaderNavlink px-2" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
                Pull requests
</a>            </li>
            <li>
              <a href="/issues" aria-label="Issues you created" class="js-selected-navigation-item HeaderNavlink px-2" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
                Issues
</a>            </li>
                <li>
                  <a href="/marketplace" class="js-selected-navigation-item HeaderNavlink px-2" data-ga-click="Header, click, Nav menu - item:marketplace context:user" data-selected-links=" /marketplace">
                    Marketplace
</a>                </li>
            <li>
              <a href="/explore" class="js-selected-navigation-item HeaderNavlink px-2" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore">
                Explore
</a>            </li>
          </ul>
      </div>

      <div class="d-flex">
        
<ul class="user-nav d-flex flex-items-center list-style-none" id="user-links">
  <li class="dropdown js-menu-container js-header-notifications">
    <span class="d-inline-block  px-2">
      
      <a href="/notifications" aria-label="You have no unread notifications" class="notification-indicator tooltipped tooltipped-s  js-socket-channel js-notification-indicator" data-channel="notification-changed:12481679" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
          <span class="mail-status "></span>
          <svg aria-hidden="true" class="octicon octicon-bell" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"/></svg>
</a>
    </span>
  </li>

  <li class="dropdown js-menu-container">
    <details class="dropdown-details js-dropdown-details">
      <summary class="HeaderNavlink d-flex px-2 flex-items-center"
         aria-label="Create new…"
         data-ga-click="Header, create new, icon:add">
        <svg aria-hidden="true" class="octicon octicon-plus float-left" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5z"/></svg>
        <span class="dropdown-caret mt-1"></span>
      </summary>

      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>

<a class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
  New gist
</a>

  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="yingliyu/jquery-qrcode">This repository</span>
  </div>
    <a class="dropdown-item" href="/yingliyu/jquery-qrcode/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </details>
  </li>

  <li class="dropdown js-menu-container">

    <details class="dropdown-details js-dropdown-details d-flex pl-2 flex-items-center">
      <summary class="HeaderNavlink name"
        aria-label="View profile and more"
        data-ga-click="Header, show menu, icon:avatar">
        <img alt="@hotarzhang" class="avatar float-left mr-1" src="https://avatars3.githubusercontent.com/u/12481679?v=4&amp;s=40" height="20" width="20">
        <span class="dropdown-caret"></span>
      </summary>

      <ul class="dropdown-menu dropdown-menu-sw">
        <li class="dropdown-header header-nav-current-user css-truncate">
          Signed in as <strong class="css-truncate-target">hotarzhang</strong>
        </li>

        <li class="dropdown-divider"></li>

        <li><a class="dropdown-item" href="/hotarzhang" data-ga-click="Header, go to profile, text:your profile">
          Your profile
        </a></li>
        <li><a class="dropdown-item" href="/hotarzhang?tab=stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a></li>
          <li><a class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, your gists, text:your gists">Your Gists</a></li>

        <li class="dropdown-divider"></li>

        <li><a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a></li>

        <li><a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
          Settings
        </a></li>

        <li><!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="x9p7W3Q12EBsrfuX1MWVdTiL30/j3EWI283EDbrxiP0KRzDfQ4Un6feLeOWOWXdJoGzdUwJG75GuQO5dH6T5cg==" /></div>
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
        </form></li>
      </ul>
    </details>
  </li>
</ul>


        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="sr-only right-0" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="wtGcfSwoJ3GQLeGN1yWR9GXnINyQNT2c0UNQJfZtJ/kPTNf5G5jY2AsLYv+NuXPI/QAiwHGvl4Wkznp1UzhWdg==" /></div>
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
</form>      </div>
    </div>
  </div>
</header>


      

  </div>

  <div id="start-of-content" class="show-on-focus"></div>

    <div id="js-flash-container">
</div>



  <div role="main">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
      





    <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
      <div class="container repohead-details-container">

        <ul class="pagehead-actions">
  <li>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="yfM0nF6mIINsLYaq7gDuUWVRBRFZo+TROixXdTr/Zarvd+daT00RrLkm/ACXVOQ7/ao1VXOSiwRvTgy8TR30gg==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="89339911" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/yingliyu/jquery-qrcode/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
            aria-label="Toggle repository notifications menu"
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
                <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                Watch
            </span>
          </a>
            <a class="social-count js-social-count"
              href="/yingliyu/jquery-qrcode/watchers"
              aria-label="0 users are watching this repository">
              0
            </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content">
            <div class="select-menu-header js-navigation-enable" tabindex="-1">
              <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                        Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-mute" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"/></svg>
                        Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/yingliyu/jquery-qrcode/unstar" class="starred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="oC5rJ5tcXC78F8uE0eVW8u1BWfT5rX1Jyqt/0MZPZWZqlMlc2ON6p4DMvbDO4PeurjqON8pjkLdMSuLyTDDwPw==" /></div>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar yingliyu/jquery-qrcode"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/yingliyu/jquery-qrcode/stargazers"
           aria-label="0 users starred this repository">
          0
        </a>
</form>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/yingliyu/jquery-qrcode/star" class="unstarred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="0ZuxoKbXLBSd+r1cbMY0QxzhJ8h3m7SLOxUXx7+n5VBNxt1yCVdFMn5nO5OjBWASDkQIBsMDLuXKgjgR4uJ1RA==" /></div>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star yingliyu/jquery-qrcode"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/yingliyu/jquery-qrcode/stargazers"
           aria-label="0 users starred this repository">
          0
        </a>
</form>  </div>

  </li>

  <li>
          <a href="#fork-destination-box" class="btn btn-sm btn-with-count"
              title="Fork your own copy of yingliyu/jquery-qrcode to your account"
              aria-label="Fork your own copy of yingliyu/jquery-qrcode to your account"
              rel="facebox"
              data-ga-click="Repository, show fork modal, action:blob#show; text:Fork">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
            Fork
          </a>

          <div id="fork-destination-box" style="display: none;">
            <h2 class="facebox-header" data-facebox-id="facebox-header">Where should we fork this repository?</h2>
            <include-fragment src=""
                class="js-fork-select-fragment fork-select-fragment"
                data-url="/yingliyu/jquery-qrcode/fork?fragment=1">
              <img alt="Loading" height="64" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-128.gif" width="64" />
            </include-fragment>
          </div>

    <a href="/yingliyu/jquery-qrcode/network" class="social-count"
       aria-label="0 users forked this repository">
      0
    </a>
  </li>
</ul>

        <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a href="/yingliyu" class="url fn" rel="author">yingliyu</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/yingliyu/jquery-qrcode" data-pjax="#js-repo-pjax-container">jquery-qrcode</a></strong>

</h1>

      </div>
      <div class="container">
        
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/yingliyu/jquery-qrcode" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /yingliyu/jquery-qrcode" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/yingliyu/jquery-qrcode/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /yingliyu/jquery-qrcode/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">0</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/yingliyu/jquery-qrcode/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /yingliyu/jquery-qrcode/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">0</span>
      <meta itemprop="position" content="3">
</a>  </span>

    <a href="/yingliyu/jquery-qrcode/projects" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /yingliyu/jquery-qrcode/projects">
      <svg aria-hidden="true" class="octicon octicon-project" height="16" version="1.1" viewBox="0 0 15 16" width="15"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      Projects
      <span class="Counter" >0</span>
</a>
    <a href="/yingliyu/jquery-qrcode/wiki" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /yingliyu/jquery-qrcode/wiki">
      <svg aria-hidden="true" class="octicon octicon-book" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"/></svg>
      Wiki
</a>

    <div class="reponav-dropdown js-menu-container">
      <button type="button" class="btn-link reponav-item reponav-dropdown js-menu-target " data-no-toggle aria-expanded="false" aria-haspopup="true">
        Insights
        <svg aria-hidden="true" class="octicon octicon-triangle-down v-align-middle text-gray" height="11" version="1.1" viewBox="0 0 12 16" width="8"><path fill-rule="evenodd" d="M0 5l6 6 6-6z"/></svg>
      </button>
      <div class="dropdown-menu-content js-menu-content">
        <div class="dropdown-menu dropdown-menu-sw">
          <a class="dropdown-item" href="/yingliyu/jquery-qrcode/pulse" data-skip-pjax>
            <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"/></svg>
            Pulse
          </a>
          <a class="dropdown-item" href="/yingliyu/jquery-qrcode/graphs" data-skip-pjax>
            <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
            Graphs
          </a>
        </div>
      </div>
    </div>
</nav>

      </div>
    </div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    
  <a href="/yingliyu/jquery-qrcode/blob/7fe7018818390f2363c93eef91df6d206fe006bc/QRCode/js/jquery.qrcode.js" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

  <!-- blob contrib key: blob_contributors:v21:c24da53e9dace696a6fa1cbf1ca79411 -->

  <div class="file-navigation js-zeroclipboard-container">
    
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class=" btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" aria-expanded="false" aria-haspopup="true">
      <i>Branch:</i>
      <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/yingliyu/jquery-qrcode/blob/master/QRCode/js/jquery.qrcode.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

    <div class="BtnGroup float-right">
      <a href="/yingliyu/jquery-qrcode/find/master"
            class="js-pjax-capture-input btn btn-sm BtnGroup-item"
            data-pjax
            data-hotkey="t">
        Find file
      </a>
      <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
    </div>
    <div class="breadcrumb js-zeroclipboard-target">
      <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/yingliyu/jquery-qrcode"><span>jquery-qrcode</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/yingliyu/jquery-qrcode/tree/master/QRCode"><span>QRCode</span></a></span><span class="separator">/</span><span class="js-path-segment"><a href="/yingliyu/jquery-qrcode/tree/master/QRCode/js"><span>js</span></a></span><span class="separator">/</span><strong class="final-path">jquery.qrcode.js</strong>
    </div>
  </div>


  
  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/yingliyu/jquery-qrcode/commit/7fe7018818390f2363c93eef91df6d206fe006bc" data-pjax>
          7fe7018
        </a>
        <relative-time datetime="2017-04-25T09:05:53Z">Apr 25, 2017</relative-time>
      </span>
      <div>
        <img alt="" class="avatar" data-canonical-src="https://2.gravatar.com/avatar/00540a344c1e9f89103e722b9cd02ff5?d=https%3A%2F%2Fassets-cdn.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png&amp;r=x&amp;s=140" height="20" src="https://camo.githubusercontent.com/51369a8bfd06b2b04aab266d7e065764fcd89467/68747470733a2f2f322e67726176617461722e636f6d2f6176617461722f30303534306133343463316539663839313033653732326239636430326666353f643d68747470732533412532462532466173736574732d63646e2e6769746875622e636f6d253246696d6167657325324667726176617461727325324667726176617461722d757365722d3432302e706e6726723d7826733d313430" width="20" />
        <span class="user-mention">yyl</span>
          <a href="/yingliyu/jquery-qrcode/commit/7fe7018818390f2363c93eef91df6d206fe006bc" class="message" data-pjax="true" title="Signed-off-by: yyl &lt;yyl@idazui.com&gt;">Signed-off-by: yyl &lt;yyl@idazui.com&gt;</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>0</strong>
         contributors
      </button>
      
    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
      </ul>
    </div>
  </div>


  <div class="file">
    <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/yingliyu/jquery-qrcode/raw/master/QRCode/js/jquery.qrcode.js" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/yingliyu/jquery-qrcode/blame/master/QRCode/js/jquery.qrcode.js" class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b">Blame</a>
      <a href="/yingliyu/jquery-qrcode/commits/master/QRCode/js/jquery.qrcode.js" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="https://desktop.github.com"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
        </a>

        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/yingliyu/jquery-qrcode/edit/master/QRCode/js/jquery.qrcode.js" class="inline-form js-update-url-with-hash" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="VK08FNBEvDvORbQK2rmm+51xpZlJKJMv/2r5k0bAsXn5hzkn+w4tkD/Jjq9PGn7zgV2sHMWGOyUAGbwy65zLFw==" /></div>
          <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
          </button>
</form>        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/yingliyu/jquery-qrcode/delete/master/QRCode/js/jquery.qrcode.js" class="inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="E1Y5L89ZS1Ll1BH/izjj5cesQqOD4izpU+tIr5PMKD+X2549nMPdWsipkKltqZC3VZaUrDnqRDfRv4HeB1JhPA==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
          </button>
</form>  </div>

  <div class="file-info">
      69 lines (67 sloc)
      <span class="file-info-divider"></span>
    15.9 KB
  </div>
</div>

    

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">QR8bitByte</span>(<span class="pl-smi">a</span>){</td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line">	<span class="pl-c1">this</span>.<span class="pl-smi">mode</span><span class="pl-k">=</span><span class="pl-smi">QRMode</span>.<span class="pl-c1">MODE_8BIT_BYTE</span>,</td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line">	<span class="pl-c1">this</span>.<span class="pl-c1">data</span><span class="pl-k">=</span>a</td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">QRCode</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>){</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line">	<span class="pl-c1">this</span>.<span class="pl-smi">typeNumber</span><span class="pl-k">=</span>a,</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">	<span class="pl-c1">this</span>.<span class="pl-smi">errorCorrectLevel</span><span class="pl-k">=</span>b,</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">	<span class="pl-c1">this</span>.<span class="pl-smi">modules</span><span class="pl-k">=</span><span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">	<span class="pl-c1">this</span>.<span class="pl-smi">moduleCount</span><span class="pl-k">=</span><span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">	<span class="pl-c1">this</span>.<span class="pl-smi">dataCache</span><span class="pl-k">=</span><span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">	<span class="pl-c1">this</span>.<span class="pl-smi">dataList</span><span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">Array</span>()</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">QRPolynomial</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>){</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> c,d;</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">if</span>(<span class="pl-k">void</span> <span class="pl-c1">0</span><span class="pl-k">==</span><span class="pl-smi">a</span>.<span class="pl-c1">length</span>){</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(<span class="pl-smi">a</span>.<span class="pl-c1">length</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>/<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>b)</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">for</span>(c<span class="pl-k">=</span><span class="pl-c1">0</span>;c<span class="pl-k">&lt;</span><span class="pl-smi">a</span>.<span class="pl-c1">length</span><span class="pl-k">&amp;&amp;</span><span class="pl-c1">0</span><span class="pl-k">==</span>a[c];){</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">		c<span class="pl-k">++</span></td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">for</span>(<span class="pl-c1">this</span>.<span class="pl-smi">num</span><span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">Array</span>(<span class="pl-smi">a</span>.<span class="pl-c1">length</span><span class="pl-k">-</span>c<span class="pl-k">+</span>b),d<span class="pl-k">=</span><span class="pl-c1">0</span>;d<span class="pl-k">&lt;</span><span class="pl-smi">a</span>.<span class="pl-c1">length</span><span class="pl-k">-</span>c;d<span class="pl-k">++</span>){</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-smi">num</span>[d]<span class="pl-k">=</span>a[d<span class="pl-k">+</span>c]</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">QRRSBlock</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>){</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">	<span class="pl-c1">this</span>.<span class="pl-smi">totalCount</span><span class="pl-k">=</span>a,</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">	<span class="pl-c1">this</span>.<span class="pl-smi">dataCount</span><span class="pl-k">=</span>b</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">QRBitBuffer</span>(){</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">	<span class="pl-c1">this</span>.<span class="pl-smi">buffer</span><span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">Array</span>(),</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">	<span class="pl-c1">this</span>.<span class="pl-c1">length</span><span class="pl-k">=</span><span class="pl-c1">0</span></td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> QRMode,QRErrorCorrectLevel,QRMaskPattern,QRUtil,QRMath,i;</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line"><span class="pl-k">for</span>(<span class="pl-k">function</span>(<span class="pl-smi">a</span>){</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">a</span>.<span class="pl-smi">fn</span>.<span class="pl-en">qrcode</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">b</span>){</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> c,d;</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span><span class="pl-s"><span class="pl-pds">&quot;</span>string<span class="pl-pds">&quot;</span></span><span class="pl-k">==</span><span class="pl-k">typeof</span> b<span class="pl-k">&amp;&amp;</span>(b<span class="pl-k">=</span>{text<span class="pl-k">:</span>b}),</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">		b<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-en">extend</span>({},{</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">			render<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>canvas<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">			width<span class="pl-k">:</span><span class="pl-c1">256</span>,</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">			height<span class="pl-k">:</span><span class="pl-c1">256</span>,</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span>这里是图片的高度和宽度</span></td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">			imgWidth<span class="pl-k">:</span><span class="pl-smi">b</span>.<span class="pl-c1">width</span><span class="pl-k">/</span><span class="pl-c1">3</span>,</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">			imgHeight<span class="pl-k">:</span><span class="pl-smi">b</span>.<span class="pl-c1">height</span><span class="pl-k">/</span><span class="pl-c1">3</span>,</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">			typeNumber<span class="pl-k">:</span><span class="pl-k">-</span><span class="pl-c1">1</span>,</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">			correctLevel<span class="pl-k">:</span><span class="pl-smi">QRErrorCorrectLevel</span>.<span class="pl-c1">H</span>,</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">			background<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>#ffffff<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">			foreground<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>#000000<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">		 },b),<span class="pl-en">c</span><span class="pl-k">=</span><span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> c,d,e,f,g,h,i,j,k,a<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">QRCode</span>(<span class="pl-smi">b</span>.<span class="pl-smi">typeNumber</span>,<span class="pl-smi">b</span>.<span class="pl-smi">correctLevel</span>);</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span>(<span class="pl-smi">a</span>.<span class="pl-en">addData</span>(<span class="pl-en">utf16to8</span>(<span class="pl-smi">b</span>.<span class="pl-c1">text</span>)),<span class="pl-smi">a</span>.<span class="pl-en">make</span>(),</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">					c<span class="pl-k">=</span><span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>canvas<span class="pl-pds">&quot;</span></span>),</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">c</span>.<span class="pl-c1">width</span><span class="pl-k">=</span><span class="pl-smi">b</span>.<span class="pl-c1">width</span>,<span class="pl-smi">c</span>.<span class="pl-c1">height</span><span class="pl-k">=</span><span class="pl-smi">b</span>.<span class="pl-c1">height</span>,d<span class="pl-k">=</span><span class="pl-smi">c</span>.<span class="pl-c1">getContext</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>2d<span class="pl-pds">&quot;</span></span>),</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">b</span>.<span class="pl-smi">src</span><span class="pl-k">&amp;&amp;</span>(e<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">Image</span>(),<span class="pl-smi">e</span>.<span class="pl-smi">src</span><span class="pl-k">=</span><span class="pl-smi">b</span>.<span class="pl-smi">src</span>,<span class="pl-smi">e</span>.<span class="pl-en">onload</span><span class="pl-k">=</span><span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">d</span>.<span class="pl-en">drawImage</span>(e,(<span class="pl-smi">b</span>.<span class="pl-c1">width</span><span class="pl-k">-</span><span class="pl-smi">b</span>.<span class="pl-smi">imgWidth</span>)<span class="pl-k">/</span><span class="pl-c1">2</span>,(<span class="pl-smi">b</span>.<span class="pl-c1">height</span><span class="pl-k">-</span><span class="pl-smi">b</span>.<span class="pl-smi">imgHeight</span>)<span class="pl-k">/</span><span class="pl-c1">2</span>,</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">								<span class="pl-smi">b</span>.<span class="pl-smi">imgWidth</span>,<span class="pl-smi">b</span>.<span class="pl-smi">imgHeight</span>)}),f<span class="pl-k">=</span><span class="pl-smi">b</span>.<span class="pl-c1">width</span><span class="pl-k">/</span><span class="pl-smi">a</span>.<span class="pl-en">getModuleCount</span>(),</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">								g<span class="pl-k">=</span><span class="pl-smi">b</span>.<span class="pl-c1">height</span><span class="pl-k">/</span><span class="pl-smi">a</span>.<span class="pl-en">getModuleCount</span>(),h<span class="pl-k">=</span><span class="pl-c1">0</span>;h<span class="pl-k">&lt;</span><span class="pl-smi">a</span>.<span class="pl-en">getModuleCount</span>();h<span class="pl-k">++</span>)</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">			{<span class="pl-k">for</span>(i<span class="pl-k">=</span><span class="pl-c1">0</span>;i<span class="pl-k">&lt;</span><span class="pl-smi">a</span>.<span class="pl-en">getModuleCount</span>();i<span class="pl-k">++</span>){</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">d</span>.<span class="pl-smi">fillStyle</span><span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-en">isDark</span>(h,i)<span class="pl-k">?</span><span class="pl-smi">b</span>.<span class="pl-smi">foreground</span><span class="pl-k">:</span><span class="pl-smi">b</span>.<span class="pl-c1">background</span>,</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">						j<span class="pl-k">=</span><span class="pl-c1">Math</span>.<span class="pl-c1">ceil</span>((i<span class="pl-k">+</span><span class="pl-c1">1</span>)<span class="pl-k">*</span>f)<span class="pl-k">-</span><span class="pl-c1">Math</span>.<span class="pl-c1">floor</span>(i<span class="pl-k">*</span>f),</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">						k<span class="pl-k">=</span><span class="pl-c1">Math</span>.<span class="pl-c1">ceil</span>((h<span class="pl-k">+</span><span class="pl-c1">1</span>)<span class="pl-k">*</span>f)<span class="pl-k">-</span><span class="pl-c1">Math</span>.<span class="pl-c1">floor</span>(h<span class="pl-k">*</span>f),</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">d</span>.<span class="pl-en">fillRect</span>(<span class="pl-c1">Math</span>.<span class="pl-c1">round</span>(i<span class="pl-k">*</span>f),<span class="pl-c1">Math</span>.<span class="pl-c1">round</span>(h<span class="pl-k">*</span>g),j,k)</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">						}}<span class="pl-k">return</span> c},</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">d</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">var</span> d,e,f,g,h,i,</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">							c<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">QRCode</span>(<span class="pl-smi">b</span>.<span class="pl-smi">typeNumber</span>,<span class="pl-smi">b</span>.<span class="pl-smi">correctLevel</span>);</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">						<span class="pl-c"><span class="pl-c">//</span>这里的utf16to8(b.text)是对Text中的字符串进行转码，让其支持中文</span></td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">						for(c.addData(utf16to8(b.text)),c.make(),d=a(&quot;&lt;table&gt;&lt;/table&gt;&quot;).css(&quot;width&quot;,b.width+&quot;px&quot;).css(&quot;height&quot;,b.height+&quot;px&quot;).css(&quot;border&quot;,&quot;0px&quot;).css(&quot;border-collapse&quot;,&quot;collapse&quot;).css(&quot;background-color&quot;,b.background),e=b.width/c.getModuleCount(),f=b.height/c.getModuleCount(),g=0;g&lt;c.getModuleCount();g++){for(h=a(&quot;&lt;tr&gt;&lt;/tr&gt;&quot;).css(&quot;height&quot;,f+&quot;px&quot;).appendTo(d),i=0;i&lt;c.getModuleCount();i++){a(&quot;&lt;td&gt;&lt;/td&gt;&quot;).css(&quot;width&quot;,e+&quot;px&quot;).css(&quot;background-color&quot;,c.isDark(g,i)?b.foreground:b.background).appendTo(h)}}return d},this.each(function(){var e=&quot;canvas&quot;==b.render?c():d();a(e).appendTo(this)})}}(jQuery),QR8bitByte.prototype={getLength:function(){return this.data.length},write:function(a){for(var b=0;b&lt;this.data.length;b++){a.put(this.data.charCodeAt(b),8)}}},QRCode.prototype={addData:function(a){var b=new QR8bitByte(a);this.dataList.push(b),this.dataCache=null},isDark:function(a,b){if(0&gt;a||this.moduleCount&lt;=a||0&gt;b||this.moduleCount&lt;=b){throw new Error(a+&quot;,&quot;+b)}return this.modules[a][b]},getModuleCount:function(){return this.moduleCount},make:function(){var a,b,c,d,e,f;if(this.typeNumber&lt;1){for(a=1,a=1;40&gt;a;a++){for(b=QRRSBlock.getRSBlocks(a,this.errorCorrectLevel),c=new QRBitBuffer(),d=0,e=0;e&lt;b.length;e++){d+=b[e].dataCount}for(e=0;e&lt;this.dataList.length;e++){f=this.dataList[e],c.put(f.mode,4),c.put(f.getLength(),QRUtil.getLengthInBits(f.mode,a)),f.write(c)}if(c.getLengthInBits()&lt;=8*d){break}}this.typeNumber=a}this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(a,b){var c,d;for(this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount),c=0;c&lt;this.moduleCount;c++){for(this.modules[c]=new Array(this.moduleCount),d=0;d&lt;this.moduleCount;d++){this.modules[c][d]=null}}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(a,b),this.typeNumber&gt;=7&amp;&amp;this.setupTypeNumber(a),null==this.dataCache&amp;&amp;(this.dataCache=QRCode.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,b)},setupPositionProbePattern:function(a,b){var c,d;for(c=-1;7&gt;=c;c++){if(!(-1&gt;=a+c||this.moduleCount&lt;=a+c)){for(d=-1;7&gt;=d;d++){-1&gt;=b+d||this.moduleCount&lt;=b+d||(this.modules[a+c][b+d]=c&gt;=0&amp;&amp;6&gt;=c&amp;&amp;(0==d||6==d)||d&gt;=0&amp;&amp;6&gt;=d&amp;&amp;(0==c||6==c)||c&gt;=2&amp;&amp;4&gt;=c&amp;&amp;d&gt;=2&amp;&amp;4&gt;=d?!0:!1)}}}},getBestMaskPattern:function(){var c,d,a=0,b=0;for(c=0;8&gt;c;c++){this.makeImpl(!0,c),d=QRUtil.getLostPoint(this),(0==c||a&gt;d)&amp;&amp;(a=d,b=c)}return b},createMovieClip:function(a,b,c){var f,g,h,i,j,d=a.createEmptyMovieClip(b,c),e=1;for(this.make(),f=0;f&lt;this.modules.length;f++){for(g=f*e,h=0;h&lt;this.modules[f].length;h++){i=h*e,j=this.modules[f][h],j&amp;&amp;(d.beginFill(0,100),d.moveTo(i,g),d.lineTo(i+e,g),d.lineTo(i+e,g+e),d.lineTo(i,g+e),d.endFill())}}return d},setupTimingPattern:function(){var a,b;for(a=8;a&lt;this.moduleCount-8;a++){null==this.modules[a][6]&amp;&amp;(this.modules[a][6]=0==a%2)}for(b=8;b&lt;this.moduleCount-8;b++){null==this.modules[6][b]&amp;&amp;(this.modules[6][b]=0==b%2)}},setupPositionAdjustPattern:function(){var b,c,d,e,f,g,a=QRUtil.getPatternPosition(this.typeNumber);for(b=0;b&lt;a.length;b++){for(c=0;c&lt;a.length;c++){if(d=a[b],e=a[c],null==this.modules[d][e]){for(f=-2;2&gt;=f;f++){for(g=-2;2&gt;=g;g++){this.modules[d+f][e+g]=-2==f||2==f||-2==g||2==g||0==f&amp;&amp;0==g?!0:!1}}}}}},setupTypeNumber:function(a){var c,d,b=QRUtil.getBCHTypeNumber(this.typeNumber);for(c=0;18&gt;c;c++){d=!a&amp;&amp;1==(1&amp;b&gt;&gt;c),this.modules[Math.floor(c/3)][c%3+this.moduleCount-8-3]=d}for(c=0;18&gt;c;c++){d=!a&amp;&amp;1==(1&amp;b&gt;&gt;c),this.modules[c%3+this.moduleCount-8-3][Math.floor(c/3)]=d}},setupTypeInfo:function(a,b){var e,f,c=this.errorCorrectLevel&lt;&lt;3|b,d=QRUtil.getBCHTypeInfo(c);for(e=0;15&gt;e;e++){f=!a&amp;&amp;1==(1&amp;d&gt;&gt;e),6&gt;e?this.modules[e][8]=f:8&gt;e?this.modules[e+1][8]=f:this.modules[this.moduleCount-15+e][8]=f}for(e=0;15&gt;e;e++){f=!a&amp;&amp;1==(1&amp;d&gt;&gt;e),8&gt;e?this.modules[8][this.moduleCount-e-1]=f:9&gt;e?this.modules[8][15-e-1+1]=f:this.modules[8][15-e-1]=f}this.modules[this.moduleCount-8][8]=!a},mapData:function(a,b){var g,h,i,j,c=-1,d=this.moduleCount-1,e=7,f=0;for(g=this.moduleCount-1;g&gt;0;g-=2){for(6==g&amp;&amp;g--;;){for(h=0;2&gt;h;h++){null==this.modules[d][g-h]&amp;&amp;(i=!1,f&lt;a.length&amp;&amp;(i=1==(1&amp;a[f]&gt;&gt;&gt;e)),j=QRUtil.getMask(b,d,g-h),j&amp;&amp;(i=!i),this.modules[d][g-h]=i,e--,-1==e&amp;&amp;(f++,e=7))}if(d+=c,0&gt;d||this.moduleCount&lt;=d){d-=c,c=-c;break}}}}},QRCode.PAD0=236,QRCode.PAD1=17,QRCode.createData=function(a,b,c){var f,g,h,d=QRRSBlock.getRSBlocks(a,b),e=new QRBitBuffer();for(f=0;f&lt;c.length;f++){g=c[f],e.put(g.mode,4),e.put(g.getLength(),QRUtil.getLengthInBits(g.mode,a)),g.write(e)}for(h=0,f=0;f&lt;d.length;f++){h+=d[f].dataCount}if(e.getLengthInBits()&gt;8*h){throw new Error(&quot;code length overflow. (&quot;+e.getLengthInBits()+&quot;&gt;&quot;+8*h+&quot;)&quot;)}for(e.getLengthInBits()+4&lt;=8*h&amp;&amp;e.put(0,4);0!=e.getLengthInBits()%8;){e.putBit(!1)}for(;;){if(e.getLengthInBits()&gt;=8*h){break}if(e.put(QRCode.PAD0,8),e.getLengthInBits()&gt;=8*h){break}e.put(QRCode.PAD1,8)}return QRCode.createBytes(e,d)},QRCode.createBytes=function(a,b){var h,i,j,k,l,m,n,o,p,q,r,c=0,d=0,e=0,f=new Array(b.length),g=new Array(b.length);for(h=0;h&lt;b.length;h++){for(i=b[h].dataCount,j=b[h].totalCount-i,d=Math.max(d,i),e=Math.max(e,j),f[h]=new Array(i),k=0;k&lt;f[h].length;k++){f[h][k]=255&amp;a.buffer[k+c]}for(c+=i,l=QRUtil.getErrorCorrectPolynomial(j),m=new QRPolynomial(f[h],l.getLength()-1),n=m.mod(l),g[h]=new Array(l.getLength()-1),k=0;k&lt;g[h].length;k++){o=k+n.getLength()-g[h].length,g[h][k]=o&gt;=0?n.get(o):0}}for(p=0,k=0;k&lt;b.length;k++){p+=b[k].totalCount}for(q=new Array(p),r=0,k=0;d&gt;k;k++){for(h=0;h&lt;b.length;h++){k&lt;f[h].length&amp;&amp;(q[r++]=f[h][k])}}for(k=0;e&gt;k;k++){for(h=0;h&lt;b.length;h++){k&lt;g[h].length&amp;&amp;(q[r++]=g[h][k])}}return q},QRMode={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},QRErrorCorrectLevel={L:1,M:0,Q:3,H:2},QRMaskPattern={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},QRUtil={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(a){for(var b=a&lt;&lt;10;QRUtil.getBCHDigit(b)-QRUtil.getBCHDigit(QRUtil.G15)&gt;=0;){b^=QRUtil.G15&lt;&lt;QRUtil.getBCHDigit(b)-QRUtil.getBCHDigit(QRUtil.G15)}return(a&lt;&lt;10|b)^QRUtil.G15_MASK},getBCHTypeNumber:function(a){for(var b=a&lt;&lt;12;QRUtil.getBCHDigit(b)-QRUtil.getBCHDigit(QRUtil.G18)&gt;=0;){b^=QRUtil.G18&lt;&lt;QRUtil.getBCHDigit(b)-QRUtil.getBCHDigit(QRUtil.G18)}return a&lt;&lt;12|b},getBCHDigit:function(a){for(var b=0;0!=a;){b++,a&gt;&gt;&gt;=1}return b},getPatternPosition:function(a){return QRUtil.PATTERN_POSITION_TABLE[a-1]},getMask:function(a,b,c){switch(a){case QRMaskPattern.PATTERN000:return 0==(b+c)%2;case QRMaskPattern.PATTERN001:return 0==b%2;case QRMaskPattern.PATTERN010:return 0==c%3;case QRMaskPattern.PATTERN011:return 0==(b+c)%3;case QRMaskPattern.PATTERN100:return 0==(Math.floor(b/2)+Math.floor(c/3))%2;case QRMaskPattern.PATTERN101:return 0==b*c%2+b*c%3;case QRMaskPattern.PATTERN110:return 0==(b*c%2+b*c%3)%2;case QRMaskPattern.PATTERN111:return 0==(b*c%3+(b+c)%2)%2;default:throw new Error(&quot;bad maskPattern:&quot;+a)}},getErrorCorrectPolynomial:function(a){var c,b=new QRPolynomial([1],0);for(c=0;a&gt;c;c++){b=b.multiply(new QRPolynomial([1,QRMath.gexp(c)],0))}return b},getLengthInBits:function(a,b){if(b&gt;=1&amp;&amp;10&gt;b){switch(a){case QRMode.MODE_NUMBER:return 10;case QRMode.MODE_ALPHA_NUM:return 9;case QRMode.MODE_8BIT_BYTE:return 8;case QRMode.MODE_KANJI:return 8;default:throw new Error(&quot;mode:&quot;+a)}}else{if(27&gt;b){switch(a){case QRMode.MODE_NUMBER:return 12;case QRMode.MODE_ALPHA_NUM:return 11;case QRMode.MODE_8BIT_BYTE:return 16;case QRMode.MODE_KANJI:return 10;default:throw new Error(&quot;mode:&quot;+a)}}else{if(!(41&gt;b)){throw new Error(&quot;type:&quot;+b)}switch(a){case QRMode.MODE_NUMBER:return 14;case QRMode.MODE_ALPHA_NUM:return 13;case QRMode.MODE_8BIT_BYTE:return 16;case QRMode.MODE_KANJI:return 12;default:throw new Error(&quot;mode:&quot;+a)}}}},getLostPoint:function(a){var d,e,f,g,h,i,j,k,l,b=a.getModuleCount(),c=0;for(d=0;b&gt;d;d++){for(e=0;b&gt;e;e++){for(f=0,g=a.isDark(d,e),h=-1;1&gt;=h;h++){if(!(0&gt;d+h||d+h&gt;=b)){for(i=-1;1&gt;=i;i++){0&gt;e+i||e+i&gt;=b||(0!=h||0!=i)&amp;&amp;g==a.isDark(d+h,e+i)&amp;&amp;f++}}}f&gt;5&amp;&amp;(c+=3+f-5)}}for(d=0;b-1&gt;d;d++){for(e=0;b-1&gt;e;e++){j=0,a.isDark(d,e)&amp;&amp;j++,a.isDark(d+1,e)&amp;&amp;j++,a.isDark(d,e+1)&amp;&amp;j++,a.isDark(d+1,e+1)&amp;&amp;j++,(0==j||4==j)&amp;&amp;(c+=3)}}for(d=0;b&gt;d;d++){for(e=0;b-6&gt;e;e++){a.isDark(d,e)&amp;&amp;!a.isDark(d,e+1)&amp;&amp;a.isDark(d,e+2)&amp;&amp;a.isDark(d,e+3)&amp;&amp;a.isDark(d,e+4)&amp;&amp;!a.isDark(d,e+5)&amp;&amp;a.isDark(d,e+6)&amp;&amp;(c+=40)}}for(e=0;b&gt;e;e++){for(d=0;b-6&gt;d;d++){a.isDark(d,e)&amp;&amp;!a.isDark(d+1,e)&amp;&amp;a.isDark(d+2,e)&amp;&amp;a.isDark(d+3,e)&amp;&amp;a.isDark(d+4,e)&amp;&amp;!a.isDark(d+5,e)&amp;&amp;a.isDark(d+6,e)&amp;&amp;(c+=40)}}for(k=0,e=0;b&gt;e;e++){for(d=0;b&gt;d;d++){a.isDark(d,e)&amp;&amp;k++}}return l=Math.abs(100*k/b/b-50)/5,c+=10*l}},QRMath={glog:function(a){if(1&gt;a){throw new Error(&quot;glog(&quot;+a+&quot;)&quot;)}return QRMath.LOG_TABLE[a]},gexp:function(a){for(;0&gt;a;){a+=255}for(;a&gt;=256;){a-=255}return QRMath.EXP_TABLE[a]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},i=0;8&gt;i;i++){QRMath.EXP_TABLE[i]=1&lt;&lt;i}for(i=8;256&gt;i;i++){QRMath.EXP_TABLE[i]=QRMath.EXP_TABLE[i-4]^QRMath.EXP_TABLE[i-5]^QRMath.EXP_TABLE[i-6]^QRMath.EXP_TABLE[i-8]}for(i=0;255&gt;i;i++){QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]]=i}QRPolynomial.prototype={get:function(a){return this.num[a]},getLength:function(){return this.num.length},multiply:function(a){var c,d,b=new Array(this.getLength()+a.getLength()-1);for(c=0;c&lt;this.getLength();c++){for(d=0;d&lt;a.getLength();d++){b[c+d]^=QRMath.gexp(QRMath.glog(this.get(c))+QRMath.glog(a.get(d)))}}return new QRPolynomial(b,0)},mod:function(a){var b,c,d;if(this.getLength()-a.getLength()&lt;0){return this}for(b=QRMath.glog(this.get(0))-QRMath.glog(a.get(0)),c=new Array(this.getLength()),d=0;d&lt;this.getLength();d++){c[d]=this.get(d)}for(d=0;d&lt;a.getLength();d++){c[d]^=QRMath.gexp(QRMath.glog(a.get(d))+b)}return new QRPolynomial(c,0).mod(a)}},QRRSBlock.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],QRRSBlock.getRSBlocks=function(a,b){var d,e,f,g,h,i,j,c=QRRSBlock.getRsBlockTable(a,b);if(void 0==c){throw new Error(&quot;bad rs block @ typeNumber:&quot;+a+&quot;/errorCorrectLevel:&quot;+b)}for(d=c.length/3,e=new Array(),f=0;d&gt;f;f++){for(g=c[3*f+0],h=c[3*f+1],i=c[3*f+2],j=0;g&gt;j;j++){e.push(new QRRSBlock(h,i))}}return e},QRRSBlock.getRsBlockTable=function(a,b){switch(b){case QRErrorCorrectLevel.L:return QRRSBlock.RS_BLOCK_TABLE[4*(a-1)+0];case QRErrorCorrectLevel.M:return QRRSBlock.RS_BLOCK_TABLE[4*(a-1)+1];case QRErrorCorrectLevel.Q:return QRRSBlock.RS_BLOCK_TABLE[4*(a-1)+2];case QRErrorCorrectLevel.H:return QRRSBlock.RS_BLOCK_TABLE[4*(a-1)+3];default:return void 0}},QRBitBuffer.prototype={get:function(a){var b=Math.floor(a/8);return 1==(1&amp;this.buffer[b]&gt;&gt;&gt;7-a%8)},put:function(a,b){for(var c=0;b&gt;c;c++){this.putBit(1==(1&amp;a&gt;&gt;&gt;b-c-1))}},getLengthInBits:function(){return this.length},putBit:function(a){var b=Math.floor(this.length/8);this.buffer.length&lt;=b&amp;&amp;this.buffer.push(0),a&amp;&amp;(this.buffer[b]|=128&gt;&gt;&gt;this.length%8),this.length++}};</td>
      </tr>
</table>

  <div class="BlobToolbar position-absolute js-file-line-actions dropdown js-menu-container js-select-menu d-none" aria-hidden="true">
    <button class="btn-octicon ml-0 px-2 p-0 bg-white border border-gray-dark rounded-1 dropdown-toggle js-menu-target" id="js-file-line-action-button" type="button" aria-expanded="false" aria-haspopup="true" aria-label="Inline file action toolbar" aria-controls="inline-file-actions">
      <svg aria-hidden="true" class="octicon" height="16" version="1.1" viewBox="0 0 13 4" width="14">
        <g stroke="none" stroke-width="1" fill-rule="evenodd">
            <g transform="translate(-1.000000, -6.000000)">
                <path d="M2.5,9.5 C1.67157288,9.5 1,8.82842712 1,8 C1,7.17157288 1.67157288,6.5 2.5,6.5 C3.32842712,6.5 4,7.17157288 4,8 C4,8.82842712 3.32842712,9.5 2.5,9.5 Z M7.5,9.5 C6.67157288,9.5 6,8.82842712 6,8 C6,7.17157288 6.67157288,6.5 7.5,6.5 C8.32842712,6.5 9,7.17157288 9,8 C9,8.82842712 8.32842712,9.5 7.5,9.5 Z M12.5,9.5 C11.6715729,9.5 11,8.82842712 11,8 C11,7.17157288 11.6715729,6.5 12.5,6.5 C13.3284271,6.5 14,7.17157288 14,8 C14,8.82842712 13.3284271,9.5 12.5,9.5 Z"></path>
            </g>
        </g>
      </svg>
    </button>
    <div class="dropdown-menu-content js-menu-content" id="inline-file-actions">
      <ul class="BlobToolbar-dropdown dropdown-menu dropdown-menu-se mt-2">
        <li><a class="js-zeroclipboard dropdown-item" style="cursor:pointer;" id="js-copy-lines" data-original-text="Copy lines">Copy lines</a></li>
        <li><a class="js-zeroclipboard dropdown-item" id= "js-copy-permalink" style="cursor:pointer;" data-original-text="Copy permalink">Copy permalink</a></li>
        <li><a href="/yingliyu/jquery-qrcode/blame/7fe7018818390f2363c93eef91df6d206fe006bc/QRCode/js/jquery.qrcode.js" class="dropdown-item js-update-url-with-hash" id="js-view-git-blame">View git blame</a></li>
          <li><a href="/yingliyu/jquery-qrcode/issues/new" class="dropdown-item" id="js-new-issue">Open new issue</a></li>
      </ul>
    </div>
  </div>

  </div>

  </div>

  <button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
  <div id="jump-to-line" style="display:none">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
      <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
      <button type="submit" class="btn">Go</button>
</form>  </div>

  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>

    </div>
  </div>

  </div>

      
<div class="footer container-lg px-3" role="contentinfo">
  <div class="position-relative d-flex flex-justify-between py-6 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap ">
      <li class="mr-3">&copy; 2017 <span title="0.19038s from unicorn-1176997265-4dmkw">GitHub</span>, Inc.</li>
        <li class="mr-3"><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li class="mr-3"><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li class="mr-3"><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li class="mr-3"><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>

    <a href="https://github.com" aria-label="Homepage" class="footer-octicon" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
    <ul class="list-style-none d-flex flex-wrap ">
        <li class="mr-3"><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li class="mr-3"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3"><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li class="mr-3"><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li class="mr-3"><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
    You can't perform that action at this time.
  </div>


    
    <script crossorigin="anonymous" integrity="sha256-Sxs+Reu4luxVVaYLalcHLGmPG0uGt2qgtP4QZ/RAsfM=" src="https://assets-cdn.github.com/assets/frameworks-4b1b3e45ebb896ec5555a60b6a57072c698f1b4b86b76aa0b4fe1067f440b1f3.js"></script>
    
    <script async="async" crossorigin="anonymous" integrity="sha256-mkQoKXpPyUyaOp0PLkahZuuWMaumRwKAu46rGS3y/N8=" src="https://assets-cdn.github.com/assets/github-9a4428297a4fc94c9a3a9d0f2e46a166eb9631aba6470280bb8eab192df2fcdf.js"></script>
    
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
  </div>
</div>


  </body>
</html>

