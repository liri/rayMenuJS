/*
 * ----------------------------- Ray Menu -------------------------------------
 * Responsive menu that expands only when user is on top of the page.
 * Supported by all modern browsers: IE9+, Firefox, Safari, Chrome and Opera
 * Prerequisite: JQuery
 *
 * Copyright (c) 2013 - 2014 Liron Aichel, work.liron@gmail.com
 *
 * Licensed under MIT-style license:
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

(function() {
	'use strict';

	function RayMenu() {
		this.version = "1.0.2";

		this.options = {
			openHeight: 35,
			closeHeight: 24
		};
		
		this.sel = {
			raymenu: ".rayMenu",
			items: "> li",
			open: " .open",
			close: " .close"
		};
		
		this.events = {
			
		};
	}

	RayMenu.prototype.init = function (menuElement) {
		var self = this;
		
		self.element = menuElement;

		menuElement.addClass('rayMenu');

		var items = menuElement.find(self.sel.items);

		if ($(window).scrollTop() > self.options.openHeight) {
			self.element.addClass("collapsed");

			items.height(self.options.closeHeight);
			items.find(self.sel.open).hide();

			self.element.css({
				'padding-left':0,
				width: self.element.parent().width(),
				height: self.options.closeHeight
			});			
		} else {
			self.element.addClass("expanded");

			items.height(self.options.openHeight);
			items.find(self.sel.close).hide();

			var itemsWidth = 0;
			items.each(function (i,v){
				if (!$(v).hasClass('right'))
					itemsWidth += $(v).outerWidth();
			});

			var marginLeft = self.element.parent().width() / 2 - itemsWidth / 2;
			self.element.css({
				'padding-left':marginLeft,
				width: self.element.parent().width() - marginLeft,
				height: self.options.openHeight
			});
		}

		$(window).scroll(function () {
			if ($(window).scrollTop() > self.options.openHeight) {
				if (self.isExpanded())
					self.collapse();
			} else {
				if (!self.isExpanded())
					self.expand();
			}
		});
		$(window).on('resize',function () {
			if (self.isExpanded()) {
				self.expand();
			} else {
				self.collapse();
			}
		});
	}

	RayMenu.prototype.isExpanded = function () {
		return this.element.hasClass('expanded');
	}

	RayMenu.prototype.collapse = function () {
		var self = this;

		self.element.removeClass('expanded').addClass("collapsed");

		self.element.find(self.sel.items).each(function (i,v){
			var elem = $(v);
			var open = elem.find(self.sel.open);
			var close = elem.find(self.sel.close);

			elem.stop().animate({
				height: self.options.closeHeight
			});

			open.stop().fadeOut('fast');
			close.stop().fadeIn('fast');
		});

		self.element.stop().animate({
			'padding-left':0,
			width: self.element.parent().width(),
			height: self.options.closeHeight
		});
	}

	RayMenu.prototype.expand = function () {
		var self = this;
		
		self.element.addClass('expanded').removeClass("collapsed");

		var itemsWidth = 0;

		self.element.find(self.sel.items).each(function (i,v){
			var elem = $(v);
			var open = elem.find(self.sel.open);
			var close = elem.find(self.sel.close);

			elem.stop().animate({
				height: self.options.openHeight
			});

			open.stop().fadeIn('fast');
			close.stop().fadeOut('fast');

			if (!$(v).hasClass('right'))
				itemsWidth += $(v).outerWidth();
		});

		var marginLeft = self.element.parent().width() / 2 - itemsWidth / 2;
		
		self.element.stop().animate({
			'padding-left':marginLeft,
			width: self.element.parent().width() - marginLeft,
			height: self.options.openHeight
		});
	}

	$.fn.rayMenu = function(options) {
	
		if (this.length > 1) {
			var returnValues = [];
			this.each(function() {
				returnValues.push($(this).rayMenu(options));
			});
			return returnValues;
		}
		
		// if menu already exists
		if (this.data('rayMenu')) {
			return this.data('rayMenu');
		}
	
		// verify element is valid
		if (this && 
			this.is('ul')) {
			
			var instance = new RayMenu();
			
			var htmlOptions = {
				openHeight: this.attr('data-open-height'),
				closeHeight: this.attr('data-close-height')
			};

			$.extend(instance.options,htmlOptions,options);
			
			instance.init(this);
			
			this.data('rayMenu',instance);
			
			return instance;
		}
	}
	
	// auto detect menus
	$(document).ready(function() {
		$("body [data-role='rayMenu']").rayMenu();
	});
})();
