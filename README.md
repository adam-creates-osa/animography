# 🌿 Animography

Learn about the endangered animals of Costa Rica and how to help them, with trivia, points, blind boxes and collectible cards.
English and Spanish. Works on phones and computers.

# the website to go for other devices: animography.vercel.app---

## 1. Try it on your computer
Double-click **`index.html`**. That's it, nothing to install. (Photos and the rounded font need internet.)

## 2. Where everything lives

| File | What it is | Edit it? |
|---|---|---|
| `data/animals.js` | All the animals: names, facts, how to help, status, photos | ✅ Yes, change the words between the quotes |
| `data/trivia.js` | Trivia questions. **The first answer is always the right one** (the game shuffles them) | ✅ Yes |
| `data/game-rules.js` | Points, bonus, blind box price, odds, which status = which rarity | ✅ Yes, just change the numbers |
| `js/i18n.js` | Every button and label in English and Spanish | ✅ Yes |
| `css/styles.css` | Colors and layout. Main color is `--seafoam` at the top | ✅ Carefully |
| `js/*.js` | The code that makes it all work | ⚠️ Ask Claude first |
| `scripts/update-status.mjs` | Asks the IUCN Red List for each animal's status | ⚠️ Ask Claude first |
| `.github/workflows/` | Robots that publish the site and update statuses every Monday | ⚠️ Ask Claude first |

**Photos:** only **Public domain, CC0 or CC BY** photos are used. Each animal's `"photo"` in `data/animals.js` saves the photographer, license and a link.
CC BY photos show the photographer's name on the animal page **and on the card** (the license requires credit).
To keep a photo you picked yourself, add `"photoLocked": true` to that animal so the photo robot never replaces it.

---

## 3. Put it on the internet (GitHub Pages, free)

### Step A: Make a GitHub account
Go to **github.com** and sign up (free).

### Step B: Create the repository
1. Click **+** (top right) → **New repository**.
2. Name: `animography`. Choose **Public** (free GitHub Pages needs public).
3. Click **Create repository**.

### Step C: Upload the files
The easiest way is **GitHub Desktop** (free app: desktop.github.com):
1. In GitHub Desktop: **File → Clone repository** → pick `animography`.
2. Copy **everything** from this folder into the cloned folder, including the hidden **`.github`** folder and `.nojekyll`.
   - Mac: press `Cmd + Shift + .` in Finder to see hidden files.
   - Windows: File Explorer → View → Show → **Hidden items**.
3. Back in GitHub Desktop: type a summary like "First version" → **Commit to main** → **Push origin**.

> ⚠️ If you upload through the github.com website instead, it can skip the hidden `.github` folder. Without it, the site won't publish and statuses won't update.

### Step D: Turn on GitHub Pages
1. In your repository on github.com: **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Go to the **Actions** tab → **Publish website** → **Run workflow** (or just push any change).
4. After 1–2 minutes your site is live at:
   **`https://YOUR-USERNAME.github.io/animography/`**

Every time you push a change, the site updates by itself.

---

## 4. Automatic IUCN status updates (every Monday)

The website never contains the secret key. A GitHub robot uses it once a week, saves any new statuses into `data/animals.js`, and re-publishes the site.

### Step A: Get a free IUCN token
1. Go to **api.iucnredlist.org** and create an account.
2. Ask for a token, explaining it's for a non-commercial educational website about Costa Rica's endangered animals.
3. Read their terms of use. Approval can take some time.

### Step B: Give the token to GitHub (secretly)
1. In your repository: **Settings → Secrets and variables → Actions → New repository secret**.
2. Name: `IUCN_TOKEN` (exactly like that). Secret: paste your token. **Add secret**.
3. **Never** paste the token into any file in this folder.

### Step C: Test it
**Actions** tab → **Update IUCN statuses** → **Run workflow**. Click the run to see the log:
- `✓` = status still the same · `✎` = status changed (saved automatically) · `?` = not found on the Red List
- When a status is confirmed, trivia is allowed to ask about it, and the "checked" date on the animal page updates.

> 💡 GitHub pauses scheduled robots in public repositories after **60 days without any activity**. If that happens, you'll get an email. Just go to **Actions → Update IUCN statuses → Enable workflow**.

---

## 5. Photo robot (run it once after publishing)

Finds a real photo for every animal on **iNaturalist**, accepting **only CC0 or CC BY** licenses, Costa Rica photos first.

1. **Actions** tab → **Find animal photos** → **Run workflow** → mode **missing** → **Run workflow**.
2. It takes about 10–15 minutes (iNaturalist asks robots to go slowly). Then the site republishes by itself.
3. Open the run's log to see the list: `📷` = photo added · `–` = no CC0/CC BY photo exists yet · `?` = species not found on iNaturalist.
4. Run it again in a few months: people upload new photos to iNaturalist every day, so missing animals may get one later.
   Choose mode **all** only if you want it to look again for every animal (locked photos are always kept).

---

## 6. Good to know
- **Saving:** favorites, points, scores and cards are saved in each visitor's browser (no accounts). They don't move between devices, and someone tech-savvy could edit their points.
- **Card protection:** cards are built by the website (not image files), have a "© Animography" watermark, block right-click saving, and are hidden when printing. Because the repository is public, a determined person could still find how the cards are made. Truly hidden rare cards would need accounts and a server (a future "nice to have").
- **Copyright:** © Animography for the card designs and game. Animal photos belong to their photographers (credited on each animal page, licenses on Wikimedia Commons).
