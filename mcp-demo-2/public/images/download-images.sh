#!/bin/bash

# Create directories if they don't exist
mkdir -p /Users/chahar/projects/demo/figma-mcp/mcp-demo-2/public/images/{categories,products,rooms,banners}

# Download category images
curl -o /Users/chahar/projects/demo/figma-mcp/mcp-demo-2/public/images/categories/chair.svg https://placehold.co/100x100/f0f0f0/333333?text=Chair
curl -o /Users/chahar/projects/demo/figma-mcp/mcp-demo-2/public/images/categories/sofa.svg https://placehold.co/100x100/f0f0f0/333333?text=Sofa
curl -o /Users/chahar/projects/demo/figma-mcp/mcp-demo-2/public/images/categories/desk.svg https://placehold.co/100x100/f0f0f0/333333?text=Desk

# Download product images
curl -o /Users/chahar/projects/demo/figma-mcp/mcp-demo-2/public/images/products/sverom-chair.svg https://placehold.co/300x300/f0f0f0/333333?text=Sveorm+Chair
curl -o /Users/chahar/projects/demo/figma-mcp/mcp-demo-2/public/images/products/norrviken-chair.svg https://placehold.co/300x300/fff5e6/333333?text=Norrviken+Chair
curl -o /Users/chahar/projects/demo/figma-mcp/mcp-demo-2/public/images/products/ektorp-sofa.svg https://placehold.co/300x300/f0f0f0/333333?text=Ektorp+Sofa
curl -o /Users/chahar/projects/demo/figma-mcp/mcp-demo-2/public/images/products/strandganvik-sofa.svg https://placehold.co/300x300/f0f0f0/333333?text=Strandganvik+Sofa

# Download room images
curl -o /Users/chahar/projects/demo/figma-mcp/mcp-demo-2/public/images/rooms/dining-room.svg https://placehold.co/200x250/f0f0f0/333333?text=Dining+Room
curl -o /Users/chahar/projects/demo/figma-mcp/mcp-demo-2/public/images/rooms/bed-room.svg https://placehold.co/200x250/f0f0f0/333333?text=Bed+Room
curl -o /Users/chahar/projects/demo/figma-mcp/mcp-demo-2/public/images/rooms/office-room.svg https://placehold.co/200x250/f0f0f0/333333?text=Office+Room

# Download banner images
curl -o /Users/chahar/projects/demo/figma-mcp/mcp-demo-2/public/images/banners/sofa-banner.svg https://placehold.co/600x200/e6e6ff/333333?text=High+Quality+Sofa
curl -o /Users/chahar/projects/demo/figma-mcp/mcp-demo-2/public/images/banners/sale-banner.svg https://placehold.co/600x200/fff5e6/333333?text=Sale+Banner
