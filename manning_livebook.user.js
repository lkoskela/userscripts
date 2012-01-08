// ==UserScript==
// @name           Manning Livebook
// @description    Beautify the Manning Livebook website
// @author         Lasse Koskela
// @namespace      http://lassekoskela.com/userscripts
// @homepage       http://lassekoskela.com/userscripts
// @include        http://livebook.manning.com/
// @include        http://livebook.manning.com/*
// @require        http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// ==/UserScript==

// Revisions page
$('#versionTrackerTable').css('border-spacing', '0px');
$('#versionTrackerTable tr:nth-child(even) td').css('border-top', '1px solid grey');
$('.validVersion').css('background-color', '#ddffdd');
$('.invalidVersion').css('background-color', '#ffdddd');

// Add chapter page
$('#addChapterForm input').css('width', '230px');