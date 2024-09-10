

async function __load_from_github() {
    // load from github
    const url = 'https://raw.githubusercontent.com/llmtraining-xtra/awesome-llm-training/main/README.md';
    let res = await fetch(url);
    let html_string = await res.text()

    console.log(html_string)

    // parse html
    const parser = new DOMParser();
    const doc = parser.parseFromString(html_string, 'application/xml');

    // get source element
    let source_div = doc.getElementById("__source__")
    console.log(source_div)
    
    // transfer to dest element
    let dest_div = document.getElementById("__dest__")

    if(source_div === null){
        dest_div.innerHTML = 
            `<p style="color:red;font-size:12px;">[x] failed to load from the repo, check your connect with github</p>`
    } else {
        dest_div.innerHTML = source_div.innerHTML
    }
}

function load_page () {
    __load_from_github()
}
