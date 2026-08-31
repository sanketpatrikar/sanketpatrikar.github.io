const target = new URL("https://sanketpatrikar.com");

target.pathname = window.location.pathname;
target.search = window.location.search;
target.hash = window.location.hash;

window.location.replace(target);
