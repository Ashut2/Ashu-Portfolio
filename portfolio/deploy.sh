#!/bin/bash
set -e

# ============================================================
#  Ashutosh Portfolio — Deploy Script
#  Usage: ./deploy.sh
#  
#  Before first run, update the variables below with your
#  actual AWS bucket name and CloudFront distribution ID.
# ============================================================

BUCKET_NAME="ashutosh-portfolio-2026"       # ← Replace with your S3 bucket name
DISTRIBUTION_ID="EXXXXXXXXXXXXX"             # ← Replace with your CloudFront distribution ID
REGION="ap-south-1"

echo ""
echo "=================================="
echo "  Ashutosh Portfolio — Deploying"
echo "=================================="
echo ""

# Step 1: Build
echo "[1/3] Building production site..."
yarn build
echo "      ✓ Build complete (out/ directory)"
echo ""

# Step 2: Upload to S3
echo "[2/3] Syncing to S3 (s3://$BUCKET_NAME)..."
aws s3 sync out/ s3://$BUCKET_NAME --delete --region $REGION
echo "      ✓ Upload complete"
echo ""

# Step 3: Invalidate CloudFront cache
echo "[3/3] Invalidating CloudFront cache..."
INVALIDATION_ID=$(aws cloudfront create-invalidation \
  --distribution-id $DISTRIBUTION_ID \
  --paths "/*" \
  --query 'Invalidation.Id' \
  --output text)
echo "      ✓ Invalidation created: $INVALIDATION_ID"
echo ""

echo "=================================="
echo "  Deployed successfully! 🚀"
echo "=================================="
echo ""
echo "  S3:         http://$BUCKET_NAME.s3-website-$REGION.amazonaws.com"
echo "  CloudFront: Check your distribution URL in AWS Console"
echo ""
