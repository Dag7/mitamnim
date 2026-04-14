#!/usr/bin/env bash
set -euo pipefail

# Deploy mitamnim to Vercel
# Usage: ./deploy-vercel.sh

OUTPUT_FILE="deploy-output.log"

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null; then
  echo "==> Installing Vercel CLI..."
  npm i -g vercel
fi

echo "Deploy started at $(date)" | tee "$OUTPUT_FILE"
echo "" | tee -a "$OUTPUT_FILE"

# Deploy to production
echo "==> Deploying to Vercel production..." | tee -a "$OUTPUT_FILE"
DEPLOY_URL=$(vercel --prod --yes --scope gads-projects-9e1dc0f0 2>&1 | tee -a "$OUTPUT_FILE" | grep -o 'https://[^ ]*' | tail -1)

# Write summary
echo "" | tee -a "$OUTPUT_FILE"
echo "========================================" | tee -a "$OUTPUT_FILE"
echo "  DEPLOYMENT COMPLETE" | tee -a "$OUTPUT_FILE"
echo "========================================" | tee -a "$OUTPUT_FILE"
echo "" | tee -a "$OUTPUT_FILE"
echo "  URL:      $DEPLOY_URL" | tee -a "$OUTPUT_FILE"
echo "  Deployed at: $(date)" | tee -a "$OUTPUT_FILE"
echo "========================================" | tee -a "$OUTPUT_FILE"
echo "" | tee -a "$OUTPUT_FILE"
echo "Output saved to: $OUTPUT_FILE"
