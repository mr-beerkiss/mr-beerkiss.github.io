---
layout: default
title: The Unexpected Virtue of Lazniess
contentClass: blog-post
---

There are few words in the English language that conjures as many negative associations as the word 'lazy'.  Even as 
you read the word lazy images filled your head of an overweight couch-potato, covered in cookie crumbs currently 
re-watching ever single title in Netflix the thirds time over.  Their idea of working out is playing a sport's 
title video game and the only notion of work is working up the nerve to got fetch another chocolate bar from the food
cupboard.

But we see instances of laziness in nature that lend itself to an altogether more benign purpose... efficiency.  
Electricity might be accused of being lazy since it will also follow the path of least resistance but this property 
makes it efficient and also makes electricity easier to control.

So we consider laziness as an indicator of efficiency it could be construed as a virtue, especially in the work place
where efficiency is considered a desirable quality to have.  In this context we consider laziness not as the couch-
potato but the mechanism by which the most amount of work is completed while expending the least amount of energy.

This is particularly true of software development where one won't be surprised to hear of solutions being 
'over-engineered' or 'needlessly complex'.  This is because there is a temptation for developers to seek out a way
to explore new technologies and ideas which may be interesting to the individual who is trying to learn said 
technology but is bad for the product as a whole.  Additionally this is a side effect of [D-R-Y](http://c2.com/cgi/wiki?DontRepeatYourself) programming since many inexperienced developers attempt to avoid repeating themselves before 
they even know if they might be repeating themselves or not.

Consider the follow snippets, and ask yourself which solution is lazy.

{% highlight javascript %} 

var locale = 'en-US';

var langStrings = {
    'en-US' : {
        'pageTitle': 'Introduction'
    }
};

function getLocalisedString(key, default) {
    default = default || null;

    if ( langStrings.hasOwnProperty(locale) && langStrings[locale].hasOwnProperty(key) ) 
        return langStrings[locale][key];
    
    return default;
}

window.onload = function() {
    
    if ( !document.querySelector("h1.page-title") ) {
        var pageHeading = document.createElement("h1");
        pageHeading.setAttribute("class", "page-title");

        var pageHeadingContent = document.createTextNode(getLocalisedString('pageTitle', 'Introduction'));

        pageHeading.appendChild(pageHeadingContent);

        document.body.appendChild(pageHeading);
    }

};

{% endhighlight %}

vs. 

{% highlight html %}
    
<h1 class="page-title">Introduction</h1>

{% endhighlight %}

Clearly we can accuse the html of being lazy but is that really a bad thing?  If the task was simply to create a page
heading with the word 'Introduction' then both snippets satisfy the task at hand but one of those has gone so far as 
to pre-empty the issue of internationalisation.  I'm not saying that i18n is not important and certainly many projects
find themselves in an awkward position if they need to add language support later in a projects life cycle but in this 
instance someone has clearly jumped the gun.