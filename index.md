---
layout: default-sidebar
title: Home
group: "navigation"
contentClass: blog-post
---



    
{% assign post = site.posts.first %}
{% assign content = post.content %}
{% assign title = post.title %}
{% assign date = post.date %}
{% include post_detail.html %}


