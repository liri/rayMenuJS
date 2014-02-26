# RayMenuJS
RayMenu is a responsive fixed menu for your website. 
Save valuable vertical space on your page using RayMenu!

Features:
- Automatic collapse when user is not at the top of the page
- Colorful themes with CSS3 support!
- Modern transitions between menu states
- Minified version included!
- Mobile and Tablet support!
- Fully documented for easy integration!

Supported for all major browsers:
 * IE9+
 * Firefox
 * Safari
 * Chrome
 * Opera
 
**Prerequisite: JQuery**

Copyright (c) 2013 - 2014 Liron Aichel <br/>

Project homepage: http://lironaichel.com/lironaichel/jsworks/raymenu <br/>
Github homepage: http://liri.github.io/rayMenuJS <br/>

Documentation: http://lironaichel.com/lironaichel/jsworks/raymenu/docs/index.html <br/>

Licensed under MIT-style license:
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 
 <div class="span8">
                    	<section id="started"> 
                            <div class="page-header">
                                <h1>Getting Started</h1>
                            </div>
                            <p>
                            RayMenu is a jQuery plugin, therefore you need to include <a href="http://jquery.com/" target="_blank">jQuery</a> library in your web page:
                            </p>
<pre class="prettyprint linenums">
  <span style="color:#687687">&lt;</span>script src<span style="color:#687687">=</span><span style="color:#036a07">"js/jquery.min.js"</span><span style="color:#687687">></span><span style="color:#687687">&lt;</span>/script<span style="color:#687687">></span>
</pre>
                            <p>
                            Include RayMenu library:
                            </p>
<pre class="prettyprint linenums">
  <span style="color:#687687">&lt;</span>script src<span style="color:#687687">=</span><span style="color:#036a07">"js/raymenu.min.js"</span><span style="color:#687687">></span><span style="color:#687687">&lt;</span>/script<span style="color:#687687">></span>
</pre>
							<p>
                            Include RayMenu styling (CSS):
                            </p>
<pre class="prettyprint linenums">
  <span style="color:#687687">&lt;</span>link rel<span style="color:#687687">=</span><span style="color:#036a07">"stylesheet"</span> type<span style="color:#687687">=</span><span style="color:#036a07">"text/css"</span> href<span style="color:#687687">=</span><span style="color:#036a07">"css/raymenu.css"</span> /<span style="color:#687687">></span>
</pre>
							<h4>You're good to go!</h4>
						</section>
                        <section id="basic"> 
                            <div class="page-header">
                                <h1>Basic example</h1>
                            </div>
                                           
                            <h2>Zero lines of code!</h2>
                            <p>
                            RayMenu automatically detect your DOM element. Just place "data-role='rayMenu'" on your list element (ul):
                            </p>
<pre class="prettyprint linenums">
  <span style="color:#687687">&lt;</span>ul <span style="color:#00f;font-weight:700">class</span><span style="color:#687687">=</span><span style="color:#036a07">"rayMenu"</span> <span style="color:#00f;font-weight:700">data-role</span><span style="color:#687687">=</span><span style="color:#036a07">"rayMenu"</span><span style="color:#687687">></span>
        <span style="color:#687687">&lt;</span>li<span style="color:#687687">></span>
            <span style="color:#687687">&lt;</span>a href<span style="color:#687687">=</span><span style="color:#036a07">"#"</span><span style="color:#687687">></span>
                <span style="color:#687687">&lt;</span>span <span style="color:#00f;font-weight:700">class</span><span style="color:#687687">=</span><span style="color:#036a07">"open"</span><span style="color:#687687">></span>Home<span style="color:#687687">&lt;</span>/span<span style="color:#687687">></span>
            <span style="color:#687687">&lt;</span>/a<span style="color:#687687">></span>
        <span style="color:#687687">&lt;</span>/li<span style="color:#687687">></span>
        <span style="color:#687687">&lt;</span>li<span style="color:#687687">></span>
            <span style="color:#687687">&lt;</span>a href<span style="color:#687687">=</span><span style="color:#036a07">"#"</span><span style="color:#687687">></span>
                <span style="color:#687687">&lt;</span>span <span style="color:#00f;font-weight:700">class</span><span style="color:#687687">=</span><span style="color:#036a07">"open"</span><span style="color:#687687">></span>About Us<span style="color:#687687">&lt;</span>/span<span style="color:#687687">></span>
            <span style="color:#687687">&lt;</span>/a<span style="color:#687687">></span>
        <span style="color:#687687">&lt;</span>/li<span style="color:#687687">></span>
        <span style="color:#687687">&lt;</span>li<span style="color:#687687">></span>
            <span style="color:#687687">&lt;</span>a href<span style="color:#687687">=</span><span style="color:#036a07">"#"</span><span style="color:#687687">></span>
                <span style="color:#687687">&lt;</span>span <span style="color:#00f;font-weight:700">class</span><span style="color:#687687">=</span><span style="color:#036a07">"open"</span><span style="color:#687687">></span>Analytics<span style="color:#687687">&lt;</span>/span<span style="color:#687687">></span>
            <span style="color:#687687">&lt;</span>/a<span style="color:#687687">></span>
            <span style="color:#687687">&lt;</span>ul<span style="color:#687687">></span>
                <span style="color:#687687">&lt;</span>li<span style="color:#687687">></span><span style="color:#687687">&lt;</span>a href<span style="color:#687687">=</span><span style="color:#036a07">"#"</span><span style="color:#687687">></span>Dashboard<span style="color:#687687">&lt;</span>/a<span style="color:#687687">></span><span style="color:#687687">&lt;</span>/li<span style="color:#687687">></span>
                <span style="color:#687687">&lt;</span>li<span style="color:#687687">></span><span style="color:#687687">&lt;</span>a href<span style="color:#687687">=</span><span style="color:#036a07">"#"</span><span style="color:#687687">></span>Insight<span style="color:#687687">&lt;</span>/a<span style="color:#687687">></span><span style="color:#687687">&lt;</span>/li<span style="color:#687687">></span>
                <span style="color:#687687">&lt;</span>li<span style="color:#687687">></span><span style="color:#687687">&lt;</span>a href<span style="color:#687687">=</span><span style="color:#036a07">"#"</span><span style="color:#687687">></span>Reports<span style="color:#687687">&lt;</span>/a<span style="color:#687687">></span><span style="color:#687687">&lt;</span>/li<span style="color:#687687">></span>
            <span style="color:#687687">&lt;</span>/ul<span style="color:#687687">></span>
        <span style="color:#687687">&lt;</span>/li<span style="color:#687687">></span>
        <span style="color:#687687">&lt;</span>li<span style="color:#687687">></span>
            <span style="color:#687687">&lt;</span>a href<span style="color:#687687">=</span><span style="color:#036a07">"#"</span><span style="color:#687687">></span>
                <span style="color:#687687">&lt;</span>span <span style="color:#00f;font-weight:700">class</span><span style="color:#687687">=</span><span style="color:#036a07">"open"</span><span style="color:#687687">></span>Contact<span style="color:#687687">&lt;</span>/span<span style="color:#687687">></span>
            <span style="color:#687687">&lt;</span>/a<span style="color:#687687">></span>
        <span style="color:#687687">&lt;</span>/li<span style="color:#687687">></span>
    <span style="color:#687687">&lt;</span>/ul<span style="color:#687687">></span>
</pre>

                            <h2>Controling expand/collapse states</h2>
                            <p>You can determine the menu height when expanded or collapsed. This is useful if you want to change the default values in case of using larger icons for your menu items.</p>
                            <pre class="prettyprint linenums">
<span style="color:#687687">&lt;</span>ul <span style="color:#00f;font-weight:700">class</span><span style="color:#687687">=</span><span style="color:#036a07">"rayMenu"</span> <span style="color:#00f;font-weight:700">data-role</span><span style="color:#687687">=</span><span style="color:#036a07">"rayMenu"</span> data<span style="color:#687687">-</span>close<span style="color:#687687">-</span>height<span style="color:#687687">=</span><span style="color:#036a07">"24"</span> data<span style="color:#687687">-</span>open<span style="color:#687687">-</span>height<span style="color:#687687">=</span><span style="color:#036a07">"35"</span><span style="color:#687687">></span></pre>


                        </section>
                        <section id="options">
                            <div class="page-header">
                                <h1>Helpful options</h1>
                            </div>

                         	<h2>Open & Close states</h2>
                            <p>
                            Control which elements are visible for an expanded menu and which are visible for collapsed menu.
                            <br/>
                            Elements with "open" class will be visible only for expanded menu:
                            </p>
                            <pre class="prettyprint linenums">
<span style="color:#687687">&lt;</span>span <span style="color:#00f;font-weight:700">class</span><span style="color:#687687">=</span><span style="color:#036a07">"open"</span><span style="color:#687687">></span>Home<span style="color:#687687">&lt;</span>/span<span style="color:#687687">></span>                            </pre>
	
							<p>
                            Elements with "close" class will be visible only for collapsed menu:
                            </p>
                            <pre class="prettyprint linenums">
<span style="color:#687687">&lt;</span>span <span style="color:#00f;font-weight:700">class</span><span style="color:#687687">=</span><span style="color:#036a07">"close"</span><span style="color:#687687">></span>Home<span style="color:#687687">&lt;</span>/span<span style="color:#687687">></span>                            </pre>

							<p>
                            This is very useful for controlling which elements will be visible all the time or just for specific state. 
                            </p>
                            <p class="alert alert-info">
                            	Omitting "open/close" class from an element will leave the element visible for both states.
                            </p>

                            <h2>Disable mouse hover style</h2>
                            <p>
                            In some cases you will want to avoid highlighing an item in your list, to achieve that use the "nohover" class:
                            </p>
                            <pre class="prettyprint linenums">
<span style="color:#687687">&lt;</span>li <span style="color:#00f;font-weight:700">class</span><span style="color:#687687">=</span><span style="color:#036a07">"right nohover"</span><span style="color:#687687">></span></pre>
							<p class="alert alert-info">
                            	"right" class will float your li element to the right side of the menu.
                            </p>
                        </section>

                       <section id="themes">
                            <div class="page-header">
                                <h1>Themes</h1>
                            </div>
                            
                            <p>There are several out-of-the-box themes you can use on your website. Navigate to each theme from the above menu.
                            <br/>
                            To create you own theme, please refer to the <a href="#css">"CSS customization"</a> section.
                            <br/>
                            To use each theme, add the relevant class to your menu element: "blue", "orange", "pastel" etc.
                            </p>
                            <pre class="prettyprint linenums">
<span style="color:#687687">&lt;</span>ul <span style="color:#00f;font-weight:700">class</span><span style="color:#687687">=</span><span style="color:#036a07">"rayMenu blue"</span> data<span style="color:#687687">-</span>role<span style="color:#687687">=</span><span style="color:#036a07">'rayMenu'</span><span style="color:#687687">></span></pre>
                       </section>

                      <section id="css">
                            <div class="page-header">
                                <h1>CSS Customization</h1>
                            </div>                           
                            <h2>Create custom theme</h2>
                            <p>RayMenu main class is "rayMenu".
                            <br />You can modify anything you need using this class, for example: changing menu background:</p>
                            <pre class="prettyprint linenums">
<span style="font-style:italic">.rayMenu</span><span style="font-style:italic">.mytheme</span>{
    <span style="color:#6d79de;font-weight:700">background</span>: <span style="color:#c5060b;font-weight:700">#51C5D4</span>;
    -webkit-<span style="color:#6d79de;font-weight:700">box-shadow</span>: <span style="color:#0000cd">0</span> <span style="color:#0000cd">3<span style="color:#00f;font-weight:700">px</span></span> <span style="color:#0000cd">3<span style="color:#00f;font-weight:700">px</span></span> <span style="color:#c5060b;font-weight:700">#3c3c40</span>;
    -moz-<span style="color:#6d79de;font-weight:700">box-shadow</span>: <span style="color:#0000cd">0</span> <span style="color:#0000cd">3<span style="color:#00f;font-weight:700">px</span></span> <span style="color:#0000cd">3<span style="color:#00f;font-weight:700">px</span></span> <span style="color:#c5060b;font-weight:700">#3c3c40</span>;
    <span style="color:#6d79de;font-weight:700">box-shadow</span>: <span style="color:#0000cd">0</span> <span style="color:#0000cd">3<span style="color:#00f;font-weight:700">px</span></span> <span style="color:#0000cd">3<span style="color:#00f;font-weight:700">px</span></span> <span style="color:#c5060b;font-weight:700">#3c3c40</span>;
}                            </pre>

							<h2>Collapsed state styling</h2>
							<p>When RayMenu is collapsed a "collapsed" class is automatically added to your list element.
							<br/>
							You can refer to that class in order to change the collapsed state styling:</p>
							<pre class="prettyprint linenums">
<span style="font-style:italic">.rayMenu</span><span style="font-style:italic">.collapsed</span> <span style="font-weight:700">li</span> <span style="font-weight:700">a</span> {
    <span style="color:#6d79de;font-weight:700">padding</span>: <span style="color:#0000cd">3<span style="color:#00f;font-weight:700">px</span></span> <span style="color:#0000cd">5<span style="color:#00f;font-weight:700">px</span></span> <span style="color:#0000cd">0</span> <span style="color:#0000cd">5<span style="color:#00f;font-weight:700">px</span></span>;
}							</pre>

							<h2>Submenu styling</h2>
							<pre>
<span style="font-style:italic">.rayMenu</span> <span style="font-weight:700">li</span><span style="font-style:italic">:hover</span> <span style="font-weight:700">ul</span> {
    <span style="color:#6d79de;font-weight:700">top</span>:<span style="color:#0000cd">35<span style="color:#00f;font-weight:700">px</span></span>;
    <span style="color:#6d79de;font-weight:700">background</span>: <span style="color:#c5060b;font-weight:700">#383838</span>;
}							</pre>

                            <h2>Complete custom theme example:</h2>
                            <pre class="prettyprint linenums">
<span style="font-style:italic">.rayMenu</span><span style="font-style:italic">.blue</span> {
     <span style="color:#6d79de;font-weight:700">background</span>: <span style="color:#c5060b;font-weight:700">#51C5D4</span>;
    -webkit-<span style="color:#6d79de;font-weight:700">box-shadow</span>: <span style="color:#06960e;font-weight:700">none</span>;
    -moz-<span style="color:#6d79de;font-weight:700">box-shadow</span>: <span style="color:#06960e;font-weight:700">none</span>;
    <span style="color:#6d79de;font-weight:700">box-shadow</span>: <span style="color:#06960e;font-weight:700">none</span>;
}

<span style="font-style:italic">.rayMenu</span><span style="font-style:italic">.blue</span> <span style="font-weight:700">li</span> <span style="font-weight:700">a</span>,
<span style="font-style:italic">.rayMenu</span><span style="font-style:italic">.blue</span> <span style="font-weight:700">li</span><span style="font-style:italic">:hover</span> <span style="font-weight:700">ul</span> <span style="font-weight:700">li</span> <span style="font-weight:700">a</span> {
    <span style="color:#6d79de;font-weight:700">color</span>: <span style="color:#06960e;font-weight:700">black</span>;
}

<span style="font-style:italic">.rayMenu</span><span style="font-style:italic">.blue</span> <span style="font-weight:700">li</span><span style="font-style:italic">:hover</span>,
<span style="font-style:italic">.rayMenu</span><span style="font-style:italic">.blue</span> <span style="font-weight:700">li</span><span style="font-style:italic">:hover</span> <span style="font-weight:700">ul</span>,
<span style="font-style:italic">.rayMenu</span><span style="font-style:italic">.blue</span> <span style="font-weight:700">li</span><span style="font-style:italic">:hover</span> <span style="font-weight:700">ul</span> <span style="font-weight:700">li</span> <span style="font-weight:700">a</span> {
    <span style="color:#6d79de;font-weight:700">background</span>: <span style="color:#c5060b;font-weight:700">#80D4DF</span>;
}
<span style="font-style:italic">.rayMenu</span><span style="font-style:italic">.blue</span> <span style="font-weight:700">li</span><span style="font-style:italic">:hover</span> <span style="font-weight:700">ul</span> <span style="font-weight:700">li</span> <span style="font-weight:700">a</span><span style="font-style:italic">:hover</span> { 
    <span style="color:#6d79de;font-weight:700">background</span>: <span style="color:#c5060b;font-weight:700">#E8EDE0</span>; 
}
                            </pre>
                        </section>         
                    </div>