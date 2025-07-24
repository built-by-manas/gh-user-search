const handleSearch = (event) => {
    event.preventDefault();

    const username = document.getElementById('searchInput').value.trim();
    const repoList = document.getElementById("repo-container");
    repoList.innerHTML = "";

    if (!username) {
        alert("Please enter a valid GitHub username");
        return;
    }

    fetch(`https://api.github.com/users/${username}`)
        .then(response => {
            if (!response.ok) throw new Error("User not found.");
            return response.json();
        })
        .then(data => {
            document.querySelector(".profil-pic img").src = data.avatar_url;
            document.querySelector(".name").innerText = data.name || data.login;
            document.querySelector(".location").innerText = data.location || "N/A";
            document.querySelector(".bio p").innerText = `“${data.bio || "N/A"}”`;

            const socialStats = document.querySelectorAll(".social h1");
            socialStats[0].innerText = `Followers: ${data.followers}`;
            socialStats[1].innerText = `Following: ${data.following}`;
            socialStats[2].innerText = `Public Repos: ${data.public_repos}`;

            return fetch(`https://api.github.com/users/${username}/repos`);
        })
        .then(res => {
            if (!res.ok) throw new Error("Could not fetch repos.");
            return res.json();
        })
        .then(repos => {
            if (repos.length === 0) {
                repoList.innerHTML = `<p class="text-gray-400 italic text-center">No repositories found.</p>`;
                return;
            }

            repos.forEach(repo => {
                const card = document.createElement("div");
                card.className = "bg-[#12083f] p-4 rounded-xl text-white border border-gray-700 hover:scale-[1.01] transition-transform";

                card.innerHTML = `
                    <h2 class="text-lg font-semibold text-amber-300">${repo.name}</h2>
                    <p class="text-sm text-gray-300">${repo.description || "No description"}</p>
                    <div class="flex flex-wrap mt-2 space-x-4 text-xs text-gray-400">
                        <span>⭐ ${repo.stargazers_count}</span>
                        <span>🍴 ${repo.forks_count}</span>
                        <span>👀 ${repo.watchers_count}</span>
                        <span>📅 Updated: ${new Date(repo.updated_at).toLocaleDateString()}</span>
                    </div>
                `;

                repoList.appendChild(card);
            });
        })
        .catch(error => {
            console.error(error);
            repoList.innerHTML = `<p class="text-red-400 italic text-center">An error occurred while fetching repositories.</p>`;
        });
};
