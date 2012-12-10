You can read this page if you want to, but [this one](http://ttscoff.github.com/cheaters/) is way prettier.

![Cheat Sheets Header](http://brettterpstra.com/wp-content/uploads/2012/03/Cheat-Sheets-Header.jpg)

[macdrifter]: http://www.macdrifter.com/2012/02/markdown-cheat-sheets-and-marked/
[gather]: http://brettterpstra.com/introducing-gather-a-cocoa-markdownifier/
[te]: http://smilesoftware.com/TextExpander/
[marky]: http://markdownrules.com/

First and foremost, this is a total ripoff of an idea by Gabe Weatherhead [over at Macdrifter][macdrifter]. I just expanded on the idea a little bit.

Cheaters is a collection of HTML-based cheat sheets meant for display in an Automator-based popup browser which can float on your screen while you work in other apps. Most of the time I create [TextExpander][te] snippets for commonly-forgotten formats, but having an overall reference can be handy. I've included a collection of hastily made sheets as examples for you to create your own. Sheets are easy to create with minimal markup and are, for the most part, automatically styled and made to fit in with Cheaters overall aesthetic.


![Cheat Sheets wide](http://brettterpstra.com/wp-content/uploads/2012/03/Cheat-Sheets-wide.jpg)

### Using Cheaters

Cheaters is now a Chrome Application.  It works, but isn't quite ready for public consumption.  

For now, the best way to use it is to download or clone this repository, and manually install it into Chrome.  To do this:

1. Open Chrome's extension management page.  This can be found from the Chrome Menu -> Tools -> Extensions.  
2. If 'Developer Mode' is not checked, check it.
3. Click 'Load Unpacked Extension,' and navigate to the directory where you just downloaded this repository.  
4. Panic.  This isn't really ready for production use just yet.

###TODO

* Create a great icon.
* Better UI controls.
* Collapsable sections.
* More fluid layout.  Respond better to wide windows.
* Settings dialogue for toggling various cheatsheets
* Support for loading external cheatsheets (There must be a better way to handle this than keeping each sheet in one central repo?)
* [Dochub](http://dochub.io)-like functionality for opening certain documentation directly in-app.
* Documentation for 'Always on Top' functionality with various OSes.  Chrome doesn't support this directly.

Pull requests are always welcome.

### Customizing

If you know a little HTML, adding and editing sheets is easy. Take a look at the existing documents in the included **cheatsheets** folder. The markup varies but a lot of cases are already handled by the CSS. I stole most of the included cheat sheets from existing web sources (credits at the bottom of each). Some of them I just ripped the HTML out of directly, some I [converted][marky] [to Markdown][gather] and then to HTML to get cleaner output. The HTML in the cheat sheets does not need a head, body or containing div, just the markup that goes inside the container in the index.html file.

#### The menu

The index file for Cheaters loads each cheat sheet dynamically into its own markup (using jQuery). To add a new sheet to the menu (or remove/rearrange existing sheets), just edit the unordered list in the #nav ul. The order of the list is the order of the menu items, and the first one in the list is loaded by default. If you only ever want one cheat sheet, just make it the only one in the list. New cheat sheets should be stored as HTML files in the **cheatsheets** folder, and referenced from the links in the #nav list with the relative path `cheatsheets/filename.html`.

#### The look

![Narrow, high contrast](http://brettterpstra.com/wp-content/uploads/2012/03/Cheat-Sheets-narrow-high-contrast.jpg)

If you run into markup that isn't handled by the CSS, just wrap it in a div with a unique ID and add specific styles in the main CSS file to override or augment default styles. You can, of course, completely replace that stylesheet if you want an entirely different look. I promise not to be offended.

There's also a contrast icon in the upper right, which you can use to flip between light-on-dark and dark-on-light. You can make this change permanent by editing the body class in index.html. Adding a class of "inverted" will set it to be light-on-dark by default; without that class it's dark-on-light automatically.

#### Using PDFs

![Cheat Sheets with image](http://brettterpstra.com/wp-content/uploads/2012/03/Cheat-Sheets-Wide-Image.jpg)

If you find a PDF cheat sheet that's ideal for this type of display, you'll need to convert it to an image (gif, jpg or png) first. Make it large, between 800px and 1024px wide. Cheaters will automatically scale it to your browser width, and when your browser width gets small enough that the image would be unreadable, it shows it full size and lets you scroll around within the viewport. See the CSS3 cheat sheet markup for an example of using an image; it's just an image tag in an html file. Easy as pie.

If you create some great cheat sheets, fork this and send a pull request. Just [let me know](http://brettterpstra.com/contact) if you need a hand!
