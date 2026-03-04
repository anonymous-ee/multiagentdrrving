# Anonymous Project Page

This folder contains a static, anonymous homepage for paper review.

## Local preview

```bash
cd project_page
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## GitHub Pages deploy (anonymous-focused)

This repo already includes `.github/workflows/deploy-pages.yml`.
On push to `main`, it deploys `project_page/` to GitHub Pages with sensitive local files excluded.

### Steps

1. Create a neutral repository name (avoid personal identifiers).
2. Push this repo to `main`.
3. In GitHub repo settings, open `Pages` and set source to `GitHub Actions`.
4. Wait for the workflow `Deploy Project Page to GitHub Pages` to finish.
5. Open the generated Pages URL.

## Anonymity checklist

- Do not include names, affiliations, emails, or personal links in `index.html`.
- Avoid `username.github.io` if username reveals identity; prefer a neutral org repo and custom domain.
- Keep media local (no external embeds or tracking scripts).
- Verify published source does not include deployment metadata files (`.vercel/`, local notes).

## Local video files

```text
project_page/assets/videos/b08360dd801541f7-GRPO40-0802-3000演示.mp4
project_page/assets/videos/2d2af4ce25eba9db-GRPO40-0802-3000对比.mp4
project_page/assets/videos/2d2af4ce25eba9db-DDPM20-30对比.mp4
```
