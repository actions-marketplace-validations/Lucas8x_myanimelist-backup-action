# MyAnimeList Github Action

Github action to save your MyAnimeList in the repository

![gh-actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)
![typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![nodejs](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)

## 🚀 Example usage

```yaml
name: Backup MyAnimeList

on:
  schedule:
    - cron: 0 0 * * MON
  workflow_dispatch:

jobs:
  save-list:
    runs-on: ubuntu-latest

    steps:
      - name: Run MAL action
        uses: lucas8x/myanimelist-backup-action@main
        with:
          mal_username: ${{ vars.MAL_USERNAME }}
          mal_list_type: ${{ vars.MAL_LIST_TYPE }}
          output_dir: ${{ vars.MAL_OUTPUT_DIR }}
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

This example executes every Monday.

## ⚙ Settings

| Input                  | Description                                      | Default       | Required |
| ---------------------- | ------------------------------------------------ | ------------- | -------- |
| `mal_username`         | Your MyAnimeList Username                        |               | ✔        |
| `mal_list_type`        | Which list to save (anime, manga, both)          | `both`        |          |
| `output_dir`           | Where to save the files in repository            | `.`           |          |

## 📝 License

This project is under [MIT](./LICENSE) license.
