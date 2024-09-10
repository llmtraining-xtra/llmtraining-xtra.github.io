async function __load_blogs() {
    // get destination table
    let dest_table = document.getElementById("__dest__")
    dest_table_tbody = dest_table.children[0]

    ____creeate_new_tr = (blog) => {
        let new_tr = document.createElement("tr");
        let new_td_title = document.createElement("td");
        let new_td_tag = document.createElement("td");
        let new_td_date = document.createElement("td");
        new_tr.appendChild(new_td_title)
        new_tr.appendChild(new_td_tag)
        new_tr.appendChild(new_td_date)

        // process title
        let link = document.createElement("a");
        link.setAttribute("href", `${blog.path}/index.html`)
        link.innerHTML = `${blog.title}`
        new_td_title.append(link)
        
        // process tags
        new_td_tag.setAttribute("style", "display:flex;")
        for(let i=0; i<blog.tags.length; i++){
            let new_tag = document.createElement("div")
            new_tag.setAttribute("class", "blog_tag")
            new_tag.innerHTML = blog.tags[i]
            new_td_tag.appendChild(new_tag)
        }

        // process date
        new_td_date.innerHTML = `${blog.date}`

        return new_tr;
    }

    fetch('./script/blogs.json')
    .then((res) => {return res.json();})
    .then((blogs_json) => {
        // console.log(blogs_json.blogs)
        for(let i=0; i<blogs_json.blogs.length; i++){
            let blog = blogs_json.blogs[i];
            let new_tr = ____creeate_new_tr(blog)
            dest_table_tbody.appendChild(new_tr)
        }
    })
}

function load_page () {
    __load_blogs()
}
