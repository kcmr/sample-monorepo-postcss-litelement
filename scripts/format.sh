#!/usr/bin/env bash
echo "┏━━━ 🧻 FORMATTING: $(pwd) ━━━━━━━━━━━━━━━━━━━━━"
eslint --ext .js,.html . --fix --ignore-path ../../.gitignore