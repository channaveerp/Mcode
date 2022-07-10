// Async and Defer;

// Async and Defer are bollen attributes which are use along with script tag to load the external scripts effciantly into a web page.

/*
1. using Script
<script src="" /> // parsing the html line by line sunddenly encoters scripts tag and then pause parsing and fetches the script.
// after script fully executed then only parsing will continues and completes.
// JS pause rendering of page

2. Using Async
// mean while parsing going with, scripts from the network aynchronsly, once the script is completed parsing will goes on.

3. Using Defer 

html parsing goes and script fetch parallel from network, thses script will executed once the html parsing is completed.

//
*/