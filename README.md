# 🔍 GitHub Profile Viewer

A sleek and responsive GitHub Profile Viewer built with **HTML**, **Tailwind CSS**, and **Vanilla JavaScript**. This tool allows users to search for any GitHub username and instantly fetch key profile information and public repositories using the GitHub REST API.

---

## 🚀 Features

- **Responsive UI** — Clean and modern interface styled using Tailwind CSS.
- **Dark Mode Only** — Designed with a consistent dark theme throughout.
- **Live GitHub User Search** — Fetches and displays user data in real-time.
- **User Details** — Shows:
  - Profile picture
  - Username
  - Name
  - Bio
  - Location
  - Followers / Following
  - Number of public repositories
- **Repositories Section** — Displays public repos with:
  - Name (linked to the GitHub repo)
  - Description
  - Stars ⭐
  - Forks 🍴
  - Watchers 👀
  - Last updated 📅
- **Graceful Fallbacks** — Handles missing fields like `bio` or `location` with a default message.
- **Error Handling** — Shows appropriate error messages if the user is not found or the API fails.

---

## 📸 Demo

> _<to be added>_

---

## 🛠️ Built With

- [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [GitHub REST API](https://docs.github.com/en/rest)

---

## ⚙️ How It Works

1. User enters a GitHub username into the input field.
2. Clicking **Search**:
   - Fetches data from `https://api.github.com/users/{username}`.
   - Separately fetches `https://api.github.com/users/{username}/repos`.
3. Parsed data is injected into the DOM:
   - User profile section is updated with avatar, bio, etc.
   - Repositories section lists each repo with details and icons.

---

## 📌 Known Issues / To-Do

- [ ] Add loading skeletons while API fetch is in progress
- [ ] Add pagination for repositories (for users with 100+ repos)
- [ ] Option to toggle dark/light mode (if required in future)
- [ ] Mobile responsiveness improvements (optional)

---

## 🧪 Usage Instructions

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/github-profile-viewer.git