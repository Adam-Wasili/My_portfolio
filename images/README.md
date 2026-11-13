# Images

Replace the three placeholder SVGs with your own files. Keep the file names
below so the HTML and CSS keep working, or update the `src` / `url()` paths
if you rename anything.

| File | Used by | Suggested size | Notes |
|---|---|---|---|
| `profile.jpg` | `index.html` hero | 800 × 800 px (square) | Your own photograph. Replace `images/placeholder-profile.svg`. |
| `background.jpg` | `css/style.css` (`.hero-section`) | 1920 × 1080 px | Used behind the hero with a dark overlay. |
| `project1.jpg` | `projects.html` card 1 | 1200 × 675 px (16:9) | Screenshot of project 1. |
| `project2.jpg` | `projects.html` card 2 | 1200 × 675 px (16:9) | Screenshot of project 2. |
| `project3.jpg` | `projects.html` card 3 | 1200 × 675 px (16:9) | Screenshot of project 3. |

## Rules

- Use images you have the right to publish (your own photos and screenshots).
- Keep file sizes reasonable — compress JPGs/PNGs before committing.
- Always write a meaningful `alt` attribute in the HTML.
- Do not use spaces or special characters in file names.

Once `profile.jpg` exists, change the hero image in `index.html`:

```html
<img src="images/profile.jpg" alt="Portrait of Your Full Name" width="400" height="400">
```

And in `css/style.css`, point the hero background at your photo:

```css
background-image:
  linear-gradient(180deg, rgba(11, 16, 32, 0.55), var(--bg)),
  url("../images/background.jpg");
```
