# Qhelile Ozias Sibanda — Portfolio

A single-page personal site: hero, about, research experience timeline,
filterable publications, tabbed projects, posters, skills, and awards.
Plain HTML/CSS/JS — no build step, no framework, so it hosts on GitHub
Pages as-is.

## File structure

```
index.html                 the whole page
assets/css/style.css       all styling (light + dark theme)
assets/js/data.js          ← your content lives here
assets/js/main.js          rendering + interactivity (rarely needs edits)
assets/img/headshot.jpg    your photo
assets/cv/CV.pdf           your downloadable CV
```

## Adding content

You almost never need to touch HTML. Open `assets/js/data.js` and add
a new entry to the relevant array — the page re-renders itself from
that file.

- **New publication** → add an object to `publications`
- **New research or personal project** → add an object to
  `projects.research` or `projects.personal`
- **New poster/talk** → add an object to `posters`
- **New award** → add an object to `awards`
- **New research/timeline entry** → add an object to `timeline`
- **Update your rotating roles in the hero** → edit the `roles` array

Copy the shape of an existing entry in that array and fill in your
own values — that's it.

To swap your photo, replace `assets/img/headshot.jpg` (keep the same
filename, or update the `src` in `index.html`). To update your CV,
replace `assets/cv/CV.pdf`.

## Hosting it on GitHub Pages

1. **Create a repository.** On GitHub, click **New repository**.
   - If you want the site at `https://<your-username>.github.io/`,
     name the repo exactly `<your-username>.github.io`.
   - Otherwise, name it anything (e.g. `portfolio`) — it'll be served
     at `https://<your-username>.github.io/portfolio/`.

2. **Push these files to it.** From this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```

3. **Turn on Pages.** In the repo, go to **Settings → Pages**.
   - Under **Source**, choose **Deploy from a branch**.
   - Branch: `main`, folder: `/ (root)`. Click **Save**.

4. **Wait a minute, then visit your URL.** GitHub shows it at the top
   of the Pages settings once it's live — usually
   `https://<your-username>.github.io/<repo-name>/`.

5. **Every future update is just a git push.** Edit `data.js` (or
   anything else), then:
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```
   GitHub Pages redeploys automatically within a minute or two.

### Optional: custom domain

If you own a domain, add a `CNAME` file to the repo root containing
just your domain (e.g. `qhelilesibanda.dev`), then point your
domain's DNS at GitHub Pages per
[GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
The site already links to `qhelilesibanda.dev` as a placeholder in
the CV/nav — update or remove that if you don't set this up.

## Notes

- Dark/light mode is remembered per-browser (falls back gracefully if
  storage is blocked, e.g. private browsing).
- Update the placeholder Scholar/LinkedIn/GitHub links in `index.html`
  (search for `href="https://scholar.google.com`, etc.) with your
  real profile URLs.
