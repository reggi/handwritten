# A computer font that feels human.

I've been very interested in handwritten type. I've been greatly influenced by [James Victore's](http://instagram.com/jamesvictore) work. I've realized that this is very difficult to replicate on the computer with a font because the repetitive nature of each letter stands out more when it has any sort of character. I've used [myscriptfont.com](http://www.myscriptfont.com/) in the past to create a handwritten font, and it didn't have that human element of each letter being different.

## Summary

I've fixed this problem by creating multiple of the same font (my own handwriting), and creating a javascript library that changes the font of every character in a body of text.

## Process

So I created handwritten 3 fonts using [myscriptfont.com](http://www.myscriptfont.com/). Each font is only caps, so lowercase letters are also uppercase. This means I have a font with 6 different versions of each letter. With the one font file (ttf or otf) I could create the rest of the necessary web fonts using a service like [font2web.com](http://www.font2web.com/). This gave me all of my a couple of copies of single handwritten font. 

## Code

I created a simple query library I'm calling "jquery.diverse-fonts.js" it works by applying the attributes below to a html tag that you want to change.

* `data-fonts="thomasreggi1, thomasreggi2, thomasreggi3"`
* `data-mix-case`

The script currently picks a random font for each letter.

## Ideas

* Not use the same font twice in a row.
* Not use the same font for the same next use of a letter.