#!/usr/bin/env bash
echo "┏━━━ 🧐 LINTING: $(pwd) ━━━━━━━━━━━━━━━━━━━━━"
eslint --ext .js,.html . --ignore-path ../../.gitignore