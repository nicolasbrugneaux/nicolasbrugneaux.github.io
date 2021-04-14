---
layout: default
title: "Projects"
excerpt: "A list of all my open-sourced projects, all hosted on GitHub. Fair warning: some of them are not maintained anymore."
tags:
  - projects
  - open-source
  - closed-source
  - github
---

# Close-source Projects

While I'm not at liberty to share the most of the projects I've done or work on in the scope of my previous jobs, I'm happy to describe some of them and describe them in more details privately via me via [hello@nicolasbrugneaux.me](mailto:hello@nicolasbrugneaux.me).

<ul class="list">
<li class="list__item">
  <p class="list__primary-content">
    <a href="https://docs.passbase.com/server/api#install-a-server-side-library" target="_blank">Passbase server-side SDKs</a>
  </p>
  <span class="list__secondary-content">
    I wrote the public API spec and well as implemented the server-side libraries to use it. The initial implementations were in Go, Node, Python, Java, Ruby, and PHP.
  </span>
</li>

<li class="list__item">
  <p class="list__primary-content">
    <a href="https://chrome.google.com/webstore/detail/datawallet-30-developer-e/caagmkmkbhffejhhedakamdemcekfbmf" target="_blank">Datawallet 3.0</a>
  </p>
  <span class="list__secondary-content">
    One example publicly available is Datawallet's chrome extension has been a work of labour at Datawallet. Despite being abandonned, it is still a cool piece of technology. It's built with wasm, js, and Cosmos Blockchain.
  </span>
</li>
<li class="list__item">
  <p class="list__primary-content">
    <a href="https://github.com/DataWallet/pls" target="_blank">Companion SDK</a>
  </p>
  <span class="list__secondary-content">
    The chrome extension above was accompanied by this companion SDK to use it programmatically.
</span>
</li>
<li class="list__item">
  <p class="list__primary-content">
    <a href="https://medium.com/datawallet-blog/datawallet-launches-alpha-version-on-ios-and-android-bf34543ab28f" target="_blank">Datawallet Mobile App</a>
  </p>
  <span class="list__secondary-content">
    Build with RN, and native Java/Swift modules.
</span>
</li>
</ul>

# Open-source Projects

Early in my carreer I used to invest a lot more time in open-source projects. Here are a few of them I initiated myself or contributed to.

{% assign groups = site.data.projects|group_by:"category" %}
{% assign groups = groups|sort:"name" %}
{% for category in groups %}

  <h2>{{ category.name }}</h2>
  <ul class="list">
  {% assign projects = category.items|sort:"name" %}
  {% for project in projects %}
    <li class="list__item">
      <p class="list__primary-content">
        <a href="{{ project.link }}" target="_blank">{{ project.name }}</a>
      </p>
      <span class="list__secondary-content">{{ project.description }}</span>
    </li>
  {% endfor %}
{% endfor %}
