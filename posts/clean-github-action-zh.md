---
title:  Clean Github Action
publishDate: 2025-12-31
---


## 清理 Workeflows Runs 运行记录

[delete-workflow-runs](https://github.com/marketplace/actions/delete-workflow-runs)

### 基础用法

```yaml
name: Delete old workflow runs
on:
  schedule:
    - cron: '0 0 1 * *'
jobs:
  delete-runs:
    runs-on: ubuntu-latest
    permissions:
      actions: write
      contents: read
    steps:
      - name: Delete workflow runs
        uses: Mattraks/delete-workflow-runs@v2
        with:
          token: ${{ github.token }}
          repository: ${{ github.repository }}
          retain_days: 30
          keep_minimum_runs: 6
```

---

## 清理 Github Pages 部署记录

[strumwolf/delete-deployment-environment](https://github.com/marketplace/actions/delete-deployment-environment)

### 基础用法

```yaml
cleanup:
  runs-on: ubuntu-latest
  permissions: write-all
  steps:
    - name: Delete deployment
      uses: strumwolf/delete-deployment-environment@v2.3.0
      with:
        token: ${{ secrets.GITHUB_TOKEN }}
        environment: github-pages
        onlyRemoveDeployments: true
```
