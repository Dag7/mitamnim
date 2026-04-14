#!/usr/bin/env bash
set -euo pipefail

# Deploy competitive-intel to Vercel
# Usage: ./deploy-vercel.sh

ENV_FILE=".env.production"
OUTPUT_FILE="deploy-output.log"

if [ ! -f "$ENV_FILE" ]; then
  echo "Error: $ENV_FILE not found — create it with AUTH_USER and AUTH_PASSWORD"
  exit 1
fi

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null; then
  echo "==> Installing Vercel CLI..."
  npm i -g vercel
fi

echo "Deploy started at $(date)" | tee "$OUTPUT_FILE"
echo "" | tee -a "$OUTPUT_FILE"

# Set environment variables in Vercel
echo "==> Setting environment variables..." | tee -a "$OUTPUT_FILE"
while IFS='=' read -r key value; do
  [[ -z "$key" || "$key" =~ ^# ]] && continue
  printf '%s' "$value" | vercel env add "$key" production --force 2>/dev/null || true
  echo "    Set $key" | tee -a "$OUTPUT_FILE"
done < "$ENV_FILE"

# Deploy to production
echo "" | tee -a "$OUTPUT_FILE"
echo "==> Deploying to Vercel production..." | tee -a "$OUTPUT_FILE"
DEPLOY_URL=$(vercel --prod --yes 2>&1 | tee -a "$OUTPUT_FILE" | grep -o 'https://[^ ]*' | tail -1)

# Write summary
echo "" | tee -a "$OUTPUT_FILE"
echo "========================================" | tee -a "$OUTPUT_FILE"
echo "  DEPLOYMENT COMPLETE" | tee -a "$OUTPUT_FILE"
echo "========================================" | tee -a "$OUTPUT_FILE"
echo "" | tee -a "$OUTPUT_FILE"
echo "  URL:      $DEPLOY_URL" | tee -a "$OUTPUT_FILE"
echo "  User:     $(grep AUTH_USER $ENV_FILE | cut -d= -f2)" | tee -a "$OUTPUT_FILE"
echo "  Password: $(grep AUTH_PASSWORD $ENV_FILE | cut -d= -f2)" | tee -a "$OUTPUT_FILE"
echo "" | tee -a "$OUTPUT_FILE"
echo "  Deployed at: $(date)" | tee -a "$OUTPUT_FILE"
echo "========================================" | tee -a "$OUTPUT_FILE"
echo "" | tee -a "$OUTPUT_FILE"
echo "Output saved to: $OUTPUT_FILE"
