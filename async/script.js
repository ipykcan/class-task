const url = "https://api.github.com/users/ipykcan";

async function git() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}

git();