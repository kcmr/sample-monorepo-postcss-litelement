#!/usr/bin/env bash
echo "┏━━━ 📦 BUILDING: $(pwd) ━━━━━━━━━━━━━━━━━━━━━"
babel --config-file ../../babel.config.js --out-dir dist ./src