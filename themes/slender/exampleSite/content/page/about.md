+++
date = "2015-12-16"
description = "About Slender"
keywords = ["hugo", "slender", "about"]
title = "about"

+++

Slender
=======

Minimalist theme for [Hugo](http://gohugo.io/) with [base16](https://github.com/chriskempson/base16) color schemes.

[Demo](https://crimsonray.github.io/slender)

### Screenshot

![screenshot](../images/screenshot.png)

### Features

* Responsive
* Pagination
* [base16](https://github.com/chriskempson/base16) color schemes
* Code/syntax highlighting with [highlight.js 9.0.0](https://highlightjs.org/)
* Social links with [FontAwesome 4.5.0](https://fortawesome.github.io/Font-Awesome/)
* Google Analytics integration
* Proper meta tags for SEO

### Color Schemes

![slender-color-schemes](../images/slender-color-schemes.png)

### Installation

1. Make a new Hugo site

    ```none
    $ hugo new site your_site/
    ```

2. Install Slender

    ```none
    $ cd your_site/
    $ mkdir themes
    $ cd themes
    $ git clone https://github.com/CrimsonRay/slender
    ```

### Configuration

```toml
# config.toml
# https://github.com/CrimsonRay/slender

baseurl = "http://url-to-your-site.com/"
title = "Your Title"
languageCode = "en-US"
MetaDataFormat = "toml"
theme = "slender"
paginate = 3
PaginatePath = "/"

[author]
    name = "Your Name"

[permalinks]

    # Permalink format for pages.
    page = "/:title/"

    # Permalink format for blog posts.
    post = "/article/:title/"

[params]

    # Change the color scheme of Slender.
    # See above for preview and list of color schemes.
    colorscheme = "white"

    # Tagline; HTML accepted here. Keep it concise.
    tagline = "Your Tagline"

    # Footer; Markdown accepted here.
    footer = "Copyright 2015 &copy; Your Name"

    # Description and keywords for <meta> tags.
    # Remember to set this for your main page.
    # This will be overridden by whatever is set by the page or post,
    # defined by `description` and `keywords` variables in the front matter
    # of the markdown file.
    description = "Default Page Description"
    keywords = "default,page,keywords"

    # Social links, must be full URLs (e.g. https://github.com/CrimsonRay/).
    # Remove, comment, or leave blank any field to leave them out.
    email = "mailto:your-email"
    github = "url-to-your-github"
    bitbucket = "url-to-your-bitbucket"
    twitter = "url-to-your-twitter"
    stackoverflow = "url-to-your-stackoverflow"
    linkedin = "url-to-your-linkedin"
    facebook = "url-to-your-facebook"

    # Google Analytics
    # Remove, comment, or leave it blank if you don't have one.
    ganalytics = "your-google-analytics-tracking-code"

[menu]

    # Menu for the nav bar.
    # There must always be one item present (e.g. home).
    [[menu.main]]
    identifier = "home"
    name       = "home"
    url        = "/"
    weight     = 0

    [[menu.main]]
    identifier = "about"
    name       = "about"
    url        = "/about/"
    weight     = 1
```

### Usage 

**Making a new post / article**

```none
$ hugo new post/hello.md
```

**Making a new page**

```none
$ hugo new page/about.md
```

Add the new page to navbar in `config.toml` under `[menu]`.

### License

MIT &copy; 2015 CrimsonRay